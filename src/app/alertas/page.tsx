import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { AlertasView } from "@/components/alertas/alertas-view";

export const metadata: Metadata = {
  title: "Alertas | PrevPro",
  description: "Central de alertas e monitoramento de riscos operacionais",
};

export default function AlertasPage() {
  return (
    <DashboardShell
      title="Central de Alertas"
      subtitle="Monitoramento em tempo real de riscos operacionais"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Central de Alertas"
          subtitle="Monitoramento em tempo real de riscos operacionais"
          className="hidden lg:block"
        />

        <AlertasView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
