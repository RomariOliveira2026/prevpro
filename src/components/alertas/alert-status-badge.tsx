import type { AlertStatus } from "@/lib/alertas-data";

const statusStyles: Record<AlertStatus, string> = {
  Aberto: "bg-red-50 text-red-700 ring-red-200",
  "Em Análise": "bg-blue-50 text-blue-700 ring-blue-200",
  "Em Tratativa": "bg-amber-50 text-amber-700 ring-amber-200",
  Resolvido: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Arquivado: "bg-slate-100 text-slate-600 ring-slate-200",
};

interface AlertStatusBadgeProps {
  status: AlertStatus;
}

export function AlertStatusBadge({ status }: AlertStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
