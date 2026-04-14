import { useLayoutEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const handleScrollToPlans = () => {
    const target = document.querySelector("#planos");
    if (!target) return;

    const headerOffset = 92;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    gsap.to(window, {
      duration: 1.1,
      ease: "power3.inOut",
      scrollTo: { y: Math.max(targetTop, 0), autoKill: true },
    });
  };
  const handleScrollToDemos = () => {
    const target = document.querySelector("#demos");
    if (!target) return;

    const headerOffset = 92;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    gsap.to(window, {
      duration: 1.1,
      ease: "power3.inOut",
      scrollTo: { y: Math.max(targetTop, 0), autoKill: true },
    });
  };

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    let removeMouseListener: (() => void) | null = null;
    let removeMouseLeaveListener: (() => void) | null = null;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-title]", { y: 28, autoAlpha: 0, duration: 0.6 }, "-=0.15")
        .from("[data-hero-text]", { y: 22, autoAlpha: 0, duration: 0.45 }, "-=0.2")
        .from("[data-hero-proof]", { y: 16, autoAlpha: 0, duration: 0.4 }, "-=0.12");

      gsap.fromTo(
        "[data-aurora='a']",
        { x: isMobile ? -55 : -120, y: isMobile ? 22 : 60, scale: 0.9, autoAlpha: isMobile ? 0.42 : 0.55 },
        {
          x: isMobile ? 65 : 140,
          y: isMobile ? -35 : -90,
          scale: isMobile ? 1.08 : 1.2,
          autoAlpha: isMobile ? 0.72 : 0.95,
          duration: isMobile ? 7.4 : 5.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      gsap.fromTo(
        "[data-aurora='b']",
        { x: isMobile ? 48 : 90, y: isMobile ? -20 : -50, scale: 0.9, autoAlpha: isMobile ? 0.38 : 0.5 },
        {
          x: isMobile ? -70 : -150,
          y: isMobile ? 46 : 100,
          scale: isMobile ? 1.08 : 1.18,
          autoAlpha: isMobile ? 0.7 : 0.92,
          duration: isMobile ? 8.2 : 5.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      gsap.fromTo(
        "[data-aurora='c']",
        { x: isMobile ? -32 : -80, y: isMobile ? 26 : 70, scale: 0.9, autoAlpha: isMobile ? 0.34 : 0.45 },
        {
          x: isMobile ? 46 : 110,
          y: isMobile ? -34 : -80,
          scale: isMobile ? 1.06 : 1.14,
          autoAlpha: isMobile ? 0.62 : 0.85,
          duration: isMobile ? 7 : 4.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      gsap.fromTo(
        "[data-aurora='d']",
        { xPercent: -120, autoAlpha: isMobile ? 0.1 : 0.18 },
        {
          xPercent: 120,
          autoAlpha: isMobile ? 0.24 : 0.42,
          duration: isMobile ? 8.8 : 4.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      if (!isMobile && section && window.matchMedia("(pointer: fine)").matches) {
        const moveAurora = (event: MouseEvent) => {
          const bounds = section.getBoundingClientRect();
          const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 30;
          const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 24;
          const cursorX = event.clientX - bounds.left;
          const cursorY = event.clientY - bounds.top;

          gsap.to("[data-aurora-parallax]", {
            x: offsetX,
            y: offsetY,
            duration: 0.9,
            ease: "power2.out",
            overwrite: "auto",
          });

          gsap.to("[data-cursor-glow]", {
            x: cursorX,
            y: cursorY,
            autoAlpha: 0.8,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });

          gsap.to("[data-aurora-tilt]", {
            rotateX: offsetY * -0.08,
            rotateY: offsetX * 0.08,
            transformPerspective: 900,
            transformOrigin: "50% 50%",
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const leaveAurora = () => {
          gsap.to("[data-cursor-glow]", { autoAlpha: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to("[data-aurora-parallax]", { x: 0, y: 0, duration: 0.7, ease: "power2.out", overwrite: "auto" });
          gsap.to("[data-aurora-tilt]", {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        section.addEventListener("mousemove", moveAurora);
        section.addEventListener("mouseleave", leaveAurora);
        removeMouseListener = () => section.removeEventListener("mousemove", moveAurora);
        removeMouseLeaveListener = () => section.removeEventListener("mouseleave", leaveAurora);
      }

      gsap.to("[data-aurora-parallax]", {
        y: isMobile ? -18 : -60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => {
      if (removeMouseListener) removeMouseListener();
      if (removeMouseLeaveListener) removeMouseLeaveListener();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div data-aurora-tilt className="absolute inset-0 will-change-transform">
          <div data-aurora-parallax className="absolute inset-0 will-change-transform">
            <div
              data-cursor-glow
              className="absolute left-0 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/30 blur-[70px] opacity-0 will-change-transform"
            />
          <div
            data-aurora="a"
            className="absolute -top-52 -right-44 h-[700px] w-[700px] rounded-full bg-sky-400/45 blur-[90px] will-change-transform"
          />
          <div
            data-aurora="b"
            className="absolute -bottom-48 -left-44 h-[620px] w-[620px] rounded-full bg-indigo-400/42 blur-[90px] will-change-transform"
          />
          <div
            data-aurora="c"
            className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/35 blur-[85px] will-change-transform"
          />
          <div
            data-aurora="d"
            className="absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-sky-300/35 to-transparent blur-3xl will-change-transform"
          />
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative pt-20 pb-10 max-[390px]:px-4 flex items-center justify-center">
        <div className="w-full max-w-5xl text-center">
          <h1
            data-hero-title
            className="text-center text-5xl max-[390px]:text-4xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.03] tracking-tight mb-5"
          >
            Transforme sua ideia em{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">
                um negócio digital
              </span>
            </span>
          </h1>

          <p
            data-hero-text
            className="text-lg max-[390px]:text-base lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-5 sm:mb-4 lg:mb-10 leading-relaxed"
          >
            Criamos sites, landing pages e sistemas web para atrair demanda no Google, converter contatos no
            WhatsApp e escalar sua operação.
          </p>

          <div className="flex flex-col mb-5 sm:flex-row gap-2 sm:gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleScrollToPlans}
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-base lg:text-lg max-[390px]:text-sm shadow-2xl shadow-sky-500/30 rounded-full px-8 lg:px-10 max-[390px]:px-6 h-14 lg:h-16 group"
            >
              Quero tirar meu projeto do papel
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToDemos}
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 lg:px-10 max-[390px]:px-6 h-14 lg:h-16 backdrop-blur font-semibold lg:text-lg"
            >
              Ver exemplos de sistemas e sites
            </Button>
          </div>

          <div
            data-hero-proof
            className="mt-2 sm:mt-3 lg:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-300" />
                Entregas no prazo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-300" />
                Suporte contínuo
              </span>
            </div>
            <p className="text-slate-400 text-sm lg:text-base">Parceria estratégica do início à operação.</p>
          </div>
        </div>
      </Container>

      <a
        href="#como-funciona"
        aria-label="Ir para a seção Como Funciona"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
        <span className="sr-only">Ir para a seção Como Funciona</span>
      </a>
    </section>
  );
}
