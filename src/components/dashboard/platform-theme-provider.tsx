"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

export type PlatformTheme = "light" | "dark";

const STORAGE_KEY = "prevpro-platform-theme";

function readTheme(): PlatformTheme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY) as PlatformTheme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

let themeListeners: Array<() => void> = [];

function subscribeTheme(onStoreChange: () => void) {
  themeListeners.push(onStoreChange);
  return () => {
    themeListeners = themeListeners.filter((listener) => listener !== onStoreChange);
  };
}

function getThemeSnapshot(): PlatformTheme {
  return readTheme();
}

function persistTheme(theme: PlatformTheme) {
  localStorage.setItem(STORAGE_KEY, theme);
  themeListeners.forEach((listener) => listener());
}

interface PlatformThemeContextValue {
  theme: PlatformTheme;
  toggleTheme: () => void;
  mounted: boolean;
}

const PlatformThemeContext = createContext<PlatformThemeContextValue | null>(null);

export function PlatformThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    (): PlatformTheme => "light"
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
    <PlatformThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      <div
        data-theme={mounted ? theme : "light"}
        className="platform-page min-h-screen w-full transition-colors duration-500 ease-in-out"
      >
        {children}
      </div>
    </PlatformThemeContext.Provider>
  );
}

export function usePlatformTheme() {
  const ctx = useContext(PlatformThemeContext);
  if (!ctx) {
    throw new Error("usePlatformTheme must be used within PlatformThemeProvider");
  }
  return ctx;
}
