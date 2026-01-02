import { useState, useRef, useEffect } from "react";

interface MenuBarProps {
  onToggleSidebar: () => void;
  onToggleTerminal: () => void;
  isMobile?: boolean;
  isMobileMenuOpen?: boolean;
  onToggleMobileMenu?: () => void;
  isSidebarOpen?: boolean;
  isTerminalOpen?: boolean;
}

interface MenuItem {
  label: string;
  items: {
    label: string;
    shortcut?: string;
    action?: () => void;
    divider?: boolean;
  }[];
}

export function MenuBar({
  onToggleSidebar,
  onToggleTerminal,
  isMobile = false,
  isMobileMenuOpen = false,
  onToggleMobileMenu,
  isSidebarOpen = true,
  isTerminalOpen = true,
}: MenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus: MenuItem[] = [
    {
      label: "File",
      items: [
        { label: "New File", shortcut: "⌘N" },
        { label: "Open...", shortcut: "⌘O" },
        { divider: true, label: "" },
        {
          label: "Download Resume",
          shortcut: "⌘D",
          action: () => window.open("/resume.pdf", "_blank"),
        },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Copy", shortcut: "⌘C" },
        { label: "Paste", shortcut: "⌘V" },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Toggle Sidebar", shortcut: "⌘B", action: onToggleSidebar },
        { label: "Toggle Terminal", shortcut: "⌘J", action: onToggleTerminal },
        { divider: true, label: "" },
        { label: "Command Palette", shortcut: "⌘⇧P" },
      ],
    },
    {
      label: "Terminal",
      items: [
        { label: "New Terminal", shortcut: "⌘⇧`", action: onToggleTerminal },
        { label: "Clear Terminal", shortcut: "⌘K" },
      ],
    },
    {
      label: "Help",
      items: [
        { label: "About", action: () => {} },
        {
          label: "GitHub",
          action: () => window.open("https://github.com/raju9056", "_blank"),
        },
        {
          label: "LinkedIn",
          action: () =>
            window.open("https://linkedin.com/in/raju-yallappa", "_blank"),
        },
      ],
    },
  ];

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(activeMenu === menuLabel ? null : menuLabel);
  };

  const handleItemClick = (action?: () => void) => {
    if (action) {
      action();
    }
    setActiveMenu(null);
  };

  // Mobile Menu Bar
  if (isMobile) {
    return (
      <div
        ref={menuRef}
        className="h-12 bg-ide-sidebar flex items-center justify-between px-3 border-b border-ide-border"
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleMobileMenu?.();
          }}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-ide-border/50 text-ide-text"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Title */}
        <span className="text-sm font-medium text-ide-text truncate">
          portfolio.dev
        </span>

        {/* Quick Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleSidebar}
            className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-ide-border/50 transition-colors ${
              isSidebarOpen ? "text-ide-accent" : "text-ide-text-muted"
            }`}
            aria-label="Toggle Sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <button
            onClick={onToggleTerminal}
            className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-ide-border/50 transition-colors ${
              isTerminalOpen ? "text-ide-accent" : "text-ide-text-muted"
            }`}
            aria-label="Toggle Terminal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-12 left-0 right-0 bg-ide-sidebar border-b border-ide-border shadow-xl z-50 max-h-[60vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-ide-border/50">
                <div className="px-4 py-2 text-xs font-semibold text-ide-text-muted uppercase tracking-wider">
                  {menu.label}
                </div>
                {menu.items.map((item, index) =>
                  item.divider ? (
                    <div
                      key={index}
                      className="border-t border-ide-border/30 my-1"
                    />
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => {
                        handleItemClick(item.action);
                        onToggleMobileMenu?.();
                      }}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-ide-accent/20 text-ide-text transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="text-xs text-ide-text-muted">
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop Menu Bar
  return (
    <div
      ref={menuRef}
      className="h-7 bg-ide-sidebar flex items-center px-2 border-b border-ide-border text-sm"
    >
      {menus.map((menu) => (
        <div
          key={menu.label}
          className="relative"
          onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
        >
          <button
            onClick={() => handleMenuClick(menu.label)}
            className={`px-3 py-1 rounded hover:bg-ide-border/50 text-ide-text-muted hover:text-ide-text transition-colors ${
              activeMenu === menu.label ? "bg-ide-border/50 text-ide-text" : ""
            }`}
          >
            {menu.label}
          </button>

          {activeMenu === menu.label && (
            <div className="absolute top-full left-0 bg-ide-sidebar border border-ide-border rounded-md shadow-xl min-w-[200px] py-1 z-50">
              {menu.items.map((item, index) =>
                item.divider ? (
                  <div
                    key={index}
                    className="border-t border-ide-border my-1"
                  />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item.action)}
                    className="w-full px-3 py-1.5 flex items-center justify-between hover:bg-ide-accent/20 text-ide-text-muted hover:text-ide-text transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <span className="text-xs text-ide-text-muted ml-4">
                        {item.shortcut}
                      </span>
                    )}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
