import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Boxes,
  Brain,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Cpu,
  LayoutGrid,
  LifeBuoy,
  LineChart,
  Network,
  Repeat,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { fadeUp, SectionHeading, stagger } from "@/components/section-heading";
import { CAPABILITIES, INDUSTRIES, SOLUTIONS } from "@/lib/site-data";
import { InteractiveTorus } from "@/components/interactive-torus";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "AI, Automation and Intelligent Operations | Tech Tammina" },
      {
        name: "description",
        content:
          "Tech Tammina builds intelligent operations through AI, automation, digital engineering, managed services, and business expertise.",
      },
      { property: "og:title", content: "AI, Automation and Intelligent Operations | Tech Tammina" },
      { property: "og:description", content: "Connecting AI, automation, and expertise to drive business impact." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CAP_ICONS = [Network, Cpu, Workflow, ShieldCheck, LifeBuoy, Briefcase];
const CAP_TOTAL = CAPABILITIES.length;
const CAP_AUTO_PLAY = 3500;



function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <motion.div
        aria-hidden
        animate={{
          x: ["-50%", "-30%", "-70%", "-50%"],
          y: [-60, 40, -100, -60],
          scale: [1, 1.25, 0.85, 1],
          rotate: [0, 120, 240, 360],
          opacity: [0.35, 0.65, 0.25, 0.35]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] rounded-full bg-cyan-violet blur-[130px]"
      />
      <motion.div
        aria-hidden
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1.1, 0.8, 1.3, 1.1],
          rotate: [0, -120, -240, -360],
          opacity: [0.2, 0.45, 0.15, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[700px] rounded-full bg-teal-cyan blur-[130px]"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid min-h-[86vh] max-w-7xl gap-12 px-6 pb-24 pt-24 lg:grid-cols-12 lg:items-center"
      >
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
            Intelligent Operations Platform & Services
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            AI That Moves <span className="text-gradient">Business Forward</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Tech Tammina helps organizations turn AI into measurable business value by modernizing applications, transforming operations, and building intelligent solutions around real industry needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/solutions"
              className="gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center w-full">
          <InteractiveTorus />
        </div>

        <div className="lg:col-span-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: Workflow, label: "Connected Workflows" },
            { icon: Brain, label: "Practical AI" },
            { icon: ShieldCheck, label: "Enterprise Delivery" },
            { icon: Repeat, label: "Build to Operate" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="gradient-border rounded-2xl bg-surface/70 p-5 backdrop-blur shadow-card"
            >
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-medium text-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CapabilitiesPreview() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartX = useRef(0);

  const goTo = useCallback((idx: number, dir?: number) => {
    const wrapped = ((idx % CAP_TOTAL) + CAP_TOTAL) % CAP_TOTAL;
    setDirection(dir ?? (wrapped > centerIndex ? 1 : -1));
    setCenterIndex(wrapped);
  }, [centerIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCenterIndex((prev) => (prev + 1) % CAP_TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCenterIndex((prev) => (prev - 1 + CAP_TOTAL) % CAP_TOTAL);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(goNext, CAP_AUTO_PLAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [centerIndex, isPaused, goNext]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    const resumeTimer = setTimeout(() => setIsPaused(false), 6000);
    return () => clearTimeout(resumeTimer);
  }, []);

  const leftIdx = (centerIndex - 1 + CAP_TOTAL) % CAP_TOTAL;
  const rightIdx = (centerIndex + 1) % CAP_TOTAL;
  const visibleIndices = [leftIdx, centerIndex, rightIdx];

  return (
    <section className="relative bg-section py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>End-to-end capabilities for <span className="text-gradient">intelligent operations</span></>}
          intro="We connect strategy, technology, and long-term support to help organizations apply AI, modernize critical work, and build sustainable enterprise capability."
        />

        {/* Carousel */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrows */}
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

          {/* Cards */}
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
                    key={`home-cap-${c.slug}-${capIdx}`}
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
                        group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-500
                        ${isCenter
                            ? "border-primary/30 p-8 md:p-10 shadow-glow-cyan"
                            : "border-border p-6 md:p-8 hover:border-primary/20 cursor-pointer"
                          }
                      `}
                      >
                        {/* Glow effects */}
                        <div className={`
                        absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet blur-3xl transition-opacity duration-500
                        ${isCenter ? "opacity-30" : "opacity-0 group-hover:opacity-20"}
                      `} />
                        <div className={`
                        absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-violet-teal blur-3xl transition-opacity duration-500
                        ${isCenter ? "opacity-20" : "opacity-0"}
                      `} />

                        <div className="relative flex h-full flex-col">
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
                          mt-3 flex-1 leading-relaxed text-muted-foreground transition-all duration-300
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
                            Learn more <ArrowRight className="h-4 w-4" />
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

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CAPABILITIES.map((c, i) => (
              <button
                key={`home-dot-${c.slug}`}
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
                    layoutId="home-active-dot"
                    className="absolute inset-0 rounded-full bg-accent-gradient"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="mt-4 mx-auto max-w-xs h-0.5 rounded-full bg-border/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent-gradient"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? `${((centerIndex + 1) / CAP_TOTAL) * 100}%` : "100%" }}
              transition={isPaused ? { duration: 0.3 } : { duration: CAP_AUTO_PLAY / 1000, ease: "linear" }}
              key={`home-progress-${centerIndex}-${isPaused}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title={<>Industry Knowledge That Shapes Better Solutions</>}
          intro="Technology delivers stronger results when it reflects the industry in which it is used. Our teams bring domain understanding to the design, delivery, and operation of solutions across regulated, process-intensive, and service-driven sectors."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-border">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-px bg-border"
          >
            <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-[1.75fr_1fr_1fr]">
              {INDUSTRIES.slice(0, 3).map((ind) => (
                <motion.div key={ind.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-elevated"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="font-display text-lg font-semibold text-foreground">{ind.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                    <div className="mt-auto">
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-[1fr_1.75fr_1fr]">
              {INDUSTRIES.slice(3, 6).map((ind) => (
                <motion.div key={ind.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-elevated"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="font-display text-lg font-semibold text-foreground">{ind.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                    <div className="mt-auto">
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function SolutionsPreview() {
  const solutions = SOLUTIONS.slice(0, 6);

  return (
    <section className="relative bg-section py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-cyan-violet opacity-[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-violet-teal opacity-[0.04] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Solutions"
            title={<>Solutions Built Around Real Operational Work</>}
            intro="Our solutions address document-heavy, decision-intensive, and operationally complex processes. Each can be configured around an organization's requirements and integrated with the systems already used by its teams."
          />
          <Link
            to="/solutions"
            className="gradient-border inline-flex shrink-0 items-center gap-2 rounded-full bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated"
          >
            Explore All Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto"
        >

          {/* ─── Card 1: Hero — large, left column, 2 rows ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.005 }}
            className="lg:col-span-5 lg:row-span-2 md:col-span-1"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[0].slug }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-card"
            >
              {/* Decorative oversized number */}
              <div className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[180px] font-black leading-none text-primary/[0.04] transition-all duration-700 group-hover:text-primary/[0.08] group-hover:-translate-y-2">
                01
              </div>
              {/* Gradient mesh top */}
              <div className="relative h-40 w-full overflow-hidden bg-accent-gradient">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(255,255,255,0.2),_transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(255,255,255,0.15),_transparent_60%)]" />
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent"
                />
                <div className="absolute bottom-4 left-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-8 md:p-10">
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">{solutions[0].title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{solutions[0].body}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    Explore solution <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow transition-all group-hover:scale-110 group-hover:shadow-glow-cyan">
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 2: Top-right with left accent stripe ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-7 md:col-span-1"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[1].slug }}
              className="group relative flex h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/25 hover:shadow-glow-cyan"
            >
              {/* Vertical gradient accent */}
              <div className="w-1.5 shrink-0 bg-accent-gradient transition-all duration-500 group-hover:w-2.5" />
              <div className="flex-1 p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-display text-5xl font-black text-primary/10 transition-colors group-hover:text-primary/20">02</span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{solutions[1].title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solutions[1].body}</p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:translate-x-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 3: Top-right with diagonal gradient corner ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-7 md:col-span-1"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[2].slug }}
              className="group relative flex h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/25"
            >
              {/* Diagonal gradient corner */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-gradient opacity-[0.07] blur-2xl transition-all duration-500 group-hover:opacity-[0.15] group-hover:scale-110" />
              <div className="relative flex-1 p-7 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow transition-all duration-300 group-hover:rounded-xl group-hover:scale-105">
                    <span className="font-display text-lg font-bold">03</span>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{solutions[2].title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Operational Workflow</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{solutions[2].body}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 4: Full-width dark glass card ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-12 md:col-span-2"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[3].slug }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-accent-gradient shadow-glow md:flex-row md:items-stretch"
            >
              {/* Glass overlay pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,_rgba(255,255,255,0.12),_transparent_50%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,_rgba(255,255,255,0.08),_transparent_50%)]" />
              {/* Left decorative area */}
              <div className="relative flex shrink-0 flex-col justify-center px-8 py-8 md:w-80 md:px-10 md:py-10">
                <span className="font-display text-7xl font-black text-white/10 md:text-8xl">04</span>
                <h3 className="mt-2 text-2xl font-semibold text-primary-foreground md:text-3xl">{solutions[3].title}</h3>
                <div className="mt-4 h-0.5 w-16 rounded-full bg-white/30" />
              </div>
              {/* Right content */}
              <div className="relative flex flex-1 flex-col justify-center border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-10">
                <p className="text-sm leading-relaxed text-primary-foreground/80 md:text-base">{solutions[3].body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform group-hover:translate-x-2">
                  Explore solution
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:bg-white/30 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 5: Bottom-left with floating number ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="lg:col-span-7 md:col-span-1"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[4].slug }}
              className="group gradient-border relative block h-full overflow-hidden rounded-3xl bg-card p-8 md:p-10 shadow-card"
            >
              {/* Ambient orb */}
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-teal-cyan opacity-[0.06] blur-[50px] transition-opacity group-hover:opacity-[0.14]" />
              <div className="relative">
                <div className="flex items-start gap-6">
                  <span className="font-display text-6xl font-black text-primary/[0.07] transition-colors group-hover:text-primary/[0.15]">05</span>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground">{solutions[4].title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solutions[4].body}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ─── Card 6: Bottom-right with top border accent ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="lg:col-span-5 md:col-span-1"
          >
            <Link
              to="/solutions/$slug"
              params={{ slug: solutions[5].slug }}
              className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:border-primary/25"
            >
              {/* Animated top border gradient */}
              <div className="h-1 w-full bg-accent-gradient transition-all duration-500 group-hover:h-1.5" />
              {/* Glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
              <div className="relative p-8 md:p-10">
                <span className="font-display text-5xl font-black text-primary/[0.07] transition-colors group-hover:text-primary/[0.15]">06</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{solutions[5].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solutions[5].body}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                    Learn more →
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface transition-all group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Enterprise Fit"
          title={<>Built for Your <span className="text-gradient">Enterprise Ecosystem</span></>}
          intro="Your technology should work together, not in isolation. Tech Tammina connects your existing applications, data, cloud, workflows, and enterprise platforms to create a unified ecosystem built for modernization and growth.
"
          wide
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {ENTERPRISE_BLOCKS.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[1.35rem] border border-border/70 bg-card p-6 shadow-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(82,122,255,0.16),_transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                      Connected
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{block.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {block.label === "ERP"
                      ? "Fits into core finance, supply chain, and operational planning environments."
                      : block.label === "CRM"
                        ? "Supports customer-facing workflows and relationship-driven processes."
                        : block.label === "ECM"
                          ? "Works with document repositories, records, and knowledge-heavy operations."
                          : block.label === "Identity"
                            ? "Integrates securely with user directories and access management platforms."
                            : block.label === "Cloud"
                              ? "Deploys cleanly across modern cloud estates and hybrid infrastructure."
                              : block.label === "Data"
                                ? "Connects with analytics, reporting, and enterprise data sources."
                                : block.label === "BPM"
                                  ? "Aligns with workflow orchestration and process automation layers."
                                  : block.label === "AI/ML"
                                    ? "Supports intelligent automation, prediction, and decision support."
                                    : "Exposes reusable APIs for seamless integration across business applications."}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: LayoutGrid, title: "Business and Technology Together", body: "Operational knowledge informs architecture, workflows, and delivery decisions." },
  { icon: Brain, title: "Practical AI", body: "AI is embedded where it improves reviews, decisions, knowledge access, or execution." },
  { icon: ShieldCheck, title: "Enterprise Delivery", body: "Solutions are designed for governance, integration, scale, and long-term support." },
  { icon: Repeat, title: "From Build to Operate", body: "Transformation, engineering, quality, managed services, and operations work as one delivery story." },
];

const ENTERPRISE_BLOCKS = [
  { label: "ERP", icon: LayoutGrid },
  { label: "CRM", icon: Workflow },
  { label: "ECM", icon: Boxes },
  { label: "Identity", icon: ShieldCheck },
  { label: "Cloud", icon: Cpu },
  { label: "Data", icon: Network },
  { label: "BPM", icon: Workflow },
  { label: "AI/ML", icon: Brain },
  { label: "APIs", icon: Zap },
];

function Why() {
  return (
    <section className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Tech Tammina"
          title={<>Operational depth. Engineering rigor. <span className="text-gradient">AI where it counts.</span></>}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {WHY.map((w) => (
            <motion.div
              key={w.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="gradient-border relative overflow-hidden rounded-2xl bg-card p-8"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-hero py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow">
          <Zap className="h-5 w-5" />
        </span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Move from AI Opportunity to <span className="text-gradient">Business Outcome</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you are modernizing a critical process, building an intelligent application, applying AI to document-intensive work, improving software quality, or expanding operational capacity, Tech Tammina can help turn the opportunity into a practical delivery plan.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated"
          >
            Request a Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

const FEATURED_CARDS = [
  {
    id: "mendix",
    tag: "Low-Code Platform",
    title: "Accelerating Enterprise Application Delivery with Mendix",
    body: "Mendix helps organizations move from business idea to scalable application faster through closer collaboration between business and technology teams. Explore how it supports modernization while balancing speed, architecture, integration, security, and long-term maintainability.",
    position: "left" as const,
    image: "/images/mendix.jpg",
  },
  {
    id: "appian",
    tag: "Enterprise AI & Automation",
    title: "Enterprise AI with Appian",
    body: "Appian is bringing AI agents, intelligent document processing, process intelligence, and AI-assisted development into governed enterprise workflows. Explore how Tech Tammina uses Appian's evolving AI capabilities to build intelligent applications, modernize complex operations, and deliver secure, scalable outcomes for mission-critical work.",
    position: "center" as const,
    image: "/images/appian.jpg",
  },
  {
    id: "doc-ai",
    tag: "Document Intelligence",
    title: "Enterprise Document Intelligence",
    body: "Business documents contain the information that drives critical decisions. Discover how organizations can transform policies, contracts, certificates, submissions, invoices, and other unstructured content into trusted business data through extraction, validation, comparison, and workflow integration.",
    position: "right" as const,
    image: "/images/aws.jpg",
  },
];

function FeaturedInsightsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Default active card is Appian if no card is hovered
  const activeId = hoveredId || "appian";

  return (
    <section className="relative border-t border-border bg-background py-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-cyan-violet opacity-[0.06] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Insights"
          title={<>Modern Perspectives on <span className="text-gradient">Enterprise AI & Platforms</span></>}
          intro="Explore practical perspectives on enterprise AI, intelligent automation, low-code platforms, document intelligence, and the technologies reshaping modern operations."
        />

        <div
          className="mt-16 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-6 lg:gap-8 min-h-[520px]"
          onMouseLeave={() => setHoveredId(null)}
        >
          {FEATURED_CARDS.map((card) => {
            const isActive = card.id === activeId;

            return (
              <motion.div
                key={card.id}
                layout
                onMouseEnter={() => setHoveredId(card.id)}
                transition={{
                  layout: { type: "spring", stiffness: 280, damping: 30, mass: 0.85 },
                  opacity: { duration: 0.3 }
                }}
                className={`
                  w-full flex flex-col cursor-pointer transition-all duration-500 ease-out
                  ${isActive
                    ? "lg:w-[38%] z-10 lg:-translate-y-2"
                    : "lg:w-[30%] z-0 lg:translate-y-0 opacity-85 hover:opacity-100"
                  }
                `}
              >
                <motion.div
                  layout
                  className={`
                    group relative flex flex-col h-full overflow-hidden rounded-3xl border bg-card transition-all duration-500 ease-out shadow-card
                    ${isActive
                      ? "border-primary/40 shadow-glow-cyan ring-1 ring-primary/25 bg-card/95"
                      : "border-border hover:border-primary/30 hover:shadow-card"
                    }
                  `}
                >
                  {/* Image Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border/60 shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`
                        inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold backdrop-blur-md border transition-all duration-500 ease-out
                        ${isActive
                          ? "bg-accent-gradient text-primary-foreground border-white/20 shadow-glow"
                          : "bg-surface/80 text-foreground border-border/80"
                        }
                      `}>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-7 md:p-8 transition-all duration-500 ease-out">
                    <h3 className={`
                      font-semibold text-foreground leading-snug transition-all duration-500 ease-out
                      ${isActive ? "text-xl md:text-2xl text-gradient" : "text-lg md:text-xl"}
                    `}>
                      {card.title}
                    </h3>
                    <p className={`
                      mt-3 flex-1 leading-relaxed text-muted-foreground transition-all duration-500 ease-out
                      ${isActive ? "text-sm md:text-base opacity-100" : "text-xs md:text-sm opacity-80"}
                    `}>
                      {card.body}
                    </p>

                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-500 ease-out ${isActive ? "text-primary translate-x-1" : "text-muted-foreground group-hover:text-primary"}`}>
                        Explore Insight <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className={`
                        grid place-items-center rounded-full transition-all duration-500 ease-out
                        ${isActive
                          ? "h-9 w-9 bg-accent-gradient text-primary-foreground shadow-glow scale-110"
                          : "h-8 w-8 border border-border bg-surface text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                        }
                      `}>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedInsightsSection />
      <CapabilitiesPreview />
      <IndustriesPreview />
      <SolutionsPreview />
      <Ecosystem />
      <Why />
      <CTA />
    </>
  );
}
