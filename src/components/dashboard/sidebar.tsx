"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrevProLogo } from "./prevpro-logo";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: "🏠" },
  { label: "Ocorrências", href: "/ocorrencias", icon: "📝" },
  { label: "Validades", href: "/validades", icon: "📦" },
  { label: "Alertas", href: "/alertas", icon: "🚨" },
  { label: "Relatórios", href: "/relatorios", icon: "📊" },
  { label: "Inteligência", href: "/inteligencia", icon: "🧠" },
  { label: "Usuários", href: "/usuarios", icon: "👥" },
  { label: "Configurações", href: "/configuracoes", icon: "⚙️" },
  { label: "Suporte", href: "/suporte", icon: "❓" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  if (href === "#") return false;
  return pathname.startsWith(href);
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-gradient-to-b from-prevpro-blue to-[#0a3d6b] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center border-b border-white/10 px-6 py-7">
          <PrevProLogo variant="light" size="large" />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/40">
            Menu principal
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white/15 text-white shadow-sm shadow-black/10"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-base" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-white/10 p-5">
          <div className="rounded-xl bg-white/10 px-4 py-3.5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white/95">Rede SuperMax</p>
            <p className="mt-0.5 text-xs text-white/50">12 lojas · Plano Enterprise</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-white/70">PrevPro v1.0</p>
            <p className="mt-0.5 text-[10px] leading-relaxed text-white/40">
              Sistema Inteligente de
              <br />
              Prevenção de Perdas
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
