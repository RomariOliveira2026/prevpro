"use client";

import { usePlatformTheme } from "@/components/dashboard/platform-theme-provider";

export function usePlatformChartColors() {
  const { theme } = usePlatformTheme();

  if (theme === "dark") {
    return {
      grid: "#1e293b",
      axis: "#94a3b8",
      activeDotStroke: "#0f172a",
    };
  }

  return {
    grid: "#E2E8F0",
    axis: "#94A3B8",
    activeDotStroke: "#fff",
  };
}
