import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PricingCard } from "@/components/sections/cards/pricing-card";
import { SectionHeader } from "@/components/sections/section-header";
import { PLANS } from "@/content/landing";

export function Pricing() {
  return (
    <Section id="planos" className="bg-white">
      <Container>
        <SectionHeader
          badge="Planos"
          title="Escolha o plano ideal"
          description="Sem mensalidade e sem surpresas. Você paga uma vez e a página é sua."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
