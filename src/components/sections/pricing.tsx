import { CheckCircle, Sparkles } from "lucide-react";
import { MAINTENANCE_PLANS, PLANS } from "@/content/landing";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PricingCard } from "@/components/sections/cards/pricing-card";
import { SectionHeader } from "@/components/sections/section-header";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="planos" className="bg-white">
      <Container>
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
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-sky-300/60 bg-gradient-to-r from-sky-50 to-indigo-50 p-5 shadow-lg shadow-sky-200/60">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-300/40 blur-2xl animate-pulse" />
            <div className="pointer-events-none absolute -left-8 -bottom-10 h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl animate-pulse" />
            <p className="relative flex items-center justify-center gap-2 text-center text-sm font-bold text-sky-900 lg:text-base">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Bônus especial: 1º ano de domínio grátis para contratação no plano anual.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
