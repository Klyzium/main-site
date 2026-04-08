import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  tone = "light",
  className,
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("text-center mb-16", className)}>
      <h2
        className={cn(
          "text-4xl lg:text-6xl font-black leading-tight mb-4",
          isDark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-lg lg:text-xl max-w-3xl mx-auto", isDark ? "text-slate-400" : "text-slate-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
