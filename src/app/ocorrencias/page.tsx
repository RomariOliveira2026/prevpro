import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { OcorrenciasView } from "@/components/ocorrencias/ocorrencias-view";

export const metadata: Metadata = {
  title: "Ocorrências | PrevPro",
  description: "Gestão e acompanhamento de ocorrências operacionais",
};

export default function OcorrenciasPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <OcorrenciasView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
