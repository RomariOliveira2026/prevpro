import type { ExpiringProduct } from "@/lib/dashboard-data";
import { StatusBadge, getUrgencyLevel } from "./status-badge";

interface ExpiringProductsTableProps {
  products: ExpiringProduct[];
}

export function ExpiringProductsTable({ products }: ExpiringProductsTableProps) {
  return (
    <div className="animate-fade-in-up animate-delay-500 rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-slate-800">
            Produtos próximos ao vencimento
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            Monitoramento prioritário de validades críticas
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 sm:mt-0">
          <StatusBadge level="Crítico" />
          <StatusBadge level="Atenção" />
          <StatusBadge level="Normal" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-prevpro-gray/50">
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">
                Produto
              </th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">
                Lote
              </th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">
                Validade
              </th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">
                Dias restantes
              </th>
              <th className="px-5 py-3.5 font-semibold text-slate-600 sm:px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => {
              const urgency = getUrgencyLevel(product.daysRemaining);

              return (
                <tr
                  key={product.id}
                  className="transition-colors hover:bg-prevpro-gray/40"
                >
                  <td className="px-5 py-4 font-medium text-slate-800 sm:px-6">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-slate-500 sm:px-6">
                    {product.batch}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-slate-600 sm:px-6">
                    {product.expiryDate}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 sm:px-6">
                    <span
                      className={`font-semibold ${
                        urgency === "Crítico"
                          ? "text-red-600"
                          : urgency === "Atenção"
                            ? "text-amber-600"
                            : "text-prevpro-green"
                      }`}
                    >
                      {product.daysRemaining} dias
                    </span>
                  </td>
                  <td className="px-5 py-4 sm:px-6">
                    <StatusBadge level={urgency} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
