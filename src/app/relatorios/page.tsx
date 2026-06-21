import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { RelatoriosView } from "@/components/relatorios/relatorios-view";

export const metadata: Metadata = {
  title: "Relatórios | PrevPro",
  description: "Central de relatórios gerenciais e indicadores estratégicos",
};

export default function RelatoriosPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <RelatoriosView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
