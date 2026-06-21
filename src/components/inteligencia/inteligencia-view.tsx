"use client";

import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiRecommendations } from "@/components/inteligencia/ai-recommendations";
import { AutomaticInsights } from "@/components/inteligencia/automatic-insights";
import { OperationScoreCard } from "@/components/inteligencia/operation-score-card";
import { PredictionsChart } from "@/components/inteligencia/predictions-chart";
import { WeeklyPriorities } from "@/components/inteligencia/weekly-priorities";
import {
  aiRecommendations,
  automaticInsights,
  inteligenciaKpiData,
  operationScore,
  predictionTrend,
  weeklyPriorities,
} from "@/lib/inteligencia-data";

export function InteligenciaView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Central de Inteligência"
        subtitle="Plataforma de inteligência para prevenção de perdas"
        className="lg:hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {inteligenciaKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <OperationScoreCard
        score={operationScore.value}
        label={operationScore.label}
        description={operationScore.description}
        breakdown={operationScore.breakdown}
      />

      <WeeklyPriorities priorities={weeklyPriorities} />

      <AutomaticInsights insights={automaticInsights} />

      <PredictionsChart data={predictionTrend} />

      <AiRecommendations recommendations={aiRecommendations} />
    </div>
  );
}
