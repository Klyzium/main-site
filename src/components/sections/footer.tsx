import { Container } from "@/components/layout/container";

export function Footer() {
  const logoSrc = "/logo/logo.png";

  return (
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
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Termos
          </a>
        </div>
      </Container>
    </footer>
  );
}
