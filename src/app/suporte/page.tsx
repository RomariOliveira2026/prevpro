import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { SuporteView } from "@/components/suporte/suporte-view";

export const metadata: Metadata = {
  title: "Suporte | PrevPro",
  description: "Central de suporte e atendimento do PrevPro",
};

export default function SuportePage() {
  return (
    <DashboardShell
      title="Central de Suporte"
      subtitle="Ajuda, atendimento e acompanhamento de chamados"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Central de Suporte"
          subtitle="Ajuda, atendimento e acompanhamento de chamados"
          className="hidden lg:block"
        />

        <SuporteView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
