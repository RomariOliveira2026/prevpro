import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { RelatoriosView } from "@/components/relatorios/relatorios-view";

export const metadata: Metadata = {
  title: "Relatórios | PrevPro",
  description: "Central de relatórios e análises gerenciais",
};

export default function RelatoriosPage() {
  return (
    <DashboardShell
      title="Central de Relatórios"
      subtitle="Análises gerenciais e indicadores estratégicos"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Central de Relatórios"
          subtitle="Análises gerenciais e indicadores estratégicos"
          className="hidden lg:block"
        />

        <RelatoriosView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
