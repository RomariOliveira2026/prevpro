"use client";

import { useMemo, useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { NewOccurrenceModal } from "@/components/ocorrencias/new-occurrence-modal";
import { OccurrenceInsights } from "@/components/ocorrencias/occurrence-insights";
import { OcorrenciasTable } from "@/components/ocorrencias/ocorrencias-table";
import { RecentOccurrencesPanel } from "@/components/ocorrencias/recent-occurrences-panel";
import {
  occurrenceInsights,
  ocorrenciaPeriods,
  ocorrenciaPriorities,
  ocorrenciaSectors,
  ocorrenciaStatuses,
  ocorrenciaStores,
  ocorrenciaTypes,
  ocorrencias,
  ocorrenciasKpiData,
  getRecentOccurrences,
} from "@/lib/ocorrencias-data";

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
    <div className="min-w-0 flex-1 sm:min-w-[120px]">
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

export function OcorrenciasView() {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState(ocorrenciaStores[0]);
  const [sector, setSector] = useState(ocorrenciaSectors[0]);
  const [type, setType] = useState(ocorrenciaTypes[0]);
  const [priority, setPriority] = useState(ocorrenciaPriorities[0]);
  const [status, setStatus] = useState(ocorrenciaStatuses[0]);
  const [period, setPeriod] = useState(ocorrenciaPeriods[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredOccurrences = useMemo(() => {
    return ocorrencias.filter((item) => {
      const query = search.toLowerCase();
      const matchesSearch =
        search.trim() === "" ||
        item.product.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.responsible.toLowerCase().includes(query) ||
        item.store.toLowerCase().includes(query) ||
        item.sector.toLowerCase().includes(query);

      const matchesStore = store === "Todas as lojas" || item.store === store;
      const matchesSector = sector === "Todos os setores" || item.sector === sector;
      const matchesType = type === "Todos os tipos" || item.type === type;
      const matchesPriority =
        priority === "Todas as prioridades" || item.priority === priority;
      const matchesStatus =
        status === "Todos os status" || item.status === status;

      const matchesPeriod =
        period === "Todos os períodos" ||
        (period === "Hoje" && item.date.startsWith("13/06/2026")) ||
        (period === "Últimos 7 dias" &&
          ["13/06/2026", "12/06/2026", "11/06/2026", "10/06/2026"].some((d) =>
            item.date.startsWith(d),
          )) ||
        (period === "Últimos 30 dias") ||
        (period === "Este mês" && item.date.includes("/06/2026"));

      return (
        matchesSearch &&
        matchesStore &&
        matchesSector &&
        matchesType &&
        matchesPriority &&
        matchesStatus &&
        matchesPeriod
      );
    });
  }, [search, store, sector, type, priority, status, period]);

  const recentOccurrences = useMemo(() => getRecentOccurrences(), []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Gestão de Ocorrências"
        subtitle="Registro e acompanhamento de ocorrências operacionais"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {ocorrenciasKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08)] sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <SelectField label="Loja" value={store} options={ocorrenciaStores} onChange={setStore} />
          <SelectField label="Setor" value={sector} options={ocorrenciaSectors} onChange={setSector} />
          <SelectField label="Tipo de Ocorrência" value={type} options={ocorrenciaTypes} onChange={setType} />
          <SelectField label="Prioridade" value={priority} options={ocorrenciaPriorities} onChange={setPriority} />
          <SelectField label="Status" value={status} options={ocorrenciaStatuses} onChange={setStatus} />
          <SelectField label="Período" value={period} options={ocorrenciaPeriods} onChange={setPeriod} />
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
              placeholder="Pesquisar ocorrência..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-prevpro-gray/50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-prevpro-blue px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] hover:shadow-lg"
            >
              <span aria-hidden="true">➕</span>
              Nova Ocorrência
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
              className="inline-flex items-center gap-2 rounded-xl border border-prevpro-blue/20 bg-prevpro-blue/5 px-4 py-2.5 text-sm font-medium text-prevpro-blue transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-blue/10"
            >
              <span aria-hidden="true">📲</span>
              Compartilhar
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <OcorrenciasTable occurrences={filteredOccurrences} />
        </div>
        <div className="min-w-0 xl:col-span-1">
          <RecentOccurrencesPanel occurrences={recentOccurrences} />
        </div>
      </div>

      <OccurrenceInsights insights={occurrenceInsights} />

      <NewOccurrenceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
