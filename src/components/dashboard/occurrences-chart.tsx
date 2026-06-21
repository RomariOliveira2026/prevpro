"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CategoryOccurrencePoint } from "@/lib/dashboard-data";
import { categoryColors, categoryLabels } from "@/lib/dashboard-data";
import { platformTooltipClassName } from "@/lib/platform-styles";
import { usePlatformChartColors } from "@/lib/platform-chart-colors";
import { ChartCard } from "./chart-card";
import { ChartWrapper } from "./chart-wrapper";

interface OccurrencesChartProps {
  data: CategoryOccurrencePoint[];
}

const lines = [
  { key: "avarias" as const, color: categoryColors.avarias },
  { key: "furtos" as const, color: categoryColors.furtos },
  { key: "quebras" as const, color: categoryColors.quebras },
  { key: "validades" as const, color: categoryColors.validades },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { dataKey: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className={platformTooltipClassName}>
      <p className="mb-2 text-xs font-semibold text-[var(--platform-text-muted)]">{label}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-xs text-[var(--platform-text-muted)]">
                {categoryLabels[entry.dataKey as keyof typeof categoryLabels]}
              </span>
            </div>
            <span className="text-xs font-bold text-[var(--platform-text)]">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OccurrencesChart({ data }: OccurrencesChartProps) {
  const chartColors = usePlatformChartColors();

  if (!data?.length) {
    return (
      <ChartCard
        title="Ocorrências dos Últimos 30 Dias"
        subtitle="Monitoramento diário da operação"
      >
        <p className="py-12 text-center text-sm text-slate-400">
          Sem dados disponíveis
        </p>
      </ChartCard>
    );
  }

  return (
    <ChartCard
      title="Ocorrências dos Últimos 30 Dias"
      subtitle="Monitoramento diário da operação"
      action={
        <span className="inline-flex items-center rounded-full bg-prevpro-blue/10 px-3 py-1 text-xs font-semibold text-prevpro-blue">
          4 categorias monitoradas
        </span>
      }
      className="animate-delay-200"
    >
      <ChartWrapper className="h-[280px] sm:h-[300px]">
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
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: chartColors.axis, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={32}
          />
          <Tooltip content={<CustomTooltip />} />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={categoryLabels[line.key]}
              stroke={line.color}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, stroke: chartColors.activeDotStroke, strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ChartWrapper>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {lines.map((line) => (
          <div key={line.key} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: line.color }}
            />
            <span className="text-xs font-medium text-slate-600">
              {categoryLabels[line.key]}
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
