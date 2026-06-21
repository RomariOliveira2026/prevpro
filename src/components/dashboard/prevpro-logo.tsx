"use client";

import { useContext } from "react";
import { PublicThemeContext } from "@/components/landing/public-theme-provider";
import { PlatformThemeContext } from "@/components/dashboard/platform-theme-provider";

type ThemeMode = "light" | "dark";

interface PrevProLogoProps {
  /** Força aparência para fundo claro ou escuro. `auto` usa o tema ativo da página. */
  surface?: "auto" | "light" | "dark";
  compact?: boolean;
  size?: "default" | "header" | "large";
  className?: string;
}

function useActiveTheme(): ThemeMode {
  const publicCtx = useContext(PublicThemeContext);
  const platformCtx = useContext(PlatformThemeContext);

  if (publicCtx?.mounted) return publicCtx.theme;
  if (platformCtx?.mounted) return platformCtx.theme;
  return "light";
}

function VectorLogo({
  variant,
  compact,
  size,
  className,
}: {
  variant: "light" | "dark";
  compact: boolean;
  size: "default" | "header" | "large";
  className: string;
}) {
  const isLight = variant === "light";
  const iconSize =
    size === "large" ? "h-14 w-14 rounded-2xl" : size === "header" ? "h-11 w-11 rounded-xl" : "h-9 w-9 rounded-lg";
  const svgSize = size === "large" ? "h-8 w-8" : size === "header" ? "h-6 w-6" : "h-5 w-5";
  const titleSize = size === "large" ? "text-2xl" : size === "header" ? "text-xl" : "text-lg";
  const subtitleSize = size === "large" ? "text-[11px]" : "text-[10px]";

  return (
    <div
      className={`flex items-center ${size === "large" ? "gap-3.5" : size === "header" ? "gap-3" : "gap-2.5"} ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-center ${iconSize} ${
          isLight
            ? size === "large"
              ? "bg-white/20 shadow-lg shadow-black/10"
              : "bg-white/15"
            : "bg-prevpro-blue"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className={svgSize} aria-hidden="true">
          <path d="M12 3L4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4z" className="fill-white" />
          <path
            d="M9.5 12.5l2 2 4-4"
            stroke={isLight ? "#0F4C81" : "#22C55E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={`${titleSize} font-bold tracking-tight ${
              isLight ? "text-white" : "text-prevpro-blue"
            }`}
          >
            PrevPro
          </span>
          <span
            className={`${subtitleSize} mt-1 font-medium uppercase tracking-wider ${
              isLight ? "text-white/60" : "text-slate-500"
            }`}
          >
            Prevenção de Perdas
          </span>
        </div>
      )}
    </div>
  );
}

export function PrevProLogo({
  surface = "auto",
  compact = false,
  size = "default",
  className = "",
}: PrevProLogoProps) {
  const activeTheme = useActiveTheme();
  const resolvedSurface: ThemeMode = surface === "auto" ? activeTheme : surface;
  const variant = resolvedSurface === "dark" ? "light" : "dark";

  return (
    <VectorLogo variant={variant} compact={compact} size={size} className={className} />
  );
}

/** Logo vetorial para sidebar azul. */
export function PrevProSidebarLogo({ className = "" }: { className?: string }) {
  return (
    <VectorLogo variant="light" compact={false} size="large" className={className} />
  );
}
