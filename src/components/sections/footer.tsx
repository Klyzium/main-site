import { useState } from "react";
import { Container } from "@/components/layout/container";
import { TermsModal } from "@/components/sections/cards/terms-modal";

export function Footer() {
  const logoSrc = "/logo/logo.png";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-slate-400 py-8 md:py-10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="Logo Klyzium" className="h-10 md:h-12 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-base font-bold tracking-[0.14em] text-slate-100">KLYZIUM</span>
              <span className="text-[9px] md:text-[10px] text-slate-400">Web Creation &amp; Software Development</span>
            </div>
          </div>

          <p className="text-sm text-center">&copy; {new Date().getFullYear()} Klyzium. Todos os direitos reservados.</p>

          <div className="flex gap-6 text-sm">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-sky-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-400 text-sm"
            >
              Termos e Privacidade
            </button>
          </div>
        </Container>
      </footer>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}