"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

export type PublicTheme = "light" | "dark";

const STORAGE_KEY = "prevpro-public-theme";

function readTheme(): PublicTheme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY) as PublicTheme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

let themeListeners: Array<() => void> = [];

function subscribeTheme(onStoreChange: () => void) {
  themeListeners.push(onStoreChange);
  return () => {
    themeListeners = themeListeners.filter((listener) => listener !== onStoreChange);
  };
}

function getThemeSnapshot(): PublicTheme {
  return readTheme();
}

function persistTheme(theme: PublicTheme) {
  localStorage.setItem(STORAGE_KEY, theme);
  themeListeners.forEach((listener) => listener());
}

interface PublicThemeContextValue {
  theme: PublicTheme;
  toggleTheme: () => void;
  mounted: boolean;
}

const PublicThemeContext = createContext<PublicThemeContextValue | null>(null);

export function PublicThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    (): PublicTheme => "dark"
  );
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const toggleTheme = useCallback(() => {
    persistTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <PublicThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      <div
        data-theme={mounted ? theme : "dark"}
        className="public-page min-h-screen transition-colors duration-500 ease-in-out"
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
