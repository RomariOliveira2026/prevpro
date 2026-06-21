import Link from "next/link";
import { LandingHeader } from "./landing-header";
import { LandingFooter } from "./landing-footer";
import { PublicShell } from "./public-shell";
import { DashboardMockup } from "./dashboard-mockup";
import { QuickBenefits } from "./quick-benefits";
import { ImpactStats } from "./impact-stats";
import { HowItWorks } from "./how-it-works";
import { PremiumBenefits } from "./premium-benefits";
import { RoiSection } from "./roi-section";
import { Testimonials } from "./testimonials";
import { FinalCta } from "./final-cta";
import { modules, painPoints, plans } from "@/lib/landing-data";

export function LandingPage() {
  return (
    <PublicShell>
      <LandingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--lp-hero-glow)] via-transparent to-prevpro-green/5"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="animate-fade-in-up text-center lg:text-left">
              <span className="inline-flex rounded-full bg-prevpro-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-prevpro-blue">
                Prevenção de Perdas com IA
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-[var(--lp-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Reduza perdas, controle vencimentos e antecipe riscos no varejo
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[var(--lp-text-muted)] sm:text-lg">
                O PrevPro é uma plataforma inteligente para supermercados, atacarejos,
                farmácias e distribuidores monitorarem ocorrências, validades, alertas e
                indicadores em tempo real.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="/demo"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-prevpro-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-prevpro-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d3f6b] hover:shadow-xl sm:w-auto"
                >
                  Solicitar Demonstração
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-8 py-3.5 text-sm font-semibold text-[var(--lp-text)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/40 hover:shadow-md sm:w-auto"
                >
                  Ver Plataforma
                </Link>
              </div>
              <QuickBenefits />
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <ImpactStats />

      {/* Dor */}
      <section className="bg-[var(--lp-surface)] py-16 transition-colors duration-300 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
              Seu varejo pode estar perdendo dinheiro todos os dias sem perceber
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => (
              <div key={item.title} className="lp-card rounded-2xl p-6">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3 className="mt-4 text-base font-semibold text-[var(--lp-text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lp-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
              Com o PrevPro, sua operação ganha controle, inteligência e velocidade
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map((mod) => (
              <div key={mod.title} className="lp-card group rounded-2xl p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-prevpro-blue/10 text-xl transition-transform duration-300 group-hover:scale-110">
                  {mod.icon}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[var(--lp-text)]">{mod.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--lp-text-muted)]">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumBenefits />
      <RoiSection />
      <Testimonials />

      {/* Planos */}
      <section id="planos" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
              Planos para cada etapa do seu varejo
            </h2>
            <p className="mt-3 text-[var(--lp-text-muted)]">
              Escolha o plano ideal ou solicite uma proposta personalizada.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`lp-card relative flex flex-col rounded-2xl p-6 sm:p-8 ${
                  plan.highlighted ? "ring-2 ring-prevpro-blue/25" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-prevpro-blue px-3 py-0.5 text-xs font-semibold text-white">
                    Mais popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-[var(--lp-text)]">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[var(--lp-text)]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[var(--lp-text-muted)]">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--lp-text-muted)]">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--lp-text-muted)]">
                      <span className="text-prevpro-green">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-prevpro-blue text-white shadow-md shadow-prevpro-blue/20 hover:bg-[#0d3f6b] hover:shadow-lg"
                      : "border border-[var(--lp-border)] bg-[var(--lp-surface)] text-[var(--lp-text)] hover:border-prevpro-blue/30 hover:shadow-md"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <LandingFooter />
    </PublicShell>
  );
}
