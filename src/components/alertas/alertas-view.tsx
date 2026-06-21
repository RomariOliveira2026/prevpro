"use client";

import { useMemo, useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { AlertasTable } from "@/components/alertas/alertas-table";
import { UrgentAlertsPanel } from "@/components/alertas/urgent-alerts-panel";
import {
  alertaCategories,
  alertaPriorities,
  alertaSectors,
  alertaStatuses,
  alertaStores,
  alertas,
  alertasEvolucao,
  alertasKpiData,
  alertasPorCategoria,
  getCriticalAlerts,
} from "@/lib/alertas-data";
import { AlertasCategoryChart } from "@/components/alertas/alertas-category-chart";
import { AlertasEvolutionChart } from "@/components/alertas/alertas-evolution-chart";

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
    <div className="min-w-0 flex-1 sm:min-w-[130px]">
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

export function AlertasView() {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState(alertaStores[0]);
  const [sector, setSector] = useState(alertaSectors[0]);
  const [category, setCategory] = useState(alertaCategories[0]);
  const [priority, setPriority] = useState(alertaPriorities[0]);
  const [status, setStatus] = useState(alertaStatuses[0]);

  const filteredAlerts = useMemo(() => {
    return alertas.filter((alert) => {
      const query = search.toLowerCase();
      const matchesSearch =
        search.trim() === "" ||
        alert.product.toLowerCase().includes(query) ||
        alert.type.toLowerCase().includes(query) ||
        alert.responsible.toLowerCase().includes(query) ||
        alert.store.toLowerCase().includes(query);

      const matchesStore =
        store === "Todas as lojas" || alert.store === store;
      const matchesSector =
        sector === "Todos os setores" || alert.sector === sector;
      const matchesCategory =
        category === "Todas as categorias" || alert.category === category;
      const matchesPriority =
        priority === "Todas as prioridades" || alert.priority === priority;
      const matchesStatus =
        status === "Todos os status" || alert.status === status;

      return (
        matchesSearch &&
        matchesStore &&
        matchesSector &&
        matchesCategory &&
        matchesPriority &&
        matchesStatus
      );
    });
  }, [search, store, sector, category, priority, status]);

  const urgentAlerts = useMemo(() => getCriticalAlerts(), []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Central de Alertas"
        subtitle="Monitoramento em tempo real de riscos operacionais"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {alertasKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AlertasCategoryChart data={alertasPorCategoria} />
        <AlertasEvolutionChart data={alertasEvolucao} />
      </div>

      <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08)] sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <SelectField label="Loja" value={store} options={alertaStores} onChange={setStore} />
          <SelectField label="Setor" value={sector} options={alertaSectors} onChange={setSector} />
          <SelectField label="Categoria" value={category} options={alertaCategories} onChange={setCategory} />
          <SelectField label="Prioridade" value={priority} options={alertaPriorities} onChange={setPriority} />
          <SelectField label="Status" value={status} options={alertaStatuses} onChange={setStatus} />
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
              placeholder="Pesquisar alerta..."
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
              <span aria-hidden="true">➕</span>
              Novo Alerta
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
            >
              <span aria-hidden="true">📄</span>
              Exportar PDF
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
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
            >
              <span aria-hidden="true">📲</span>
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <AlertasTable alerts={filteredAlerts} />
        </div>
        <div className="min-w-0 xl:col-span-1">
          <UrgentAlertsPanel alerts={urgentAlerts} />
        </div>
      </div>
    </div>
  );
}
