"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PredictionPoint } from "@/lib/inteligencia-data";
import { predictionColors, predictionLabels } from "@/lib/inteligencia-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";

interface PredictionsChartProps {
  data: PredictionPoint[];
}

const lines = [
  { key: "losses" as const, color: predictionColors.losses },
  { key: "expiries" as const, color: predictionColors.expiries },
  { key: "occurrences" as const, color: predictionColors.occurrences },
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
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-lg">
      <p className="mb-2 text-xs font-semibold text-slate-500">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4">
          <span className="text-xs text-slate-600">
            {predictionLabels[entry.dataKey as keyof typeof predictionLabels]}
          </span>
          <span className="text-xs font-bold text-slate-800">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

function CustomLegend({
  payload,
}: {
  payload?: { value: string; color: string }[];
}) {
  if (!payload?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs font-medium text-slate-600">
            {predictionLabels[entry.value as keyof typeof predictionLabels]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PredictionsChart({ data }: PredictionsChartProps) {
  return (
    <ChartCard
      title="Previsões"
      subtitle="Tendência projetada para as próximas 6 semanas"
      action={
        <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          Modelo preditivo
        </span>
      }
      className="animate-delay-400"
    >
      <ChartWrapper className="h-[280px] sm:h-[300px]">
        <LineChart
          responsive
          data={data}
          margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          style={{ width: "100%", height: "100%" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "#94A3B8", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: "#94A3B8", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={32}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={2.5}
              strokeDasharray={line.key === "losses" ? "0" : "6 4"}
              dot={false}
              activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ChartWrapper>
    </ChartCard>
  );
}
