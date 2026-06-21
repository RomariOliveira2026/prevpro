"use client";

import { useEffect } from "react";
import {
  ocorrenciaFormPriorities,
  ocorrenciaFormResponsibles,
  ocorrenciaFormSectors,
  ocorrenciaFormStatuses,
  ocorrenciaFormStores,
  ocorrenciaFormTypes,
} from "@/lib/ocorrencias-data";

interface NewOccurrenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FormField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition-colors focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10";

export function NewOccurrenceModal({ isOpen, onClose }: NewOccurrenceModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200/80 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Nova Ocorrência
            </h2>
            <p className="text-sm text-slate-500">
              Registre uma nova ocorrência operacional
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-prevpro-gray hover:text-slate-600"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form
          className="space-y-5 p-5 sm:p-6"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Loja">
              <select className={inputClass} defaultValue={ocorrenciaFormStores[0]}>
                {ocorrenciaFormStores.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Setor">
              <select className={inputClass} defaultValue={ocorrenciaFormSectors[0]}>
                {ocorrenciaFormSectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Responsável">
              <select className={inputClass} defaultValue={ocorrenciaFormResponsibles[0]}>
                {ocorrenciaFormResponsibles.map((person) => (
                  <option key={person} value={person}>
                    {person}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Produto Relacionado">
              <input
                type="text"
                className={inputClass}
                placeholder="Ex: Iogurte Natural 170g"
              />
            </FormField>

            <FormField label="Tipo de Ocorrência">
              <select className={inputClass} defaultValue={ocorrenciaFormTypes[0]}>
                {ocorrenciaFormTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Prioridade">
              <select className={inputClass} defaultValue={ocorrenciaFormPriorities[0]}>
                {ocorrenciaFormPriorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Valor Estimado da Perda">
              <input
                type="text"
                className={inputClass}
                placeholder="R$ 0,00"
              />
            </FormField>

            <FormField label="Status Inicial">
              <select className={inputClass} defaultValue={ocorrenciaFormStatuses[0]}>
                {ocorrenciaFormStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="Descrição Completa">
            <textarea
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Descreva detalhadamente a ocorrência, causas e ações tomadas..."
            />
          </FormField>

          <div className="rounded-xl border-2 border-dashed border-slate-200 bg-prevpro-gray/40 px-6 py-10 text-center transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray/60">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-prevpro-blue/10 text-2xl">
              📷
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Anexar Foto da Ocorrência
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Arraste uma imagem ou clique para selecionar (mock)
            </p>
            <button
              type="button"
              className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-prevpro-blue transition-colors hover:bg-prevpro-gray"
            >
              Selecionar arquivo
            </button>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-prevpro-gray"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-xl bg-prevpro-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] hover:shadow-lg"
            >
              Registrar Ocorrência
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
