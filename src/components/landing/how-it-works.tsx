import { howItWorksSteps } from "@/lib/landing-data";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-[var(--lp-border)] bg-[var(--lp-surface)] py-16 transition-colors duration-300 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            Como o PrevPro reduz perdas em sua operação
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="lp-card group relative rounded-2xl p-6"
            >
              <span className="absolute right-4 top-4 text-4xl font-bold text-prevpro-blue/10 transition-colors group-hover:text-prevpro-blue/20">
                {item.step}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-prevpro-blue/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="mt-5 text-base font-semibold text-[var(--lp-text)]">{item.title}</h3>
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
