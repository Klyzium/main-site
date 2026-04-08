import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { StatCard } from "@/components/sections/cards/stat-card";
import { TestimonialCard } from "@/components/sections/cards/testimonial-card";
import { SectionHeader } from "@/components/sections/section-header";
import { RESULTS_STATS, TESTIMONIALS } from "@/content/landing";

export function Results() {
  return (
    <Section id="resultados" className="bg-gradient-to-br from-slate-900 to-emerald-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <SectionHeader
          title="Números que comprovam"
          description="Mais de 200 negócios já escolheram a Klyzium para crescer online."
          tone="dark"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RESULTS_STATS.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
