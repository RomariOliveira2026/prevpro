export type ChamadoPrioridade = "Alta" | "Média" | "Baixa";
export type ChamadoStatus = "Aberto" | "Em andamento" | "Resolvido";

export interface Chamado {
  id: string;
  date: string;
  subject: string;
  priority: ChamadoPrioridade;
  status: ChamadoStatus;
}

export const suporteKpiData = [
  {
    title: "Chamados Abertos",
    value: "3",
    change: "2 novos",
    changeLabel: "esta semana",
    trend: "warning" as const,
    icon: "alerts",
  },
  {
    title: "Tempo Médio",
    value: "4h 20m",
    change: "-18%",
    changeLabel: "resposta inicial",
    trend: "up" as const,
    icon: "resolved",
  },
  {
    title: "Satisfação",
    value: "96%",
    change: "+2%",
    changeLabel: "últimos 30 dias",
    trend: "up" as const,
    icon: "accuracy",
  },
  {
    title: "Status do Sistema",
    value: "Online",
    change: "99,9%",
    changeLabel: "uptime mensal",
    trend: "up" as const,
    icon: "monitored",
  },
];

export const chamadosRecentes: Chamado[] = [
  {
    id: "1",
    date: "13/06/2026",
    subject: "Dúvida sobre integração de alertas por WhatsApp",
    priority: "Média",
    status: "Em andamento",
  },
  {
    id: "2",
    date: "12/06/2026",
    subject: "Solicitação de novo usuário administrador",
    priority: "Alta",
    status: "Aberto",
  },
  {
    id: "3",
    date: "11/06/2026",
    subject: "Erro ao exportar relatório em PDF",
    priority: "Alta",
    status: "Resolvido",
  },
  {
    id: "4",
    date: "10/06/2026",
    subject: "Treinamento da equipe de Frios",
    priority: "Baixa",
    status: "Resolvido",
  },
  {
    id: "5",
    date: "09/06/2026",
    subject: "Configuração de sensibilidade da IA",
    priority: "Média",
    status: "Resolvido",
  },
];

export const suporteActions = [
  {
    id: "chamado",
    title: "Abrir chamado",
    description: "Registre uma nova solicitação de suporte",
    icon: "📝",
    accent: "bg-prevpro-blue/10 text-prevpro-blue",
  },
  {
    id: "kb",
    title: "Base de conhecimento",
    description: "Artigos, tutoriais e perguntas frequentes",
    icon: "📚",
    accent: "bg-violet-50 text-violet-700",
  },
  {
    id: "whatsapp",
    title: "Falar no WhatsApp",
    description: "Atendimento direto com nossa equipe",
    icon: "📲",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "status",
    title: "Status do sistema",
    description: "Monitoramento em tempo real da plataforma",
    icon: "🟢",
    accent: "bg-amber-50 text-amber-700",
  },
];
