import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { TestimonialCard } from "@/components/sections/cards/testimonial-card";
import { CLIENT_LOGOS, TESTIMONIALS } from "@/content/landing";
import { gsap } from "@/lib/gsap";

const LOGO_LOOP = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
const TESTIMONIAL_LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

export function Results() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const logoTrackRef = useRef<HTMLDivElement | null>(null);
  const testimonialTrackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (logoTrackRef.current) {
        gsap.fromTo(
          logoTrackRef.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            duration: 50,
            ease: "none",
            repeat: -1,
          },
        );
      }

      if (testimonialTrackRef.current) {
        gsap.fromTo(
          testimonialTrackRef.current,
          { xPercent: 0 },
          {
            xPercent: -50,
            duration: 42,
            ease: "none",
            repeat: -1,
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="resultados" className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950">
      <div ref={sectionRef}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container className="relative">
          <SectionHeader
            title="Conheça nossos clientes"
            description="Projetos reais, marcas reais e resultados construídos com estratégia digital."
            tone="dark"
          />

          <div className="mb-6 overflow-hidden py-5">
            <div ref={logoTrackRef} className="flex w-max items-center gap-1 md:gap-3">
              {LOGO_LOOP.map((client, index) => (
                <a
                  key={`${client.name}-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-16 min-w-[132px] items-center justify-center px-1 md:h-20 md:min-w-[200px] md:px-4"
                  aria-label={`Visitar site de ${client.name}`}
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-h-8 w-auto object-contain opacity-85 transition-opacity group-hover:opacity-100 md:max-h-11"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="mb-8 text-center text-sm text-slate-400">Clique em uma marca para visitar o site do cliente.</p>

          <div className="overflow-hidden">
            <div ref={testimonialTrackRef} className="flex w-max gap-6">
              {TESTIMONIAL_LOOP.map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}`} className="w-[320px] max-w-[85vw] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
