"use client";

import { useEffect, useState } from "react";

type Theme = "default" | "midnight-teal" | "midnight-indigo" | "midnight-navy" | "slate-blue";

interface ThemeOption {
  id: Theme;
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

const themes: ThemeOption[] = [
  {
    id: "default",
    name: "Midnight Blue",
    colors: { primary: "rgb(34 211 238)", secondary: "rgb(12 15 32)" },
  },
  {
    id: "midnight-teal",
    name: "Midnight Teal",
    colors: { primary: "rgb(45 212 191)", secondary: "rgb(10 18 25)" },
  },
  {
    id: "midnight-indigo",
    name: "Midnight Indigo",
    colors: { primary: "rgb(129 140 248)", secondary: "rgb(15 12 28)" },
  },
  {
    id: "midnight-navy",
    name: "Midnight Navy",
    colors: { primary: "rgb(96 165 250)", secondary: "rgb(8 12 28)" },
  },
  {
    id: "slate-blue",
    name: "Slate Blue",
    colors: { primary: "rgb(56 189 248)", secondary: "rgb(15 18 28)" },
  },
];

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("default");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && themes.find((t) => t.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("theme", theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${themes.find((t) => t.id === currentTheme)?.colors.primary}, ${themes.find((t) => t.id === currentTheme)?.colors.secondary})`,
        }}
        aria-label="Theme selector"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {/* Theme Options Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 rounded-2xl bg-white p-4 shadow-2xl backdrop-blur-sm">
          <div className="mb-3 text-sm font-bold text-gray-800">
            Color Theme
          </div>
          <div className="flex flex-col gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`group relative flex items-center gap-3 rounded-lg px-4 py-2 transition-all hover:bg-gray-100 ${
                  currentTheme === theme.id ? "bg-gray-100" : ""
                }`}
              >
                {/* Color Preview */}
                <div
                  className="h-8 w-8 rounded-full shadow-md transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  }}
                />
                {/* Theme Name */}
                <span className="text-sm font-medium text-gray-700">
                  {theme.name}
                </span>
                {/* Active Indicator */}
                {currentTheme === theme.id && (
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
