import type {
  Benefit,
  ClientLogo,
  FaqItemData,
  MaintenancePlan,
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
      "Aceitamos os meios de pagamento disponíveis no Mercado Pago, como Pix, boleto, cartão de crédito e opções de parcelamento.",
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
    name: "KELI DELICATA PMU",
    role: "Micropigmentadora",
    stars: 5,
    text: "Fiz meu site com ele e ficou perfeito, entregou antes do prazo  previsto. Recomendo!",
    avatar: "/clientes/keli.png",
  },
  {
    name: "Museu da Imigração da Ilha das Flores",
    role: "Museu de história",
    stars: 5,
    text: "Visual premium, site rápido e estratégia clara de conversão. Projeto acima do que eu esperava.",
    avatar: "/clientes/carimboP.png",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Consultora de imagem",
    stars: 5,
    text: "Fizemos o site com hospedagem mensal e ficou muito mais fácil de manter. Processo leve e profissional.",
    avatar: "/clientes/avatar-sem-foto.png",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "Cliente 01",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 02",
    logo: "/logoClientes/miif.png",
    url: "https://www.miif.org.br",
  },
  {
    name: "Cliente 03",
    logo: "/logoClientes/keliDelicata.jpg",
    url: "https://www.kelidelicatapmu.com.br",
  },
  {
    name: "Cliente 04",
    logo: "/logoClientes/redeIntegratea.png",
    url: "https://www.redeintegratea.com.br",
  },
  {
    name: "Cliente 05",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 06",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 07",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 08",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 09",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
  {
    name: "Cliente 10",
    logo: "/logo/logo.png",
    url: "https://klyzium.com.br",
  },
];

export const PLANS: Plan[] = [
  {
    name: "Plano Essencial",
    oldPrice: "R$ 899,90",
    price: "R$ 799,90",
    period: "investimento único",
    features: [
      "Criação de landing page com até 5 seções estratégicas",
      "Inserção otimizada de fotos e vídeos",
      "Layout totalmente responsivo para mobile e desktop",
      "Integração com WhatsApp",
      "Integração com redes sociais",
      "SEO básico para mecanismos de busca",
    ],
    cta: "Começar agora",
  },
  {
    name: "Plano Performance",
    oldPrice: "R$ 2.499,90",
    price: "R$ 2.299,90",
    period: "investimento único",
    highlight: true,
    badge: "Mais escolhido",
    features: [
      "Inclui tudo do Essencial",
      "Criação de site institucional com até 5 páginas",
      "Configuração completa do Google Meu Negócio",
      "Cadastro de produtos e serviços no perfil",
      "Integração com redes sociais e botão de WhatsApp",
      "Estruturação estratégica do perfil",
      "Estratégia de avaliações com palavras-chave",
      "Bônus: QR Code para captação de avaliações",
    ],
    cta: "Quero crescer",
  },
  {
    name: "Plano Sistema",
    price: "Sob consulta",
    period: "projeto personalizado",
    idealFor: "Ideal para clínicas, equipes, operações com fluxo interno e comércios de pequeno e médio porte.",
    features: [
      "Desenvolvimento de sistema web sob medida",
      "Mapeamento de fluxo, regras de negócio e automações",
      "Painéis e funcionalidades específicas para operação diária",
      "Integrações com ferramentas e serviços externos",
      "Arquitetura preparada para crescimento do negócio",
    ],
    cta: "Falar com consultor",
  },
];

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: "Essencial",
    badge: "Base sólida",
    features: [
      "Backup semanal do projeto",
      "Atualizações de conteúdo (textos, cores e imagens)",
      "Certificado SSL ativo e monitorado",
    ],
    price: "R$ 29,90/mês",
  },
  {
    name: "Profissional",
    badge: "Mais recomendado",
    highlight: true,
    features: [
      "Inclui tudo do Essencial",
      "Criação ou alteração de seções e páginas",
      "Suporte prioritário para ajustes e dúvidas",
    ],
    price: "R$ 59,90/mês",
  },
];

export const FAQS: FaqItemData[] = [
  {
    question: "Qual plano é ideal para o meu momento?",
    answer:
      "Se você quer validar presença digital com rapidez, o Essencial é o melhor ponto de partida. Para ampliar autoridade e gerar demanda no Google e no WhatsApp, o Performance é o caminho. Quando o objetivo envolve operação interna e automações, recomendamos o Plano Sistema.",
  },
  {
    question: "Vocês fazem apenas site ou também sistema personalizado?",
    answer:
      "Atuamos nas duas frentes. Criamos landing pages e sites institucionais de alta conversão, e também desenvolvemos sistemas web sob medida para clínicas, equipes e operações com fluxo interno.",
  },
  {
    question: "Vocês configuram Google Maps e estratégia de avaliações?",
    answer:
      "Sim. No Plano Performance, estruturamos o Google Meu Negócio com foco em visibilidade local, incluindo produtos e serviços, organização do perfil e estratégia prática para aumentar avaliações qualificadas.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer:
      "Você pode contratar o plano mensal de manutenção para manter o projeto atualizado e seguro. O Essencial cobre backup, SSL e ajustes de conteúdo; o Profissional inclui também alterações de seções/páginas e suporte prioritário.",
  },
  {
    question: "Posso começar com uma landing page e evoluir depois?",
    answer:
      "Sim. Essa é uma estratégia muito comum: começamos com uma landing page focada em geração de contatos e, conforme o negócio cresce, evoluímos para site completo, SEO local avançado e, se necessário, sistema web personalizado.",
  },
  {
    question: "Em quanto tempo meu projeto pode entrar no ar?",
    answer:
      "O prazo depende do escopo, mas projetos enxutos costumam ser entregues com agilidade. Antes de iniciar, alinhamos cronograma, etapas e entregas para você ter previsibilidade total.",
  },
  {
    question: "O domínio e os acessos ficam no meu nome?",
    answer:
      "Sim. Trabalhamos com transparência na estrutura do projeto, com domínio e acessos organizados para garantir segurança e continuidade da sua operação digital.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Trabalhamos com os meios de pagamento disponíveis no Mercado Pago, incluindo Pix, boleto, cartão de crédito e opções de parcelamento, conforme disponibilidade no momento da cobrança.",
  },
];

export const SOCIAL_INITIALS = ["FC", "RM", "AL", "JP"];
