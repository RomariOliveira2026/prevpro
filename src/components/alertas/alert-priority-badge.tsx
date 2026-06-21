import type { AlertPriority } from "@/lib/alertas-data";

const priorityStyles: Record<AlertPriority, string> = {
  Crítica: "bg-red-50 text-red-700 ring-red-200",
  Média: "bg-amber-50 text-amber-700 ring-amber-200",
  Baixa: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const priorityDots: Record<AlertPriority, string> = {
  Crítica: "bg-red-500",
  Média: "bg-amber-500",
  Baixa: "bg-prevpro-green",
};

const priorityEmoji: Record<AlertPriority, string> = {
  Crítica: "🔴",
  Média: "🟡",
  Baixa: "🟢",
};

interface AlertPriorityBadgeProps {
  priority: AlertPriority;
  showEmoji?: boolean;
}

export function AlertPriorityBadge({
  priority,
  showEmoji = false,
}: AlertPriorityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[priority]}`}
    >
      {showEmoji ? (
        <span aria-hidden="true">{priorityEmoji[priority]}</span>
      ) : (
        <span className={`h-1.5 w-1.5 rounded-full ${priorityDots[priority]}`} />
      )}
      {priority}
    </span>
  );
}
