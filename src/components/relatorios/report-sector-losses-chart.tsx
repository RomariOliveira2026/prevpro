"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import type { SectorLossReport } from "@/lib/relatorios-data";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ChartWrapper } from "@/components/dashboard/chart-wrapper";

interface ReportSectorLossesChartProps {
  data: SectorLossReport[];
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: SectorLossReport }[];
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

export function ReportSectorLossesChart({ data }: ReportSectorLossesChartProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <ChartCard
      title="Perdas por Setor"
      subtitle="Distribuição percentual das perdas"
      action={
        <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
          R$ {total.toLocaleString("pt-BR")}
        </span>
      }
      className="animate-delay-200"
    >
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <ChartWrapper className="h-[240px] w-full sm:h-[260px] lg:w-1/2">
          <PieChart responsive style={{ width: "100%", height: "100%" }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
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
        <div className="w-full space-y-2 lg:w-1/2">
          {data.map((item) => (
            <div
              key={item.sector}
              className="flex items-center gap-2 rounded-lg bg-prevpro-gray/40 px-3 py-2"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="flex-1 text-xs font-medium text-slate-700">{item.sector}</span>
              <span className="text-xs font-bold text-prevpro-blue">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
