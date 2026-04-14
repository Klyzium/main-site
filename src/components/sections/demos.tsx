import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const demoCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dragMarkerXRef = useRef(0);
  const [activeDemo, setActiveDemo] = useState(0);
  const [imageStep, setImageStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setImageStep((prev) => prev + 1);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateDemoCards = (immediate = false) => {
      const total = DEMO_PROJECTS.length;
      const gap = window.innerWidth < 768 ? 205 : 330;

      demoCardRefs.current.forEach((card, index) => {
        if (!card) return;

        let delta = index - activeDemo;
        if (delta > total / 2) delta -= total;
        if (delta < -total / 2) delta += total;

        const isCenter = delta === 0;
        const x = delta * gap;
        const scale = isCenter ? 1 : Math.max(0.82, 1 - Math.abs(delta) * 0.12);
        const opacity = isCenter ? 1 : Math.max(0.58, 1 - Math.abs(delta) * 0.18);
        const zIndex = 50 - Math.abs(delta);
        const rotationY = -delta * 16;
        const brightness = isCenter ? 1 : Math.max(0.84, 1 - Math.abs(delta) * 0.08);

        gsap.to(card, {
          x,
          scale,
          opacity,
          filter: `brightness(${brightness})`,
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

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!stageRef.current || !sectionRef.current) return;

    const threshold = 42;
    const draggable = Draggable.create(stageRef.current, {
      type: "x",
      bounds: { minX: -260, maxX: 260 },
      onPress() {
        dragMarkerXRef.current = this.x;
      },
      onDrag() {
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
            className="relative h-[380px] overflow-hidden md:h-[470px]"
            style={{ touchAction: "pan-y" }}
          >
            {DEMO_PROJECTS.map((demo, index) => {
              const totalImages = demo.images.length || 1;
              const activeImageIndex = (imageStep + index) % totalImages;
              const activeImage = demo.images[activeImageIndex] ?? demo.images[0];

              return (
                <div
                  key={demo.title}
                  ref={(element) => {
                    demoCardRefs.current[index] = element;
                  }}
                  className="absolute left-1/2 top-1/2 block h-[300px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/25 bg-slate-900/65 shadow-[0_28px_80px_rgba(2,6,23,0.55)] backdrop-blur md:h-[400px] md:w-[300px]"
                >
                  <div
                    className="h-[74%] p-[1px]"
                    style={{ backgroundImage: `linear-gradient(135deg, ${demo.accentFrom}, ${demo.accentTo})` }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-t-[15px] bg-slate-950/90">
                      <img
                        src={activeImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-md"
                        loading="lazy"
                      />

                      {demo.images.map((image, imageIndex) => (
                        <img
                          key={`${demo.title}-${image}`}
                          src={image}
                          alt={demo.title}
                          className={`absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-3200 md:p-4 ${
                            imageIndex === activeImageIndex ? "opacity-100" : "opacity-0"
                          }`}
                          loading="lazy"
                        />
                      ))}

                      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/68 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[10px] font-semibold text-slate-100 md:text-[11px]">
                        {demo.niche}
                      </span>
                    </div>
                  </div>

                  <div className="flex h-[26%] flex-col justify-between px-4 py-3 md:px-5 md:py-4">
                    <h4 className="text-sm font-bold leading-tight text-white md:text-lg">{demo.title}</h4>
                  </div>
                </div>
              );
            })}
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
