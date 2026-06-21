import type { IntelligenceInsight } from "@/lib/inteligencia-data";

const priorityStyles = {
  Alta: "bg-amber-50 text-amber-700 ring-amber-200",
  Média: "bg-blue-50 text-blue-700 ring-blue-200",
  Crítica: "bg-red-50 text-red-700 ring-red-200",
};

const typeIcons = {
  trend: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  concentration: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  recurrence: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

interface AutomaticInsightsProps {
  insights: IntelligenceInsight[];
}

export function AutomaticInsights({ insights }: AutomaticInsightsProps) {
  return (
    <div className="animate-fade-in-up animate-delay-300 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-violet-50/50 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold tracking-tight text-slate-800">
                Insights Automáticos
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Padrões detectados pelo motor de IA
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
            IA ativa
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:p-5">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="group flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200/60 hover:shadow-md"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-300 group-hover:bg-violet-500 group-hover:text-white">
              {typeIcons[insight.type]}
            </div>
            <div className="min-w-0 flex-1">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${priorityStyles[insight.priority]}`}
              >
                {insight.priority}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {insight.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
