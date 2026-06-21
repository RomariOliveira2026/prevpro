export type AlertType =
  | "Validade Próxima"
  | "Produto Vencido"
  | "Temperatura Fora do Padrão"
  | "Ruptura de Estoque"
  | "Divergência de Peso"
  | "Avaria"
  | "Quebra"
  | "Furto";

export type AlertPriority = "Crítica" | "Média" | "Baixa";

export type AlertStatus =
  | "Aberto"
  | "Em Análise"
  | "Em Tratativa"
  | "Resolvido"
  | "Arquivado";

export interface Alerta {
  id: string;
  date: string;
  product: string;
  type: AlertType;
  store: string;
  sector: string;
  category: string;
  priority: AlertPriority;
  status: AlertStatus;
  responsible: string;
}

export const alertasKpiData = [
  {
    title: "🔴 Alertas Críticos",
    value: "18",
    change: "+3",
    changeLabel: "nas últimas 24h",
    trend: "warning" as const,
    icon: "critical",
  },
  {
    title: "🟡 Em Atenção",
    value: "34",
    change: "Média/Baixa",
    changeLabel: "aguardando ação",
    trend: "warning" as const,
    icon: "attention",
  },
  {
    title: "🟢 Resolvidos",
    value: "127",
    change: "+22",
    changeLabel: "esta semana",
    trend: "up" as const,
    icon: "resolved",
  },
  {
    title: "📊 Total de Alertas",
    value: "312",
    change: "100%",
    changeLabel: "rede SuperMax",
    trend: "up" as const,
    icon: "total-alerts",
  },
  {
    title: "Valor Financeiro em Risco",
    value: "R$ 24.850",
    change: "+8,2%",
    changeLabel: "exposição estimada",
    trend: "warning" as const,
    icon: "financial",
  },
];

export interface AlertCategoryData {
  category: string;
  count: number;
  percentage: number;
  color: string;
}

export const alertasPorCategoria: AlertCategoryData[] = [
  { category: "Validade", count: 89, percentage: 28, color: "#0F4C81" },
  { category: "Ruptura", count: 62, percentage: 20, color: "#DC2626" },
  { category: "Avaria", count: 48, percentage: 15, color: "#F59E0B" },
  { category: "Furto", count: 41, percentage: 13, color: "#7C3AED" },
  { category: "Temperatura", count: 38, percentage: 12, color: "#0891B2" },
  { category: "Peso", count: 34, percentage: 12, color: "#22C55E" },
];

export interface AlertEvolutionPoint {
  label: string;
  alertas: number;
}

export const alertasEvolucao: AlertEvolutionPoint[] = [
  { label: "15/05", alertas: 8 },
  { label: "18/05", alertas: 12 },
  { label: "21/05", alertas: 9 },
  { label: "24/05", alertas: 14 },
  { label: "27/05", alertas: 11 },
  { label: "30/05", alertas: 16 },
  { label: "02/06", alertas: 13 },
  { label: "05/06", alertas: 18 },
  { label: "08/06", alertas: 15 },
  { label: "11/06", alertas: 20 },
  { label: "14/06", alertas: 17 },
];

export const alertaStores = ["Todas as lojas", "Loja Centro", "Loja Norte", "Loja Sul"];
export const alertaSectors = ["Todos os setores", "Hortifruti", "Açougue", "Padaria", "Frios", "Mercearia", "Depósito", "Bebidas"];
export const alertaCategories = ["Todas as categorias", "Perecíveis", "Laticínios", "Bebidas", "Mercearia Seca", "Padaria", "Operacional"];
export const alertaPriorities = ["Todas as prioridades", "Crítica", "Média", "Baixa"];
export const alertaStatuses = ["Todos os status", "Aberto", "Em Análise", "Em Tratativa", "Resolvido", "Arquivado"];

