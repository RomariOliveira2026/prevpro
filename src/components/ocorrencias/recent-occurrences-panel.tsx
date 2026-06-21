import type { Ocorrencia } from "@/lib/ocorrencias-data";
import { formatCurrency } from "@/lib/ocorrencias-data";
import { OccurrencePriorityBadge } from "./occurrence-priority-badge";
import { OccurrenceStatusBadge } from "./occurrence-status-badge";

interface RecentOccurrencesPanelProps {
  occurrences: Ocorrencia[];
}

export function RecentOccurrencesPanel({ occurrences }: RecentOccurrencesPanelProps) {
  return (
    <div className="animate-fade-in-up animate-delay-300 sticky top-24 rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-blue/[0.04] to-white px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-prevpro-blue/10 text-prevpro-blue">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Ocorrências Mais Recentes
            </h2>
            <p className="text-xs text-slate-500">Últimos 5 registros</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100 p-3">
        {occurrences.map((item, index) => (
          <div
            key={item.id}
            className="group rounded-xl p-3 transition-colors hover:bg-prevpro-gray/50"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-prevpro-blue/10 text-[10px] font-bold text-prevpro-blue">
                {index + 1}
              </span>
              <OccurrencePriorityBadge priority={item.priority} />
            </div>
            <p className="mt-2 text-sm font-medium leading-snug text-slate-800">
              {item.product}
            </p>
            <p className="mt-1 text-xs text-slate-500">{item.type}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
              <span>{item.store}</span>
              <span>·</span>
              <span>{item.sector}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <OccurrenceStatusBadge status={item.status} />
              <span className="text-xs font-semibold text-slate-600">
                {formatCurrency(item.value)}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-slate-500">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 px-5 py-3">
        <button
          type="button"
          className="w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-prevpro-blue transition-colors hover:bg-prevpro-gray"
        >
          Ver todas as ocorrências
        </button>
      </div>
    </div>
  );
}
