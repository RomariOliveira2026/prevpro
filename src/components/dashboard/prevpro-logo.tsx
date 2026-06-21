"use client";

import Image from "next/image";
import { useContext } from "react";
import { PublicThemeContext } from "@/components/landing/public-theme-provider";
import { PlatformThemeContext } from "@/components/dashboard/platform-theme-provider";

type ThemeMode = "light" | "dark";

interface PrevProLogoProps {
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

const BRAND_BG = "#0D1117";

function BrandLogo({
  size = "default",
  className = "",
  onDarkSurface = false,
}: PrevProLogoProps & { onDarkSurface?: boolean }) {
  const activeTheme = useActiveTheme();
  const heightClass =
    size === "large" ? "h-12 sm:h-14" : size === "header" ? "h-10 sm:h-11" : "h-9";

  const needsBrandChip = !onDarkSurface && activeTheme === "light";

  const logo = (
    <Image
      src="/Logo.svg"
      alt="PrevPro BR — Prevenção de Perdas"
      width={385}
      height={103}
      unoptimized
      priority
      className={`${heightClass} w-auto object-contain object-left ${className}`}
    />
  );

  if (needsBrandChip) {
    return (
      <span
        className="inline-flex shrink-0 items-center rounded-xl px-3 py-2 shadow-sm"
        style={{ backgroundColor: BRAND_BG }}
      >
        {logo}
      </span>
    );
  }

  return <span className="inline-flex shrink-0 items-center">{logo}</span>;
}

export function PrevProLogo(props: PrevProLogoProps) {
  return <BrandLogo {...props} />;
}

/** Logo oficial na sidebar azul — fundo da marca integrado ao painel. */
export function PrevProSidebarLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-xl px-3 py-2.5 shadow-md shadow-black/15 ${className}`}
      style={{ backgroundColor: BRAND_BG }}
    >
      <Image
        src="/Logo.svg"
        alt="PrevPro BR — Prevenção de Perdas"
        width={385}
        height={103}
        unoptimized
        priority
        className="h-12 w-auto object-contain object-left sm:h-14"
      />
    </span>
  );
}
