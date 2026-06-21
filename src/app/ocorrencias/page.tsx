import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { OcorrenciasView } from "@/components/ocorrencias/ocorrencias-view";

export const metadata: Metadata = {
  title: "Ocorrências | PrevPro",
  description: "Gestão e acompanhamento de ocorrências operacionais",
};

export default function OcorrenciasPage() {
  return (
    <DashboardShell
      title="Gestão de Ocorrências"
      subtitle="Registro e acompanhamento de ocorrências operacionais"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Gestão de Ocorrências"
          subtitle="Registro e acompanhamento de ocorrências operacionais"
          className="hidden lg:block"
        />

        <OcorrenciasView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
