import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldAlert } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about/leadership")({
  component: LeadershipPage,
  head: () => ({
    meta: [
      { title: "Leadership — Tech Tammina" },
      { name: "description", content: "Learn about Tech Tammina leadership, our intelligent operations focus, and our commitment to client outcomes." },
    ],
  }),
});

const EXECUTIVES = [
  {
    name: "Raj Tammina",
    role: "Chief Executive Officer",
    bio: "Focuses on strategic direction, global partnerships, and alignment of technology services to customer business objectives. Over 20 years of operations leadership.",
    focus: "Strategy & Partnership",
    linkedin: "#"
  },
  {
    name: "Prasad Tammina",
    role: "VP of Global Delivery",
    bio: "Manages offshore operations, quality control pipelines, and scaling client delivery capability across India delivery centers.",
    focus: "Global Operations",
    linkedin: "#"
  }
];

const PRACTICE_LEADERS = [
  {
    name: "Sanjay Kumar",
    role: "Appian & Low-Code Practice Head",
    bio: "Oversees low-code workflow development, certified consultant pipelines, and delivery of Process Automation projects.",
    focus: "Appian Practice"
  },
  {
    name: "Nisha Patel",
    role: "Quality Engineering Director",
    bio: "Ensures delivery speed is backed by robust testing strategies, automated regression test builds, and compliance validation.",
    focus: "Quality Engineering"
  },
  {
    name: "Robert Chen",
    role: "Managed Support Lead",
    bio: "Responsible for SLA alignment, proactive platform maintenance support, upgrades, and steady-state optimization.",
    focus: "Managed Services"
  }
];

function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={<>Leadership focused on client outcomes and <span className="text-gradient">long-term value</span></>}
        intro="Introducing the practice leads and executives responsible for strategy, delivery, operations, and growth."
      />

      {/* Leadership Message */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            center
            eyebrow="Message from our CEO"
            title={<>Accountable delivery. Proven outcomes.</>}
          />
          <blockquote className="mt-8 text-lg font-medium text-foreground/80 italic leading-relaxed">
            "Our mission is to help enterprise organizations build scalable, modern workflows that solve operational bottlenecks. We believe technology should always serve a business objective, and we commit to absolute transparency and shared accountability with our clients."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-gradient">— Raj Tammina, CEO</p>
        </div>
      </section>

      {/* Executive Leadership */}
      {/* <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10">Executive Leadership</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {EXECUTIVES.map((exec) => (
              <div key={exec.name} className="gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exec.name}</h3>
                      <span className="text-xs font-medium text-gradient">{exec.role}</span>
                    </div>
                    <a href={exec.linkedin} aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">{exec.bio}</p>
                </div>
                <div className="border-t border-border/80 pt-4 flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Area of Responsibility:</span>
                  <span className="font-semibold text-foreground">{exec.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Practice Leadership */}
      {/* <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10">Practice Leadership</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PRACTICE_LEADERS.map((pl) => (
              <div key={pl.name} className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{pl.name}</h3>
                  <span className="block text-xs font-semibold text-gradient mb-3">{pl.role}</span>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-6">{pl.bio}</p>
                </div>
                <div className="border-t border-border/60 pt-4 flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Practice Area:</span>
                  <span className="font-medium text-foreground">{pl.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Governance & Client Commitment */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow mb-6">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Governance and Client Commitment</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            Every client engagement is guided by a formal governance model that includes executive sponsorship, regular operational checks, SLA reporting, quality gates, and a continuous improvement backlog. We hold ourselves accountable for delivery timelines and measurable business outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Connect with our Leadership <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
