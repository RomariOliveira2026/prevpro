export type OccurrenceType =
  | "Produto Vencido"
  | "Avaria"
  | "Quebra"
  | "Furto"
  | "Ruptura"
  | "Temperatura"
  | "Divergência de Peso"
  | "Etiqueta Incorreta"
  | "Não Conformidade"
  | "Outros";

export type OccurrencePriority = "Crítica" | "Alta" | "Média" | "Baixa";

export type OccurrenceStatus =
  | "Aberta"
  | "Em Análise"
  | "Em Tratativa"
  | "Resolvida"
  | "Arquivada";

export interface Ocorrencia {
  id: string;
  date: string;
  store: string;
  sector: string;
  type: OccurrenceType;
  product: string;
  responsible: string;
  priority: OccurrencePriority;
  value: number;
  status: OccurrenceStatus;
}

export interface OccurrenceInsight {
  id: string;
  text: string;
  icon: "chart" | "sector" | "savings";
}

export const ocorrenciasKpiData = [
  {
    title: "📋 Total de Ocorrências",
    value: "1.284",
    change: "+12%",
    changeLabel: "vs. mês anterior",
    trend: "up" as const,
    icon: "occurrences",
  },
  {
    title: "🔴 Críticas",
    value: "47",
    change: "+5",
    changeLabel: "nas últimas 24h",
    trend: "warning" as const,
    icon: "critical",
  },
  {
    title: "🟡 Em Análise",
    value: "128",
    change: "Ativas",
    changeLabel: "aguardando decisão",
    trend: "warning" as const,
    icon: "analysis",
  },
  {
    title: "🟢 Resolvidas",
    value: "892",
    change: "+18%",
    changeLabel: "taxa de resolução",
    trend: "up" as const,
    icon: "resolved",
  },
  {
    title: "💰 Valor Financeiro Associado",
    value: "R$ 42.850",
    change: "Jun/2026",
    changeLabel: "perdas registradas",
    trend: "warning" as const,
    icon: "financial",
  },
];

export const ocorrenciaStores = ["Todas as lojas", "Loja Centro", "Loja Norte", "Loja Sul"];
export const ocorrenciaSectors = ["Todos os setores", "Hortifruti", "Açougue", "Padaria", "Frios", "Mercearia", "Depósito", "Bebidas"];
export const ocorrenciaTypes = [
  "Todos os tipos",
  "Produto Vencido",
  "Avaria",
  "Quebra",
  "Furto",
  "Ruptura",
  "Temperatura",
  "Divergência de Peso",
  "Etiqueta Incorreta",
  "Não Conformidade",
  "Outros",
];
export const ocorrenciaPriorities = ["Todas as prioridades", "Crítica", "Alta", "Média", "Baixa"];
export const ocorrenciaStatuses = ["Todos os status", "Aberta", "Em Análise", "Em Tratativa", "Resolvida", "Arquivada"];
export const ocorrenciaPeriods = ["Todos os períodos", "Hoje", "Últimos 7 dias", "Últimos 30 dias", "Este mês"];

export const ocorrenciaFormStores = ["Loja Centro", "Loja Norte", "Loja Sul"];
export const ocorrenciaFormSectors = ["Hortifruti", "Açougue", "Padaria", "Frios", "Mercearia", "Depósito", "Bebidas"];
export const ocorrenciaFormResponsibles = ["Ana Silva", "Carlos Mendes", "Roberto Lima", "Fernanda Costa", "Juliana Alves"];
export const ocorrenciaFormTypes = ocorrenciaTypes.slice(1);
export const ocorrenciaFormPriorities = ocorrenciaPriorities.slice(1);
export const ocorrenciaFormStatuses: OccurrenceStatus[] = ["Aberta", "Em Análise", "Em Tratativa"];

export const occurrenceInsights: OccurrenceInsight[] = [
  {
    id: "1",
    text: "Avarias representam 38% das ocorrências.",
    icon: "chart",
  },
  {
    id: "2",
    text: "Hortifruti concentra o maior volume de registros.",
    icon: "sector",
  },
  {
    id: "3",
    text: "R$ 12.500 em perdas foram evitados este mês.",
    icon: "savings",
  },
];

