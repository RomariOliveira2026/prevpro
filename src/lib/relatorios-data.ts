export interface SectorLossReport {
  sector: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface LossEvolutionPoint {
  label: string;
  losses: number;
  recovered: number;
}

export interface TopProductOccurrence {
  product: string;
  count: number;
}

export interface CategoryOccurrence {
  category: string;
  count: number;
  percentage: number;
  color: string;
}

export interface SectorRanking {
  sector: string;
  occurrences: number;
  lostValue: number;
  recoveredValue: number;
  riskIndex: number;
}

export interface StrategicInsight {
  id: string;
  text: string;
  icon: "sector" | "recovery" | "trend";
}

export const relatoriosKpiData = [
  {
    title: "Total de Perdas",
    value: "R$ 48.720",
    change: "-8%",
    changeLabel: "vs. mês anterior",
    trend: "up" as const,
    icon: "financial",
  },
  {
    title: "Perdas Evitadas",
    value: "R$ 12.500",
    change: "+18%",
    changeLabel: "ações preventivas",
    trend: "up" as const,
    icon: "resolved",
  },
  {
    title: "Valor Recuperado",
    value: "R$ 9.840",
    change: "+24%",
    changeLabel: "últimos 30 dias",
    trend: "up" as const,
    icon: "recovery",
  },
  {
    title: "Produtos Monitorados",
    value: "2.480",
    change: "+156",
    changeLabel: "rede SuperMax",
    trend: "up" as const,
    icon: "monitored",
  },
  {
    title: "ROI Estimado",
    value: "312%",
    change: "Anual",
    changeLabel: "retorno sobre investimento",
    trend: "up" as const,
    icon: "roi",
  },
];

export const relatorioPeriods = ["Últimos 7 dias", "Últimos 30 dias", "Este mês", "Este trimestre", "Este ano"];
export const relatorioStores = ["Todas as lojas", "Loja Centro", "Loja Norte", "Loja Sul"];
export const relatorioSectors = ["Todos os setores", "Hortifruti", "Açougue", "Padaria", "Frios", "Mercearia", "Depósito", "Bebidas"];
export const relatorioCategories = ["Todas as categorias", "Perecíveis", "Laticínios", "Bebidas", "Mercearia Seca", "Operacional"];
export const relatorioStatuses = ["Todos os status", "Ativo", "Em análise", "Concluído", "Arquivado"];

export const sectorLossesReport: SectorLossReport[] = [
  { sector: "Hortifruti", amount: 15590, percentage: 32, color: "#0F4C81" },
  { sector: "Açougue", amount: 11693, percentage: 24, color: "#1565A8" },
  { sector: "Padaria", amount: 8769, percentage: 18, color: "#22C55E" },
  { sector: "Frios", amount: 5846, percentage: 12, color: "#3B82F6" },
  { sector: "Mercearia", amount: 4385, percentage: 9, color: "#64748B" },
  { sector: "Depósito", amount: 2437, percentage: 5, color: "#94A3B8" },
];

export const lossEvolution: LossEvolutionPoint[] = [
  { label: "Jan", losses: 52000, recovered: 8200 },
  { label: "Fev", losses: 48500, recovered: 9100 },
  { label: "Mar", losses: 51200, recovered: 8800 },
  { label: "Abr", losses: 46800, recovered: 10200 },
  { label: "Mai", losses: 44100, recovered: 11500 },
  { label: "Jun", losses: 48720, recovered: 9840 },
];

export const topProductsOccurrences: TopProductOccurrence[] = [
  { product: "Tomate Italiano Kg", count: 48 },
  { product: "Iogurte Natural 170g", count: 42 },
  { product: "Peito de Frango Resfriado", count: 38 },
  { product: "Banana Prata Kg", count: 35 },
  { product: "Pão Francês Unidade", count: 31 },
  { product: "Leite UHT Integral 1L", count: 28 },
];

export const occurrencesByCategory: CategoryOccurrence[] = [
  { category: "Avarias", count: 488, percentage: 38, color: "#0F4C81" },
  { category: "Validades", count: 321, percentage: 25, color: "#22C55E" },
  { category: "Quebras", count: 218, percentage: 17, color: "#F59E0B" },
  { category: "Furtos", count: 128, percentage: 10, color: "#DC2626" },
  { category: "Operacional", count: 129, percentage: 10, color: "#3B82F6" },
];

export const sectorRanking: SectorRanking[] = [
  { sector: "Hortifruti", occurrences: 412, lostValue: 15590, recoveredValue: 3240, riskIndex: 92 },
  { sector: "Açougue", occurrences: 328, lostValue: 11693, recoveredValue: 2180, riskIndex: 85 },
  { sector: "Padaria", occurrences: 256, lostValue: 8769, recoveredValue: 1950, riskIndex: 74 },
  { sector: "Frios", occurrences: 198, lostValue: 5846, recoveredValue: 1420, riskIndex: 68 },
  { sector: "Mercearia", occurrences: 164, lostValue: 4385, recoveredValue: 980, riskIndex: 55 },
  { sector: "Bebidas", occurrences: 142, lostValue: 3920, recoveredValue: 870, riskIndex: 48 },
  { sector: "Depósito", occurrences: 98, lostValue: 2437, recoveredValue: 620, riskIndex: 41 },
];

export const strategicInsights: StrategicInsight[] = [
  {
    id: "1",
    text: "Hortifruti concentra 32% das perdas.",
    icon: "sector",
  },
  {
    id: "2",
    text: "R$ 12.500 foram recuperados nos últimos 30 dias.",
    icon: "recovery",
  },
  {
    id: "3",
    text: "Açougue apresentou redução de 18% nas ocorrências.",
    icon: "trend",
  },
];

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function getRiskLevel(index: number): { label: string; className: string } {
  if (index >= 80) return { label: "Crítico", className: "bg-red-50 text-red-700 ring-red-200" };
  if (index >= 60) return { label: "Alto", className: "bg-amber-50 text-amber-700 ring-amber-200" };
  if (index >= 40) return { label: "Médio", className: "bg-blue-50 text-blue-700 ring-blue-200" };
  return { label: "Baixo", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" };
}
