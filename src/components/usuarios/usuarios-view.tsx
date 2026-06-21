"use client";

import { useMemo, useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { ProfileDistributionCard } from "@/components/usuarios/profile-distribution-card";
import { RecentAccessesCard } from "@/components/usuarios/recent-accesses-card";
import { UsuariosTable } from "@/components/usuarios/usuarios-table";
import {
  getRecentAccesses,
  profileDistribution,
  usuarioRoles,
  usuarioStatuses,
  usuarioStores,
  usuarios,
  usuariosKpiData,
} from "@/lib/usuarios-data";

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="min-w-0 flex-1 sm:min-w-[140px]">
      <label className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition-colors focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function UsuariosView() {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState(usuarioStores[0]);
  const [role, setRole] = useState(usuarioRoles[0]);
  const [status, setStatus] = useState(usuarioStatuses[0]);

  const filteredUsers = useMemo(() => {
    return usuarios.filter((user) => {
      const query = search.toLowerCase();
      const matchesSearch =
        search.trim() === "" ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query);

      const matchesStore =
        store === "Todas as lojas" || user.store === store;
      const matchesRole =
        role === "Todos os cargos" || user.role === role;
      const matchesStatus =
        status === "Todos os status" || user.status === status;

      return matchesSearch && matchesStore && matchesRole && matchesStatus;
    });
  }, [search, store, role, status]);

  const recentAccesses = useMemo(() => getRecentAccesses(), []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Gestão de Usuários"
        subtitle="Gerenciamento completo de usuários e permissões"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {usuariosKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08)] sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SelectField label="Loja" value={store} options={usuarioStores} onChange={setStore} />
          <SelectField label="Cargo" value={role} options={usuarioRoles} onChange={setRole} />
          <SelectField label="Status" value={status} options={usuarioStatuses} onChange={setStatus} />
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1 lg:max-w-md">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Pesquisar usuário..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-prevpro-gray/50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-prevpro-blue px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] hover:shadow-lg"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Novo Usuário
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
            >
              <span aria-hidden="true">📊</span>
              Exportar Excel
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
            >
              <span aria-hidden="true">📄</span>
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <UsuariosTable users={filteredUsers} />
        </div>
        <div className="min-w-0 space-y-6 xl:col-span-1">
          <ProfileDistributionCard data={profileDistribution} />
          <RecentAccessesCard users={recentAccesses} />
        </div>
      </div>
    </div>
  );
}
