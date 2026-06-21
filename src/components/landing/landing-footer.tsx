import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--lp-border)] bg-[var(--lp-surface)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <PrevProLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--lp-text-muted)]">
              Sistema Inteligente de Prevenção de Perdas para varejo alimentar e farmacêutico.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">Produto</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--lp-text-muted)]">
                <li><a href="#solucao" className="transition-colors hover:text-prevpro-blue">Módulos</a></li>
                <li><a href="#planos" className="transition-colors hover:text-prevpro-blue">Planos</a></li>
                <li><Link href="/dashboard" className="transition-colors hover:text-prevpro-blue">Plataforma</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">Comercial</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--lp-text-muted)]">
                <li><Link href="/demo" className="transition-colors hover:text-prevpro-blue">Demonstração</Link></li>
                <li><Link href="/demo" className="transition-colors hover:text-prevpro-blue">Contato</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--lp-text-muted)]">
                <li><span>Privacidade</span></li>
                <li><span>Termos de uso</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--lp-border)] pt-6 text-center text-xs text-[var(--lp-text-muted)]">
          © {new Date().getFullYear()} PrevPro BR. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
