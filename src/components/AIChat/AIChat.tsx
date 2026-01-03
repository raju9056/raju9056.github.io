import { useState, useRef, useEffect, useCallback } from "react";
import { sendMessage, getFallbackResponse, type ChatMessage } from "../../services/aiChat";

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGES_PER_SESSION = 5;

export function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Raju's personal AI assistant. Ask me any questions, and you'll get very realistic answers as possible that you would get from Raju himself. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      let response;
      
      // Use real AI for first 5 messages, then switch to fallback
      if (userMessageCount < MAX_MESSAGES_PER_SESSION) {
        response = await sendMessage(input.trim(), messages);
        setUserMessageCount((prev) => prev + 1);
        
        // Show limit notification after the 5th AI response
        if (userMessageCount + 1 === MAX_MESSAGES_PER_SESSION) {
          const assistantMessage: ChatMessage = {
            role: "assistant",
            content: response.message,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
          
          const limitMessage: ChatMessage = {
            role: "assistant",
            content:
              "You've reached the limit of 5 AI-powered responses. I'll continue answering your questions using my built-in knowledge base. For the best experience, please refresh the page to start a new AI session.",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, limitMessage]);
          setIsLoading(false);
          return;
        }
      } else {
        // Use fallback responses after limit
        response = {
          message: getFallbackResponse(input.trim()),
          success: true,
        };
      }

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        role: "assistant",
        content:
          "I'm having trouble connecting right now. Please try again in a moment!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, userMessageCount]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What's your experience?",
    "Tell me about your skills",
    "What projects have you built?",
    "Are you available for hire?",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[600px] bg-[#1e1e1e] rounded-lg shadow-2xl border border-[#3c3c3c] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm">🤖</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">
                Raju's AI Assistant
              </h3>
              <p className="text-[#808080] text-xs">
                Ask me anything about Raju
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#808080] hover:text-white transition-colors p-1"
            aria-label="Close chat"
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
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c]"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.role === "user" ? "text-blue-200" : "text-[#808080]"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                  <span className="text-sm text-[#808080]">
                    Raju is typing...
                  </span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions (show only if few messages) */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2">
            <p className="text-[#808080] text-xs mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="text-xs px-3 py-1 rounded-full bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] hover:border-blue-500 hover:text-blue-400 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-[#252526] border-t border-[#3c3c3c]">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Raju's experience, skills, projects..."
              className="flex-1 bg-[#3c3c3c] text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#808080]"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <span>Send</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-[#606060] text-xs">
              {userMessageCount >= MAX_MESSAGES_PER_SESSION ? (
                <span className="text-yellow-500">
                  Using fallback mode (AI limit reached)
                </span>
              ) : (
                <span>
                  AI responses: {userMessageCount}/{MAX_MESSAGES_PER_SESSION}
                </span>
              )}
            </p>
            {userMessageCount >= MAX_MESSAGES_PER_SESSION && (
              <button
                onClick={() => window.location.reload()}
                className="text-blue-400 hover:text-blue-300 text-xs underline"
              >
                Refresh for AI mode
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
