import { FileTree } from "./FileTree";
import type { FileTreeItem } from "../../types";

interface SidebarProps {
  width: number;
  onWidthChange: (width: number) => void;
  fileTree: FileTreeItem[];
  activeFile: string;
  onFileClick: (item: FileTreeItem) => void;
  onFolderToggle: (folderId: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  width,
  fileTree,
  activeFile,
  onFileClick,
  onFolderToggle,
  isMobile = false,
  onClose,
}: SidebarProps) {
  return (
    <div
      className={`bg-ide-sidebar border-r border-ide-border flex flex-col h-full`}
      style={
        isMobile
          ? { width: "100%" }
          : { width: `${width}px`, minWidth: "180px", maxWidth: "400px" }
      }
    >
      {/* Explorer Header */}
      <div className="h-9 md:h-9 flex items-center justify-between px-4 border-b border-ide-border/50">
        <span className="text-xs font-semibold text-ide-text-muted uppercase tracking-wider">
          Explorer
        </span>
        {isMobile && onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-ide-border/50 text-ide-text-muted hover:text-ide-text transition-colors"
            aria-label="Close sidebar"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto py-2">
        <FileTree
          items={fileTree}
          activeFile={activeFile}
          onFileClick={onFileClick}
          onFolderToggle={onFolderToggle}
        />
      </div>
    </div>
  );
}
