import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";
import { SOLUTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsIndex,
  head: () => ({
    meta: [
      { title: "Solutions — Tech Tammina" },
      { name: "description", content: "Eleven purpose-built solutions across insurance, compliance, vendor, fleet, and document-intensive operations." },
      { property: "og:title", content: "Solutions — Tech Tammina" },
      { property: "og:description", content: "Solutions engineered for measurable outcomes." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
});

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Solutions engineered for <span className="text-gradient">measurable outcomes</span></>}
        intro="Purpose-built to accelerate the work that runs the business — from underwriting to vendors."
      />
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {SOLUTIONS.map((s, i) => (
              <motion.div key={s.slug} variants={fadeUp} transition={{ duration: 0.5 }} whileHover={{ y: -6 }}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-semibold tracking-widest text-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow transition-transform group-hover:rotate-45">
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
    </>
  );
}

export function SolutionDetailShared({ slug }: { slug: string }) {
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) throw notFound();

  return (
    <>
      <PageHero eyebrow="Enterprise Solution" title={<span>{sol.title}</span>} intro={sol.body} />
      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Solution Overview */}
            {sol.overview && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Solution Overview
                </h3>
                <p className="text-base leading-relaxed text-foreground/90 font-medium">
                  {sol.overview}
                </p>
              </div>
            )}

            {/* Business Challenge */}
            {sol.challenge && (
              <div className="gradient-border rounded-2xl bg-card p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  The Business Challenge
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                  {sol.challenge}
                </p>
              </div>
            )}

            {/* Key Capabilities */}
            {sol.capabilities && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Key Capabilities
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {sol.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <span className="grid h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/85 font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How It Works */}
            {sol.howItWorks && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {sol.howItWorks.map((step, idx) => (
                    <div key={step} className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-xs font-semibold text-primary-foreground">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed self-center">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Outcomes */}
            {sol.outcomes && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Business Outcomes
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 mb-8">
                  {sol.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Built to Fit Your Enterprise Ecosystem */}
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Built to Fit Your Enterprise Ecosystem
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                This solution can be configured around your existing enterprise applications, workflow platforms, identity management, document repositories, cloud services, reporting tools, and third-party APIs.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Workflow Platforms", val: "Appian, Mendix, Camunda" },
                  { label: "Enterprise Apps", val: "Salesforce, SAP, Custom APIs" },
                  { label: "Cloud Platforms", val: "AWS, Microsoft Azure" },
                  { label: "Identity & Security", val: "Okta, Active Directory, SSO" }
                ].map((eco) => (
                  <div key={eco.label} className="rounded-xl border border-border bg-card p-4">
                    <span className="block text-xs font-semibold text-gradient mb-1">{eco.label}</span>
                    <span className="block text-xs text-muted-foreground font-medium">{eco.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="gradient-border h-fit rounded-2xl bg-card p-6">
            <h4 className="font-display text-lg font-semibold text-foreground">Request a demo</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              See {sol.title} in action against your workflow.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
