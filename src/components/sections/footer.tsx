import { Container } from "@/components/layout/container";

export function Footer() {
  const logoSrc = "/logo/Design%20sem%20nome.svg";

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src={logoSrc}
            alt="Logo Klyzium"
            className="w-10 h-10 lg:w-20 lg:h-20 object-contain scale-[2.1] lg:scale-100 origin-center"
          />
        </div>

        <p className="text-sm text-center">© {new Date().getFullYear()} Klyzium. Todos os direitos reservados.</p>

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
