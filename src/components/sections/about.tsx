import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function About() {
  return (
    <Section id="sobre-nos" className="relative overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      <Container className="relative max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-center text-4xl font-black leading-tight text-white lg:text-5xl">
              Sobre Nós
            </h2>

            <p className="mb-6 text-lg text-sky-50 lg:max-w-2xl">
              Somos programadores com experiência em desenvolvimento de sites, sistemas web e automações. Decidimos criar
              a Klyzium para transformar conhecimento técnico em soluções digitais que realmente geram resultado para
              empresas e profissionais.
            </p>

            <p className="mb-10 text-lg text-sky-50 lg:max-w-2xl">
              Unimos estratégia, design e desenvolvimento para entregar projetos com alta performance e visual profissional.
              Nosso compromisso é atuar com transparência, atendimento humano e responsabilidade em
              cada etapa, do planejamento ao suporte pós-entrega.
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-2xl shadow-emerald-500/30 hover:bg-[#1fb357] sm:h-14 sm:px-10 sm:text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <img src="/redesSociais/whatsapp.png" alt="" aria-hidden="true" className="mr-2 h-5 w-5" />
                  Falar com a Klyzium no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src="/logo/logo.png"
              alt="Logo da Klyzium"
              className="w-full max-w-[520px] object-contain opacity-95 drop-shadow-[0_18px_40px_rgba(56,189,248,0.28)]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
