"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import type { CategoryOccurrence } from "@/lib/relatorios-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";

interface CategoryOccurrencesChartProps {
  data: CategoryOccurrence[];
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: CategoryOccurrence }[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{item.category}</p>
      <p className="text-sm font-bold text-prevpro-blue">{item.percentage}%</p>
      <p className="text-xs text-slate-400">{item.count} ocorrências</p>
    </div>
  );
}

export function CategoryOccurrencesChart({ data }: CategoryOccurrencesChartProps) {
  return (
    <ChartCard
      title="Ocorrências por Categoria"
      subtitle="Distribuição por tipo de ocorrência"
      className="animate-delay-300"
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <ChartWrapper className="h-[240px] w-full sm:h-[260px] lg:w-1/2">
          <PieChart responsive style={{ width: "100%", height: "100%" }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={95}
              paddingAngle={2}
              dataKey="percentage"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.category} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ChartWrapper>
        <div className="w-full space-y-2 lg:w-1/2">
          {data.map((item) => (
            <div
              key={item.category}
              className="flex items-center gap-2 rounded-lg bg-prevpro-gray/40 px-3 py-2"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="flex-1 text-xs font-medium text-slate-700">{item.category}</span>
              <span className="text-xs text-slate-500">{item.count}</span>
              <span className="text-xs font-bold text-prevpro-blue">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
