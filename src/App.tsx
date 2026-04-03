import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronDown,
  Star,
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  MousePointerClick,
  Rocket,
  Shield,
  MessageCircle,
  Phone,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const BENEFITS = [
  {
    icon: <MousePointerClick className="w-7 h-7" />,
    title: "Alta Taxa de Conversão",
    desc: "Pages criadas com foco em transformar visitantes em clientes reais, com CTAs estratégicos e copy persuasivo.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Velocidade de Carregamento",
    desc: "Sites ultrarrápidos que não perdem leads por lentidão. Performance no topo do Google PageSpeed.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Foco no Objetivo",
    desc: "Cada seção é construída com propósito: guiar o visitante até a ação desejada sem distração.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Métricas & Análises",
    desc: "Integração com Google Analytics, Meta Pixel e heatmaps para entender e otimizar continuamente.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Segurança & Confiabilidade",
    desc: "Hospedagem confiável, SSL incluso e uptime garantido para nunca perder uma oportunidade.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Entrega Rápida",
    desc: "Da briefing à page no ar em até 5 dias úteis. Sem enrolação, sem burocracia.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Briefing Estratégico",
    desc: "Entendemos seu negócio, público-alvo e objetivos de conversão em uma reunião focada.",
  },
  {
    num: "02",
    title: "Design & Copywriting",
    desc: "Nossa equipe cria o layout e os textos persuasivos alinhados à sua identidade visual.",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "A page é desenvolvida com tecnologia moderna, responsiva e otimizada para performance.",
  },
  {
    num: "04",
    title: "Revisão & Publicação",
    desc: "Você aprova, fazemos os ajustes finais e publicamos no seu domínio em tempo recorde.",
  },
];

const TESTIMONIALS = [
  {
    name: "Fernanda Costa",
    role: "Nutricionista",
    stars: 5,
    text: "Minha taxa de conversão saiu de 2% para 11% após a nova landing page. O investimento se pagou na primeira semana!",
    avatar: "FC",
  },
  {
    name: "Ricardo Melo",
    role: "Dono de Academia",
    stars: 5,
    text: "Profissionalismo do início ao fim. A page ficou exatamente como eu imaginava — moderna, rápida e convertendo muito.",
    avatar: "RM",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Consultora de Imagem",
    stars: 5,
    text: "Antes eu tinha um site bonito mas que não vendia. Agora tenho uma máquina de captação de leads rodando 24h.",
    avatar: "AL",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "R$ 997",
    period: "pagamento único",
    highlight: false,
    features: [
      "1 Landing Page",
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
      "1 Landing Page",
      "Seções ilimitadas",
      "Copywriting incluso",
      "Pixel & Analytics",
      "Pop-up de saída",
      "A/B Test básico",
      "Suporte por 30 dias",
    ],
    cta: "Quero o Pro",
  },
  {
    name: "Scale",
    price: "R$ 3.497",
    period: "pagamento único",
    highlight: false,
    features: [
      "Até 3 Landing Pages",
      "Funil completo",
      "Copywriting avançado",
      "Integração CRM",
      "Automação de e-mail",
      "Relatório mensal",
      "Suporte por 90 dias",
    ],
    cta: "Falar com consultor",
  },
];

