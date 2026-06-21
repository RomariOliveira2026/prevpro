export type UserRole =
  | "Administrador"
  | "Diretor"
  | "Gerente"
  | "Supervisor"
  | "Operador";

export type UserStatus = "Ativo" | "Inativo" | "Bloqueado";

export interface Usuario {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  store: string;
  lastAccess: string;
  status: UserStatus;
  initials: string;
}

export interface ProfileDistribution {
  role: UserRole;
  count: number;
  percentage: number;
  color: string;
}

export const usuariosKpiData = [
  {
    title: "Usuários Ativos",
    value: "142",
    change: "+8",
    changeLabel: "novos este mês",
    trend: "up" as const,
    icon: "users",
  },
  {
    title: "Administradores",
    value: "6",
    change: "Rede",
    changeLabel: "acesso total",
    trend: "up" as const,
    icon: "admin",
  },
  {
    title: "Gerentes",
    value: "18",
    change: "12 lojas",
    changeLabel: "gestão local",
    trend: "up" as const,
    icon: "manager",
  },
  {
    title: "Operadores",
    value: "98",
    change: "69%",
    changeLabel: "da base total",
    trend: "up" as const,
    icon: "operator",
  },
];

export const usuarioStores = ["Todas as lojas", "Rede SuperMax", "Loja Centro", "Loja Norte", "Loja Sul"];
export const usuarioRoles = ["Todos os cargos", "Administrador", "Diretor", "Gerente", "Supervisor", "Operador"];
export const usuarioStatuses = ["Todos os status", "Ativo", "Inativo", "Bloqueado"];

export const profileDistribution: ProfileDistribution[] = [
  { role: "Operador", count: 98, percentage: 69, color: "#64748B" },
  { role: "Gerente", count: 18, percentage: 13, color: "#0F4C81" },
  { role: "Supervisor", count: 14, percentage: 10, color: "#22C55E" },
  { role: "Diretor", count: 6, percentage: 4, color: "#3B82F6" },
  { role: "Administrador", count: 6, percentage: 4, color: "#DC2626" },
];

export const usuarios: Usuario[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@supermax.com.br",
    role: "Gerente",
    store: "Loja Centro",
    lastAccess: "13/06/2026 09:42",
    status: "Ativo",
    initials: "AS",
  },
  {
    id: "2",
    name: "Carlos Mendes",
    email: "carlos.mendes@supermax.com.br",
    role: "Supervisor",
    store: "Loja Centro",
    lastAccess: "13/06/2026 08:15",
    status: "Ativo",
    initials: "CM",
  },
  {
    id: "3",
    name: "Roberto Lima",
    email: "roberto.lima@supermax.com.br",
    role: "Administrador",
    store: "Rede SuperMax",
    lastAccess: "13/06/2026 07:30",
    status: "Ativo",
    initials: "RL",
  },
  {
    id: "4",
    name: "Fernanda Costa",
    email: "fernanda.costa@supermax.com.br",
    role: "Gerente",
    store: "Loja Sul",
    lastAccess: "12/06/2026 18:20",
    status: "Ativo",
    initials: "FC",
  },
  {
    id: "5",
    name: "Juliana Alves",
    email: "juliana.alves@supermax.com.br",
    role: "Operador",
    store: "Loja Norte",
    lastAccess: "12/06/2026 16:45",
    status: "Ativo",
    initials: "JA",
  },
  {
    id: "6",
    name: "Marcos Pereira",
    email: "marcos.pereira@supermax.com.br",
    role: "Operador",
    store: "Loja Centro",
    lastAccess: "12/06/2026 14:10",
    status: "Ativo",
    initials: "MP",
  },
  {
    id: "7",
    name: "Patrícia Souza",
    email: "patricia.souza@supermax.com.br",
    role: "Supervisor",
    store: "Loja Norte",
    lastAccess: "11/06/2026 11:30",
    status: "Ativo",
    initials: "PS",
  },
  {
    id: "8",
    name: "Ricardo Nunes",
    email: "ricardo.nunes@supermax.com.br",
    role: "Diretor",
    store: "Rede SuperMax",
    lastAccess: "11/06/2026 09:00",
    status: "Ativo",
    initials: "RN",
  },
  {
    id: "9",
    name: "Camila Rocha",
    email: "camila.rocha@supermax.com.br",
    role: "Operador",
    store: "Loja Sul",
    lastAccess: "10/06/2026 17:55",
    status: "Inativo",
    initials: "CR",
  },
  {
    id: "10",
    name: "Diego Martins",
    email: "diego.martins@supermax.com.br",
    role: "Operador",
    store: "Loja Centro",
    lastAccess: "08/06/2026 10:20",
    status: "Bloqueado",
    initials: "DM",
  },
  {
    id: "11",
    name: "Luciana Ferreira",
    email: "luciana.ferreira@supermax.com.br",
    role: "Gerente",
    store: "Loja Norte",
    lastAccess: "13/06/2026 06:50",
    status: "Ativo",
    initials: "LF",
  },
  {
    id: "12",
    name: "Paulo Henrique",
    email: "paulo.henrique@supermax.com.br",
    role: "Administrador",
    store: "Rede SuperMax",
    lastAccess: "12/06/2026 22:10",
    status: "Ativo",
    initials: "PH",
  },
];

export function getRecentAccesses(list: Usuario[] = usuarios): Usuario[] {
  return [...list]
    .sort((a, b) => b.lastAccess.localeCompare(a.lastAccess))
    .slice(0, 5);
}
