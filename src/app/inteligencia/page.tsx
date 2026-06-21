import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { InteligenciaView } from "@/components/inteligencia/inteligencia-view";

export const metadata: Metadata = {
  title: "Inteligência | PrevPro",
  description: "Central de inteligência e prevenção de perdas com IA",
};

export default function InteligenciaPage() {
  return (
    <DashboardShell
      title="Central de Inteligência"
      subtitle="Plataforma de inteligência para prevenção de perdas"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Central de Inteligência"
          subtitle="Plataforma de inteligência para prevenção de perdas"
          className="hidden lg:block"
        />

        <InteligenciaView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
