import type { FileTreeItem } from "../../types";

interface FileTreeProps {
  items: FileTreeItem[];
  activeFile: string;
  onFileClick: (item: FileTreeItem) => void;
  onFolderToggle: (folderId: string) => void;
  depth?: number;
}

export function FileTree({
  items,
  activeFile,
  onFileClick,
  onFolderToggle,
  depth = 0,
}: FileTreeProps) {
  return (
    <div className="select-none">
      {items.map((item) => (
        <div key={item.id}>
          {item.type === "folder" ? (
            <>
              {/* Folder */}
              <button
                onClick={() => onFolderToggle(item.id)}
                className="w-full file-item"
                style={{ paddingLeft: `${depth * 12 + 8}px` }}
              >
                <span className="text-ide-text-muted">
                  {item.expanded ? "▼" : "▶"}
                </span>
                <span className="text-ide-accent-yellow">📁</span>
                <span className="text-xs font-semibold text-ide-text-muted uppercase tracking-wider">
                  {item.name}
                </span>
              </button>

              {/* Children */}
              {item.expanded && item.children && (
                <FileTree
                  items={item.children}
                  activeFile={activeFile}
                  onFileClick={onFileClick}
                  onFolderToggle={onFolderToggle}
                  depth={depth + 1}
                />
              )}
            </>
          ) : (
            /* File */
            <button
              onClick={() => onFileClick(item)}
              className={`w-full file-item ${
                activeFile === item.id ? "file-item-active" : ""
              }`}
              style={{ paddingLeft: `${depth * 12 + 24}px` }}
            >
              <span>{item.icon || "📄"}</span>
              <span className="truncate">{item.name}</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
