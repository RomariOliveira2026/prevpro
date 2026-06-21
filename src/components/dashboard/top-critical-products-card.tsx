import type { CriticalProduct } from "@/lib/dashboard-data";

const statusStyles: Record<CriticalProduct["status"], string> = {
  Crítico: "bg-red-50 text-red-700 ring-red-200",
  Atenção: "bg-amber-50 text-amber-700 ring-amber-200",
  Vencido: "bg-slate-800 text-white ring-slate-600",
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

interface TopCriticalProductsCardProps {
  products: CriticalProduct[];
}

export function TopCriticalProductsCard({ products }: TopCriticalProductsCardProps) {
  return (
    <div className="animate-fade-in-up animate-delay-300 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] transition-all duration-300 hover:shadow-[0_2px_8px_rgba(15,76,129,0.08),0_8px_24px_rgba(15,76,129,0.06)]">
      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-lg">
            🔥
          </span>
          <div>
            <h2 className="text-base font-semibold text-slate-800">Top 5 Produtos Críticos</h2>
            <p className="text-sm text-slate-500">Maior exposição financeira imediata</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-prevpro-gray/30 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-prevpro-blue/10 text-xs font-bold text-prevpro-blue">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium text-slate-800">{product.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{product.sector}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-sm font-semibold text-slate-700">
                {formatCurrency(product.riskValue)}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[product.status]}`}
              >
                {product.status}
              </span>
              <span className="rounded-lg bg-prevpro-gray/50 px-2.5 py-1 text-xs font-medium text-slate-600">
                {product.daysRemaining <= 0
                  ? `${Math.abs(product.daysRemaining)}d vencido`
                  : `${product.daysRemaining} dias`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