const FAQS = [
  {
    q: "Quanto tempo leva para ficar pronta?",
    a: "O prazo padrão é de 5 dias úteis após aprovação do briefing. Para projetos maiores (plano Scale), pode chegar a 10 dias úteis.",
  },
  {
    q: "Preciso ter domínio e hospedagem?",
    a: "Se você já tiver, ótimo! Se não, ajudamos na contratação. A hospedagem para o primeiro ano pode ser inclusa dependendo do plano.",
  },
  {
    q: "Vocês fazem manutenção após a entrega?",
    a: "Sim. Os planos Pro e Scale incluem suporte técnico pós-entrega. Fora do período, oferecemos pacotes de manutenção avulsos.",
  },
  {
    q: "A landing page é responsiva para celular?",
    a: "Sempre. Todas as pages são desenvolvidas mobile-first, garantindo uma experiência perfeita em qualquer dispositivo.",
  },
  {
    q: "Posso pedir alterações durante o projeto?",
    a: "Sim! Cada plano inclui rodadas de revisão. Mudanças fora do escopo são cobradas à parte com orçamento prévio.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className={`font-black text-xl tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
            Klyzium
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                scrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/25 rounded-full px-6"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 font-medium hover:text-emerald-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full mt-2">
            Falar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <Badge className="mb-6 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur rounded-full px-4 py-1.5 text-sm font-semibold inline-flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            Landing Pages que Convertem de Verdade
          </Badge>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Transforme{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                cliques em clientes
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8 Q150 2 298 8"
                  stroke="url(#underline-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#34d399" />
                    <stop offset="1" stopColor="#2dd4bf" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            com páginas de alta conversão
          </h1>

          <p className="text-lg lg:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Criamos landing pages estratégicas e profissionais para negócios que querem
            crescer de verdade. Design, copy e tecnologia a serviço dos seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-2xl shadow-emerald-500/30 rounded-full px-8 h-14 group"
            >
              Quero minha landing page
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 backdrop-blur font-semibold"
            >
              Ver exemplos
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {["FC", "RM", "AL", "JP"].map((init) => (
                <div
                  key={init}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white"
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-0.5">
                +200 clientes satisfeitos em todo o Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Mockup card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* Browser mockup */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 mx-4 bg-slate-700/60 rounded-full px-3 py-1 text-slate-400 text-xs">
                  seudominio.com.br
                </div>
              </div>
              <div className="bg-gradient-to-b from-emerald-900 to-slate-900 p-6 min-h-[280px] flex flex-col gap-4">
                <div className="h-6 w-32 rounded-full bg-emerald-500/40" />
                <div className="h-10 w-full rounded-lg bg-white/10" />
                <div className="h-4 w-3/4 rounded bg-white/5" />
                <div className="h-4 w-1/2 rounded bg-white/5" />
                <div className="mt-4 h-12 w-40 rounded-xl bg-emerald-500/70 flex items-center justify-center">
                  <div className="h-3 w-24 rounded bg-white/60" />
                </div>
                <div className="mt-auto flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-16 rounded-lg bg-white/5 border border-white/10"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-950 text-xs font-black px-3 py-1.5 rounded-full shadow-lg rotate-3">
              +11% conversão 🚀
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Novo lead chegou!
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#como-funciona"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-50 text-emerald-600 border-emerald-100 rounded-full px-4 font-semibold">
            Por que a Klyzium?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Tudo que você precisa para{" "}
            <span className="text-emerald-500">converter mais</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Nossas páginas são construídas com estratégia, não só com design. Cada elemento
            existe para um propósito: fazer você vender mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <Card
              key={b.title}
              className="group border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-50 text-emerald-600 border-emerald-100 rounded-full px-4 font-semibold">
            Processo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Do briefing à publicação em poucos passos. Simples, rápido e sem dor de cabeça.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.num} className="relative flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-emerald-200 flex items-center justify-center mb-6 shadow-md shadow-emerald-50 z-10">
                  <span className="text-2xl font-black text-emerald-500">{s.num}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { value: "+200", label: "Clientes atendidos" },
    { value: "11%", label: "Conversão média atingida" },
    { value: "5 dias", label: "Prazo médio de entrega" },
    { value: "98%", label: "Satisfação dos clientes" },
  ];

  return (
    <section id="resultados" className="py-24 bg-gradient-to-br from-slate-900 to-emerald-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full px-4 font-semibold">
            Resultados reais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Números que comprovam
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Mais de 200 negócios já escolheram a Klyzium para crescer online. Aqui estão os resultados.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur"
            >
              <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-300 mb-2">
                {s.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex text-amber-400 gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-50 text-emerald-600 border-emerald-100 rounded-full px-4 font-semibold">
            Planos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Sem mensalidade, sem surpresa. Você paga uma vez e a page é sua para sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 ${
                p.highlight
                  ? "bg-gradient-to-br from-slate-900 to-emerald-950 text-white shadow-2xl shadow-emerald-900/30 ring-2 ring-emerald-500/50 scale-105"
                  : "bg-slate-50 border border-slate-100 text-slate-900"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-500/30 px-4 rounded-full font-bold text-xs">
                    {p.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${p.highlight ? "text-emerald-400" : "text-slate-500"}`}>
                  {p.name}
                </h3>
                <div className="flex items-end gap-2">
                  <span className={`text-4xl font-black ${p.highlight ? "text-white" : "text-slate-900"}`}>
                    {p.price}
                  </span>
                </div>
                <span className={`text-sm ${p.highlight ? "text-slate-400" : "text-slate-400"}`}>
                  {p.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle
                      className={`w-4 h-4 flex-shrink-0 ${p.highlight ? "text-emerald-400" : "text-emerald-500"}`}
                    />
                    <span className={`text-sm ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl h-12 font-bold ${
                  p.highlight
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-50 text-emerald-600 border-emerald-100 rounded-full px-4 font-semibold">
            Dúvidas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-emerald-500" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Pronto para ter uma página que converte de verdade?
        </h2>
        <p className="text-emerald-50 text-lg mb-10 max-w-xl mx-auto">
          Fale agora com nosso time pelo WhatsApp e receba uma proposta personalizada para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-50 font-bold text-base rounded-full px-10 h-14 shadow-2xl shadow-black/20 group"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 font-semibold"
          >
            <Phone className="mr-2 w-4 h-4" />
            Agendar uma ligação
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-black text-white text-lg">
            Klyzium
          </span>
        </div>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Klyzium. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Results />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}