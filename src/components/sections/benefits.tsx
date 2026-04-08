import { BarChart3, MousePointerClick, Rocket, Shield, Target, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { BenefitCard } from "@/components/sections/cards/benefit-card";
import { SectionHeader } from "@/components/sections/section-header";
import { BENEFITS } from "@/content/landing";
import type { BenefitIconKey } from "@/types/landing";

const iconMap: Record<BenefitIconKey, ReactNode> = {
  mousePointerClick: <MousePointerClick className="w-7 h-7" />,
  zap: <Zap className="w-7 h-7" />,
  target: <Target className="w-7 h-7" />,
  barChart3: <BarChart3 className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
  rocket: <Rocket className="w-7 h-7" />,
};

export function Benefits() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader
          title={
            <>
              Tudo que você precisa para <span className="text-emerald-500">converter mais</span>
            </>
          }
          description="Nossas páginas são construídas com estratégia, não só com design. Cada elemento existe para fazer você vender mais."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={iconMap[benefit.icon]}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
