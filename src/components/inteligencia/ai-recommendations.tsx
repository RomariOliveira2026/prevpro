import type { AiRecommendation } from "@/lib/inteligencia-data";

const impactStyles = {
  Alto: "bg-red-50 text-red-700 ring-red-200",
  Médio: "bg-amber-50 text-amber-700 ring-amber-200",
  Baixo: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

interface AiRecommendationsProps {
  recommendations: AiRecommendation[];
}

export function AiRecommendations({ recommendations }: AiRecommendationsProps) {
  return (
    <div className="animate-fade-in-up animate-delay-500 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-green/[0.04] to-prevpro-blue/[0.04] px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-prevpro-green/10 text-prevpro-green">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-800">
              Recomendações da IA
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Ações sugeridas para redução de perdas
            </p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {recommendations.map((rec, index) => (
          <div
            key={rec.id}
            className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-prevpro-gray/40 sm:px-6"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-prevpro-blue/10 text-sm font-bold text-prevpro-blue">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${impactStyles[rec.impact]}`}
                >
                  Impacto {rec.impact}
                </span>
                <span className="text-xs text-slate-400">{rec.sector}</span>
              </div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
                {rec.text}
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-prevpro-blue opacity-0 transition-all group-hover:opacity-100 hover:bg-prevpro-gray"
            >
              Aplicar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
