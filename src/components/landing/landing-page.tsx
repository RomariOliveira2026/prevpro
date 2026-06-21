import Link from "next/link";
import { LandingHeader } from "./landing-header";
import { LandingFooter } from "./landing-footer";
import { PublicShell } from "./public-shell";
import { DashboardMockup } from "./dashboard-mockup";
import { QuickBenefits } from "./quick-benefits";
import { ImpactStats } from "./impact-stats";
import { benefits, modules, painPoints, plans } from "@/lib/landing-data";

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
            <div className="text-center lg:text-left">
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
            <DashboardMockup />
          </div>
        </div>
      </section>

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
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-bg)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300/40 hover:shadow-lg"
              >
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
              <div
                key={mod.title}
                className="rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/30 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-prevpro-blue/10 text-xl">
                  {mod.icon}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[var(--lp-text)]">{mod.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--lp-text-muted)]">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="bg-[var(--lp-surface)] py-16 transition-colors duration-300 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
                Menos perdas. Mais lucro. Mais controle.
              </h2>
              <p className="mt-4 text-[var(--lp-text-muted)]">
                Uma plataforma completa para transformar dados operacionais em decisões
                que protegem sua margem e fortalecem resultados.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-bg)] px-4 py-3 transition-all duration-200 hover:border-prevpro-green/30 hover:shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prevpro-green/15 text-xs text-prevpro-green">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-[var(--lp-text)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
                className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                  plan.highlighted
                    ? "border-prevpro-blue bg-gradient-to-b from-prevpro-blue/10 to-[var(--lp-surface)] ring-2 ring-prevpro-blue/20"
                    : "border-[var(--lp-border)] bg-[var(--lp-surface)]"
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

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-prevpro-blue to-[#0a3d6b] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Quer descobrir onde sua empresa está perdendo dinheiro?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Agende uma demonstração rápida e veja como o PrevPro pode ajudar sua
            operação a reduzir perdas e proteger resultados.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-prevpro-blue shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-prevpro-gray hover:shadow-xl"
          >
            Agendar Demonstração
          </Link>
        </div>
      </section>

      <LandingFooter />
    </PublicShell>
  );
}
