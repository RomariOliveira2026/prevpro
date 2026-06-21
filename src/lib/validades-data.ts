export type ValidityStatus = "Normal" | "Atenção" | "Crítico" | "Vencido";

export interface ValidadeProduct {
  id: string;
  name: string;
  code: string;
  batch: string;
  manufactureDate: string;
  expiryDate: string;
  quantity: number;
  stockValue: number;
  daysRemaining: number;
  store: string;
  sector: string;
  category: string;
}

export function getValidityStatus(daysRemaining: number): ValidityStatus {
  if (daysRemaining <= 0) return "Vencido";
  if (daysRemaining <= 14) return "Crítico";
  if (daysRemaining <= 30) return "Atenção";
  return "Normal";
}

export const validadesKpiData = [
  {
    title: "Produtos Monitorados",
    value: "248",
    change: "+18",
    changeLabel: "novos este mês",
    trend: "up" as const,
    icon: "monitored",
  },
  {
    title: "Em Atenção",
    value: "34",
    change: "15–30 dias",
    changeLabel: "requerem monitoramento",
    trend: "warning" as const,
    icon: "attention",
  },
  {
    title: "Críticos",
    value: "12",
    change: "1–14 dias",
    changeLabel: "ação imediata",
    trend: "warning" as const,
    icon: "critical",
  },
  {
    title: "Vencidos",
    value: "5",
    change: "0 dias",
    changeLabel: "retirada obrigatória",
    trend: "down" as const,
    icon: "expired",
  },
  {
    title: "Valor em Risco",
    value: "R$ 24.850",
    change: "+6,4%",
    changeLabel: "exposição financeira",
    trend: "warning" as const,
    icon: "financial",
  },
];

export const validadeStores = ["Todas as lojas", "Loja Centro", "Loja Norte", "Loja Sul"];
export const validadeSectors = ["Todos os setores", "Hortifruti", "Açougue", "Padaria", "Frios", "Mercearia", "Depósito"];
export const validadeCategories = ["Todas as categorias", "Perecíveis", "Laticínios", "Bebidas", "Mercearia Seca", "Padaria"];
export const validadeStatuses = ["Todos os status", "Normal", "Atenção", "Crítico", "Vencido"];

export const validadeProducts: ValidadeProduct[] = [
  {
    id: "1",
    name: "Iogurte Natural 170g",
    code: "PRD-00421",
    batch: "LT-2026-0412",
    manufactureDate: "10/05/2026",
    expiryDate: "15/06/2026",
    quantity: 48,
    stockValue: 864,
    daysRemaining: 2,
    store: "Loja Centro",
    sector: "Frios",
    category: "Laticínios",
  },
  {
    id: "2",
    name: "Peito de Frango Resfriado",
    code: "PRD-00887",
    batch: "LT-2026-0388",
    manufactureDate: "08/06/2026",
    expiryDate: "14/06/2026",
    quantity: 22,
    stockValue: 1540,
    daysRemaining: 1,
    store: "Loja Centro",
    sector: "Açougue",
    category: "Perecíveis",
  },
  {
    id: "3",
    name: "Queijo Minas Frescal",
    code: "PRD-00315",
    batch: "LT-2026-0401",
    manufactureDate: "02/06/2026",
    expiryDate: "16/06/2026",
    quantity: 36,
    stockValue: 2320,
    daysRemaining: 3,
    store: "Loja Norte",
    sector: "Frios",
    category: "Laticínios",
  },
  {
    id: "4",
    name: "Suco de Laranja Integral 1L",
    code: "PRD-01204",
    batch: "LT-2026-0375",
    manufactureDate: "20/05/2026",
    expiryDate: "18/06/2026",
    quantity: 64,
    stockValue: 1920,
    daysRemaining: 5,
    store: "Loja Sul",
    sector: "Mercearia",
    category: "Bebidas",
  },
  {
    id: "5",
    name: "Pão de Forma Integral",
    code: "PRD-00672",
    batch: "LT-2026-0420",
    manufactureDate: "11/06/2026",
    expiryDate: "19/06/2026",
    quantity: 30,
    stockValue: 450,
    daysRemaining: 6,
    store: "Loja Centro",
    sector: "Padaria",
    category: "Padaria",
  },
  {
    id: "6",
    name: "Leite UHT Integral 1L",
    code: "PRD-00198",
    batch: "LT-2026-0350",
    manufactureDate: "15/04/2026",
    expiryDate: "22/06/2026",
    quantity: 120,
    stockValue: 3600,
    daysRemaining: 9,
    store: "Loja Norte",
    sector: "Frios",
    category: "Laticínios",
  },
  {
    id: "7",
    name: "Alface Americana Unidade",
    code: "PRD-02110",
    batch: "LT-2026-0435",
    manufactureDate: "10/06/2026",
    expiryDate: "25/06/2026",
    quantity: 85,
    stockValue: 425,
    daysRemaining: 12,
    store: "Loja Centro",
    sector: "Hortifruti",
    category: "Perecíveis",
  },
  {
    id: "8",
    name: "Presunto Cozido Fatiado 200g",
    code: "PRD-00745",
    batch: "LT-2026-0399",
    manufactureDate: "01/06/2026",
    expiryDate: "28/06/2026",
    quantity: 42,
    stockValue: 1260,
    daysRemaining: 15,
    store: "Loja Sul",
    sector: "Frios",
    category: "Perecíveis",
  },
  {
    id: "9",
    name: "Arroz Integral 1kg",
    code: "PRD-01532",
    batch: "LT-2026-0280",
    manufactureDate: "10/01/2026",
    expiryDate: "10/08/2026",
    quantity: 200,
    stockValue: 2800,
    daysRemaining: 58,
    store: "Loja Norte",
    sector: "Mercearia",
    category: "Mercearia Seca",
  },
  {
    id: "10",
    name: "Requeijão Cremoso 200g",
    code: "PRD-00267",
    batch: "LT-2026-0310",
    manufactureDate: "05/05/2026",
    expiryDate: "12/06/2026",
    quantity: 18,
    stockValue: 324,
    daysRemaining: -1,
    store: "Loja Centro",
    sector: "Frios",
    category: "Laticínios",
  },
  {
    id: "11",
    name: "Tomate Italiano Kg",
    code: "PRD-01988",
    batch: "LT-2026-0441",
    manufactureDate: "08/06/2026",
    expiryDate: "11/06/2026",
    quantity: 55,
    stockValue: 275,
    daysRemaining: -2,
    store: "Loja Sul",
    sector: "Hortifruti",
    category: "Perecíveis",
  },
  {
    id: "12",
    name: "Azeite Extra Virgem 500ml",
    code: "PRD-01105",
    batch: "LT-2025-1204",
    manufactureDate: "15/09/2025",
    expiryDate: "15/09/2026",
    quantity: 76,
    stockValue: 4560,
    daysRemaining: 94,
    store: "Loja Norte",
    sector: "Mercearia",
    category: "Mercearia Seca",
  },
];
