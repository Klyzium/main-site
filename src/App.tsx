import { useLayoutEffect, useRef } from "react";
import { Benefits } from "@/components/sections/benefits";
import { CTA } from "@/components/sections/cta";
import { Demos } from "@/components/sections/demos";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Results } from "@/components/sections/results";
import { WhatsappButton } from "@/components/whatsapp-button";
import { gsap } from "@/lib/gsap";

export default function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const preloader = preloaderRef.current;
      const logo = logoRef.current;
      const paths = logo?.querySelectorAll("path");

      const initSectionAnimations = () => {
        if (prefersReducedMotion) return;

        const sections = gsap.utils.toArray<HTMLElement>("main section");
        if (sections.length === 0) return;

        gsap.set(sections, { autoAlpha: 1 });

        sections
          .filter((section) => section.id !== "hero")
          .forEach((section) => {
            gsap.fromTo(
              section,
              { autoAlpha: 0, y: 36 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          });
      };

      if (!preloader || !paths || paths.length === 0 || prefersReducedMotion) {
        if (preloader) gsap.set(preloader, { autoAlpha: 0, pointerEvents: "none" });
        initSectionAnimations();
        return;
      }

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          fill: "transparent",
          stroke: "#38bdf8",
          strokeWidth: 1.6,
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      gsap
        .timeline({ onComplete: initSectionAnimations })
        .to(paths, {
          strokeDashoffset: 0,
          duration: 1.25,
          ease: "power2.out",
          stagger: 0.08,
        })
        .to(
          paths,
          {
            fill: "#ffffff",
            stroke: "#ffffff",
            duration: 0.45,
            ease: "power1.out",
            stagger: 0.02,
          },
          ">-0.15",
        )
        .to(preloader, {
          autoAlpha: 0,
          duration: 0.65,
          ease: "power2.out",
          pointerEvents: "none",
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen font-sans antialiased">
      <div ref={preloaderRef} className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950">
        <svg
          ref={logoRef}
          viewBox="0 0 165 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[260px] md:w-[360px] lg:w-[460px] h-auto"
        >
          <path d="M144 21V0H150V3H153V6H156V3H159V0H165V21H159V9H156V15H153V9H150V21H144Z" />
          <path d="M123 21V18H120V0H126V18H135V0H141V18H138V21H123Z" />
          <path d="M99 21V18H105V3H99V0H117V3H111V18H117V21H99Z" />
          <path d="M72 21V15H75V12H78V9H81V6H84V3H72V0H93V6H90V9H87V12H84V15H81V18H93V21H72Z" />
          <path d="M57 21V12H54V9H51V0H57V9H63V0H69V9H66V12H63V21H57Z" />
          <path d="M27 21V0H33V18H45V21H27Z" />
          <path d="M0 21V0H6V9H9V6H12V3H15V0H21V3H18V6H15V9H12V12H15V15H18V18H21V21H12V18H9V15H6V21H0Z" />
        </svg>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Results />
        <Demos />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
