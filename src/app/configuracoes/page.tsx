import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { ConfiguracoesView } from "@/components/configuracoes/configuracoes-view";

export const metadata: Metadata = {
  title: "Configurações | PrevPro",
  description: "Central de configurações do sistema PrevPro",
};

export default function ConfiguracoesPage() {
  return (
    <DashboardShell
      title="Configurações"
      subtitle="Central de configurações do sistema PrevPro"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Configurações"
          subtitle="Central de configurações do sistema PrevPro"
          className="hidden lg:block"
        />

        <ConfiguracoesView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
