import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { PageHeader } from "@/components/dashboard/page-header";
import { UsuariosView } from "@/components/usuarios/usuarios-view";

export const metadata: Metadata = {
  title: "Usuários | PrevPro",
  description: "Gestão de usuários e permissões do PrevPro",
};

export default function UsuariosPage() {
  return (
    <DashboardShell
      title="Gestão de Usuários"
      subtitle="Gerenciamento completo de usuários e permissões"
    >
      <div className="mx-auto max-w-7xl space-y-6">
        <PageHeader
          title="Gestão de Usuários"
          subtitle="Gerenciamento completo de usuários e permissões"
          className="hidden lg:block"
        />

        <UsuariosView />

        <DashboardFooter />
      </div>
    </DashboardShell>
  );
}
