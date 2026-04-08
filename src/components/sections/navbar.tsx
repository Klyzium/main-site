import { useEffect, useState, type MouseEvent } from "react";
import { Menu, MessageCircle, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/content/landing";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    const headerOffset = 92;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className={`font-black text-xl lg:text-2xl tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
            Klyzium
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-emerald-500 ${
                scrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold lg:text-base shadow-lg shadow-emerald-500/25 rounded-full px-6 lg:px-8 h-10 lg:h-11">
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Fechar menu"
          className="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-[84vw] max-w-sm bg-white border-l border-slate-100 shadow-2xl px-6 py-6 flex flex-col gap-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-slate-700 font-medium hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full mt-auto">
            Falar no WhatsApp
          </Button>
        </aside>
      </div>
    </header>
  );
}
