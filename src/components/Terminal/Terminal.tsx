import { useState, useRef, useEffect, useCallback } from "react";
import { executeCommand } from "./commands";
import type { TerminalLine, FileTreeItem } from "../../types";

interface TerminalProps {
  height: number;
  onHeightChange: (height: number) => void;
  onClose: () => void;
  onOpenTab: (item: FileTreeItem) => void;
  isMobile?: boolean;
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: "1",
    type: "system",
    content:
      "Welcome to Raju's Portfolio Terminal! Type 'help' for available commands.",
    timestamp: new Date(),
  },
];

export function Terminal({
  height,
  onClose,
  onOpenTab,
  isMobile = false,
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input on click
  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!input.trim() || isProcessing) return;

    const command = input.trim();

    // Add input line
    const inputLine: TerminalLine = {
      id: Date.now().toString(),
      type: "input",
      content: command,
      timestamp: new Date(),
    };
    setLines((prev) => [...prev, inputLine]);

    // Add to history
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);
    setInput("");

    // Handle clear command
    if (command.toLowerCase() === "clear") {
      setLines(INITIAL_LINES);
      return;
    }

    // Execute command
    setIsProcessing(true);
    try {
      const output = await executeCommand(command, onOpenTab);
      const outputLine: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type:
          output.type === "error"
            ? "error"
            : output.type === "info"
            ? "info"
            : "output",
        content: output.content,
        timestamp: new Date(),
      };
      setLines((prev) => [...prev, outputLine]);
    } catch {
      const errorLine: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type: "error",
        content: "An error occurred while executing the command.",
        timestamp: new Date(),
      };
      setLines((prev) => [...prev, errorLine]);
    }
    setIsProcessing(false);
  }, [input, isProcessing, onOpenTab]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex < commandHistory.length - 1
              ? historyIndex + 1
              : historyIndex;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInput("");
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        // Simple auto-complete
        const commands = [
          "help",
          "about",
          "skills",
          "projects",
          "contact",
          "experience",
          "github",
          "clear",
          "ai",
        ];
        const matches = commands.filter((cmd) =>
          cmd.startsWith(input.toLowerCase())
        );
        if (matches.length === 1) {
          setInput(matches[0]);
        }
      }
    },
    [handleSubmit, commandHistory, historyIndex, input]
  );

  return (
    <div
      className="bg-ide-terminal border-t border-ide-border flex flex-col"
      style={{
        height: isMobile ? `${height}px` : `${height}px`,
        minHeight: isMobile ? "120px" : "100px",
      }}
    >
      {/* Terminal Header */}
      <div
        className={`flex items-center justify-between px-3 md:px-4 bg-ide-sidebar border-b border-ide-border ${
          isMobile ? "h-10" : "h-8"
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`text-ide-text-muted uppercase tracking-wider ${
              isMobile ? "text-xs" : "text-xs"
            }`}
          >
            Terminal
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onClose}
            className={`flex items-center justify-center rounded hover:bg-ide-border/50 text-ide-text-muted hover:text-ide-text ${
              isMobile ? "w-8 h-8" : "w-6 h-6"
            }`}
          >
            ×
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className={`terminal-body flex-1 font-mono cursor-text overflow-y-auto ${
          isMobile ? "p-3 text-xs" : "p-4 text-sm"
        }`}
      >
        {lines.map((line) => (
          <div key={line.id} className="terminal-line mb-1">
            {line.type === "input" ? (
              <>
                <span className="terminal-prompt">
                  {isMobile ? "$" : "visitor@portfolio:~$"}
                </span>
                <span className="terminal-command ml-2">{line.content}</span>
              </>
            ) : line.type === "error" ? (
              <span className="terminal-error">{line.content}</span>
            ) : line.type === "info" ? (
              <span className="terminal-info">{line.content}</span>
            ) : line.type === "system" ? (
              <span className="terminal-info text-xs md:text-sm">
                {line.content}
              </span>
            ) : (
              <div className="terminal-output whitespace-pre-wrap">
                {line.content}
              </div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="terminal-line flex items-center">
          <span className="terminal-prompt">
            {isMobile ? "$" : "visitor@portfolio:~$"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 ml-2 bg-transparent border-none outline-none text-ide-text font-mono ${
              isMobile ? "text-xs" : ""
            }`}
            autoFocus={!isMobile}
            disabled={isProcessing}
            placeholder={isMobile ? "Type command..." : ""}
          />
          <span className="animate-blink text-ide-accent">█</span>
        </div>
      </div>
    </div>
  );
}
