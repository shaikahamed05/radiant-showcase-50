import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";
import { SOLUTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
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
  const features = [
    "Ingest and classify inbound documents automatically",
    "Extract structured data with confidence scoring",
    "Route work to the right reviewer, team, or system",
    "Track exceptions, deficiencies, and audit history",
    "Integrate with your enterprise systems of record",
  ];
  return (
    <>
      <PageHero eyebrow="Solution" title={<span>{sol.title}</span>} intro={sol.body} />
      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground">What it does</h3>
            <ul className="mt-5 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
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
