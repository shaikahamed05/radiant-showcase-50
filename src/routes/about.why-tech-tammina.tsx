import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Repeat, Brain, Award, ShieldCheck, Globe2, Activity } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about/why-tech-tammina")({
  component: WhyPage,
  head: () => ({
    meta: [
      { title: "Why Tech Tammina | Differentiators and Strengths" },
      { name: "description", content: "Learn about Tech Tammina's differentiators: connected capabilities, practical AI, operational knowledge, quality discipline, and global delivery." },
    ],
  }),
});

const DIFFS = [
  {
    icon: Repeat,
    title: "Connected Capabilities",
    body: "We provide an end-to-end delivery path: strategy, development, quality validation, managed support, and operational processes work together as one cohesive story."
  },
  {
    icon: Brain,
    title: "Practical AI & Automation",
    body: "We focus on embedding AI directly into structured business workflows, document extraction processes, and decision-support tasks, rather than offering stand-alone AI tools."
  },
  {
    icon: Award,
    title: "Industry & Operations Knowledge",
    body: "Our teams understand the compliance, priorities, terminology, and operational bottlenecks that shape sectors like insurance, financial services, healthcare, and manufacturing."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Engineering & Integration",
    body: "We design, build, and configure systems around your existing software infrastructure, document stores, security practices, and reporting systems."
  },
  {
    icon: Activity,
    title: "Quality & Managed Services Discipline",
    body: "We build automated validation into the delivery pipeline and provide continuous SLA-aligned support and optimization backlogs post-launch."
  },
  {
    icon: Globe2,
    title: "Global Delivery Model",
    body: "Our hybrid teams pair local business understanding and accountability with specialized, scalable offshore engineering teams to achieve cost efficiency."
  }
];

const PROOF_POINTS = [
  { val: "98%", label: "Client retention rate based on multi-year delivery partnerships." },
  { val: "100%", label: "SLA compliance maintained across our managed support engagements." },
  { val: "10+", label: "Years of average partnership duration with our core enterprise clients." }
];

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Tech Tammina"
        title={<>One partner across transformation, engineering, quality, operations, and support</>}
        intro="Explain the differentiators: connected capabilities, practical AI, operational knowledge, quality discipline, managed services, and global delivery."
      />

      {/* Differentiators Grid */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Key Differentiators"
            title={<>What makes Tech Tammina different</>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFS.map((d) => (
              <div key={d.title} className="gradient-border relative overflow-hidden rounded-2xl bg-card p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow mb-5">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-semibold text-foreground">Verified Proof Points</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We believe in metrics, accountability, and long-term relationships. These metrics reflect our actual performance history and dedication to client success.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-3">
              {PROOF_POINTS.map((pp) => (
                <div key={pp.label} className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                  <span className="font-display text-4xl font-semibold text-gradient block mb-3">{pp.val}</span>
                  <p className="text-xs leading-relaxed text-muted-foreground">{pp.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Ready to discuss your program?</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            Tell us about your operational challenge, workflow bottleneck, or engineering project. We'll match you with the right specialists.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
