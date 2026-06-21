import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { AlertasView } from "@/components/alertas/alertas-view";

export const metadata: Metadata = {
  title: "Alertas | PrevPro",
  description: "Central de alertas e monitoramento de riscos operacionais",
};

export default function AlertasPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <AlertasView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
