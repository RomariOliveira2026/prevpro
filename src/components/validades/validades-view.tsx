"use client";

import { useMemo, useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { ValidadesTable } from "@/components/validades/validades-table";
import {
  getValidityStatus,
  validadeCategories,
  validadeProducts,
  validadeSectors,
  validadeStatuses,
  validadeStores,
  validadesKpiData,
} from "@/lib/validades-data";

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

export function ValidadesView() {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState(validadeStores[0]);
  const [sector, setSector] = useState(validadeSectors[0]);
  const [category, setCategory] = useState(validadeCategories[0]);
  const [status, setStatus] = useState(validadeStatuses[0]);

  const filteredProducts = useMemo(() => {
    return validadeProducts.filter((product) => {
      const productStatus = getValidityStatus(product.daysRemaining);
      const matchesSearch =
        search.trim() === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.code.toLowerCase().includes(search.toLowerCase()) ||
        product.batch.toLowerCase().includes(search.toLowerCase());

      const matchesStore =
        store === "Todas as lojas" || product.store === store;
      const matchesSector =
        sector === "Todos os setores" || product.sector === sector;
      const matchesCategory =
        category === "Todas as categorias" || product.category === category;
      const matchesStatus =
        status === "Todos os status" || productStatus === status;

      return (
        matchesSearch &&
        matchesStore &&
        matchesSector &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [search, store, sector, category, status]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Gestão de Validades"
        subtitle="Monitoramento inteligente de produtos e lotes"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {validadesKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08)] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <SelectField label="Loja" value={store} options={validadeStores} onChange={setStore} />
            <SelectField label="Setor" value={sector} options={validadeSectors} onChange={setSector} />
            <SelectField label="Categoria" value={category} options={validadeCategories} onChange={setCategory} />
            <SelectField label="Status" value={status} options={validadeStatuses} onChange={setStatus} />
          </div>
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
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-prevpro-gray/50 py-2.5 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-medium text-violet-700 transition-colors hover:border-violet-300 hover:bg-violet-100"
            >
              <span aria-hidden="true">📷</span>
              Ler Etiqueta
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-prevpro-blue px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] hover:shadow-lg"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Novo Produto
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
            >
              <svg className="h-4 w-4 text-prevpro-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Exportar Excel
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
            >
              <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      <ValidadesTable products={filteredProducts} />
    </div>
  );
}
