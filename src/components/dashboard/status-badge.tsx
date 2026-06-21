export type UrgencyLevel = "Crítico" | "Atenção" | "Normal";

const urgencyStyles: Record<UrgencyLevel, string> = {
  Crítico: "bg-red-50 text-red-700 ring-red-200",
  Atenção: "bg-amber-50 text-amber-700 ring-amber-200",
  Normal: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const urgencyDots: Record<UrgencyLevel, string> = {
  Crítico: "bg-red-500",
  Atenção: "bg-amber-500",
  Normal: "bg-prevpro-green",
};

interface StatusBadgeProps {
  level: UrgencyLevel;
}

export function StatusBadge({ level }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${urgencyStyles[level]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${urgencyDots[level]}`} />
      {level}
    </span>
  );
}

export function getUrgencyLevel(daysRemaining: number): UrgencyLevel {
  if (daysRemaining <= 3) return "Crítico";
  if (daysRemaining <= 7) return "Atenção";
  return "Normal";
}
