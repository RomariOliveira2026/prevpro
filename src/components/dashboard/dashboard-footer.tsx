import { PrevProLogo } from "./prevpro-logo";

export function DashboardFooter() {
  return (
    <footer className="mt-8 flex flex-col items-center border-t border-[var(--platform-border)] pt-6 text-center">
      <PrevProLogo />
      <p className="mt-4 text-sm font-semibold text-prevpro-blue">PrevPro v1.0</p>
      <p className="mt-1 text-xs text-[var(--platform-text-subtle)]">
        Sistema Inteligente de Prevenção de Perdas
      </p>
    </footer>
  );
}