export const alertas: Alerta[] = [
  {
    id: "1",
    date: "13/06/2026 08:42",
    product: "Iogurte Natural 170g",
    type: "Validade Próxima",
    store: "Loja Centro",
    sector: "Frios",
    category: "Laticínios",
    priority: "Crítica",
    status: "Aberto",
    responsible: "Ana Silva",
  },
  {
    id: "2",
    date: "13/06/2026 07:15",
    product: "Peito de Frango Resfriado",
    type: "Produto Vencido",
    store: "Loja Centro",
    sector: "Açougue",
    category: "Perecíveis",
    priority: "Crítica",
    status: "Em Tratativa",
    responsible: "Carlos Mendes",
  },
  {
    id: "3",
    date: "13/06/2026 06:30",
    product: "Câmara Fria — Setor Frios",
    type: "Temperatura Fora do Padrão",
    store: "Loja Norte",
    sector: "Frios",
    category: "Operacional",
    priority: "Crítica",
    status: "Aberto",
    responsible: "Roberto Lima",
  },
  {
    id: "4",
    date: "12/06/2026 22:10",
    product: "Cerveja Lata 350ml",
    type: "Ruptura de Estoque",
    store: "Loja Sul",
    sector: "Bebidas",
    category: "Bebidas",
    priority: "Crítica",
    status: "Em Análise",
    responsible: "Fernanda Costa",
  },
  {
    id: "5",
    date: "12/06/2026 19:45",
    product: "Tomate Italiano Kg",
    type: "Produto Vencido",
    store: "Loja Sul",
    sector: "Hortifruti",
    category: "Perecíveis",
    priority: "Crítica",
    status: "Aberto",
    responsible: "Juliana Alves",
  },
  {
    id: "6",
    date: "12/06/2026 16:20",
    product: "Queijo Minas Frescal",
    type: "Validade Próxima",
    store: "Loja Norte",
    sector: "Frios",
    category: "Laticínios",
    priority: "Média",
    status: "Em Tratativa",
    responsible: "Ana Silva",
  },
  {
    id: "7",
    date: "12/06/2026 14:55",
    product: "Pão Francês Unidade",
    type: "Divergência de Peso",
    store: "Loja Centro",
    sector: "Padaria",
    category: "Padaria",
    priority: "Média",
    status: "Aberto",
    responsible: "Marcos Pereira",
  },
  {
    id: "8",
    date: "12/06/2026 11:30",
    product: "Azeite Extra Virgem 500ml",
    type: "Avaria",
    store: "Loja Norte",
    sector: "Mercearia",
    category: "Mercearia Seca",
    priority: "Média",
    status: "Em Análise",
    responsible: "Patrícia Souza",
  },
  {
    id: "9",
    date: "11/06/2026 18:40",
    product: "Vinho Tinto 750ml",
    type: "Furto",
    store: "Loja Centro",
    sector: "Bebidas",
    category: "Bebidas",
    priority: "Crítica",
    status: "Em Análise",
    responsible: "Carlos Mendes",
  },
  {
    id: "10",
    date: "11/06/2026 15:10",
    product: "Refrigerante 2L",
    type: "Quebra",
    store: "Loja Sul",
    sector: "Bebidas",
    category: "Bebidas",
    priority: "Baixa",
    status: "Resolvido",
    responsible: "Fernanda Costa",
  },
  {
    id: "11",
    date: "11/06/2026 10:25",
    product: "Leite UHT Integral 1L",
    type: "Validade Próxima",
    store: "Loja Norte",
    sector: "Frios",
    category: "Laticínios",
    priority: "Média",
    status: "Resolvido",
    responsible: "Ana Silva",
  },
  {
    id: "12",
    date: "10/06/2026 09:00",
    product: "Palete Bebidas — Depósito",
    type: "Avaria",
    store: "Loja Centro",
    sector: "Depósito",
    category: "Operacional",
    priority: "Baixa",
    status: "Arquivado",
    responsible: "Roberto Lima",
  },
  {
    id: "13",
    date: "10/06/2026 07:50",
    product: "Banana Prata Kg",
    type: "Ruptura de Estoque",
    store: "Loja Sul",
    sector: "Hortifruti",
    category: "Perecíveis",
    priority: "Média",
    status: "Resolvido",
    responsible: "Juliana Alves",
  },
  {
    id: "14",
    date: "09/06/2026 20:15",
    product: "Presunto Cozido 200g",
    type: "Divergência de Peso",
    store: "Loja Norte",
    sector: "Frios",
    category: "Perecíveis",
    priority: "Baixa",
    status: "Arquivado",
    responsible: "Patrícia Souza",
  },
];

export function getCriticalAlerts(alertList: Alerta[] = alertas): Alerta[] {
  return alertList
    .filter((a) => a.priority === "Crítica" && a.status !== "Resolvido" && a.status !== "Arquivado")
    .slice(0, 5);
}
