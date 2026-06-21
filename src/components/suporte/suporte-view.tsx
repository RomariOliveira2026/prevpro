"use client";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import {
  chamadosRecentes,
  suporteActions,
  suporteKpiData,
  type Chamado,
} from "@/lib/suporte-data";

const priorityStyles: Record<Chamado["priority"], string> = {
  Alta: "bg-red-50 text-red-700",
  Média: "bg-amber-50 text-amber-700",
  Baixa: "bg-slate-100 text-slate-600",
};

const statusStyles: Record<Chamado["status"], string> = {
  Aberto: "bg-blue-50 text-blue-700",
  "Em andamento": "bg-violet-50 text-violet-700",
  Resolvido: "bg-emerald-50 text-emerald-700",
};

const actionDelays = [
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
];

export function SuporteView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Central de Suporte"
        subtitle="Ajuda, atendimento e acompanhamento de chamados"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {suporteKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {suporteActions.map((action, index) => (
          <button
            key={action.id}
            type="button"
            className={`animate-fade-in-up ${actionDelays[index]} group flex flex-col items-start rounded-2xl border border-slate-200/70 bg-white p-5 text-left shadow-[0_1px_3px_rgba(15,76,129,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-prevpro-blue/20 hover:shadow-[0_4px_16px_rgba(15,76,129,0.1)]`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${action.accent} transition-transform duration-300 group-hover:scale-110`}
            >
              {action.icon}
            </span>
            <h3 className="mt-4 text-sm font-semibold text-slate-800">{action.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{action.description}</p>
          </button>
        ))}
      </div>

      <div className="animate-fade-in-up animate-delay-300 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)]">
        <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
          <h2 className="text-base font-semibold text-slate-800">Chamados Recentes</h2>
          <p className="mt-0.5 text-sm text-slate-500">Histórico das últimas solicitações</p>
        </div>
        <table className="w-full table-fixed text-left text-sm">
          <colgroup>
            <col style={{ width: "14%" }} />
            <col style={{ width: "46%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "24%" }} />
          </colgroup>
          <thead>
            <tr className="border-b border-slate-100 bg-prevpro-gray/50">
              <th className="px-4 py-3 font-semibold text-slate-600">Data</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Assunto</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Prioridade</th>
              <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {chamadosRecentes.map((chamado) => (
              <tr key={chamado.id} className="transition-colors hover:bg-prevpro-gray/30">
                <td className="px-4 py-3.5 text-xs text-slate-500">{chamado.date}</td>
                <td className="px-4 py-3.5">
                  <span className="block truncate font-medium text-slate-700" title={chamado.subject}>
                    {chamado.subject}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${priorityStyles[chamado.priority]}`}
                  >
                    {chamado.priority}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[chamado.status]}`}
                  >
                    {chamado.status}
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
