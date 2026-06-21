"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type PublicTheme = "light" | "dark";

const STORAGE_KEY = "prevpro-public-theme";

interface PublicThemeContextValue {
  theme: PublicTheme;
  toggleTheme: () => void;
  mounted: boolean;
}

const PublicThemeContext = createContext<PublicThemeContextValue | null>(null);

export function PublicThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<PublicTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PublicTheme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <PublicThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      <div
        data-theme={mounted ? theme : "light"}
        className="public-page min-h-screen transition-colors duration-300"
      >
        {children}
      </div>
    </PublicThemeContext.Provider>
  );
}

export function usePublicTheme() {
  const ctx = useContext(PublicThemeContext);
  if (!ctx) {
    throw new Error("usePublicTheme must be used within PublicThemeProvider");
  }
  return ctx;
}
