import type { Occurrence, OccurrenceStatus } from "@/lib/dashboard-data";

const statusStyles: Record<OccurrenceStatus, string> = {
  Aberto: "bg-blue-50 text-blue-700 ring-blue-200",
  "Em análise": "bg-amber-50 text-amber-700 ring-amber-200",
  Resolvido: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Crítico: "bg-red-50 text-red-700 ring-red-200",
};

interface RecentOccurrencesTableProps {
  occurrences: Occurrence[];
}

export function RecentOccurrencesTable({ occurrences }: RecentOccurrencesTableProps) {
  return (
    <div className="animate-fade-in-up animate-delay-600 rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-slate-800">
            Últimas Ocorrências
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            Registros mais recentes do sistema
          </p>
        </div>
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-prevpro-blue transition-all hover:border-prevpro-blue/30 hover:bg-prevpro-gray sm:mt-0"
        >
          Ver todas
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-prevpro-gray/50">
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Data</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Setor</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Tipo</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {occurrences.map((occurrence) => (
              <tr
                key={occurrence.id}
                className="transition-colors hover:bg-prevpro-gray/40"
              >
                <td className="whitespace-nowrap px-5 py-4 text-slate-600 sm:px-6">
                  {occurrence.date}
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-800 sm:px-6">
                  {occurrence.sector}
                </td>
                <td className="px-5 py-4 text-slate-600 sm:px-6">{occurrence.type}</td>
                <td className="px-5 py-4 sm:px-6">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[occurrence.status]}`}
                  >
                    {occurrence.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
