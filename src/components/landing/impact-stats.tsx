"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "-32%", label: "redução média de perdas", color: "text-prevpro-blue" },
  { value: "R$ 73 mil", label: "economia média gerada", color: "text-prevpro-green" },
  { value: "94%", label: "precisão dos alertas com IA", color: "text-[var(--lp-text)]" },
];

export function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-[var(--lp-border)] bg-[var(--lp-surface)] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className={`text-3xl font-bold tracking-tight sm:text-4xl ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--lp-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
