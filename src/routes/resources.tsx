import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Calendar, FileText, Newspaper, PlayCircle, Sparkles } from "lucide-react";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources — Tech Tammina" },
      { name: "description", content: "Insights, case studies, white papers, events, news, and videos on intelligent operations." },
      { property: "og:title", content: "Resources — Tech Tammina" },
      { property: "og:description", content: "Perspectives on AI, automation, and enterprise operations." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
});

const RESOURCES = [
  { icon: Sparkles, tag: "Insight", title: "The Case for Intelligent Operations", body: "Why isolated tools stall — and how connected workflows change the outcome." },
  { icon: FileText, tag: "Case Study", title: "COI Compliance at Scale", body: "How a national insurer automated certificate intake and deficiency tracking." },
  { icon: BookOpen, tag: "White Paper", title: "Practical AI in Regulated Workflows", body: "A framework for embedding AI where it improves reviews and decisions." },
  { icon: Calendar, tag: "Webinar", title: "Modernizing Underwriting Reviews", body: "Live session on document intelligence and structured decision support." },
  { icon: Newspaper, tag: "News", title: "Expanded Managed Services Practice", body: "New capabilities for 24/7 support and continuous improvement." },
  { icon: PlayCircle, tag: "Video", title: "Inside Claims Automation", body: "A short walkthrough of intake, assignments, decisions, and visibility." },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Perspectives on <span className="text-gradient">intelligent operations</span></>}
        intro="Insights, case studies, white papers, events, news, and videos from our teams and partners."
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
            {RESOURCES.map((r) => (
              <motion.article
                key={r.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:border-primary/40"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow-cyan">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-gradient">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
