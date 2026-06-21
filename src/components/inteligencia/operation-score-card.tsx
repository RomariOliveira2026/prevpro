interface OperationScoreCardProps {
  score: number;
  label: string;
  description: string;
  breakdown: { label: string; score: number }[];
}

function getScoreColor(score: number) {
  if (score >= 80) return { stroke: "#22C55E", text: "text-prevpro-green", bg: "bg-emerald-50" };
  if (score >= 60) return { stroke: "#F59E0B", text: "text-amber-600", bg: "bg-amber-50" };
  return { stroke: "#DC2626", text: "text-red-600", bg: "bg-red-50" };
}

export function OperationScoreCard({
  score,
  label,
  description,
  breakdown,
}: OperationScoreCardProps) {
  const colors = getScoreColor(score);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="animate-fade-in-up animate-delay-200 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-prevpro-green/[0.04] px-5 py-4 sm:px-6">
        <h2 className="text-base font-semibold tracking-tight text-slate-800">
          Score Geral da Operação
        </h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Índice consolidado de performance preventiva
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-5 sm:flex-row sm:p-6">
        <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={colors.stroke}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${colors.text}`}>{score}</span>
            <span className="text-xs font-medium text-slate-400">de 100</span>
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${colors.bg} ${colors.text}`}
          >
            {label}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

          <div className="mt-4 space-y-2.5">
            {breakdown.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-800">{item.score}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-prevpro-blue transition-all duration-700"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
