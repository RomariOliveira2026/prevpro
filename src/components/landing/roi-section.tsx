"use client";

import { useEffect, useRef, useState } from "react";
import { roiData } from "@/lib/landing-data";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target, duration, active]);

  return value;
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function RoiSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const monthlyLoss = useCountUp(roiData.monthlyLoss, 1400, active);
  const reduction = useCountUp(roiData.reductionPercent, 1200, active);
  const monthlySavings = useCountUp(roiData.monthlySavings, 1600, active);
  const annualSavings = useCountUp(roiData.annualSavings, 1800, active);

  return (
    <section ref={ref} className="bg-[var(--lp-surface)] py-16 transition-colors duration-300 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--lp-text)] sm:text-3xl">
            Quanto sua empresa pode economizar?
          </h2>
          <p className="mt-3 text-[var(--lp-text-muted)]">
            Simulação baseada na média de resultados de operações similares.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lp-card rounded-2xl p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Perda mensal
            </p>
            <p className="mt-3 text-2xl font-bold text-red-500 sm:text-3xl">
              {formatCurrency(monthlyLoss)}
            </p>
          </div>
          <div className="lp-card rounded-2xl p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Redução média
            </p>
            <p className="mt-3 text-2xl font-bold text-prevpro-blue sm:text-3xl">
              {reduction}%
            </p>
          </div>
          <div className="lp-card rounded-2xl p-6 text-center ring-2 ring-prevpro-green/30">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Economia
            </p>
            <p className="mt-3 text-2xl font-bold text-prevpro-green sm:text-3xl">
              {formatCurrency(monthlySavings)}/mês
            </p>
          </div>
          <div className="lp-card rounded-2xl bg-gradient-to-br from-prevpro-blue/10 to-prevpro-green/10 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lp-text-muted)]">
              Economia anual
            </p>
            <p className="mt-3 text-2xl font-bold text-[var(--lp-text)] sm:text-3xl">
              {formatCurrency(annualSavings)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
