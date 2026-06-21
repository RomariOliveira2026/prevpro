export interface IntelligenceInsight {
  id: string;
  text: string;
  type: "trend" | "concentration" | "recurrence";
  priority: "Alta" | "Média" | "Crítica";
}

export interface PredictionPoint {
  label: string;
  losses: number;
  expiries: number;
  occurrences: number;
}

export interface AiRecommendation {
  id: string;
  text: string;
  impact: "Alto" | "Médio" | "Baixo";
  sector: string;
}

export const inteligenciaKpiData = [
  {
    title: "Risco Geral",
    value: "72",
    change: "Alto",
    changeLabel: "índice composto da rede",
    trend: "warning" as const,
    icon: "risk",
  },
  {
    title: "Economia Potencial",
    value: "R$ 18.400",
    change: "+22%",
    changeLabel: "estimativa mensal",
    trend: "up" as const,
    icon: "savings-potential",
  },
  {
    title: "Alertas Gerados pela IA",
    value: "156",
    change: "+34",
    changeLabel: "últimos 30 dias",
    trend: "up" as const,
    icon: "ai-alerts",
  },
  {
    title: "Precisão dos Insights",
    value: "94,2%",
    change: "+2,1%",
    changeLabel: "taxa de acerto",
    trend: "up" as const,
    icon: "accuracy",
  },
];

export const automaticInsights: IntelligenceInsight[] = [
  {
    id: "1",
    text: "Hortifruti apresenta tendência de aumento de perdas.",
    type: "trend",
    priority: "Alta",
  },
  {
    id: "2",
    text: "Loja Centro concentra 38% dos produtos críticos.",
    type: "concentration",
    priority: "Crítica",
  },
  {
    id: "3",
    text: "Peito de Frango Resfriado apareceu 4 vezes em alertas.",
    type: "recurrence",
    priority: "Média",
  },
];

export const predictionTrend: PredictionPoint[] = [
  { label: "Sem 1", losses: 42, expiries: 28, occurrences: 35 },
  { label: "Sem 2", losses: 45, expiries: 31, occurrences: 38 },
  { label: "Sem 3", losses: 48, expiries: 34, occurrences: 41 },
  { label: "Sem 4", losses: 52, expiries: 38, occurrences: 44 },
  { label: "Sem 5", losses: 55, expiries: 42, occurrences: 47 },
  { label: "Sem 6", losses: 58, expiries: 45, occurrences: 50 },
];

export const aiRecommendations: AiRecommendation[] = [
  {
    id: "1",
    text: "Aumentar inspeções no setor Hortifruti.",
    impact: "Alto",
    sector: "Hortifruti",
  },
  {
    id: "2",
    text: "Antecipar promoção de produtos próximos ao vencimento.",
    impact: "Alto",
    sector: "Frios",
  },
  {
    id: "3",
    text: "Revisar controle de temperatura do Açougue.",
    impact: "Médio",
    sector: "Açougue",
  },
];

export const operationScore = {
  value: 78,
  label: "Bom",
  description: "Operação estável com pontos de atenção em Hortifruti e Açougue",
  breakdown: [
    { label: "Controle de Validades", score: 82 },
    { label: "Gestão de Ocorrências", score: 76 },
    { label: "Prevenção de Perdas", score: 74 },
    { label: "Resposta a Alertas", score: 80 },
  ],
};

export const predictionColors = {
  losses: "#DC2626",
  expiries: "#F59E0B",
  occurrences: "#0F4C81",
} as const;

export const predictionLabels = {
  losses: "Perdas",
  expiries: "Validades",
  occurrences: "Ocorrências",
} as const;

export type WeeklyPriorityLevel = "Crítico" | "Importante" | "Monitoramento" | "Preventivo";

export interface WeeklyPriority {
  id: string;
  level: WeeklyPriorityLevel;
  text: string;
}

export const weeklyPriorities: WeeklyPriority[] = [
  {
    id: "1",
    level: "Crítico",
    text: "Aumentar inspeções no Hortifruti",
  },
  {
    id: "2",
    level: "Importante",
    text: "Revisar controle de temperatura do Açougue",
  },
  {
    id: "3",
    level: "Monitoramento",
    text: "Liquidar produtos próximos do vencimento",
  },
  {
    id: "4",
    level: "Preventivo",
    text: "Reforçar conferência de etiquetas nos Frios",
  },
];
