import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/content/landing";
import { gsap } from "@/lib/gsap";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Navbar() {
  const logoSrc = "/logo/logo.png";
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

    gsap.to(window, {
      duration: 1.1,
      ease: "power3.inOut",
      scrollTo: { y: Math.max(targetTop, 0), autoKill: true },
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-md py-3"
            : "bg-slate-950/30 backdrop-blur-md border-b border-white/10 py-5"
        }`}
      >
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" onClick={(event) => handleNavClick(event, "#hero")} className="flex items-center gap-2 group">
            <img
              src={logoSrc}
              alt="Logo Klyzium"
              className={`h-10 w-10 lg:h-11 lg:w-11 object-contain transition-transform ${
                scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`text-sm lg:text-base font-bold tracking-[0.14em] ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                KLYZIUM
              </span>
              <span className={`text-[9px] lg:text-[10px] ${scrolled ? "text-slate-500" : "text-white/80"}`}>
                Web Creation &amp; Software Development
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`text-sm lg:text-base font-semibold transition-colors hover:text-sky-400 ${
                  scrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-[#25D366] hover:bg-[#1fb357] text-white font-semibold lg:text-base shadow-lg shadow-emerald-500/30 rounded-full px-6 lg:px-8 h-10 lg:h-11">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <img src="/redesSociais/whatsapp.png" alt="" aria-hidden="true" className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </a>
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
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
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
                className="text-slate-700 font-medium hover:text-sky-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild className="bg-[#25D366] hover:bg-[#1fb357] text-white font-semibold rounded-full mt-auto">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <img src="/redesSociais/whatsapp.png" alt="" aria-hidden="true" className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </aside>
      </div>
    </>
  );
}
