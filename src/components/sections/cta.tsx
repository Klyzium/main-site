import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-indigo-600">
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
            size="lg"
            className="h-14 rounded-full bg-sky-600 px-10 text-base font-bold text-white shadow-2xl shadow-black/20 hover:bg-sky-500"
          >
            Falar no WhatsApp agora
          </Button>
        </div>
      </Container>
    </Section>
  );
}
