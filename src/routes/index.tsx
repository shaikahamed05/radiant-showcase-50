import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Boxes,
  Brain,
  Cpu,
  LayoutGrid,
  LifeBuoy,
  LineChart,
  Network,
  Repeat,
  ShieldCheck,
  Sparkles,
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

const CAP_ICONS = [Network, Cpu, ShieldCheck, LifeBuoy, LineChart];

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
            Intelligent Operations Platform & Services
          </motion.div>

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
  return (
    <section className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>End-to-end capabilities for <span className="text-gradient">intelligent operations</span></>}
          intro="We connect strategy, technology, operations, and long-term support to help organizations apply AI, modernize critical work, and build sustainable enterprise capability."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((c, i) => {
            const Icon = CAP_ICONS[i] ?? Workflow;
            return (
              <motion.div key={c.slug} variants={fadeUp} transition={{ duration: 0.6 }} whileHover={{ y: -6 }}>
                <Link
                  to="/capabilities/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
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
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div key={ind.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
              <Link
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group relative block bg-card p-8 transition-colors hover:bg-surface-elevated"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="font-display text-lg font-semibold text-foreground">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                <ArrowRight className="mt-6 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsPreview() {
  return (
    <section className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Solutions"
            title={<>Solutions Built Around Real Operational Work</>}
            intro="Our solutions address document-heavy, decision-intensive, and operationally complex processes. Each can be configured around an organization's requirements and integrated with the systems already used by its teams."
          />
          <Link
            to="/solutions"
            className="gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated"
          >
            Explore All Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.slice(0, 6).map((s, idx) => (
            <motion.div key={s.slug} variants={fadeUp} transition={{ duration: 0.6 }} whileHover={{ y: -6 }}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tracking-widest text-gradient">
                    0{idx + 1}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Link>
            </motion.div>
          ))}
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
          intro="Modernization does not begin with a blank technology landscape. Organizations already depend on business applications, cloud services, databases, document repositories, identity platforms, integration tools, and industry-specific systems.
Tech Tammina designs solutions to work within that environment. We use Appian, Mendix, Camunda, Pega, UiPath, AWS, Microsoft Azure, and modern engineering technologies where they fit the business need. We also integrate with CRM, ERP, policy-management, agency-management, content-management, and other enterprise systems through secure APIs and data services.
The goal is not to replace every existing investment. It is to connect what matters, modernize what limits performance, and create a practical path for continued improvement.
"
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

function HomePage() {
  return (
    <>
      <Hero />
      <section className="relative border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Problem"
            title={<>Mission-critical work needs more than <span className="text-gradient">isolated technology</span></>}
            intro="Complex operations rarely fail because an organization lacks another tool. They slow down when work is fragmented across systems, documents, approvals, and teams. Tech Tammina brings these moving parts together — modernizing processes, building connected applications, improving quality, and supporting operations after launch."
          />
        </div>
      </section>
      <CapabilitiesPreview />
      <IndustriesPreview />
      <SolutionsPreview />
      <Ecosystem />
      <Why />
      <CTA />
    </>
  );
}

export { Sparkles };
