import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { UsuariosView } from "@/components/usuarios/usuarios-view";

export const metadata: Metadata = {
  title: "Usuários | PrevPro",
  description: "Gerenciamento de usuários e permissões do PrevPro",
};

export default function UsuariosPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <UsuariosView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
