import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Boxes,
  Brain,
  Building2,
  Cpu,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutGrid,
  LifeBuoy,
  LineChart,
  Network,
  Repeat,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

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
      {
        property: "og:description",
        content:
          "Connecting AI, automation, and expertise to drive business impact.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ---------- shared motion helpers ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-3xl"
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-5xl"
      >
        {title}
      </motion.h2>
      {intro ? (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 text-lg leading-relaxed text-muted-foreground"
        >
          {intro}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

/* ---------- Navigation ---------- */

const NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
];

function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent-gradient text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Tech<span className="text-gradient"> Tammina</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
        >
          Talk to an Expert
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-gradient opacity-20 blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center px-6 pb-24 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Intelligent Operations Platform & Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          We Build <span className="text-gradient">Intelligent Operations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Connecting AI, automation, and expertise to drive business impact — across
          transformation, engineering, quality, managed services, and operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Floating stat cards */}
        <div className="mt-20 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
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
              className="rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur shadow-card"
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

/* ---------- Intro (Mission-Critical) ---------- */

function Intro() {
  return (
    <section className="relative border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Mission-critical work needs more than{" "}
              <span className="text-gradient">isolated technology</span>
            </>
          }
          intro="Complex operations rarely fail because an organization lacks another tool. They slow down when work is fragmented across systems, documents, approvals, and teams. Tech Tammina brings these moving parts together — modernizing processes, building connected applications, improving quality, and supporting operations after launch."
        />
      </div>
    </section>
  );
}

/* ---------- Capabilities ---------- */

