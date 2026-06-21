"use client";

import type { ValidadeProduct } from "@/lib/validades-data";
import { getValidityStatus } from "@/lib/validades-data";
import { ValidityStatusBadge } from "./validity-status-badge";

interface ValidadesTableProps {
  products: ValidadeProduct[];
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ActionButton({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "danger";
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
        variant === "danger"
          ? "text-slate-400 hover:bg-red-50 hover:text-red-600"
          : "text-slate-400 hover:bg-prevpro-gray hover:text-prevpro-blue"
      }`}
    >
      {children}
    </button>
  );
}

export function ValidadesTable({ products }: ValidadesTableProps) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-slate-200/70 bg-white px-6 py-16 text-center shadow-[0_1px_3px_rgba(15,76,129,0.06)]">
        <p className="text-sm font-medium text-slate-600">Nenhum produto encontrado</p>
        <p className="mt-1 text-xs text-slate-400">
          Ajuste os filtros ou tente outra busca
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up animate-delay-300 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <table className="w-full table-fixed text-left text-sm">
        <colgroup>
          <col style={{ width: "16%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "7%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "12%" }} />
        </colgroup>
        <thead>
          <tr className="border-b border-slate-100 bg-prevpro-gray/50">
            <th className="px-3 py-3.5 font-semibold text-slate-600">Produto</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Código</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Lote</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Fabricação</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Validade</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Qtd.</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Valor em Estoque</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Dias</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Status</th>
            <th className="px-3 py-3.5 font-semibold text-slate-600">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {products.map((product) => {
            const status = getValidityStatus(product.daysRemaining);

            return (
              <tr
                key={product.id}
                className="transition-colors hover:bg-prevpro-gray/40"
              >
                <td className="px-3 py-3.5">
                  <p className="truncate font-medium text-slate-800" title={product.name}>
                    {product.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-400">{product.sector}</p>
                </td>
                <td className="px-3 py-3.5">
                  <span className="block truncate font-mono text-xs text-slate-500" title={product.code}>
                    {product.code}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <span className="block truncate font-mono text-xs text-slate-500" title={product.batch}>
                    {product.batch}
                  </span>
                </td>
                <td className="px-3 py-3.5 text-xs text-slate-600">{product.manufactureDate}</td>
                <td className="px-3 py-3.5 text-xs text-slate-600">{product.expiryDate}</td>
                <td className="px-3 py-3.5 font-medium text-slate-800">{product.quantity}</td>
                <td className="px-3 py-3.5 text-xs font-semibold text-slate-700">
                  {formatCurrency(product.stockValue)}
                </td>
                <td className="px-3 py-3.5">
                  <span
                    className={`text-xs font-semibold ${
                      status === "Vencido"
                        ? "text-slate-700"
                        : status === "Crítico"
                          ? "text-red-600"
                          : status === "Atenção"
                            ? "text-amber-600"
                            : "text-prevpro-green"
                    }`}
                  >
                    {product.daysRemaining <= 0
                      ? `${Math.abs(product.daysRemaining)}d`
                      : `${product.daysRemaining}d`}
                  </span>
                </td>
                <td className="overflow-hidden px-3 py-3.5">
                  <ValidityStatusBadge status={status} />
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
                    <ActionButton label="Excluir" variant="danger">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </ActionButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3.5 text-xs text-slate-500">
        <span>
          Exibindo <strong className="text-slate-700">{products.length}</strong> produto
          {products.length !== 1 ? "s" : ""}
        </span>
        <span>Atualizado em 13/06/2026</span>
      </div>
    </div>
  );
}
