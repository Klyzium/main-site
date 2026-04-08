import type {
  Benefit,
  FaqItemData,
  NavLink,
  Plan,
  Stat,
  Step,
  Testimonial,
} from "@/types/landing";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export const BENEFITS: Benefit[] = [
  {
    icon: "mousePointerClick",
    title: "Alta taxa de conversão",
    description:
      "Páginas criadas para transformar visitantes em clientes com CTAs estratégicos e copy persuasiva.",
  },
  {
    icon: "zap",
    title: "Velocidade de carregamento",
    description:
      "Sites ultrarrápidos que não perdem leads por lentidão, com performance no topo do PageSpeed.",
  },
  {
    icon: "target",
    title: "Foco no objetivo",
    description:
      "Cada seção é construída com propósito para guiar o visitante até a ação desejada sem distrações.",
  },
  {
    icon: "barChart3",
    title: "Métricas e análises",
    description:
      "Integração com Google Analytics, Meta Pixel e heatmaps para otimização contínua.",
  },
  {
    icon: "shield",
    title: "Segurança e confiabilidade",
    description:
      "Hospedagem confiável, SSL incluso e uptime estável para não perder oportunidades.",
  },
  {
    icon: "rocket",
    title: "Entrega rápida",
    description:
      "Do briefing à página no ar em até 5 dias úteis, sem burocracia e sem enrolação.",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Briefing estratégico",
    description:
      "Entendemos seu negócio, público-alvo e objetivos de conversão em uma reunião focada.",
  },
  {
    number: "02",
    title: "Design e copywriting",
    description:
      "Nossa equipe cria layout e textos persuasivos alinhados à sua identidade visual.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "A página é desenvolvida com tecnologia moderna, responsiva e otimizada para performance.",
  },
  {
    number: "04",
    title: "Revisão e publicação",
    description:
      "Você aprova, ajustamos os detalhes finais e publicamos no seu domínio com agilidade.",
  },
];

export const RESULTS_STATS: Stat[] = [
  { value: "+200", label: "Clientes atendidos" },
  { value: "11%", label: "Conversão média atingida" },
  { value: "5 dias", label: "Prazo médio de entrega" },
  { value: "98%", label: "Satisfação dos clientes" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fernanda Costa",
    role: "Nutricionista",
    stars: 5,
    text: "Minha taxa de conversão saiu de 2% para 11% após a nova landing page. O investimento se pagou na primeira semana.",
    avatar: "FC",
  },
  {
    name: "Ricardo Melo",
    role: "Dono de academia",
    stars: 5,
    text: "Profissionalismo do início ao fim. A página ficou moderna, rápida e converte muito bem.",
    avatar: "RM",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Consultora de imagem",
    stars: 5,
    text: "Antes eu tinha um site bonito, mas que não vendia. Agora tenho uma máquina de captação de leads.",
    avatar: "AL",
  },
];

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "R$ 997",
    period: "pagamento único",
    features: [
      "1 landing page",
      "Até 5 seções",
      "Formulário de captação",
      "Responsiva (mobile)",
      "Integração com WhatsApp",
      "Entrega em 5 dias úteis",
    ],
    cta: "Começar agora",
  },
  {
    name: "Pro",
    price: "R$ 1.997",
    period: "pagamento único",
    highlight: true,
    badge: "Mais popular",
    features: [
      "1 landing page",
      "Seções ilimitadas",
      "Copywriting incluso",
      "Pixel e Analytics",
      "Pop-up de saída",
      "Teste A/B básico",
      "Suporte por 30 dias",
    ],
    cta: "Quero o Pro",
  },
  {
    name: "Scale",
    price: "R$ 3.497",
    period: "pagamento único",
    features: [
      "Até 3 landing pages",
      "Funil completo",
      "Copywriting avançado",
      "Integração com CRM",
      "Automação de e-mail",
      "Relatório mensal",
      "Suporte por 90 dias",
    ],
    cta: "Falar com consultor",
  },
];

export const FAQS: FaqItemData[] = [
  {
    question: "Quanto tempo leva para ficar pronta?",
    answer:
      "O prazo padrão é de 5 dias úteis após a aprovação do briefing. No plano Scale, pode chegar a 10 dias úteis.",
  },
  {
    question: "Preciso ter domínio e hospedagem?",
    answer:
      "Se você já tiver, ótimo. Se não, ajudamos na contratação. A hospedagem do primeiro ano pode ser inclusa dependendo do plano.",
  },
  {
    question: "Vocês fazem manutenção após a entrega?",
    answer:
      "Sim. Os planos Pro e Scale incluem suporte técnico pós-entrega. Fora desse período, oferecemos pacotes avulsos.",
  },
  {
    question: "A landing page é responsiva para celular?",
    answer:
      "Sim. Todas as páginas são desenvolvidas com abordagem mobile-first para funcionar bem em qualquer dispositivo.",
  },
  {
    question: "Posso pedir alterações durante o projeto?",
    answer:
      "Sim. Cada plano inclui rodadas de revisão. Mudanças fora do escopo são orçadas à parte.",
  },
];

export const SOCIAL_INITIALS = ["FC", "RM", "AL", "JP"];