const CAPABILITIES = [
  {
    icon: Network,
    title: "Enterprise Transformation",
    body: "Connect workflows, automate document-intensive work, and embed AI into governed business operations.",
  },
  {
    icon: Cpu,
    title: "Digital Engineering",
    body: "Build and modernize enterprise applications, digital experiences, integrations, and cloud-ready platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Engineering",
    body: "Improve software reliability, test coverage, release speed, and production confidence.",
  },
  {
    icon: LifeBuoy,
    title: "Managed Services",
    body: "Keep business-critical applications stable, supported, monitored, and continuously improved.",
  },
  {
    icon: LineChart,
    title: "Business Operations",
    body: "Extend operational capacity through insurance services, finance and accounting support, BPO, and global delivery.",
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>End-to-end capabilities for intelligent operations</>}
          intro="Five practices that work as one delivery story — from strategy through steady-state operations."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-gradient opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-surface-elevated text-primary ring-1 ring-border">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */

const INDUSTRIES = [
  { icon: Shield, name: "Insurance", body: "Modernize underwriting, claims, policy administration, compliance, and insurance operations." },
  { icon: Landmark, name: "Financial Services", body: "Improve onboarding, lending operations, compliance, case management, and customer service." },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", body: "Streamline regulated workflows, documentation, quality, and enterprise operations." },
  { icon: Truck, name: "Manufacturing", body: "Connect vendor, order, quality, compliance, service, and operational workflows." },
  { icon: GraduationCap, name: "Education", body: "Modernize admissions, student services, employee operations, and institutional workflows." },
  { icon: Building2, name: "Public Sector", body: "Improve case management, citizen services, compliance, and digital government operations." },
];

function Industries() {
  return (
    <section id="industries" className="relative border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title={<>Deep focus in regulated, operations-heavy industries</>}
          intro="We combine operational knowledge with engineering to move regulated workflows forward."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((i) => (
            <motion.div
              key={i.name}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative bg-card p-8 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-3">
                <i.icon className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{i.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
              <ArrowRight className="mt-6 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Solutions ---------- */

const SOLUTIONS = [
  { title: "Policy Checking Automation", body: "Compare policies and identify changes, gaps, and exceptions faster." },
  { title: "COI Compliance Management", body: "Automate certificate intake, extraction, compliance review, and deficiency tracking." },
  { title: "Claims Automation", body: "Coordinate claims intake, documents, assignments, decisions, and visibility." },
  { title: "Renewal Intelligence", body: "Identify renewal changes and exceptions to support faster, more consistent reviews." },
  { title: "Fleet Management", body: "Centralize fleet records, documents, valuations, compliance, and operational workflows." },
  { title: "Vendor Management", body: "Manage onboarding, approvals, compliance, documents, and vendor lifecycle activity." },
];

function Solutions() {
  return (
    <section id="solutions" className="relative border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Solutions"
            title={<>Solutions engineered for measurable outcomes</>}
            intro="Purpose-built to accelerate the work that runs the business — from underwriting to vendors."
          />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
          >
            Explore All Solutions <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((s, idx) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold tracking-widest text-muted-foreground">
                  0{idx + 1}
                </span>
                <FileCheck2 className="h-4 w-4 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 h-px w-full bg-border" />
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                View solution <ArrowRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Ecosystem ---------- */

function Ecosystem() {
  return (
    <section className="relative border-t border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Enterprise Fit"
          title={<>Built to fit the <span className="text-gradient">enterprise</span></>}
          intro="Tech Tammina solutions are designed to work across enterprise platforms, business applications, document repositories, identity services, cloud environments, and third-party systems. Integration is treated as part of the operating model — not an afterthought."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-border bg-surface/60 p-8 shadow-card backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              {[
                "ERP",
                "CRM",
                "ECM",
                "Identity",
                "Cloud",
                "Data",
                "BPM",
                "AI/ML",
                "APIs",
              ].map((chip, i) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid aspect-square place-items-center rounded-xl border border-border bg-card font-display text-sm text-muted-foreground"
                >
                  {chip}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
              <Boxes className="h-4 w-4 text-primary" />
              Works with your enterprise ecosystem
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Why Tech Tammina ---------- */

const WHY = [
  {
    icon: LayoutGrid,
    title: "Business and Technology Together",
    body: "Operational knowledge informs architecture, workflows, and delivery decisions.",
  },
  {
    icon: Brain,
    title: "Practical AI",
    body: "AI is embedded where it improves reviews, decisions, knowledge access, or execution.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Delivery",
    body: "Solutions are designed for governance, integration, scale, and long-term support.",
  },
  {
    icon: Repeat,
    title: "From Build to Operate",
    body: "Transformation, engineering, quality, managed services, and operations work as one delivery story.",
  },
];

function Why() {
  return (
    <section id="why" className="relative border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Tech Tammina"
          title={<>Operational depth. Engineering rigor. AI where it counts.</>}
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
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

/* ---------- About ---------- */

function About() {
  const stats = [
    { k: "5", v: "Capability practices" },
    { k: "6", v: "Focus industries" },
    { k: "11", v: "Enterprise solutions" },
    { k: "24/7", v: "Managed operations" },
  ];
  return (
    <section id="about" className="relative border-t border-border bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="About"
          title={<>A partner for the work that runs your business</>}
          intro="Tech Tammina brings together operational knowledge, engineering, and AI to modernize processes, build connected applications, improve quality, and support operations after launch."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.v}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-hero py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <Zap className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Move from disconnected work to{" "}
          <span className="text-gradient">intelligent operations</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Start with a process, application, operational challenge, or solution demonstration.
          Tech Tammina will help define a practical path forward.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@techtammina.com"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:hello@techtammina.com?subject=Request%20a%20Demo"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
          >
            Request a Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-gradient text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-base font-semibold">
            Tech<span className="text-gradient"> Tammina</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#capabilities" className="hover:text-foreground">Capabilities</a>
          <a href="#industries" className="hover:text-foreground">Industries</a>
          <a href="#solutions" className="hover:text-foreground">Solutions</a>
          <a href="#why" className="hover:text-foreground">Why Us</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tech Tammina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Intro />
      <Capabilities />
      <Industries />
      <Solutions />
      <Ecosystem />
      <Why />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
