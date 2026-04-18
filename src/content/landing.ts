import type {
  Benefit,
  ClientLogo,
  DemoProject,
  FaqItemData,
  MaintenancePlan,
  NavLink,
  Plan,
  Step,
  Testimonial,
} from "@/types/landing";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre Nós", href: "#sobre-nos" },
  { label: "FAQ", href: "#faq" },
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Klyzium/@-22.9065325,-43.0892401,17z/data=!3m1!4b1!4m6!3m5!1s0x99854424ed4853:0x98ff254427c77ec8!8m2!3d-22.9065325!4d-43.0866652!16s%2Fg%2F11z5r6t3xm?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D";
export const GOOGLE_REVIEWS_RATING = "5,0";
export const GOOGLE_REVIEWS_COUNT = 26;

export const BENEFITS: Benefit[] = [
  {
    icon: "mousePointerClick",
    title: "Sites que geram conversão",
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
    title: "SEO, criacao de sistemas e aplicativos",
    description:
      "Voce escolhe o nivel de SEO e o escopo de criacao de sistemas, desenvolvimento de sistema e aplicativos para crescer com consistencia.",
  },
  {
    icon: "barChart3",
    title: "Decisão com dados",
    description:
      "Integração com Google Analytics para acompanhar resultados e evoluir o projeto com clareza.",
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

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "KELI DELICATA PMU",
    role: "Micropigmentadora",
    stars: 5,
    text: "Fiz meu site com ele e ficou perfeito, entregou antes do prazo  previsto. Recomendo!",
    avatar: "/clientes/keli.png",
  },
  {
    name: "Museu da I. da Ilha das Flores",
    role: "Museu de história",
    stars: 5,
    text: "Projeto de revitalização do site do museu da imigração muito bem feito.",
    avatar: "/clientes/carimboP.png",
  },
  {
    name: "Jeazon Costa",
    role: "Jornalista",
    stars: 5,
    text: "Atendimento impecável, site responsivo e com ótima performance. Superou minhas expectativas em todos os sentidos.",
    avatar: "/logoClientes/jph.png",
  },
  {
    name: "Jaqueline da Conceição",
    role: "Psicanalista Clínica",
    stars: 5,
    text: "Super indico, ótimo trabalho.",
    avatar: "/clientes/jaqueline.png",
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
    logo: "/clientes/carimboP.png",
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
    logo: "/logoClientes/jph.png",
    url: "https://jornaldaprimeirahora.com.br",
  },
  {
    name: "Cliente 06",
    logo: "/logoClientes/jaqueline.png",
    url: "https://www.jaquelinepsicanalista.com.br/",
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
    price: "R$ 959,90",
    pixPrice: 'R$ 799,90',
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
    price: "R$ 2.649,90",
    pixPrice: 'R$ 2.299,00',
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
    pixPrice: '',
    period: "projeto personalizado",
    idealFor: "Ideal para clínicas, equipes, operações com fluxo interno e comércios de pequeno e médio porte.",
    features: [
      "Criacao de sistemas web e aplicativos sob medida",
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
    name: "Hospedagem Essencial",
    badge: "Base sólida",
    features: [
      "Backup semanal do projeto",
      "Atualizações de conteúdo (textos, cores e imagens)",
      "Certificado SSL ativo e monitorado",
    ],
    price: "R$ 29,90/mês",
  },
  {
    name: "Hospedagem Profissional",
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
      "Atuamos nas duas frentes. Criamos landing pages e sites institucionais de alta conversao, e tambem fazemos criacao de sistemas, desenvolvimento de sistema e aplicativos sob medida para clinicas, equipes e operacoes com fluxo interno.",
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

export const DEMO_PROJECTS: DemoProject[] = [
  {
    title: "Landing para Advocacia",
    niche: "Advogados",
    images: [
      "/demos/advogado/demo-advogado.png",
      "/demos/advogado/demo-ad1.png",
      "/demos/advogado/demo-ad2.png",
      "/demos/advogado/demo-ad3.png",
    ],
    accentFrom: "#38bdf8",
    accentTo: "#6366f1",
  },
  {
    title: "Landing para Clínica Odontológica",
    niche: "Dentistas",
    images: [
      "/demos/dentista/demo-dentista.png",
      "/demos/dentista/demo-dent1.png",
      "/demos/dentista/demo-dent2.png",
      "/demos/dentista/demo-dent3.png",
    ],
    accentFrom: "#22d3ee",
    accentTo: "#06b6d4",
  },
  {
    title: "Landing para Clínica Veterinária",
    niche: "Veterinários",
    images: [
      "/demos/veterinaria/demo-vet.png",
      "/demos/veterinaria/demo-vet1.png",
      "/demos/veterinaria/demo-vet2.png",
      "/demos/veterinaria/demo-vet3.png",
    ],
    accentFrom: "#60a5fa",
    accentTo: "#22d3ee",
  },
  {
    title: "Landing para Estética Avançada",
    niche: "Esteticistas",
    images: [
      "/demos/estetica/demo-est.png",
      "/demos/estetica/demo-est1.png",
      "/demos/estetica/demo-est2.png",
      "/demos/estetica/demo-est3.png",
    ],
    accentFrom: "#a78bfa",
    accentTo: "#f472b6",
  },
  {
    title: "Landing para Escritório Contábil",
    niche: "Contador",
    images: [
      "/demos/contador/demo-contador.png",
      "/demos/contador/demo-cont1.png",
      "/demos/contador/demo-cont2.png",
      "/demos/contador/demo-cont3.png",
    ],
    accentFrom: "#34d399",
    accentTo: "#22c55e",
  },
  {
    title: "Landing para Psicologia",
    niche: "Psicologia",
    images: ["/demos/psicologia/demo-psi2.png", "/demos/psicologia/demo-psi3.png", "/demos/psicologia/demo-psi4.png", "/demos/psicologia/demo-psi5.png"],
    accentFrom: "#c084fc",
    accentTo: "#60a5fa",
  },
];
