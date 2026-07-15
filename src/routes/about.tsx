import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Globe2, Handshake, LayoutGrid, Repeat, ShieldCheck } from "lucide-react";
import { fadeUp, PageHero, SectionHeading, stagger } from "@/components/section-heading";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Tech Tammina" },
      { name: "description", content: "Tech Tammina brings operational knowledge, engineering, and AI together to modernize the work that runs the business." },
      { property: "og:title", content: "About — Tech Tammina" },
      { property: "og:description", content: "Operational depth. Engineering rigor. AI where it counts." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  { icon: LayoutGrid, title: "Business and Technology Together", body: "Operational knowledge informs architecture, workflows, and delivery decisions." },
  { icon: Brain, title: "Practical AI", body: "AI is embedded where it improves reviews, decisions, knowledge access, or execution." },
  { icon: ShieldCheck, title: "Enterprise Delivery", body: "Solutions are designed for governance, integration, scale, and long-term support." },
  { icon: Repeat, title: "From Build to Operate", body: "Transformation, engineering, quality, managed services, and operations work as one delivery story." },
];

const STATS = [
  { k: "5", v: "Capability practices" },
  { k: "6", v: "Focus industries" },
  { k: "11", v: "Enterprise solutions" },
  { k: "24/7", v: "Managed operations" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A partner for the work that <span className="text-gradient">runs your business</span></>}
        intro="Tech Tammina brings operational knowledge, engineering, and AI together to modernize processes, build connected applications, improve quality, and support operations after launch."
      />

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gradient-border rounded-2xl bg-card p-6"
            >
              <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background py-20">
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
            {VALUES.map((w) => (
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

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Partnerships & Reach"
            title={<>Partnerships, ecosystem, and <span className="text-gradient">global presence</span></>}
            intro="Tech Tammina operates across a global delivery model with verified partner practices and enterprise-grade governance."
          />
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Handshake, label: "Verified partnerships" },
              { icon: Globe2, label: "Global delivery" },
              { icon: ShieldCheck, label: "Enterprise governance" },
              { icon: Repeat, label: "Continuous improvement" },
            ].map((c) => (
              <div key={c.label} className="gradient-border rounded-2xl bg-card p-5">
                <c.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-sm font-medium text-foreground">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            center
            eyebrow="Work With Us"
            title={<>Let's build your <span className="text-gradient">intelligent operations</span></>}
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
