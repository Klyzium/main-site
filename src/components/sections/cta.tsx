import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function CTA() {
  return (
    <Section className="relative overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      <Container className="relative max-w-3xl text-center">
        <h2 className="mb-6 text-4xl font-black leading-tight text-white lg:text-5xl">
          Pronto para ter um site premium que gera contatos reais?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-sky-50">
          Fale com nosso time no WhatsApp e receba uma proposta personalizada para o seu negócio, com atendimento
          humano do início ao pós-entrega.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-[#25D366] px-10 text-base font-bold text-white shadow-2xl shadow-emerald-500/30 hover:bg-[#1fb357]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <img src="/redesSociais/whatsapp.png" alt="" aria-hidden="true" className="mr-2 h-5 w-5" />
              Falar no WhatsApp agora
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
