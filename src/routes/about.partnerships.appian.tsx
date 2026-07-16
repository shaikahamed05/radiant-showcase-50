import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Award, Sparkles, BookOpen } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/about/partnerships/appian")({
  component: AppianPage,
  head: () => ({
    meta: [
      { title: "Appian Practice — Tech Tammina" },
      { name: "description", content: "Explore Tech Tammina Appian capabilities, solutions, expertise, resources, and managed services." },
    ],
  }),
});

const SERVICES = [
  "End-to-End Low-Code Workflow & App Development",
  "Appian Case Management & Business Rules",
  "Intelligent Document Processing (IDP) Integrations",
  "Appian Process Mining & Workflow Optimization",
  "Steady-state Application Support & Platform Upgrades",
  "Legacy Migration to Appian Cloud Architecture"
];

const CERTIFICATIONS = [
  "Appian Certified Associate Developers",
  "Appian Certified Senior Developers",
  "Appian Certified Lead Developers",
  "Appian Certified Program Managers & Analysts"
];

const CONTRIBUTIONS = [
  { title: "SmartMeta Extractor", desc: "A utility for Appian to extract and normalize document metadata automatically." },
  { title: "HTML to Excel Transformation", desc: "Allows rapid, structured spreadsheet generation directly from HTML markup inputs." },
  { title: "Appian AI Lens", desc: "Provides monitoring and audit dashboard utilities for Appian AI actions." },
  { title: "Custom Smart Services", desc: "Specialized plugins to accelerate database and API connection performance." }
];

function AppianPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem Practice"
        title={<span>Appian Practice</span>}
        intro="AI process automation, workflow, case management, data, document automation, and enterprise applications."
      />

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Value Proposition */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Practice Overview</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                We combine deep Appian platform expertise with real operational understanding. Our certified practice team designs, builds, and maintains workflow-driven enterprise applications that coordinate people, data, processes, and AI actions in one governed platform.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">Capabilities & Services</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketplace Contributions */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">Marketplace & Community Contributions</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTRIBUTIONS.map((c) => (
                  <div key={c.title} className="rounded-xl border border-border bg-card/60 p-5">
                    <Sparkles className="h-4.5 w-4.5 text-primary mb-2" />
                    <h4 className="font-display text-sm font-semibold text-foreground mb-1">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {/* Certifications Sidebar */}
            <div className="gradient-border rounded-2xl bg-card p-6 shadow-sm">
              <h4 className="font-display text-base font-semibold text-foreground flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" /> Credentials
              </h4>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice CTA */}
            <div className="gradient-border rounded-2xl bg-card p-6 shadow-sm">
              <h4 className="font-display text-base font-semibold text-foreground mb-2">Talk to the Practice Team</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                Discuss your Appian roadmap, project delivery, or platform migration requirements.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow"
              >
                Connect with the Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
