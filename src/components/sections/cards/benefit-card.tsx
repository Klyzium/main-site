import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="group border border-slate-100 transition-all duration-300 rounded-2xl hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm lg:text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
