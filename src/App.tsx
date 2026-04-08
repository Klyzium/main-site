import { useLayoutEffect, useRef } from "react";
import { Benefits } from "@/components/sections/benefits";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Results } from "@/components/sections/results";
import { gsap } from "@/lib/gsap";

export default function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("main section:not(#hero)");

      sections.forEach((section) => {
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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Results />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
