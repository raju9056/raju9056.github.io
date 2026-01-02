import type { Tab } from "../../types";

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  isMobile?: boolean;
}

export function TabBar({
  tabs,
  activeTab,
  onTabClick,
  onTabClose,
  isMobile = false,
}: TabBarProps) {
  return (
    <div
      className={`bg-ide-tab flex items-end border-b border-ide-border overflow-x-auto scrollbar-hide ${
        isMobile ? "h-10" : "h-9"
      }`}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          className={`tab flex-shrink-0 ${
            activeTab === tab.id ? "tab-active" : ""
          } ${isMobile ? "px-3 py-2 text-sm" : ""}`}
        >
          <span className={isMobile ? "text-base" : ""}>{tab.icon}</span>
          <span
            className={`truncate ${
              isMobile ? "max-w-[100px]" : "max-w-[120px]"
            }`}
          >
            {tab.title}
          </span>
          {tab.closable && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className={`ml-2 flex items-center justify-center rounded hover:bg-ide-border/50 text-ide-text-muted hover:text-ide-text ${
                isMobile ? "w-5 h-5" : "w-4 h-4"
              }`}
            >
              ×
            </button>
          )}
        </div>
      ))}

      {/* Empty space filler */}
      <div className="flex-1 bg-ide-tab border-b border-ide-border" />
    </div>
  );
}
