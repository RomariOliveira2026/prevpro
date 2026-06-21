import type { OccurrenceStatus } from "@/lib/ocorrencias-data";

const statusStyles: Record<OccurrenceStatus, string> = {
  Aberta: "bg-red-50 text-red-700 ring-red-200",
  "Em Análise": "bg-blue-50 text-blue-700 ring-blue-200",
  "Em Tratativa": "bg-amber-50 text-amber-700 ring-amber-200",
  Resolvida: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Arquivada: "bg-slate-100 text-slate-600 ring-slate-200",
};

interface OccurrenceStatusBadgeProps {
  status: OccurrenceStatus;
}

export function OccurrenceStatusBadge({ status }: OccurrenceStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
