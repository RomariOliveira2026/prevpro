import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { ValidadesView } from "@/components/validades/validades-view";

export const metadata: Metadata = {
  title: "Validades | PrevPro",
  description: "Gestão inteligente de validades de produtos e lotes",
};

export default function ValidadesPage() {
  return (
    <DashboardShell
      title="Gestão de Validades"
      subtitle="Monitoramento inteligente de produtos e lotes"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Gestão de Validades"
          subtitle="Monitoramento inteligente de produtos e lotes"
          className="hidden lg:block"
        />

        <ValidadesView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
