import { ArrowRight, ChevronDown, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SOCIAL_INITIALS } from "@/content/landing";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <Badge className="mb-6 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur rounded-full px-4 py-1.5 text-sm font-semibold inline-flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            Landing pages que convertem de verdade
          </Badge>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Transforme{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                cliques em clientes
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
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
            Criamos landing pages estratégicas para negócios que querem crescer de verdade. Design, copy e tecnologia
            trabalhando pelos seus resultados.
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

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {SOCIAL_INITIALS.map((initials) => (
                <div
                  key={initials}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-0.5">+200 clientes satisfeitos em todo o Brasil</p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="relative">
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
                    <div key={i} className="flex-1 h-16 rounded-lg bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-950 text-xs font-black px-3 py-1.5 rounded-full shadow-lg rotate-3">
              +11% conversão
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Novo lead chegou
            </div>
          </div>
        </div>
      </Container>

      <a
        href="#como-funciona"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
