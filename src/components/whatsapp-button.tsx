import { WHATSAPP_URL } from "@/lib/whatsapp";

export function WhatsappButton() {
  return (
    <div className="fixed bottom-5 right-10 sm:right-8 z-[90]">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="whatsapp-pulse group relative block rounded-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      >
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-md">
          Tire suas duvidas
        </span>
        <img src="/redesSociais/whatsapp.png" alt="WhatsApp" className="h-14 w-14 sm:h-16 sm:w-16" />
      </a>
    </div>
  );
}
