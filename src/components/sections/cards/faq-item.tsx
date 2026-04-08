import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm lg:text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 text-emerald-500",
          )}
        />
      </button>
      {isOpen ? (
        <div className="px-6 pb-5">
          <p className="text-slate-500 text-sm lg:text-base leading-relaxed">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}
