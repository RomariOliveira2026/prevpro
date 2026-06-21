import type { Metadata } from "next";
import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";
import { PublicShell } from "@/components/landing/public-shell";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { LANDING_CONTACT } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Demonstração Solicitada",
  description: "Recebemos sua solicitação de demonstração do PrevPro.",
};

export default function ObrigadoPage() {
  const whatsappUrl = `https://wa.me/${LANDING_CONTACT.whatsapp}?text=${encodeURIComponent(LANDING_CONTACT.whatsappMessage)}`;

  return (
    <PublicShell>
      <header className="border-b border-[var(--lp-border)] bg-[var(--lp-surface)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <PrevProLogo />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-lg text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-prevpro-green/15 text-3xl text-prevpro-green">
            ✓
          </span>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            Demonstração solicitada com sucesso!
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--lp-text-muted)]">
            Recebemos seus dados. Nossa equipe entrará em contato para apresentar
            o PrevPro e entender a realidade da sua operação.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-8 py-3.5 text-sm font-semibold text-[var(--lp-text)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/30 hover:shadow-md sm:w-auto"
            >
              Voltar para o site
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-prevpro-blue px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d3f6b] sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>
    </PublicShell>
  );
}
