import { testimonials } from "@/lib/landing-data";

export function Testimonials() {
  return (
    <section className="bg-[var(--lp-surface)] py-16 transition-colors duration-300 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            O que dizem nossos clientes
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.quote}
              className="lp-card flex flex-col rounded-2xl p-6 sm:p-7"
            >
              <span className="text-3xl text-prevpro-blue/40">&ldquo;</span>
              <p className="mt-2 flex-1 text-base leading-relaxed text-[var(--lp-text)]">
                {item.quote}
              </p>
              <footer className="mt-6 border-t border-[var(--lp-border)] pt-4">
                <p className="text-sm font-semibold text-[var(--lp-text)]">{item.role}</p>
                <p className="text-xs text-[var(--lp-text-muted)]">{item.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
