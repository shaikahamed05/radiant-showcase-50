import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Calendar, FileText, Newspaper, PlayCircle, Sparkles } from "lucide-react";
import { z } from "zod";
import { fadeUp, PageHero, stagger } from "@/components/section-heading";

const resourcesSearchSchema = z.object({
  type: z.string().optional(),
});

export const Route = createFileRoute("/resources")({
  validateSearch: (search) => resourcesSearchSchema.parse(search),
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
  { icon: Sparkles, tag: "Insight", title: "Enterprise AI with Appian", body: "Explore how Appian's AI agents, intelligent document processing, process intelligence, and AI-assisted development are being used in governed enterprise workflows." },
  { icon: BookOpen, tag: "Insight", title: "Accelerating Enterprise Application Delivery with Mendix", body: "Learn how Mendix helps organizations move from business idea to scalable application faster while balancing architecture, integration, security, and maintainability." },
  { icon: FileText, tag: "Insight", title: "Enterprise Document Intelligence", body: "Discover how organizations can turn policies, contracts, certificates, submissions, invoices, and other unstructured content into trusted business data." },
  { icon: Sparkles, tag: "Insight", title: "Knowing What Changed", body: "See how intelligent comparison identifies material changes across policies, proposals, contracts, schedules, requirements, and other complex documents." },
  { icon: FileText, tag: "Insight", title: "From AI Experiments to Governed Enterprise Workflows", body: "Explore how AI can be combined with workflow, business rules, human review, auditability, and performance measurement to create reliable enterprise use cases." },
  { icon: FileText, tag: "Case Study", title: "COI Compliance at Scale", body: "How a national insurer automated certificate intake and deficiency tracking." },
  { icon: BookOpen, tag: "White Paper", title: "Practical AI in Regulated Workflows", body: "A framework for embedding AI where it improves reviews and decisions." },
  { icon: Calendar, tag: "Webinar", title: "Modernizing Underwriting Reviews", body: "Live session on document intelligence and structured decision support." },
  { icon: Newspaper, tag: "News", title: "Expanded Managed Services Practice", body: "New capabilities for 24/7 support and continuous improvement." },
  { icon: PlayCircle, tag: "Video", title: "Inside Claims Operations", body: "A short walkthrough of intake, assignments, decisions, and visibility." },
];

const FILTER_TABS = [
  { label: "All", type: undefined },
  { label: "Insights", type: "insight" },
  { label: "Case Studies", type: "case-study" },
  { label: "White Papers", type: "white-paper" },
  { label: "Events & Webinars", type: "webinar" },
  { label: "News", type: "news" },
  { label: "Videos", type: "video" },
];

function ResourcesPage() {
  const { type } = Route.useSearch();
  const getSlug = (tag: string) => tag.toLowerCase().replace(/\s+/g, "-");
  
  const filteredResources = type
    ? RESOURCES.filter((r) => getSlug(r.tag) === type.toLowerCase())
    : RESOURCES;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Perspectives on <span className="text-gradient">intelligent operations</span></>}
        intro="Insights, case studies, white papers, events, news, and videos from our teams and partners."
      />
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tabs Filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = (!type && !tab.type) || (type === tab.type);
              return (
                <Link
                  key={tab.label}
                  to="/resources"
                  search={tab.type ? { type: tab.type } : {}}
                  resetScroll={false}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                    isActive
                      ? "bg-accent-gradient text-primary-foreground border-transparent shadow-glow"
                      : "bg-surface border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              No resources found for this filter.
            </div>
          ) : (
            <motion.div
              key={type || "all"}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredResources.map((r) => (
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
          )}
        </div>
      </section>
    </>
  );
}
