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
    title: "Sites focados em conversão",
    description:
      "Estrutura pensada para transformar visitantes em contatos reais no WhatsApp, com CTA estratégico em pontos-chave.",
  },
  {
    icon: "zap",
    title: "Performance profissional",
    description:
      "Sites rápidos e estáveis, prontos para mobile e desktop, sem perder oportunidades por lentidão.",
  },
  {
    icon: "target",
    title: "SEO básico ou avançado",
    description:
      "Você escolhe o nível de SEO para melhorar o posicionamento no Google e atrair mais clientes qualificados.",
  },
  {
    icon: "barChart3",
    title: "Decisão com dados",
    description:
      "Integração com Google Analytics e Pixel para acompanhar resultados e evoluir o projeto com clareza.",
  },
  {
    icon: "shield",
    title: "Hospedagem própria",
    description:
      "Infraestrutura própria com suporte próximo, estabilidade e acompanhamento contínuo do seu site.",
  },
  {
    icon: "rocket",
    title: "Pagamento sem travar caixa",
    description:
      "Modelo mensal com boleto, Pix ou Pix parcelado, sem obrigar pacote anual pago de uma vez.",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    description:
      "Entendemos seu negócio, seu público e o objetivo comercial do site em uma conversa consultiva.",
  },
  {
    number: "02",
    title: "Design e posicionamento",
    description:
      "Criamos um visual premium com texto orientado para gerar autoridade e incentivar o contato.",
  },
  {
    number: "03",
    title: "Desenvolvimento e SEO",
    description:
      "Publicamos seu site com performance, responsividade e configurações de SEO no nível contratado.",
  },
  {
    number: "04",
    title: "Entrega e acompanhamento",
    description:
      "Seu site vai ao ar com hospedagem própria e suporte humanizado para manter tudo funcionando.",
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
    text: "Nosso site novo gerou mais contatos no WhatsApp em poucas semanas. Atendimento impecável e muito próximo.",
    avatar: "FC",
  },
  {
    name: "Ricardo Melo",
    role: "Dono de academia",
    stars: 5,
    text: "Visual premium, site rápido e estratégia clara de conversão. Projeto acima do que eu esperava.",
    avatar: "RM",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Consultora de imagem",
    stars: 5,
    text: "Fizemos o site com hospedagem mensal e ficou muito mais fácil de manter. Processo leve e profissional.",
    avatar: "AL",
  },
];

export const PLANS: Plan[] = [
  {
    name: "Site Essencial",
    price: "R$ 1.497",
    period: "implantação",
    features: [
      "Site profissional de apresentação",
      "Até 5 seções",
      "Integração com WhatsApp",
      "SEO básico inicial",
      "Mobile e desktop",
      "Entrega em até 5 dias úteis",
    ],
    cta: "Começar agora",
  },
  {
    name: "Site Pro",
    price: "R$ 2.497",
    period: "implantação",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Site completo com seções ilimitadas",
      "Copy estratégica de conversão",
      "SEO avançado on-page",
      "Pixel + Analytics",
      "Ajustes de performance",
      "Suporte inicial pós-entrega",
    ],
    cta: "Quero o Pro",
  },
  {
    name: "Site + Software",
    price: "Sob consulta",
    period: "projeto personalizado",
    features: [
      "Site + desenvolvimento sob medida",
      "Fluxos e funcionalidades específicas",
      "SEO técnico avançado",
      "Integrações com sistemas",
      "Hospedagem própria opcional",
      "Acompanhamento consultivo",
    ],
    cta: "Falar com consultor",
  },
];

export const FAQS: FaqItemData[] = [
  {
    question: "Vocês fazem somente landing page?",
    answer:
      "Não. Nosso foco principal é criação de sites profissionais, além de landing pages e desenvolvimento de software sob medida.",
  },
  {
    question: "O site já inclui SEO?",
    answer:
      "Sim. Você pode contratar SEO básico ou avançado, de acordo com o objetivo de posicionamento no Google.",
  },
  {
    question: "Como funciona a hospedagem?",
    answer:
      "Temos hospedagem própria opcional, com suporte próximo e plano mensal para facilitar a continuidade do projeto.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Trabalhamos com boleto, Pix e Pix parcelado no modelo mensal, evitando o custo anual fechado em uma única cobrança.",
  },
  {
    question: "Quais segmentos vocês atendem?",
    answer:
      "Atendemos médicos, dentistas, advogados e pequenos e médios comércios que buscam presença digital profissional.",
  },
];

export const SOCIAL_INITIALS = ["FC", "RM", "AL", "JP"];

