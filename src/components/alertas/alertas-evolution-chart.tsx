"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AlertEvolutionPoint } from "@/lib/alertas-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";
import { usePlatformChartColors } from "@/lib/platform-chart-colors";
import { platformTooltipClassName } from "@/lib/platform-styles";

interface AlertasEvolutionChartProps {
  data: AlertEvolutionPoint[];
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className={platformTooltipClassName}>
      <p className="mb-1 text-xs font-semibold text-[var(--platform-text-muted)]">{label}</p>
      <p className="text-sm font-bold text-prevpro-blue">
        {payload[0].value} alertas
      </p>
    </div>
  );
}

export function AlertasEvolutionChart({ data }: AlertasEvolutionChartProps) {
  const chartColors = usePlatformChartColors();

  return (
    <ChartCard
      title="Evolução dos Alertas"
      subtitle="Últimos 30 dias"
      className="animate-delay-400"
    >
      <ChartWrapper className="h-[260px] sm:h-[280px]">
        <LineChart
          responsive
          data={data}
          margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          style={{ width: "100%", height: "100%" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: chartColors.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: chartColors.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={32}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="alertas"
            stroke="#0F4C81"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, stroke: chartColors.activeDotStroke, strokeWidth: 2 }}
          />
        </LineChart>
      </ChartWrapper>
    </ChartCard>
  );
}
