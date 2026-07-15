import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
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
  return (
    <>
      <PageHero eyebrow="Industry" title={<span>{ind.name}</span>} intro={ind.body} />
      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground">Where we focus</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ind.focus.map((f) => (
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
            <h4 className="font-display text-lg font-semibold text-foreground">Discuss your program</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll bring domain and delivery specialists to the conversation.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
