import type { ValidityStatus } from "@/lib/validades-data";

const statusStyles: Record<ValidityStatus, string> = {
  Normal: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Atenção: "bg-amber-50 text-amber-700 ring-amber-200",
  Crítico: "bg-red-50 text-red-700 ring-red-200",
  Vencido: "bg-slate-800 text-white ring-slate-600",
};

const statusDots: Record<ValidityStatus, string> = {
  Normal: "bg-prevpro-green",
  Atenção: "bg-amber-500",
  Crítico: "bg-red-500",
  Vencido: "bg-white",
};

interface ValidityStatusBadgeProps {
  status: ValidityStatus;
}

export function ValidityStatusBadge({ status }: ValidityStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${statusDots[status]}`} />
      {status}
    </span>
  );
}