export const ocorrencias: Ocorrencia[] = [
  {
    id: "1",
    date: "13/06/2026 09:15",
    store: "Loja Centro",
    sector: "Hortifruti",
    type: "Produto Vencido",
    product: "Tomate Italiano Kg",
    responsible: "Juliana Alves",
    priority: "Crítica",
    value: 485.9,
    status: "Aberta",
  },
  {
    id: "2",
    date: "13/06/2026 08:42",
    store: "Loja Centro",
    sector: "Frios",
    type: "Avaria",
    product: "Iogurte Natural 170g",
    responsible: "Ana Silva",
    priority: "Alta",
    value: 312.4,
    status: "Em Tratativa",
  },
  {
    id: "3",
    date: "12/06/2026 19:30",
    store: "Loja Sul",
    sector: "Bebidas",
    type: "Furto",
    product: "Vinho Tinto 750ml",
    responsible: "Carlos Mendes",
    priority: "Crítica",
    value: 1890.0,
    status: "Em Análise",
  },
  {
    id: "4",
    date: "12/06/2026 16:20",
    store: "Loja Norte",
    sector: "Padaria",
    type: "Divergência de Peso",
    product: "Pão Francês Unidade",
    responsible: "Marcos Pereira",
    priority: "Média",
    value: 78.5,
    status: "Aberta",
  },
  {
    id: "5",
    date: "12/06/2026 14:55",
    store: "Loja Centro",
    sector: "Açougue",
    type: "Quebra",
    product: "Peito de Frango Resfriado",
    responsible: "Carlos Mendes",
    priority: "Alta",
    value: 620.0,
    status: "Em Análise",
  },
  {
    id: "6",
    date: "12/06/2026 11:10",
    store: "Loja Norte",
    sector: "Frios",
    type: "Temperatura",
    product: "Câmara Fria — Setor Frios",
    responsible: "Roberto Lima",
    priority: "Crítica",
    value: 2450.0,
    status: "Em Tratativa",
  },
  {
    id: "7",
    date: "11/06/2026 18:40",
    store: "Loja Sul",
    sector: "Mercearia",
    type: "Ruptura",
    product: "Arroz Integral 1kg",
    responsible: "Patrícia Souza",
    priority: "Média",
    value: 156.8,
    status: "Resolvida",
  },
  {
    id: "8",
    date: "11/06/2026 15:10",
    store: "Loja Centro",
    sector: "Bebidas",
    type: "Avaria",
    product: "Refrigerante 2L",
    responsible: "Fernanda Costa",
    priority: "Baixa",
    value: 94.2,
    status: "Resolvida",
  },
  {
    id: "9",
    date: "11/06/2026 10:25",
    store: "Loja Norte",
    sector: "Mercearia",
    type: "Etiqueta Incorreta",
    product: "Azeite Extra Virgem 500ml",
    responsible: "Patrícia Souza",
    priority: "Baixa",
    value: 45.0,
    status: "Arquivada",
  },
  {
    id: "10",
    date: "10/06/2026 09:00",
    store: "Loja Centro",
    sector: "Depósito",
    type: "Não Conformidade",
    product: "Palete Bebidas — Depósito",
    responsible: "Roberto Lima",
    priority: "Alta",
    value: 1280.0,
    status: "Resolvida",
  },
  {
    id: "11",
    date: "10/06/2026 07:50",
    store: "Loja Sul",
    sector: "Hortifruti",
    type: "Produto Vencido",
    product: "Banana Prata Kg",
    responsible: "Juliana Alves",
    priority: "Média",
    value: 210.3,
    status: "Resolvida",
  },
  {
    id: "12",
    date: "09/06/2026 20:15",
    store: "Loja Norte",
    sector: "Frios",
    type: "Outros",
    product: "Queijo Minas Frescal",
    responsible: "Ana Silva",
    priority: "Baixa",
    value: 88.0,
    status: "Arquivada",
  },
];

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function getRecentOccurrences(list: Ocorrencia[] = ocorrencias): Ocorrencia[] {
  return [...list]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);
}
