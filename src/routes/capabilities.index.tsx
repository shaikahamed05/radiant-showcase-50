import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, Check, ChevronLeft, ChevronRight, Cpu, LifeBuoy, Network, ShieldCheck, Workflow } from "lucide-react";
import { fadeUp, PageHero, SectionHeading, stagger } from "@/components/section-heading";
import { CAPABILITIES } from "@/lib/site-data";

const CAP_ICONS = [Network, Cpu, Workflow, ShieldCheck, LifeBuoy, Briefcase];
import { useState, useEffect, useCallback, useRef } from "react";

export const Route = createFileRoute("/capabilities/")({
  component: CapabilitiesIndex,
  head: () => ({
    meta: [
      { title: "Capabilities — Tech Tammina" },
      { name: "description", content: "Enterprise AI & Intelligent Automation, Digital Engineering, Quality Engineering, Managed Services, and Business Operations." },
      { property: "og:title", content: "Capabilities — Tech Tammina" },
      { property: "og:description", content: "End-to-end capabilities for intelligent operations." },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
});

const TOTAL = CAPABILITIES.length; // 6
const AUTO_PLAY_INTERVAL = 3500; // ms

function CapabilitiesIndex() {
  // centerIndex tracks which card is in the center (0..5)
  const [centerIndex, setCenterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartX = useRef(0);

  const goTo = useCallback((idx: number, dir?: number) => {
    const wrapped = ((idx % TOTAL) + TOTAL) % TOTAL;
    setDirection(dir ?? (wrapped > centerIndex ? 1 : -1));
    setCenterIndex(wrapped);
  }, [centerIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCenterIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCenterIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(goNext, AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [centerIndex, isPaused, goNext]);

  // Pause on user interaction, resume after 6s
  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    const resumeTimer = setTimeout(() => setIsPaused(false), 6000);
    return () => clearTimeout(resumeTimer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { goNext(); pauseAutoPlay(); }
      if (e.key === "ArrowLeft") { goPrev(); pauseAutoPlay(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, pauseAutoPlay]);

  // Get the 3 visible indices: left, center, right
  const leftIdx = (centerIndex - 1 + TOTAL) % TOTAL;
  const rightIdx = (centerIndex + 1) % TOTAL;
  const visibleIndices = [leftIdx, centerIndex, rightIdx];

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>End-to-end capabilities for <span className="text-gradient">intelligent operations</span></>}
        intro="Six practices that work as one delivery story — from transformation strategy through steady-state operations."
      />
      <section className="bg-section py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => { goPrev(); pauseAutoPlay(); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 -translate-x-1/2"
              aria-label="Previous capability"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => { goNext(); pauseAutoPlay(); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 translate-x-1/2"
              aria-label="Next capability"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Cards Track */}
            <div
              className="flex items-center justify-center gap-4 md:gap-6 py-8 cursor-grab active:cursor-grabbing select-none"
              onPointerDown={(e) => { dragStartX.current = e.clientX; }}
              onPointerUp={(e) => {
                const diff = e.clientX - dragStartX.current;
                if (Math.abs(diff) > 50) {
                  if (diff < 0) { goNext(); } else { goPrev(); }
                  pauseAutoPlay();
                }
              }}
            >
              <AnimatePresence mode="popLayout" custom={direction}>
                {visibleIndices.map((capIdx, position) => {
                  const c = CAPABILITIES[capIdx];
                  const Icon = CAP_ICONS[capIdx] ?? Workflow;
                  const isCenter = position === 1;
                  return (
                    <motion.div
                      key={`${c.slug}-${capIdx}`}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: direction > 0 ? 200 : -200,
                      }}
                      animate={{
                        opacity: isCenter ? 1 : 0.7,
                        scale: isCenter ? 1 : 0.88,
                        x: 0,
                        y: isCenter ? -8 : 0,
                        filter: isCenter ? "blur(0px)" : "blur(1px)",
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: direction > 0 ? -200 : 200,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8,
                      }}
                      className={`
                        w-full transition-shadow duration-500
                        ${isCenter
                          ? "md:w-[38%] w-[70%] z-10"
                          : "md:w-[28%] w-0 md:opacity-100 opacity-0 hidden md:block z-0"
                        }
                      `}
                    >
                      <div className="relative pb-7">
                      <Link
                        to="/capabilities/$slug"
                        params={{ slug: c.slug }}
                        onClick={(e) => {
                          if (!isCenter) {
                            e.preventDefault();
                            goTo(capIdx, position === 0 ? -1 : 1);
                            pauseAutoPlay();
                          }
                        }}
                        className={`
                          group relative block h-full overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-500
                          ${isCenter
                            ? "border-primary/30 p-8 md:p-10 shadow-glow-cyan"
                            : "border-border p-6 md:p-8 hover:border-primary/20 cursor-pointer"
                          }
                        `}
                      >
                        {/* Glow effect */}
                        <div className={`
                          absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet blur-3xl transition-opacity duration-500
                          ${isCenter ? "opacity-30" : "opacity-0 group-hover:opacity-20"}
                        `} />
                        <div className={`
                          absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-violet-teal blur-3xl transition-opacity duration-500
                          ${isCenter ? "opacity-20" : "opacity-0"}
                        `} />
                        <div className="relative">
                          <span className="font-display text-xs font-semibold tracking-widest text-gradient">
                            0{capIdx + 1}
                          </span>
                          <h3 className={`
                            mt-4 font-semibold text-foreground transition-all duration-300
                            ${isCenter ? "text-xl md:text-2xl" : "text-lg md:text-xl"}
                          `}>
                            {c.title}
                          </h3>
                          <p className={`
                            mt-3 leading-relaxed text-muted-foreground transition-all duration-300
                            ${isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"}
                          `}>
                            {c.tagline}
                          </p>
                          <div className={`
                            mt-6 inline-flex items-center gap-1.5 font-medium text-primary transition-all duration-300
                            ${isCenter
                              ? "text-sm opacity-100 translate-y-0"
                              : "text-xs opacity-60 translate-y-1"
                            }
                            group-hover:translate-x-1
                          `}>
                            Explore capability <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                      {/* Icon circle — half inside, half outside */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                        <div className={`
                          grid place-items-center rounded-full bg-accent-gradient text-primary-foreground transition-all duration-500 border-4 border-background
                          ${isCenter
                            ? "h-14 w-14 shadow-glow-cyan"
                            : "h-11 w-11 shadow-card opacity-90"
                          }
                        `}>
                          <Icon className={`transition-all duration-300 ${isCenter ? "h-6 w-6" : "h-4.5 w-4.5"}`} />
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {CAPABILITIES.map((c, i) => (
                <button
                  key={c.slug}
                  onClick={() => { goTo(i); pauseAutoPlay(); }}
                  className={`
                    relative h-2.5 rounded-full transition-all duration-500
                    ${i === centerIndex
                      ? "w-8 bg-accent-gradient shadow-glow-cyan"
                      : "w-2.5 bg-border hover:bg-primary/40"
                    }
                  `}
                  aria-label={`Go to ${c.title}`}
                >
                  {i === centerIndex && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute inset-0 rounded-full bg-accent-gradient"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 mx-auto max-w-xs h-0.5 rounded-full bg-border/50 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent-gradient"
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? `${((centerIndex + 1) / TOTAL) * 100}%` : "100%" }}
                transition={isPaused ? { duration: 0.3 } : { duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                key={`progress-${centerIndex}-${isPaused}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            center
            eyebrow="Ready to Start"
            title={<>Bring the right capability to the right problem</>}
            intro="Tell us where the work is stuck — we'll help define a practical path forward."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export function CapabilityDetailShared({ slug }: { slug: string }) {
  const cap = CAPABILITIES.find((c) => c.slug === slug);
  if (!cap) throw notFound();
  return (
    <>
      <PageHero
        eyebrow="Capability Practice"
        title={<span>{cap.title}</span>}
        intro={cap.tagline}
      />
      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6">
          <div className="lg:col-span-2 space-y-12">
            {/* Core Body */}
            <div>
              <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                {cap.body}
              </p>
            </div>

            {/* Business Challenge */}
            {cap.challenge && (
              <div className="gradient-border rounded-2xl bg-card p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  The Business Challenge
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cap.challenge}
                </p>
              </div>
            )}

            {/* How We Help */}
            {cap.howWeHelp && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  How Tech Tammina Helps
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {cap.howWeHelp.map((item, idx) => (
                    <div key={item.title} className="gradient-border rounded-xl bg-card p-6 shadow-sm">
                      <span className="font-display text-xs font-semibold tracking-widest text-gradient block mb-3">
                        0{idx + 1}
                      </span>
                      <h4 className="font-display text-base font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Scenarios */}
            {cap.scenarios && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Common Application Scenarios
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {cap.scenarios.map((s) => (
                    <div key={s} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4">
                      <span className="grid h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/85 font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                Measurable Business Outcomes
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 mb-8">
                {cap.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-muted-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Built to Fit Your Enterprise Ecosystem */}
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Built to Fit Your Enterprise Ecosystem
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                Our practices and deliverables are designed to integrate seamlessly with your existing technology landscape. We configure and deploy solutions around your enterprise applications, identity providers, and cloud architecture without requiring you to replace core systems.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Applications", val: "ERP, CRM, Core Systems" },
                  { label: "Identity & SSO", val: "OAuth, SAML, Active Directory" },
                  { label: "Cloud Services", val: "AWS, Azure, Private Cloud" },
                  { label: "Data & Storage", val: "Document Repos, SQL, APIs" }
                ].map((eco) => (
                  <div key={eco.label} className="rounded-xl border border-border bg-card p-4">
                    <span className="block text-xs font-semibold text-gradient mb-1">{eco.label}</span>
                    <span className="block text-xs text-muted-foreground font-medium">{eco.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <aside className="gradient-border h-fit rounded-2xl bg-card p-6">
            <h4 className="font-display text-lg font-semibold text-foreground">Talk to a specialist</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your challenge and we'll match the right team and approach.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </aside> */}
        </div>
      </section>
    </>
  );
}
