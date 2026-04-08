import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CTA() {
  return (
    <Section className="bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
      </div>

      <Container className="relative max-w-3xl text-center">
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
      </Container>
    </Section>
  );
}
