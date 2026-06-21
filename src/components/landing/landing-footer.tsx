import Link from "next/link";
import { PrevProLogo } from "@/components/dashboard/prevpro-logo";
import { LANDING_CONTACT } from "@/lib/landing-data";

export function LandingFooter() {
  const whatsappUrl = `https://wa.me/${LANDING_CONTACT.whatsapp}?text=${encodeURIComponent(LANDING_CONTACT.whatsappMessage)}`;

  return (
    <footer className="border-t border-[var(--lp-border)] bg-[var(--lp-surface)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <PrevProLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--lp-text-muted)]">
              Sistema Inteligente de Prevenção de Perdas para supermercados,
              atacarejos, farmácias e distribuidores.
            </p>
            <p className="mt-3 text-xs font-medium text-prevpro-blue">
              {LANDING_CONTACT.domain}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--lp-text-muted)]">
              <li>
                <a href="#solucao" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Solução
                </a>
              </li>
              <li>
                <a href="#beneficios" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#planos" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Planos
                </a>
              </li>
              <li>
                <Link href="/demo" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Demonstração
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--lp-text-muted)]">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-prevpro-blue"
                >
                  WhatsApp: {LANDING_CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${LANDING_CONTACT.email}`}
                  className="transition-colors duration-200 hover:text-prevpro-blue"
                >
                  {LANDING_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Plataforma
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--lp-text-muted)]">
              <li>
                <Link href="/dashboard" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Acessar sistema
                </Link>
              </li>
              <li>
                <Link href="/demo" className="transition-colors duration-200 hover:text-prevpro-blue">
                  Solicitar proposta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--lp-border)] pt-6 text-xs text-[var(--lp-text-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} PrevPro BR. Todos os direitos reservados.</p>
          <p>
            <a
              href={`https://${LANDING_CONTACT.domain}`}
              className="transition-colors hover:text-prevpro-blue"
            >
              {LANDING_CONTACT.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
