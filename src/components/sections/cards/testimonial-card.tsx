import { Star } from "lucide-react";
import type { Testimonial } from "@/types/landing";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-sky-500/30 transition-colors">
      <div className="flex text-amber-400 gap-0.5 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/15 bg-slate-700/70">
          <img
            src={testimonial.avatar}
            alt={`Foto de ${testimonial.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = "/clientes/avatar-sem-foto.png";
            }}
          />
        </div>
        <div>
          <div className="text-white font-semibold text-sm lg:text-base">{testimonial.name}</div>
          <div className="text-slate-500 text-xs lg:text-sm">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
