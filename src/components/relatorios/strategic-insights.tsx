import type { StrategicInsight } from "@/lib/relatorios-data";

function InsightIcon({ icon }: { icon: StrategicInsight["icon"] }) {
  const iconClass = "h-5 w-5";

  switch (icon) {
    case "sector":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "recovery":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "trend":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    default:
      return null;
  }
}

const iconStyles: Record<StrategicInsight["icon"], string> = {
  sector: "bg-prevpro-blue/10 text-prevpro-blue group-hover:bg-prevpro-blue group-hover:text-white",
  recovery: "bg-emerald-50 text-prevpro-green group-hover:bg-prevpro-green group-hover:text-white",
  trend: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
};

interface StrategicInsightsProps {
  insights: StrategicInsight[];
}

export function StrategicInsights({ insights }: StrategicInsightsProps) {
  return (
    <div className="animate-fade-in-up animate-delay-500 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-prevpro-green/[0.04] px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-prevpro-blue/10 text-prevpro-blue">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-800">
              Insights Estratégicos
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Análises geradas para tomada de decisão
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:p-5">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="group flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/20 hover:shadow-md"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${iconStyles[insight.icon]}`}
            >
              <InsightIcon icon={insight.icon} />
            </div>
            <p className="text-sm leading-relaxed text-slate-700">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
