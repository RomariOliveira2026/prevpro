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
import type { LossEvolutionPoint } from "@/lib/relatorios-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";

interface LossEvolutionChartProps {
  data: LossEvolutionPoint[];
}

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
        <p key={entry.dataKey} className="text-xs font-bold" style={{ color: entry.color }}>
          {entry.dataKey === "losses" ? "Perdas" : "Recuperado"}: R${" "}
          {entry.value.toLocaleString("pt-BR")}
        </p>
      ))}
    </div>
  );
}

export function LossEvolutionChart({ data }: LossEvolutionChartProps) {
  return (
    <ChartCard
      title="Evolução das Perdas"
      subtitle="Comparativo mensal de perdas e recuperações"
      className="animate-delay-300"
    >
      <ChartWrapper className="h-[260px] sm:h-[280px]">
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
            width={48}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
            formatter={(value) => (value === "losses" ? "Perdas" : "Recuperado")}
          />
          <Line
            type="monotone"
            dataKey="losses"
            stroke="#DC2626"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke="#22C55E"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ChartWrapper>
    </ChartCard>
  );
}
