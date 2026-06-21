"use client";

import type { Usuario } from "@/lib/usuarios-data";
import { UserStatusBadge } from "./user-status-badge";

interface UsuariosTableProps {
  users: Usuario[];
}

const roleStyles: Record<string, string> = {
  Administrador: "bg-red-50 text-red-700",
  Diretor: "bg-blue-50 text-blue-700",
  Gerente: "bg-prevpro-blue/10 text-prevpro-blue",
  Supervisor: "bg-emerald-50 text-emerald-700",
  Operador: "bg-slate-100 text-slate-600",
};

function ActionButton({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "danger";
}) {
  const styles = {
    default: "text-slate-400 hover:bg-prevpro-gray hover:text-prevpro-blue",
    warning: "text-slate-400 hover:bg-amber-50 hover:text-amber-600",
    danger: "text-slate-400 hover:bg-red-50 hover:text-red-600",
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export function UsuariosTable({ users }: UsuariosTableProps) {
  if (!users.length) {
    return (
      <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-16 text-center shadow-[0_1px_3px_rgba(15,76,129,0.06)]">
        <p className="text-sm font-medium text-slate-600">Nenhum usuário encontrado</p>
        <p className="mt-1 text-xs text-slate-400">
          Ajuste os filtros ou tente outra busca
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up animate-delay-200 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <table className="w-full table-fixed text-left text-sm">
        <colgroup>
          <col style={{ width: "18%" }} />
          <col style={{ width: "22%" }} />
          <col style={{ width: "11%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "11%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "18%" }} />
        </colgroup>
        <thead>
          <tr className="border-b border-slate-100 bg-prevpro-gray/50">
            <th className="px-3 py-3 font-semibold text-slate-600">Nome</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Email</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Cargo</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Loja</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Acesso</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Status</th>
            <th className="px-3 py-3 font-semibold text-slate-600">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {users.map((user) => (
            <tr
              key={user.id}
              className="transition-colors hover:bg-prevpro-gray/40"
            >
              <td className="px-3 py-3.5">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-prevpro-blue to-[#1565A8] text-[10px] font-semibold text-white">
                    {user.initials}
                  </div>
                  <span className="truncate text-sm font-medium text-slate-800" title={user.name}>
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="px-3 py-3.5">
                <span className="block truncate text-xs text-slate-600" title={user.email}>
                  {user.email}
                </span>
              </td>
              <td className="px-3 py-3.5">
                <span
                  className={`inline-flex max-w-full truncate rounded-full px-2 py-0.5 text-[10px] font-semibold ${roleStyles[user.role]}`}
                  title={user.role}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-3 py-3.5">
                <span className="block truncate text-xs text-slate-600" title={user.store}>
                  {user.store}
                </span>
              </td>
              <td className="px-3 py-3.5 text-[10px] leading-snug text-slate-500">
                {user.lastAccess}
              </td>
              <td className="overflow-hidden px-3 py-3.5">
                <UserStatusBadge status={user.status} />
              </td>
              <td className="px-3 py-3.5">
                <div className="flex items-center gap-0.5">
                  <ActionButton label="Visualizar">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </ActionButton>
                  <ActionButton label="Editar">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </ActionButton>
                  <ActionButton label="Bloquear" variant="warning">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </ActionButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3.5 text-xs text-slate-500">
        <span>
          Exibindo <strong className="text-slate-700">{users.length}</strong> usuário
          {users.length !== 1 ? "s" : ""}
        </span>
        <span>Atualizado em 13/06/2026</span>
      </div>
    </div>
  );
}
