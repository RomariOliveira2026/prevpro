import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { SuporteView } from "@/components/suporte/suporte-view";

export const metadata: Metadata = {
  title: "Suporte | PrevPro",
  description: "Central de suporte, ajuda e acompanhamento de chamados",
};

export default function SuportePage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <SuporteView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
