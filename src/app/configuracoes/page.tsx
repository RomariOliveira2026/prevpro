import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { ConfiguracoesView } from "@/components/configuracoes/configuracoes-view";

export const metadata: Metadata = {
  title: "Configurações | PrevPro",
  description: "Central de configurações do sistema PrevPro",
};

export default function ConfiguracoesPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <ConfiguracoesView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
