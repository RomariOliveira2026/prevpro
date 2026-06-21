"use client";

import { usePublicTheme } from "./public-theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = usePublicTheme();

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)]" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      title={theme === "light" ? "Modo escuro" : "Modo claro"}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] text-[var(--lp-text-muted)] shadow-sm transition-all duration-300 hover:border-prevpro-blue/40 hover:text-prevpro-blue hover:shadow-md"
    >
      {theme === "light" ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}
