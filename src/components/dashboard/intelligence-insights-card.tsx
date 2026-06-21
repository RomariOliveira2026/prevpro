import type { IntelligenceInsight, InsightPriority } from "@/lib/dashboard-data";

const priorityStyles: Record<
  InsightPriority,
  { badge: string; border: string; icon: string }
> = {
  Crítica: {
    badge: "bg-red-50 text-red-700 ring-red-200",
    border: "hover:border-red-200/80",
    icon: "bg-red-50 text-red-600 group-hover:bg-red-500 group-hover:text-white",
  },
  Alta: {
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    border: "hover:border-amber-200/80",
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
  },
  Média: {
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    border: "hover:border-blue-200/80",
    icon: "bg-blue-50 text-prevpro-blue group-hover:bg-prevpro-blue group-hover:text-white",
  },
  Baixa: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    border: "hover:border-emerald-200/80",
    icon: "bg-emerald-50 text-prevpro-green group-hover:bg-prevpro-green group-hover:text-white",
  },
};

function InsightIcon({ icon }: { icon: IntelligenceInsight["icon"] }) {
  const iconClass = "h-5 w-5";

  switch (icon) {
    case "trend":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "alert":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "breakage":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "expiry":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

interface IntelligenceInsightsCardProps {
  insights: IntelligenceInsight[];
}

export function IntelligenceInsightsCard({ insights }: IntelligenceInsightsCardProps) {
  return (
    <div className="animate-fade-in-up animate-delay-400 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-prevpro-green/[0.04] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-prevpro-blue/10 text-prevpro-blue">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold tracking-tight text-slate-800">
                Insights Inteligentes
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Análises automáticas do sistema
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-prevpro-blue/10 px-3 py-1 text-xs font-semibold text-prevpro-blue">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-prevpro-green" />
            IA ativa
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:gap-4">
        {insights.map((insight, index) => {
          const styles = priorityStyles[insight.priority];

          return (
            <div
              key={insight.id}
              className={`group flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${styles.border}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${styles.icon}`}
              >
                <InsightIcon icon={insight.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${styles.badge}`}
                >
                  {insight.priority}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {insight.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
