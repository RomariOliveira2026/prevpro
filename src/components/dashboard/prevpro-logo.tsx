"use client";

import { useContext, useId } from "react";
import { PublicThemeContext } from "@/components/landing/public-theme-provider";
import { PlatformThemeContext } from "@/components/dashboard/platform-theme-provider";

type ThemeMode = "light" | "dark";

interface PrevProLogoProps {
  size?: "default" | "header" | "large";
  className?: string;
  /** Força cores para fundo escuro (ex.: sidebar azul). */
  forceDark?: boolean;
}

function useActiveTheme(): ThemeMode {
  const publicCtx = useContext(PublicThemeContext);
  const platformCtx = useContext(PlatformThemeContext);

  if (publicCtx?.mounted) return publicCtx.theme;
  if (platformCtx?.mounted) return platformCtx.theme;
  return "light";
}

const sizeClasses = {
  default: "h-9 w-auto min-w-[140px]",
  header: "h-11 w-auto min-w-[168px] sm:h-12 sm:min-w-[180px]",
  large: "h-14 w-auto min-w-[200px] sm:h-[3.75rem] sm:min-w-[220px]",
};

function BrandLogoSvg({
  theme,
  className,
}: {
  theme: ThemeMode;
  className: string;
}) {
  const uid = useId().replace(/:/g, "");
  const shieldGrad = `shield-${uid}`;
  const proGrad = `pro-${uid}`;

  const isDark = theme === "dark";
  const prevColor = isDark ? "#F8FAFC" : "#0F172A";
  const taglineColor = isDark ? "rgba(248,250,252,0.55)" : "#64748B";
  const lineColor = isDark ? "rgba(248,250,252,0.22)" : "#CBD5E1";

  return (
    <svg
      viewBox="0 0 248 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PrevPro BR — Prevenção de Perdas"
      className={className}
    >
      <defs>
        <linearGradient id={shieldGrad} x1="18" y1="2" x2="18" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={proGrad} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4ADE80" />
        </linearGradient>
      </defs>

      {/* Escudo */}
      <path
        d="M18 3L7 7.5v7.8c0 5.8 4 9.8 11 11.7 7-1.9 11-5.9 11-11.7V7.5L18 3z"
        fill={`url(#${shieldGrad})`}
      />
      <rect x="11.5" y="16" width="2.8" height="7" rx="0.6" fill="#22C55E" />
      <rect x="15.8" y="13" width="2.8" height="10" rx="0.6" fill="#4ADE80" />
      <rect x="20.1" y="10" width="2.8" height="13" rx="0.6" fill="#22C55E" />
      <path
        d="M10.5 21.5c2.2 2.8 4.8 3.2 7.2 1.8 2.8-1.6 5.2-4.8 7.8-7.2"
        stroke="#4ADE80"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Wordmark */}
      <text
        x="42"
        y="27"
        fill={prevColor}
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Prev
      </text>
      <text
        x="92"
        y="27"
        fill={`url(#${proGrad})`}
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Pro
      </text>

      {/* Tagline */}
      <line x1="42" y1="36" x2="62" y2="36" stroke={lineColor} strokeWidth="1" />
      <text
        x="124"
        y="39.5"
        textAnchor="middle"
        fill={taglineColor}
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="6.5"
        fontWeight="600"
        letterSpacing="0.14em"
      >
        PREVENÇÃO DE PERDAS
      </text>
      <line x1="186" y1="36" x2="206" y2="36" stroke={lineColor} strokeWidth="1" />
    </svg>
  );
}

export function PrevProLogo({
  size = "default",
  className = "",
  forceDark = false,
}: PrevProLogoProps) {
  const activeTheme = useActiveTheme();
  const theme: ThemeMode = forceDark ? "dark" : activeTheme;

  return (
    <BrandLogoSvg
      theme={theme}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}

/** Sidebar azul — wordmark clara, fundo transparente. */
export function PrevProSidebarLogo({ className = "" }: { className?: string }) {
  return <PrevProLogo size="large" forceDark className={className} />;
}
