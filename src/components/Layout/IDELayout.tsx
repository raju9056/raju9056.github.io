import { useState, useCallback, useEffect, useRef } from "react";
import { WindowChrome } from "./WindowChrome";
import { MenuBar } from "./MenuBar";
import { StatusBar } from "./StatusBar";
import { Sidebar } from "../Sidebar/Sidebar";
import { TabBar } from "../Tabs/TabBar";
import { Terminal } from "../Terminal/Terminal";
import { Hero } from "../Sections/Hero";
import { About } from "../Sections/About";
import { Skills } from "../Sections/Skills";
import { Experience } from "../Sections/Experience";
import { Projects } from "../Sections/Projects";
import { Contact } from "../Sections/Contact";
import { AIChat } from "../AIChat/AIChat";
import type { Tab, FileTreeItem } from "../../types";

const initialTabs: Tab[] = [
  {
    id: "readme",
    title: "README.md",
    icon: "📄",
    component: "hero",
    closable: false,
  },
];

const fileTree: FileTreeItem[] = [
  {
    id: "profile",
    name: "PROFILE",
    type: "folder",
    expanded: true,
    children: [
      {
        id: "readme",
        name: "README.md",
        type: "file",
        icon: "📄",
        component: "hero",
      },
      {
        id: "about",
        name: "about.md",
        type: "file",
        icon: "📄",
        component: "about",
      },
      {
        id: "skills",
        name: "skills.json",
        type: "file",
        icon: "📋",
        component: "skills",
      },
      {
        id: "experience",
        name: "experience.tsx",
        type: "file",
        icon: "⚛️",
        component: "experience",
      },
      {
        id: "contact",
        name: "contact.sh",
        type: "file",
        icon: "📧",
        component: "contact",
      },
    ],
  },
  {
    id: "projects",
    name: "PROJECTS",
    type: "folder",
    expanded: false,
    children: [
      {
        id: "projects-list",
        name: "index.tsx",
        type: "file",
        icon: "📁",
        component: "projects",
      },
    ],
  },
];

const componentMap: Record<string, React.ComponentType> = {
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  contact: Contact,
};

// Custom hook for detecting mobile viewport
function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export function IDELayout() {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [activeTab, setActiveTab] = useState<string>("readme");
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const [tree, setTree] = useState<FileTreeItem[]>(fileTree);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  // Initialize sidebar and terminal state based on viewport
  // On mobile: sidebar closed, terminal closed
  // On desktop: sidebar open, terminal open
  const [isTerminalOpen, setIsTerminalOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  // Track previous mobile state to detect viewport changes
  const prevIsMobile = useRef(isMobile);
  useEffect(() => {
    // Only update when viewport crosses the breakpoint
    if (prevIsMobile.current !== isMobile) {
      prevIsMobile.current = isMobile;
      if (isMobile) {
        // Switched to mobile - close sidebar and terminal
        setIsSidebarOpen(false);
        setIsTerminalOpen(false);
      } else {
        // Switched to desktop - open sidebar and terminal
        setIsSidebarOpen(true);
        setIsTerminalOpen(true);
      }
    }
  }, [isMobile]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = () => setIsMobileMenuOpen(false);
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const openTab = useCallback(
    (item: FileTreeItem) => {
      if (item.type === "file" && item.component) {
        const existingTab = tabs.find((t) => t.id === item.id);
        if (!existingTab) {
          const newTab: Tab = {
            id: item.id,
            title: item.name,
            icon: item.icon || "📄",
            component: item.component,
            closable: true,
          };
          setTabs((prev) => [...prev, newTab]);
        }
        setActiveTab(item.id);
        // Close sidebar on mobile after selecting a file
        if (isMobile) {
          setIsSidebarOpen(false);
        }
      }
    },
    [tabs, isMobile]
  );

  const closeTab = useCallback(
    (tabId: string) => {
      const tab = tabs.find((t) => t.id === tabId);
      if (tab?.closable) {
        setTabs((prev) => prev.filter((t) => t.id !== tabId));
        if (activeTab === tabId) {
          const remainingTabs = tabs.filter((t) => t.id !== tabId);
          if (remainingTabs.length > 0) {
            setActiveTab(remainingTabs[remainingTabs.length - 1].id);
          }
        }
      }
    },
    [tabs, activeTab]
  );

  const toggleFolder = useCallback((folderId: string) => {
    setTree((prev) =>
      prev.map((item) => {
        if (item.id === folderId) {
          return { ...item, expanded: !item.expanded };
        }
        return item;
      })
    );
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isSidebarOpen, isMobile]);

  const toggleTerminal = useCallback(() => {
    setIsTerminalOpen(!isTerminalOpen);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isTerminalOpen, isMobile]);

  const ActiveComponent =
    componentMap[tabs.find((t) => t.id === activeTab)?.component || "hero"];

  return (
    <div
      className="h-screen w-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-ide-bg)" }}
    >
      {/* Window Chrome - hidden on mobile */}
      <div className="hidden md:block">
        <WindowChrome title="portfolio.dev - Raju Yallappa" />
      </div>

      {/* Menu Bar */}
      <MenuBar
        onToggleSidebar={toggleSidebar}
        onToggleTerminal={toggleTerminal}
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isSidebarOpen={isSidebarOpen}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`${
              isMobile
                ? "fixed left-0 top-0 bottom-0 z-50 w-64 animate-slide-in-left"
                : "h-full"
            }`}
          >
            <Sidebar
              width={isMobile ? 256 : sidebarWidth}
              onWidthChange={setSidebarWidth}
              fileTree={tree}
              activeFile={activeTab}
              onFileClick={openTab}
              onFolderToggle={toggleFolder}
              isMobile={isMobile}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            onTabClose={closeTab}
            isMobile={isMobile}
          />

          {/* Content */}
          <div
            className="flex-1 overflow-auto p-3 md:p-6"
            style={{ backgroundColor: "var(--color-ide-bg)" }}
          >
            <ActiveComponent />
          </div>

          {/* Terminal */}
          {isTerminalOpen && (
            <Terminal
              height={isMobile ? 180 : terminalHeight}
              onHeightChange={setTerminalHeight}
              onClose={() => setIsTerminalOpen(false)}
              onOpenTab={openTab}
              isMobile={isMobile}
            />
          )}
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar isMobile={isMobile} />

      {/* AI Chat Floating Button */}
      <button
        onClick={() => setIsAIChatOpen(true)}
        className="fixed bottom-16 md:bottom-20 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-40"
        aria-label="Open AI Assistant"
      >
        <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
          🤖
        </span>
        <span className="absolute -top-10 right-0 bg-[#1e1e1e] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#3c3c3c] hidden md:block">
          Ask Raju's AI
        </span>
      </button>

      {/* AI Chat Modal */}
      <AIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}
