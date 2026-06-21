"use client";

import { useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { AccumulatedImpactCard } from "@/components/relatorios/accumulated-impact-card";
import { CategoryOccurrencesChart } from "@/components/relatorios/category-occurrences-chart";
import { LossEvolutionChart } from "@/components/relatorios/loss-evolution-chart";
import { ReportSectorLossesChart } from "@/components/relatorios/report-sector-losses-chart";
import { SectorRankingTable } from "@/components/relatorios/sector-ranking-table";
import { StrategicInsights } from "@/components/relatorios/strategic-insights";
import { TopProductsChart } from "@/components/relatorios/top-products-chart";
import {
  lossEvolution,
  occurrencesByCategory,
  relatorioCategories,
  relatorioPeriods,
  relatorioSectors,
  relatorioStatuses,
  relatorioStores,
  relatoriosKpiData,
  sectorLossesReport,
  sectorRanking,
  strategicInsights,
  topProductsOccurrences,
} from "@/lib/relatorios-data";

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

export function RelatoriosView() {
  const [period, setPeriod] = useState(relatorioPeriods[1]);
  const [store, setStore] = useState(relatorioStores[0]);
  const [sector, setSector] = useState(relatorioSectors[0]);
  const [category, setCategory] = useState(relatorioCategories[0]);
  const [status, setStatus] = useState(relatorioStatuses[0]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Central de Relatórios"
        subtitle="Análises gerenciais e indicadores estratégicos"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {relatoriosKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <AccumulatedImpactCard />

      <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08)] sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <SelectField label="Período" value={period} options={relatorioPeriods} onChange={setPeriod} />
          <SelectField label="Loja" value={store} options={relatorioStores} onChange={setStore} />
          <SelectField label="Setor" value={sector} options={relatorioSectors} onChange={setSector} />
          <SelectField label="Categoria" value={category} options={relatorioCategories} onChange={setCategory} />
          <SelectField label="Status" value={status} options={relatorioStatuses} onChange={setStatus} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <span className="mr-2 text-xs font-medium text-slate-500">Exportar:</span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
          >
            <span aria-hidden="true">📄</span>
            PDF
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
          >
            <span aria-hidden="true">📊</span>
            Excel
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800 transition-colors hover:border-amber-300 hover:bg-amber-100"
          >
            <span aria-hidden="true">📈</span>
            Power BI
          </button>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
        <ReportSectorLossesChart data={sectorLossesReport} />
        <LossEvolutionChart data={lossEvolution} />
        <TopProductsChart data={topProductsOccurrences} />
        <CategoryOccurrencesChart data={occurrencesByCategory} />
      </div>

      <SectorRankingTable data={sectorRanking} />

      <StrategicInsights insights={strategicInsights} />
    </div>
  );
}
