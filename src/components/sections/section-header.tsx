import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("text-center mb-16", className)}>
      <Badge
        className={cn(
          "mb-4 rounded-full px-4 font-semibold",
          isDark
            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
            : "bg-emerald-50 text-emerald-600 border-emerald-100",
        )}
      >
        {badge}
      </Badge>
      <h2
        className={cn(
          "text-4xl lg:text-5xl font-black leading-tight mb-4",
          isDark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-lg max-w-2xl mx-auto", isDark ? "text-slate-400" : "text-slate-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
