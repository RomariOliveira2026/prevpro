import { quickBenefits } from "@/lib/landing-data";

export function QuickBenefits() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {quickBenefits.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/25 hover:shadow-md"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-prevpro-blue/10 text-lg">
            {item.icon}
          </span>
          <p className="text-left text-sm font-medium leading-snug text-[var(--lp-text)]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
