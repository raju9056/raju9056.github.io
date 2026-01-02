/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dracula theme colors
        "ide-bg": "#1e1e2e",
        "ide-sidebar": "#181825",
        "ide-terminal": "#0d1117",
        "ide-tab": "#282a36",
        "ide-tab-active": "#1e1e2e",
        "ide-border": "#313244",
        "ide-text": "#cdd6f4",
        "ide-text-muted": "#6c7086",
        "ide-accent": "#89b4fa",
        "ide-accent-green": "#a6e3a1",
        "ide-accent-purple": "#cba6f7",
        "ide-accent-pink": "#f5c2e7",
        "ide-accent-yellow": "#f9e2af",
        "ide-accent-orange": "#fab387",
        "ide-accent-red": "#f38ba8",
        "ide-accent-cyan": "#94e2d5",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typing: "typing 3.5s steps(40, end)",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
