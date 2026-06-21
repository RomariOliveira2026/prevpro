import type { Usuario } from "@/lib/usuarios-data";
import { UserStatusBadge } from "./user-status-badge";

interface RecentAccessesCardProps {
  users: Usuario[];
}

export function RecentAccessesCard({ users }: RecentAccessesCardProps) {
  return (
    <div className="animate-fade-in-up animate-delay-400 rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-prevpro-green">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Últimos Acessos
            </h2>
            <p className="text-xs text-slate-500">Atividade recente</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100 p-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-prevpro-gray/50"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-prevpro-blue to-[#1565A8] text-xs font-semibold text-white">
              {user.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-800">
                {user.name}
              </p>
              <p className="text-[11px] text-slate-400">{user.lastAccess}</p>
            </div>
            <UserStatusBadge status={user.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
