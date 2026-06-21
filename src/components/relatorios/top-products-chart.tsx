"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TopProductOccurrence } from "@/lib/relatorios-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";

interface TopProductsChartProps {
  data: TopProductOccurrence[];
}

const barColors = ["#0F4C81", "#1565A8", "#1B7ECF", "#3B82F6", "#64748B", "#94A3B8"];

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: TopProductOccurrence }[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{item.product}</p>
      <p className="text-sm font-bold text-prevpro-blue">{item.count} ocorrências</p>
    </div>
  );
}

export function TopProductsChart({ data }: TopProductsChartProps) {
  return (
    <ChartCard
      title="Top Produtos com Mais Ocorrências"
      subtitle="Ranking dos produtos mais impactados"
      className="animate-delay-200"
    >
      <ChartWrapper className="h-[260px] sm:h-[280px]">
        <BarChart
          responsive
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
          style={{ width: "100%", height: "100%" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: "#94A3B8", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="product"
            tick={{ fill: "#64748B", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            width={130}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(15,76,129,0.04)" }} />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={18}>
            {data.map((_, index) => (
              <Cell key={index} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ChartWrapper>
    </ChartCard>
  );
}
