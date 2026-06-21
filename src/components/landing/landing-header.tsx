import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";
import { ThemeToggle } from "./theme-toggle";
import { TopAnnouncementBar } from "./top-announcement-bar";

export function LandingHeader() {
  return (
    <div className="sticky top-0 z-50">
      <TopAnnouncementBar />
      <header className="border-b border-[var(--lp-border)] bg-[var(--lp-surface)]/90 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <PrevProLogo size="header" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-[var(--lp-text-muted)] transition-colors duration-200 hover:text-prevpro-blue"
            >
              Como Funciona
            </a>
            <a
              href="#solucao"
              className="text-sm font-medium text-[var(--lp-text-muted)] transition-colors duration-200 hover:text-prevpro-blue"
            >
              Solução
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-[var(--lp-text-muted)] transition-colors duration-200 hover:text-prevpro-blue"
            >
              Benefícios
            </a>
            <a
              href="#planos"
              className="text-sm font-medium text-[var(--lp-text-muted)] transition-colors duration-200 hover:text-prevpro-blue"
            >
              Planos
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="hidden rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-4 py-2 text-sm font-medium text-[var(--lp-text)] shadow-sm transition-all duration-200 hover:border-prevpro-blue/40 hover:shadow-md sm:inline-flex"
            >
              Ver Plataforma
            </Link>
            <Link
              href="/demo"
              className="inline-flex rounded-xl bg-prevpro-blue px-4 py-2 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all duration-200 hover:bg-[#0d3f6b] hover:shadow-lg"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
