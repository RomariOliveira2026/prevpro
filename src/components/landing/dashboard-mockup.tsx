export function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-4xl lg:mt-0">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-prevpro-blue/20 via-transparent to-prevpro-green/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-surface)] shadow-2xl shadow-prevpro-blue/10 transition-shadow duration-300 hover:shadow-prevpro-blue/20">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--lp-border)] bg-[var(--lp-surface-muted)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 flex-1 rounded-md bg-[var(--lp-bg)] px-3 py-1 text-[10px] text-[var(--lp-text-muted)]">
            app.prevpro.com.br/dashboard
          </span>
        </div>

        <div className="flex min-h-[320px] sm:min-h-[380px]">
          {/* Sidebar mock */}
          <div className="hidden w-14 shrink-0 bg-gradient-to-b from-prevpro-blue to-[#0a3d6b] p-2 sm:block sm:w-16">
            <div className="mx-auto mt-1 h-7 w-7 rounded-lg bg-white/20" />
            <div className="mt-4 space-y-2">
              {[true, false, false, false, false, false].map((active, i) => (
                <div
                  key={i}
                  className={`mx-auto h-7 w-7 rounded-lg ${active ? "bg-white/25" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="min-w-0 flex-1 bg-[var(--lp-bg)] p-3 sm:p-4">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {[
                { label: "Ocorrências", value: "1.284", change: "+12%", color: "text-prevpro-blue" },
                { label: "Validades", value: "47", change: "8 críticas", color: "text-amber-500" },
                { label: "Alertas", value: "23", change: "Ativos", color: "text-red-500" },
                { label: "Economia", value: "R$ 18k", change: "+22%", color: "text-prevpro-green" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-2.5 shadow-sm sm:p-3"
                >
                  <p className="text-[9px] font-medium text-[var(--lp-text-muted)] sm:text-[10px]">
                    {kpi.label}
                  </p>
                  <p className={`mt-0.5 text-sm font-bold sm:text-base ${kpi.color}`}>
                    {kpi.value}
                  </p>
                  <p className="text-[8px] text-[var(--lp-text-muted)] sm:text-[9px]">{kpi.change}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              {/* Chart */}
              <div className="col-span-2 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-3 shadow-sm">
                <p className="text-[10px] font-semibold text-[var(--lp-text)]">Ocorrências por Categoria</p>
                <div className="mt-3 flex h-20 items-end justify-between gap-1 sm:h-24">
                  {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-prevpro-blue/70 transition-all"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Critical alerts */}
              <div className="rounded-xl border border-red-200/50 bg-[var(--lp-surface)] p-3 shadow-sm dark:border-red-900/40">
                <p className="text-[10px] font-semibold text-red-500">🔴 Alertas Críticos</p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Iogurte vence em 2d",
                    "Temp. açougue",
                    "Ruptura bebidas",
                  ].map((alert) => (
                    <li
                      key={alert}
                      className="truncate rounded-lg bg-red-50 px-2 py-1 text-[9px] font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300"
                    >
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Financial row */}
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[
                { label: "Valor em Risco", value: "R$ 24.850" },
                { label: "Recuperado", value: "R$ 9.840" },
                { label: "IA Ativa", value: "94,2%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[var(--lp-border)] bg-[var(--lp-surface)] px-2 py-1.5 text-center shadow-sm"
                >
                  <p className="text-[8px] text-[var(--lp-text-muted)]">{item.label}</p>
                  <p className="text-[10px] font-bold text-[var(--lp-text)] sm:text-xs">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
