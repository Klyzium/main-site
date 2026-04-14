import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { DEMO_PROJECTS } from "@/content/landing";
import { Draggable, gsap, ScrollTrigger } from "@/lib/gsap";

export function Demos() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const demoCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const draggedRef = useRef(false);
  const dragMarkerXRef = useRef(0);
  const [activeDemo, setActiveDemo] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateDemoCards = (immediate = false) => {
      const total = DEMO_PROJECTS.length;
      const gap = window.innerWidth < 768 ? 160 : 250;

      demoCardRefs.current.forEach((card, index) => {
        if (!card) return;

        let delta = index - activeDemo;
        if (delta > total / 2) delta -= total;
        if (delta < -total / 2) delta += total;

        const isCenter = delta === 0;
        const x = delta * gap;
        const scale = isCenter ? 1 : Math.max(0.72, 1 - Math.abs(delta) * 0.18);
        const opacity = isCenter ? 1 : Math.max(0.22, 1 - Math.abs(delta) * 0.34);
        const zIndex = 50 - Math.abs(delta);
        const rotationY = -delta * 16;

        gsap.to(card, {
          x,
          scale,
          opacity,
          rotateY: rotationY,
          zIndex,
          duration: immediate ? 0 : 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    updateDemoCards();
    const handleResize = () => updateDemoCards(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeDemo]);

  const nextDemo = () => setActiveDemo((prev) => (prev + 1) % DEMO_PROJECTS.length);
  const prevDemo = () => setActiveDemo((prev) => (prev - 1 + DEMO_PROJECTS.length) % DEMO_PROJECTS.length);

  const handleDemoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!draggedRef.current) return;
    event.preventDefault();
    draggedRef.current = false;
  };

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!stageRef.current || !sectionRef.current) return;

    const threshold = 42;
    const draggable = Draggable.create(stageRef.current, {
      type: "x",
      bounds: { minX: -260, maxX: 260 },
      onPress() {
        draggedRef.current = false;
        dragMarkerXRef.current = this.x;
      },
      onDrag() {
        if (Math.abs(this.x) > 8) draggedRef.current = true;

        const delta = this.x - dragMarkerXRef.current;
        if (delta <= -threshold) {
          nextDemo();
          dragMarkerXRef.current = this.x;
        } else if (delta >= threshold) {
          prevDemo();
          dragMarkerXRef.current = this.x;
        }
      },
      onRelease() {
        gsap.to(stageRef.current, {
          x: 0,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
          onComplete: () => {
            draggedRef.current = false;
          },
        });
      },
    });

    const revealTween = gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      },
    );

    return () => {
      draggable.forEach((instance) => instance.kill());
      revealTween.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <Section id="demos" className="bg-slate-950 py-20">
      <div ref={sectionRef}>
        <Container>
          <SectionHeader
            title="Demos de Sistemas e Landing Pages"
            description="Explore ideias de páginas para nichos como advocacia, odontologia, estética e operações internas."
            tone="dark"
          />

          <div
            ref={stageRef}
            className="relative h-[320px] overflow-hidden md:h-[370px]"
            style={{ touchAction: "pan-y" }}
          >
            {DEMO_PROJECTS.map((demo, index) => (
              <a
                key={demo.title}
                ref={(element) => {
                  demoCardRefs.current[index] = element;
                }}
                href={demo.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDemoClick}
                className="absolute left-1/2 top-1/2 block h-[250px] w-[182px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/20 bg-slate-900/80 shadow-[0_28px_80px_rgba(2,6,23,0.55)] backdrop-blur md:h-[290px] md:w-[236px]"
              >
                <div
                  className="h-[56%] p-[1px]"
                  style={{ backgroundImage: `linear-gradient(135deg, ${demo.accentFrom}, ${demo.accentTo})` }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-t-[15px] bg-slate-950/90">
                    <img src={demo.image} alt={demo.title} className="h-full w-full object-contain opacity-90" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/90 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-950/75 px-2.5 py-1 text-[10px] font-semibold text-slate-200">
                      {demo.niche}
                    </span>
                  </div>
                </div>

                <div className="flex h-[44%] flex-col justify-between px-4 py-3">
                  <h4 className="text-sm font-bold text-white md:text-base">{demo.title}</h4>
                  <div className="text-xs font-semibold text-sky-300">Abrir demo</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              onClick={prevDemo}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              onClick={nextDemo}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
