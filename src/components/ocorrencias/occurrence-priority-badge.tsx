import type { OccurrencePriority } from "@/lib/ocorrencias-data";

const priorityStyles: Record<OccurrencePriority, string> = {
  Crítica: "bg-red-50 text-red-700 ring-red-200",
  Alta: "bg-orange-50 text-orange-700 ring-orange-200",
  Média: "bg-amber-50 text-amber-700 ring-amber-200",
  Baixa: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const priorityDots: Record<OccurrencePriority, string> = {
  Crítica: "bg-red-500",
  Alta: "bg-orange-500",
  Média: "bg-amber-500",
  Baixa: "bg-prevpro-green",
};

interface OccurrencePriorityBadgeProps {
  priority: OccurrencePriority;
}

export function OccurrencePriorityBadge({ priority }: OccurrencePriorityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[priority]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${priorityDots[priority]}`} />
      {priority}
    </span>
  );
}
