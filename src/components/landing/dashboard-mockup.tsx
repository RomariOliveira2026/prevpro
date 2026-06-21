import { PrevProLogo } from "@/components/dashboard/prevpro-logo";

export function DashboardMockup() {
  const sidebarItems = [
    { label: "Dashboard", active: true },
    { label: "Validades", active: false },
    { label: "Alertas", active: false },
    { label: "Relatórios", active: false },
  ];

  const kpis = [
    { label: "Economia Gerada", value: "R$ 18.420", sub: "+22% vs mês ant.", accent: "text-prevpro-green", bg: "from-prevpro-green/10" },
    { label: "Valor em Risco", value: "R$ 24.850", sub: "12 produtos críticos", accent: "text-amber-500", bg: "from-amber-500/10" },
    { label: "Alertas Ativos", value: "23", sub: "8 críticos", accent: "text-red-500", bg: "from-red-500/10" },
    { label: "Ocorrências", value: "1.284", sub: "Setor perecíveis", accent: "text-prevpro-blue", bg: "from-prevpro-blue/10" },
  ];

  const expiring = [
    { product: "Iogurte Natural 170g", days: "2 dias", value: "R$ 1.240" },
    { product: "Queijo Minas Fat.", days: "3 dias", value: "R$ 890" },
    { product: "Peito de Frango KG", days: "1 dia", value: "R$ 2.180" },
  ];

  const barHeights = [42, 58, 48, 72, 55, 68, 85, 62, 78, 90, 66, 74];

  return (
    <div className="relative mx-auto mt-10 w-full max-w-4xl lg:mt-0">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-prevpro-blue/25 via-transparent to-prevpro-green/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-surface)] shadow-2xl shadow-prevpro-blue/15 transition-shadow duration-300 hover:shadow-prevpro-blue/25">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--lp-border)] bg-[var(--lp-surface-muted)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 flex-1 rounded-md bg-[var(--lp-bg)] px-3 py-1 text-[10px] text-[var(--lp-text-muted)]">
            app.prevprobr.com.br/dashboard
          </span>
          <span className="hidden rounded-full bg-prevpro-green/15 px-2 py-0.5 text-[9px] font-semibold text-prevpro-green sm:inline">
            IA Ativa
          </span>
        </div>

        <div className="flex min-h-[360px] sm:min-h-[420px]">
          {/* Sidebar */}
          <div className="hidden w-36 shrink-0 bg-gradient-to-b from-prevpro-blue to-[#0a3d6b] p-3 sm:block">
            <PrevProLogo size="compact" className="max-w-full" />
            <nav className="mt-5 space-y-1">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg px-2 py-1.5 text-[9px] font-medium ${
                    item.active ? "bg-white/20 text-white" : "text-white/60"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main */}
          <div className="min-w-0 flex-1 bg-[var(--lp-bg)] p-3 sm:p-4">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold text-[var(--lp-text)] sm:text-xs">Dashboard Executivo</p>
                <p className="text-[9px] text-[var(--lp-text-muted)]">Rede SuperMax · 12 lojas</p>
              </div>
              <div className="flex gap-1.5">
                <div className="hidden h-6 w-20 rounded-md bg-[var(--lp-surface)] sm:block" />
                <div className="h-6 w-6 rounded-md bg-prevpro-blue/15" />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className={`rounded-xl border border-[var(--lp-border)] bg-gradient-to-br ${kpi.bg} to-[var(--lp-surface)] p-2.5 shadow-sm sm:p-3`}
                >
                  <p className="text-[8px] font-medium uppercase tracking-wide text-[var(--lp-text-muted)] sm:text-[9px]">
                    {kpi.label}
                  </p>
                  <p className={`mt-0.5 text-sm font-bold sm:text-base ${kpi.accent}`}>{kpi.value}</p>
                  <p className="text-[8px] text-[var(--lp-text-muted)] sm:text-[9px]">{kpi.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 lg:grid-cols-5 lg:gap-3">
              {/* Chart area */}
              <div className="col-span-1 rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-3 shadow-sm lg:col-span-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold text-[var(--lp-text)]">Perdas vs Economia — 12 meses</p>
                  <span className="text-[8px] font-medium text-prevpro-green">↓ 32%</span>
                </div>
                <div className="relative mt-3 h-24 sm:h-28">
                  {/* Line overlay */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <polyline
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="0,32 8,28 16,30 24,22 32,24 40,18 48,20 56,14 64,16 72,10 80,12 88,8 100,6"
                    />
                  </svg>
                  <div className="flex h-full items-end justify-between gap-0.5">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-prevpro-blue/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Critical alerts */}
              <div className="col-span-1 rounded-xl border border-red-200/50 bg-[var(--lp-surface)] p-3 shadow-sm dark:border-red-900/40 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold text-red-500">Alertas Críticos</p>
                  <span className="rounded-full bg-red-500/15 px-1.5 py-0.5 text-[8px] font-bold text-red-500">8</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {["Temp. açougue acima do limite", "Ruptura bebidas — corredor 4", "Validade lote #4821"].map((alert) => (
                    <li
                      key={alert}
                      className="flex items-center gap-1.5 rounded-lg bg-red-50 px-2 py-1 text-[9px] font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      <span className="truncate">{alert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expiring products + financial summary */}
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-3 shadow-sm">
                <p className="text-[10px] font-semibold text-[var(--lp-text)]">Produtos Vencendo</p>
                <ul className="mt-2 space-y-1.5">
                  {expiring.map((item) => (
                    <li key={item.product} className="flex items-center justify-between gap-2 text-[9px]">
                      <span className="truncate font-medium text-[var(--lp-text)]">{item.product}</span>
                      <span className="shrink-0 rounded bg-amber-500/15 px-1.5 py-0.5 font-semibold text-amber-600 dark:text-amber-400">
                        {item.days}
                      </span>
                      <span className="shrink-0 font-bold text-[var(--lp-text-muted)]">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-prevpro-green/30 bg-gradient-to-br from-prevpro-green/10 to-[var(--lp-surface)] p-3 shadow-sm">
                <p className="text-[10px] font-semibold text-[var(--lp-text)]">Impacto Financeiro</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[
                    { label: "Recuperado", value: "R$ 9.840" },
                    { label: "Evitado", value: "R$ 14.200" },
                    { label: "ROI Mensal", value: "32%" },
                    { label: "IA Confiança", value: "94,2%" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-[var(--lp-bg)]/60 px-2 py-1.5 text-center">
                      <p className="text-[8px] text-[var(--lp-text-muted)]">{item.label}</p>
                      <p className="text-[10px] font-bold text-prevpro-green sm:text-xs">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
