import type { Alerta } from "@/lib/alertas-data";
import { AlertPriorityBadge } from "./alert-priority-badge";

interface UrgentAlertsPanelProps {
  alerts: Alerta[];
}

export function UrgentAlertsPanel({ alerts }: UrgentAlertsPanelProps) {
  return (
    <div className="animate-fade-in-up animate-delay-300 sticky top-24 rounded-2xl border border-red-200/60 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(220,38,38,0.06)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(220,38,38,0.1),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-red-100 bg-gradient-to-r from-red-50/80 to-white px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Alertas Mais Urgentes
            </h2>
            <p className="text-xs text-slate-500">Top 5 críticos ativos</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100 p-3">
        {alerts.length === 0 ? (
          <p className="px-2 py-6 text-center text-xs text-slate-400">
            Nenhum alerta crítico ativo
          </p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={alert.id}
              className="group rounded-xl p-3 transition-colors hover:bg-prevpro-gray/50"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600">
                  {index + 1}
                </span>
                <AlertPriorityBadge priority={alert.priority} />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-slate-800">
                {alert.product}
              </p>
              <p className="mt-1 text-xs text-slate-500">{alert.type}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                <span>{alert.store}</span>
                <span>·</span>
                <span>{alert.sector}</span>
              </div>
              <p className="mt-1.5 text-[11px] font-medium text-slate-500">
                {alert.date}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-slate-100 px-5 py-3">
        <button
          type="button"
          className="w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-prevpro-blue transition-colors hover:bg-prevpro-gray"
        >
          Ver todos os críticos
        </button>
      </div>
    </div>
  );
}
