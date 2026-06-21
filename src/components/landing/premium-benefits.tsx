import { premiumBenefits } from "@/lib/landing-data";

export function PremiumBenefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            Resultados reais para operações de varejo
          </h2>
          <p className="mt-3 text-[var(--lp-text-muted)]">
            Benefícios comprovados para supermercados, atacarejos, farmácias e distribuidores.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {premiumBenefits.map((item) => (
            <div
              key={item.title}
              className="lp-card group rounded-2xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-prevpro-green/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-[var(--lp-text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--lp-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
