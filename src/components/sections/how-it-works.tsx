import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { STEPS } from "@/content/landing";

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-slate-50">
      <Container>
        <SectionHeader
          title="Como funciona"
          description="Da estratégia até o site no ar com SEO e suporte. Processo consultivo, rápido e sem complicação."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-sky-200 flex items-center justify-center mb-6 shadow-md shadow-sky-100 z-10">
                  <span className="text-2xl font-black text-sky-500">{step.number}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm lg:text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

