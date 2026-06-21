"use client";

import type { Ocorrencia } from "@/lib/ocorrencias-data";
import { formatCurrency } from "@/lib/ocorrencias-data";
import { OccurrencePriorityBadge } from "./occurrence-priority-badge";
import { OccurrenceStatusBadge } from "./occurrence-status-badge";

interface OcorrenciasTableProps {
  occurrences: Ocorrencia[];
}

function ActionButton({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "success" | "danger";
}) {
  const styles = {
    default: "text-slate-400 hover:bg-prevpro-gray hover:text-prevpro-blue",
    success: "text-slate-400 hover:bg-emerald-50 hover:text-prevpro-green",
    danger: "text-slate-400 hover:bg-red-50 hover:text-red-600",
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export function OcorrenciasTable({ occurrences }: OcorrenciasTableProps) {
  if (!occurrences.length) {
    return (
      <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-16 text-center shadow-[0_1px_3px_rgba(15,76,129,0.06)]">
        <p className="text-sm font-medium text-slate-600">Nenhuma ocorrência encontrada</p>
        <p className="mt-1 text-xs text-slate-400">
          Ajuste os filtros ou tente outra busca
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up animate-delay-200 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1280px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-prevpro-gray/50">
              <th className="px-5 py-3.5 font-semibold text-slate-600">Data</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Loja</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Setor</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Tipo</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Produto</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Responsável</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Prioridade</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Valor</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Status</th>
              <th className="px-5 py-3.5 font-semibold text-slate-600">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {occurrences.map((item) => (
              <tr
                key={item.id}
                className="transition-colors hover:bg-prevpro-gray/40"
              >
                <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                  {item.date}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                  {item.store}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                  {item.sector}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                  {item.type}
                </td>
                <td className="px-5 py-4 font-medium text-slate-800">
                  {item.product}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                  {item.responsible}
                </td>
                <td className="px-5 py-4">
                  <OccurrencePriorityBadge priority={item.priority} />
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-800">
                  {formatCurrency(item.value)}
                </td>
                <td className="px-5 py-4">
                  <OccurrenceStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1">
                    <ActionButton label="Visualizar">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </ActionButton>
                    <ActionButton label="Editar">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </ActionButton>
                    <ActionButton label="Resolver" variant="success">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </ActionButton>
                    <ActionButton label="Excluir" variant="danger">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </ActionButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3.5 text-xs text-slate-500">
        <span>
          Exibindo <strong className="text-slate-700">{occurrences.length}</strong> ocorrência
          {occurrences.length !== 1 ? "s" : ""}
        </span>
        <span>Atualizado em 13/06/2026</span>
      </div>
    </div>
  );
}
