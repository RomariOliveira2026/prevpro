"use client";

import Link from "next/link";
import { PrevProLogo } from "./prevpro-logo";
import { PlatformThemeToggle } from "./platform-theme-toggle";

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
  subtitle?: string;
}

export function Header({
  onMenuClick,
  title = "Dashboard",
  subtitle = "Visão geral da rede · Junho 2026",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-[var(--platform-border)] bg-[var(--platform-header-bg)] px-4 shadow-[var(--platform-header-shadow)] backdrop-blur-md sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--platform-text-muted)] transition-colors hover:bg-[var(--platform-hover)] hover:text-prevpro-blue lg:hidden"
          aria-label="Abrir menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

            <Link href="/dashboard" className="shrink-0" aria-label="PrevPro — ir para o dashboard">
          <PrevProLogo size="header" />
        </Link>

        <div className="hidden min-w-0 border-l border-[var(--platform-border)] pl-3 lg:block">
          <h1 className="truncate text-lg font-semibold tracking-tight text-[var(--platform-text)]">
            {title}
          </h1>
          <p className="truncate text-xs text-[var(--platform-text-muted)]">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <PlatformThemeToggle />

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-[var(--platform-text-muted)] transition-colors hover:bg-[var(--platform-hover)] hover:text-prevpro-blue"
          aria-label="Notificações"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-prevpro-green ring-2 ring-[var(--platform-surface)]" />
        </button>

        <div className="flex items-center gap-3 border-l border-[var(--platform-border)] pl-2 sm:pl-4">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-[var(--platform-text)]">Ana Silva</p>
            <p className="text-xs text-[var(--platform-text-muted)]">Gerente de Prevenção</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-prevpro-blue to-[#1565A8] text-sm font-semibold text-white shadow-md shadow-prevpro-blue/25">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
