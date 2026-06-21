export type OccurrenceStatus = "Aberto" | "Em análise" | "Resolvido" | "Crítico";

export interface Occurrence {
  id: string;
  date: string;
  sector: string;
  type: string;
  status: OccurrenceStatus;
}

export interface CategoryOccurrencePoint {
  label: string;
  avarias: number;
  furtos: number;
  quebras: number;
  validades: number;
}

export interface SectorLoss {
  sector: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface ExpiringProduct {
  id: string;
  name: string;
  batch: string;
  expiryDate: string;
  daysRemaining: number;
}

export type InsightPriority = "Crítica" | "Alta" | "Média" | "Baixa";

export interface IntelligenceInsight {
  id: string;
  text: string;
  priority: InsightPriority;
  icon: "trend" | "alert" | "breakage" | "expiry";
}

export const categoryColors = {
  avarias: "#0F4C81",
  furtos: "#DC2626",
  quebras: "#F59E0B",
  validades: "#22C55E",
} as const;

export const categoryLabels = {
  avarias: "Avarias",
  furtos: "Furtos",
  quebras: "Quebras",
  validades: "Validades",
} as const;

export const kpiData = [
  {
    title: "Total de Ocorrências",
    value: "1.284",
    change: "+12%",
    changeLabel: "vs. mês anterior",
    trend: "up" as const,
    icon: "occurrences",
  },
  {
    title: "Validades Próximas",
    value: "47",
    change: "8 críticas",
    changeLabel: "próximos 7 dias",
    trend: "warning" as const,
    icon: "expiry",
  },
  {
    title: "Alertas Ativos",
    value: "23",
    change: "-5%",
    changeLabel: "vs. semana anterior",
    trend: "down" as const,
    icon: "alerts",
  },
  {
    title: "Usuários Ativos",
    value: "156",
    change: "+8",
    changeLabel: "novos este mês",
    trend: "up" as const,
    icon: "users",
  },
  {
    title: "Economia Potencial",
    value: "R$ 18.400",
    change: "+22%",
    changeLabel: "estimativa mensal",
    trend: "up" as const,
    icon: "savings-potential",
  },
];

export type CriticalProductStatus = "Crítico" | "Atenção" | "Vencido";

export interface CriticalProduct {
  id: string;
  name: string;
  sector: string;
  riskValue: number;
  status: CriticalProductStatus;
  daysRemaining: number;
}

export const topCriticalProducts: CriticalProduct[] = [
  {
    id: "1",
    name: "Iogurte Natural 170g",
    sector: "Frios",
    riskValue: 864,
    status: "Crítico",
    daysRemaining: 2,
  },
  {
    id: "2",
    name: "Peito de Frango Resfriado",
    sector: "Açougue",
    riskValue: 1540,
    status: "Crítico",
    daysRemaining: 1,
  },
  {
    id: "3",
    name: "Leite UHT Integral 1L",
    sector: "Frios",
    riskValue: 3600,
    status: "Atenção",
    daysRemaining: 9,
  },
  {
    id: "4",
    name: "Banana Prata Kg",
    sector: "Hortifruti",
    riskValue: 420,
    status: "Crítico",
    daysRemaining: 3,
  },
  {
    id: "5",
    name: "Pão Francês Unidade",
    sector: "Padaria",
    riskValue: 280,
    status: "Atenção",
    daysRemaining: 1,
  },
];

export const occurrenceTrendByCategory: CategoryOccurrencePoint[] = [
  { label: "15 Mai", avarias: 8, furtos: 3, quebras: 6, validades: 5 },
  { label: "18 Mai", avarias: 7, furtos: 4, quebras: 5, validades: 4 },
  { label: "21 Mai", avarias: 11, furtos: 5, quebras: 8, validades: 7 },
  { label: "24 Mai", avarias: 9, furtos: 3, quebras: 7, validades: 6 },
  { label: "27 Mai", avarias: 10, furtos: 4, quebras: 6, validades: 8 },
  { label: "30 Mai", avarias: 12, furtos: 6, quebras: 9, validades: 7 },
  { label: "02 Jun", avarias: 10, furtos: 5, quebras: 8, validades: 6 },
  { label: "05 Jun", avarias: 13, furtos: 4, quebras: 10, validades: 9 },
  { label: "08 Jun", avarias: 11, furtos: 6, quebras: 7, validades: 8 },
  { label: "11 Jun", avarias: 14, furtos: 5, quebras: 11, validades: 10 },
  { label: "14 Jun", avarias: 12, furtos: 4, quebras: 9, validades: 8 },
];

export const sectorLosses: SectorLoss[] = [
  { sector: "Hortifruti", amount: 18420, percentage: 32, color: "#0F4C81" },
  { sector: "Açougue", amount: 13815, percentage: 24, color: "#1565A8" },
  { sector: "Padaria", amount: 10361, percentage: 18, color: "#22C55E" },
  { sector: "Mercearia", amount: 8055, percentage: 14, color: "#3B82F6" },
  { sector: "Depósito", amount: 6904, percentage: 12, color: "#64748B" },
];

export const intelligenceInsights: IntelligenceInsight[] = [
  {
    id: "1",
    text: "O setor Hortifruti apresentou aumento de 18% nas perdas nos últimos 30 dias.",
    priority: "Alta",
    icon: "trend",
  },
  {
    id: "2",
    text: "O produto Iogurte Natural 170g aparece pela terceira vez consecutiva em alertas de vencimento.",
    priority: "Crítica",
    icon: "alert",
  },
  {
    id: "3",
    text: "As ocorrências de quebra aumentaram 12% na Padaria.",
    priority: "Média",
    icon: "breakage",
  },
  {
    id: "4",
    text: "Há 5 produtos com risco crítico de vencimento em até 72 horas.",
    priority: "Crítica",
    icon: "expiry",
  },
];

export const expiringProducts: ExpiringProduct[] = [
  {
    id: "1",
    name: "Iogurte Natural 170g",
    batch: "LT-2026-0412",
    expiryDate: "15/06/2026",
    daysRemaining: 2,
  },
  {
    id: "2",
    name: "Peito de Frango Resfriado",
    batch: "LT-2026-0388",
    expiryDate: "14/06/2026",
    daysRemaining: 1,
  },
  {
    id: "3",
    name: "Queijo Minas Frescal",
    batch: "LT-2026-0401",
    expiryDate: "16/06/2026",
    daysRemaining: 3,
  },
  {
    id: "4",
    name: "Suco de Laranja Integral 1L",
    batch: "LT-2026-0375",
    expiryDate: "18/06/2026",
    daysRemaining: 5,
  },
  {
    id: "5",
    name: "Pão de Forma Integral",
    batch: "LT-2026-0420",
    expiryDate: "19/06/2026",
    daysRemaining: 6,
  },
  {
    id: "6",
    name: "Leite UHT Integral 1L",
    batch: "LT-2026-0350",
    expiryDate: "22/06/2026",
    daysRemaining: 9,
  },
];

export const recentOccurrences: Occurrence[] = [
  {
    id: "1",
    date: "13/06/2026",
    sector: "Açougue",
    type: "Ruptura de estoque",
    status: "Aberto",
  },
  {
    id: "2",
    date: "13/06/2026",
    sector: "Hortifruti",
    type: "Produto vencido",
    status: "Crítico",
  },
  {
    id: "3",
    date: "12/06/2026",
    sector: "Padaria",
    type: "Divergência de peso",
    status: "Em análise",
  },
  {
    id: "4",
    date: "12/06/2026",
    sector: "Bebidas",
    type: "Avaria em pallet",
    status: "Resolvido",
  },
  {
    id: "5",
    date: "11/06/2026",
    sector: "Frios e Laticínios",
    type: "Temperatura fora do padrão",
    status: "Aberto",
  },
  {
    id: "6",
    date: "11/06/2026",
    sector: "Mercearia",
    type: "Etiqueta incorreta",
    status: "Resolvido",
  },
];
