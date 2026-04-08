import { TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-black text-white text-lg">Klyzium</span>
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
