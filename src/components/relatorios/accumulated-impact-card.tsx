export function AccumulatedImpactCard() {
  return (
    <div className="animate-fade-in-up animate-delay-150 overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-prevpro-blue/5 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_8px_24px_rgba(34,197,94,0.08)]">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
            💰
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Impacto acumulado do PrevPro
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Economia Gerada
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Perdas evitadas desde o início do uso
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-white px-6 py-4 text-center shadow-sm sm:text-right">
          <p className="text-3xl font-bold text-emerald-600 sm:text-4xl">R$ 73.200</p>
          <p className="mt-1 text-xs font-medium text-slate-500">+18% nos últimos 90 dias</p>
        </div>
      </div>
    </div>
  );
}
