import type { UserStatus } from "@/lib/usuarios-data";

const statusStyles: Record<UserStatus, string> = {
  Ativo: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Inativo: "bg-slate-100 text-slate-600 ring-slate-200",
  Bloqueado: "bg-red-50 text-red-700 ring-red-200",
};

const statusDots: Record<UserStatus, string> = {
  Ativo: "bg-prevpro-green",
  Inativo: "bg-slate-400",
  Bloqueado: "bg-red-500",
};

interface UserStatusBadgeProps {
  status: UserStatus;
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${statusDots[status]}`} />
      {status}
    </span>
  );
}
