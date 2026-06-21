import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { InteligenciaView } from "@/components/inteligencia/inteligencia-view";

export const metadata: Metadata = {
  title: "Inteligência | PrevPro",
  description: "Plataforma de inteligência para prevenção de perdas",
};

export default function InteligenciaPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <InteligenciaView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
