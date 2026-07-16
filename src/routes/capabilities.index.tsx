import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, PageHero, SectionHeading, stagger } from "@/components/section-heading";
import { CAPABILITIES } from "@/lib/site-data";

export const Route = createFileRoute("/capabilities/")({
  component: CapabilitiesIndex,
  head: () => ({
    meta: [
      { title: "Capabilities — Tech Tammina" },
      { name: "description", content: "Enterprise Transformation, Digital Engineering, Quality Engineering, Managed Services, and Business Operations." },
      { property: "og:title", content: "Capabilities — Tech Tammina" },
      { property: "og:description", content: "End-to-end capabilities for intelligent operations." },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
});

function CapabilitiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>End-to-end capabilities for <span className="text-gradient">intelligent operations</span></>}
        intro="Five practices that work as one delivery story — from transformation strategy through steady-state operations."
      />
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.slug} variants={fadeUp} transition={{ duration: 0.5 }} whileHover={{ y: -6 }}>
                <Link
                  to="/capabilities/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <span className="font-display text-xs font-semibold tracking-widest text-gradient">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                      Explore capability <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
