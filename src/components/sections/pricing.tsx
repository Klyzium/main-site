import { useLayoutEffect, useRef } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { MAINTENANCE_PLANS, PLANS } from "@/content/landing";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PricingCard } from "@/components/sections/cards/pricing-card";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Pricing() {
  const pricingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-bonus-card]",
        { y: 0, scale: 1 },
        {
          y: -6,
          scale: 1.012,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );

      gsap.fromTo(
        "[data-bonus-shine]",
        { xPercent: -140, autoAlpha: 0.05 },
        {
          xPercent: 180,
          autoAlpha: 0.45,
          duration: 2.6,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 1.1,
        },
      );

      gsap.to("[data-bonus-sparkle]", {
        rotation: 16,
        scale: 1.2,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        "[data-bonus-glow-a]",
        { autoAlpha: 0.45, scale: 0.95 },
        { autoAlpha: 0.9, scale: 1.12, duration: 1.6, ease: "sine.inOut", repeat: -1, yoyo: true },
      );

      gsap.fromTo(
        "[data-bonus-glow-b]",
        { autoAlpha: 0.4, scale: 0.94 },
        { autoAlpha: 0.8, scale: 1.08, duration: 1.9, ease: "sine.inOut", repeat: -1, yoyo: true },
      );
    }, pricingRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="planos" className="bg-white">
      <Container>
        <div ref={pricingRef}>
          <SectionHeader
            title="Escolha o plano ideal"
            description="Projeto profissional com investimento único e opção de hospedagem mensal para performance e manutenção contínua."
          />

          <div className="grid grid-cols-1 gap-8 items-start md:grid-cols-3">
            {PLANS.map((plan) => ( 
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-14">
            <div className="mb-6 flex flex-col gap-3 text-center">
              <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">Planos de hospedagem e manutenção</h3>
              <p className="text-slate-600">
                Suporte contínuo para manter seu projeto atualizado, seguro e em evolução constante.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2">
              {MAINTENANCE_PLANS.map((item) => (
                <div
                  key={item.name}
                  className={cn(
                    "relative rounded-2xl p-6 pt-9 text-center lg:p-7 lg:pt-10",
                    item.highlight
                      ? "scale-[1.02] bg-gradient-to-br from-slate-900 to-blue-950 text-white ring-2 ring-sky-500/50 shadow-2xl shadow-blue-900/30"
                      : "border border-slate-100 bg-slate-50 text-slate-900",
                  )}
                >
                  {item.badge ? (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1 text-xs font-bold",
                          item.highlight
                            ? "border border-sky-200/70 bg-sky-200 text-sky-950 shadow-sm shadow-sky-900/20"
                            : "bg-sky-100 text-sky-700",
                        )}
                      >
                        {item.badge}
                      </span>
                    </div>
                  ) : null}

                  <h4 className={cn("text-xl font-black mb-2", item.highlight ? "text-white" : "text-slate-900")}>{item.name}</h4>
                  <p className={cn("mb-6 text-3xl font-black", item.highlight ? "text-sky-300" : "text-sky-600")}>{item.price}</p>

                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start justify-center gap-3 text-left">
                        <CheckCircle className={cn("mt-0.5 h-4 w-4 flex-shrink-0", item.highlight ? "text-sky-300" : "text-sky-500")} />
                        <span className={cn("text-sm lg:text-base", item.highlight ? "text-slate-300" : "text-slate-600")}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={cn(
                      "mt-6 h-12 w-full rounded-xl font-bold text-base lg:h-14 lg:text-lg",
                      item.highlight
                        ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400"
                        : "bg-slate-900 text-white hover:bg-slate-800",
                    )}
                  >
                    <a
                      href={buildWhatsAppUrl(`Olá! Tenho interesse no plano ${item.name}. Pode me passar mais detalhes?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contratar
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div
              data-bonus-card
              className="relative mt-8 overflow-hidden rounded-2xl border border-sky-300/60 bg-gradient-to-r from-sky-50 to-indigo-50 p-5 shadow-lg shadow-sky-200/60"
            >
              <div data-bonus-shine className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 -skew-x-12 bg-white/50 blur-xl" />
              <div data-bonus-glow-a className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-300/40 blur-2xl" />
              <div data-bonus-glow-b className="pointer-events-none absolute -left-8 -bottom-10 h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl" />
              <p className="relative flex items-center justify-center gap-2 text-center text-sm font-bold text-sky-900 lg:text-base">
                <Sparkles data-bonus-sparkle className="h-4 w-4" />
                Bônus especial: 1º ano de domínio grátis para contratação no plano anual.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
