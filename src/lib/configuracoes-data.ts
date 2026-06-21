export type SensibilidadeNivel = "Baixa" | "Média" | "Alta";

export interface EmpresaSettings {
  nome: string;
  cnpj: string;
  endereco: string;
  responsavel: string;
}

export interface AlertasSettings {
  email: boolean;
  whatsapp: boolean;
  push: boolean;
  frequencia: string;
}

export interface IaSettings {
  sensibilidade: SensibilidadeNivel;
  frequenciaAnalise: string;
  ativa: boolean;
  detectarPadroes: boolean;
  gerarAlertas: boolean;
  preverRupturas: boolean;
  identificarReincidentes: boolean;
  recomendarAcoes: boolean;
}

export interface SegurancaSettings {
  politicaSenha: string;
  tempoSessao: string;
  doisFatores: boolean;
  trocaObrigatoriaSenha: boolean;
  bloqueioTentativas: boolean;
  sessoesSimultaneas: string;
}

export interface SistemaSettings {
  backupAutomatico: boolean;
  logs: boolean;
  versao: string;
  tema: TemaSistema;
}

export interface IdentidadeSettings {
  corPrincipal: string;
  corSecundaria: string;
}

export type TemaSistema = "Claro" | "Escuro" | "Automático";

export interface PlanoAtual {
  nome: string;
  lojas: number;
  usuarios: number;
}

export interface ConfiguracoesState {
  empresa: EmpresaSettings;
  alertas: AlertasSettings;
  ia: IaSettings;
  seguranca: SegurancaSettings;
  sistema: SistemaSettings;
  identidade: IdentidadeSettings;
  plano: PlanoAtual;
}

export const defaultConfiguracoes: ConfiguracoesState = {
  empresa: {
    nome: "Rede SuperMax",
    cnpj: "12.345.678/0001-90",
    endereco: "Av. Brasil, 1500 — Centro, São Paulo — SP",
    responsavel: "Carlos Mendes",
  },
  alertas: {
    email: true,
    whatsapp: true,
    push: false,
    frequencia: "Imediato",
  },
  ia: {
    sensibilidade: "Alta",
    frequenciaAnalise: "A cada 6 horas",
    ativa: true,
    detectarPadroes: true,
    gerarAlertas: true,
    preverRupturas: true,
    identificarReincidentes: true,
    recomendarAcoes: true,
  },
  seguranca: {
    politicaSenha: "Forte (mín. 10 caracteres)",
    tempoSessao: "8 horas",
    doisFatores: true,
    trocaObrigatoriaSenha: true,
    bloqueioTentativas: true,
    sessoesSimultaneas: "3 sessões",
  },
  sistema: {
    backupAutomatico: true,
    logs: true,
    versao: "PrevPro v1.0.0",
    tema: "Claro",
  },
  identidade: {
    corPrincipal: "#0F4C81",
    corSecundaria: "#22C55E",
  },
  plano: {
    nome: "Enterprise",
    lojas: 12,
    usuarios: 142,
  },
};

export const sensibilidadeNiveis: SensibilidadeNivel[] = ["Baixa", "Média", "Alta"];

export const alertaFrequencias = [
  "Imediato",
  "A cada 15 minutos",
  "A cada 1 hora",
  "Diário",
  "Semanal",
];

export const iaFrequencias = [
  "A cada 1 hora",
  "A cada 6 horas",
  "A cada 12 horas",
  "Diário",
];

export const politicasSenha = [
  "Básica (mín. 6 caracteres)",
  "Média (mín. 8 caracteres)",
  "Forte (mín. 10 caracteres)",
  "Muito forte (mín. 12 caracteres + símbolos)",
];

export const temposSessao = [
  "30 minutos",
  "1 hora",
  "4 horas",
  "8 horas",
  "24 horas",
];

export const sessoesSimultaneasOpcoes = [
  "1 sessão",
  "2 sessões",
  "3 sessões",
  "5 sessões",
  "Ilimitado",
];

export const temasSistema: TemaSistema[] = ["Claro", "Escuro", "Automático"];

export const iaRecursos = [
  { key: "detectarPadroes" as const, label: "Detectar padrões de perda", description: "Identifica tendências recorrentes de perdas por setor" },
  { key: "gerarAlertas" as const, label: "Gerar alertas automáticos", description: "Cria alertas proativos com base em anomalias detectadas" },
  { key: "preverRupturas" as const, label: "Prever rupturas", description: "Antecipa rupturas de estoque com base no giro" },
  { key: "identificarReincidentes" as const, label: "Identificar produtos reincidentes", description: "Mapeia produtos com ocorrências repetidas" },
  { key: "recomendarAcoes" as const, label: "Recomendar ações preventivas", description: "Sugere medidas corretivas personalizadas" },
];

export const configuracoesKpiData = [
  {
    title: "Módulos Ativos",
    value: "5/5",
    change: "100%",
    changeLabel: "seções configuradas",
    trend: "up" as const,
    icon: "accuracy",
  },
  {
    title: "Canais de Alerta",
    value: "2",
    change: "Ativos",
    changeLabel: "email e WhatsApp",
    trend: "up" as const,
    icon: "alerts",
  },
  {
    title: "IA PrevPro",
    value: "Ativa",
    change: "Alta",
    changeLabel: "sensibilidade atual",
    trend: "up" as const,
    icon: "ai-alerts",
  },
  {
    title: "Nível de Segurança",
    value: "Alto",
    change: "2FA",
    changeLabel: "autenticação reforçada",
    trend: "up" as const,
    icon: "admin",
  },
];

export type SettingsTabId =
  | "empresa"
  | "alertas"
  | "ia"
  | "seguranca"
  | "sistema";

export const settingsTabs: {
  id: SettingsTabId;
  label: string;
  icon: string;
  description: string;
}[] = [
  {
    id: "empresa",
    label: "Empresa",
    icon: "🏢",
    description: "Dados cadastrais e responsável",
  },
  {
    id: "alertas",
    label: "Alertas",
    icon: "🚨",
    description: "Canais e frequência de notificações",
  },
  {
    id: "ia",
    label: "Inteligência Artificial",
    icon: "🧠",
    description: "Sensibilidade e análises automáticas",
  },
  {
    id: "seguranca",
    label: "Segurança",
    icon: "🔒",
    description: "Senhas, sessão e autenticação",
  },
  {
    id: "sistema",
    label: "Sistema",
    icon: "⚙️",
    description: "Backup, logs e versão",
  },
];
