import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { ExpiringProductsTable } from "@/components/dashboard/expiring-products-table";
import { IntelligenceInsightsCard } from "@/components/dashboard/intelligence-insights-card";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { OccurrencesChart } from "@/components/dashboard/occurrences-chart";
import { RecentOccurrencesTable } from "@/components/dashboard/recent-occurrences-table";
import { SectorLossesChart } from "@/components/dashboard/sector-losses-chart";
import { TopCriticalProductsCard } from "@/components/dashboard/top-critical-products-card";
import {
  expiringProducts,
  intelligenceInsights,
  kpiData,
  occurrenceTrendByCategory,
  recentOccurrences,
  sectorLosses,
  topCriticalProducts,
} from "@/lib/dashboard-data";

export default function Home() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="lg:hidden">
          <h1 className="text-xl font-semibold tracking-tight text-slate-800">
            Dashboard
          </h1>
          <p className="text-sm text-slate-500">Visão geral da rede · Junho 2026</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {kpiData.map((kpi, index) => (
            <KpiCard key={kpi.title} {...kpi} index={index} />
          ))}
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="min-w-0">
            <OccurrencesChart data={occurrenceTrendByCategory} />
          </div>
          <div className="min-w-0">
            <SectorLossesChart data={sectorLosses} />
          </div>
        </div>

        <TopCriticalProductsCard products={topCriticalProducts} />

        <IntelligenceInsightsCard insights={intelligenceInsights} />

        <ExpiringProductsTable products={expiringProducts} />

        <RecentOccurrencesTable occurrences={recentOccurrences} />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
