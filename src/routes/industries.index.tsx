import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";
import { INDUSTRIES, SOLUTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndex,
  head: () => ({
    meta: [
      { title: "Industries — Tech Tammina" },
      { name: "description", content: "Insurance, Financial Services, Healthcare & Life Sciences, Manufacturing, Education, and Public Sector." },
      { property: "og:title", content: "Industries — Tech Tammina" },
      { property: "og:description", content: "Deep focus in regulated, operations-heavy industries." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep focus in <span className="text-gradient">regulated, operations-heavy</span> industries</>}
        intro="We combine operational knowledge with engineering to move regulated workflows forward — from underwriting to citizen services."
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
            {INDUSTRIES.map((ind) => (
              <motion.div key={ind.slug} variants={fadeUp} transition={{ duration: 0.5 }} whileHover={{ y: -6 }}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-teal opacity-0 blur-3xl transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-foreground">{ind.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                      Industry detail <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function IndustryDetailShared({ slug }: { slug: string }) {
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) throw notFound();

  // Find matching solutions objects
  const relevantSols = SOLUTIONS.filter((s) => ind.solutions?.includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow="Industry Practice"
        title={<span>{ind.name}</span>}
        intro={ind.tagline || ind.body}
      />
      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6">
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            {ind.intro && (
              <div>
                <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                  {ind.intro}
                </p>
              </div>
            )}

            {/* Industry Priorities */}
            {ind.priorities && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Industry Priorities
                </h3>
                <div className="space-y-4">
                  {ind.priorities.map((p) => (
                    <div key={p.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                      <h4 className="font-display text-base font-semibold text-foreground mb-1">
                        {p.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How Tech Tammina Helps */}
            {ind.howWeHelp && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  How Tech Tammina Helps
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {ind.howWeHelp.map((item, idx) => (
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

            {/* Relevant Solutions */}
            {relevantSols.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Relevant Solutions
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relevantSols.map((sol) => (
                    <Link
                      key={sol.slug}
                      to="/solutions/$slug"
                      params={{ slug: sol.slug }}
                      className="group relative block rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40"
                    >
                      <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {sol.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                        {sol.body}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5">
                        View Solution <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            {ind.outcomes && (
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                  Outcomes we deliver
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 mb-8">
                  {ind.outcomes.map((o) => (
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

            {/* Enterprise Ecosystem */}
            {ind.ecosystem && (
              <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Enterprise Ecosystem & Integration
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ind.ecosystem} We configure and deploy all workflows around your core lines of business applications, databases, identity systems, and cloud services to ensure compliance and prevent disruptions.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
