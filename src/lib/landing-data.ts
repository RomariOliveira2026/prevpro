export const quickBenefits = [
  { icon: "📈", title: "Menos perdas, mais lucro" },
  { icon: "📊", title: "Decisões com dados em tempo real" },
  { icon: "🧠", title: "IA para antecipar riscos" },
];

export const painPoints = [
  {
    icon: "📅",
    title: "Produtos vencendo sem controle",
    description: "Perdas silenciosas no estoque por falta de monitoramento de validades.",
  },
  {
    icon: "💥",
    title: "Quebras e avarias não registradas",
    description: "Ocorrências operacionais sem rastreio nem responsável definido.",
  },
  {
    icon: "👁️",
    title: "Falta de visão por setor",
    description: "Gestores sem visibilidade de onde as perdas realmente acontecem.",
  },
  {
    icon: "📉",
    title: "Decisões tomadas sem dados",
    description: "Ações corretivas baseadas em intuição, não em indicadores.",
  },
];

export const modules = [
  { icon: "📊", title: "Dashboard Executivo", description: "KPIs, gráficos e visão consolidada da rede." },
  { icon: "📦", title: "Gestão de Validades", description: "Monitoramento de lotes, prazos e valor em risco." },
  { icon: "🚨", title: "Central de Alertas", description: "Notificações em tempo real por canal e prioridade." },
  { icon: "📝", title: "Ocorrências", description: "Registro e tratativa de perdas operacionais." },
  { icon: "📈", title: "Relatórios", description: "Análises gerenciais e exportação para decisão." },
  { icon: "🧠", title: "Inteligência Artificial", description: "Previsões, padrões e recomendações automáticas." },
  { icon: "👥", title: "Usuários e Permissões", description: "Controle de acesso por cargo, loja e perfil." },
];

export const benefits = [
  "Redução de perdas operacionais",
  "Controle de produtos próximos ao vencimento",
  "Alertas em tempo real",
  "Indicadores financeiros",
  "Relatórios para decisão",
  "Visão por loja, setor e categoria",
];

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    description: "Ideal para uma loja começando a profissionalizar a prevenção de perdas.",
    features: [
      "1 loja",
      "Controle de validades",
      "Ocorrências",
      "Alertas básicos",
    ],
    cta: "Começar agora",
    ctaHref: "/demo",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "R$ 497",
    period: "/mês",
    description: "Para operações em crescimento que precisam de inteligência e relatórios.",
    features: [
      "Até 5 lojas",
      "Relatórios",
      "Inteligência",
      "Exportações",
      "WhatsApp",
    ],
    cta: "Começar agora",
    ctaHref: "/demo",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para redes e atacarejos com operação complexa e múltiplas unidades.",
    features: [
      "Redes e atacarejos",
      "Multi-loja",
      "IA avançada",
      "Suporte prioritário",
    ],
    cta: "Solicitar proposta",
    ctaHref: "/demo",
    highlighted: false,
  },
];

export const storeCountOptions = [
  "1 loja",
  "2 a 5 lojas",
  "6 a 12 lojas",
  "13 a 50 lojas",
  "Mais de 50 lojas",
];
