import type { SectorRanking } from "@/lib/relatorios-data";
import { formatCurrency, getRiskLevel } from "@/lib/relatorios-data";

interface SectorRankingTableProps {
  data: SectorRanking[];
}

export function SectorRankingTable({ data }: SectorRankingTableProps) {
  return (
    <div className="animate-fade-in-up animate-delay-400 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
        <h2 className="text-base font-semibold tracking-tight text-slate-800">
          Ranking dos Setores
        </h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Visão gerencial consolidada por setor
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-prevpro-gray/50">
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Setor</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Ocorrências</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Valor Perdido</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Valor Recuperado</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">Índice de Risco</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, index) => {
              const risk = getRiskLevel(item.riskIndex);

              return (
                <tr
                  key={item.sector}
                  className="transition-colors hover:bg-prevpro-gray/40"
                >
                  <td className="px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-prevpro-blue/10 text-xs font-bold text-prevpro-blue">
                        {index + 1}
                      </span>
                      <span className="font-medium text-slate-800">{item.sector}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-800 sm:px-6">
                    {item.occurrences}
                  </td>
                  <td className="px-5 py-4 font-semibold text-red-600 sm:px-6">
                    {formatCurrency(item.lostValue)}
                  </td>
                  <td className="px-5 py-4 font-semibold text-prevpro-green sm:px-6">
                    {formatCurrency(item.recoveredValue)}
                  </td>
                  <td className="px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            item.riskIndex >= 80
                              ? "bg-red-500"
                              : item.riskIndex >= 60
                                ? "bg-amber-500"
                                : item.riskIndex >= 40
                                  ? "bg-blue-500"
                                  : "bg-prevpro-green"
                          }`}
                          style={{ width: `${item.riskIndex}%` }}
                        />
                      </div>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${risk.className}`}
                      >
                        {item.riskIndex} · {risk.label}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
