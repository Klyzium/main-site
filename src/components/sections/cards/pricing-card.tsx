import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "@/types/landing";

interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8",
        plan.highlight
          ? "bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-2xl shadow-blue-900/30 ring-2 ring-sky-500/50 scale-105"
          : "bg-slate-50 border border-slate-100 text-slate-900",
      )}
    >
      {plan.badge ? (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge className="bg-sky-500 text-white border-0 shadow-lg shadow-sky-500/30 px-4 rounded-full font-bold text-xs">
            {plan.badge}
          </Badge>
        </div>
      ) : null}

      <div className="mb-6">
        <h3 className={cn("text-lg lg:text-xl font-bold mb-1", plan.highlight ? "text-sky-300" : "text-slate-500")}>
          {plan.name}
        </h3>
        {plan.oldPrice ? (
          <div className={cn("text-sm lg:text-base line-through mb-1", plan.highlight ? "text-slate-400" : "text-slate-400")}>
            {plan.oldPrice}
          </div>
        ) : null}
        <div className="flex items-end gap-2">
          <span className={cn("text-4xl lg:text-5xl font-black", plan.highlight ? "text-white" : "text-slate-900")}>
            {plan.price}
          </span>
        </div>
        <span className="text-sm lg:text-base text-slate-400">{plan.period}</span>
        {plan.idealFor ? (
          <p className={cn("mt-3 text-sm leading-relaxed", plan.highlight ? "text-slate-300" : "text-slate-600")}>
            {plan.idealFor}
          </p>
        ) : null}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckCircle
              className={cn("w-4 h-4 flex-shrink-0", plan.highlight ? "text-sky-300" : "text-sky-500")}
            />
            <span className={cn("text-sm lg:text-base", plan.highlight ? "text-slate-300" : "text-slate-600")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full rounded-xl h-12 lg:h-14 font-bold text-base lg:text-lg",
          plan.highlight
            ? "bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/30"
            : "bg-slate-900 hover:bg-slate-800 text-white",
        )}
      >
        {plan.cta}
      </Button>
    </div>
  );
}
