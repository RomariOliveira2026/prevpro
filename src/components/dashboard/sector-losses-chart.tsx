"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import type { SectorLoss } from "@/lib/dashboard-data";
import { ChartCard } from "./chart-card";
import { ChartWrapper } from "./chart-wrapper";

interface SectorLossesChartProps {
  data: SectorLoss[];
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: SectorLoss }[];
}) {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{item.sector}</p>
      <p className="text-sm font-bold text-prevpro-blue">{item.percentage}%</p>
      <p className="text-xs text-slate-400">
        R$ {item.amount.toLocaleString("pt-BR")}
      </p>
    </div>
  );
}

export function SectorLossesChart({ data }: SectorLossesChartProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  if (!data?.length) {
    return (
      <ChartCard
        title="Perdas por Setor"
        subtitle="Distribuição percentual das perdas"
      >
        <p className="py-12 text-center text-sm text-slate-400">
          Sem dados disponíveis
        </p>
      </ChartCard>
    );
  }

  return (
    <ChartCard
      title="Perdas por Setor"
      subtitle="Distribuição percentual das perdas"
      action={
        <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
          R$ {total.toLocaleString("pt-BR")} total
        </span>
      }
      className="animate-delay-300"
    >
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <ChartWrapper className="h-[260px] w-full sm:h-[280px] lg:w-1/2">
          <PieChart
            responsive
            style={{ width: "100%", height: "100%" }}
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={3}
              dataKey="percentage"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.sector} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ChartWrapper>

        <div className="w-full space-y-3 lg:w-1/2">
          {data.map((item) => (
            <div
              key={item.sector}
              className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-prevpro-gray/40 px-4 py-3 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-sm"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.color }}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-800">{item.sector}</p>
                <p className="text-xs text-slate-400">
                  R$ {item.amount.toLocaleString("pt-BR")}
                </p>
              </div>
              <span className="text-sm font-bold text-prevpro-blue">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
