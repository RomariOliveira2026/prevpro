import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { ValidadesView } from "@/components/validades/validades-view";

export const metadata: Metadata = {
  title: "Validades | PrevPro",
  description: "Gestão inteligente de validades de produtos e lotes",
};

export default function ValidadesPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <ValidadesView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
