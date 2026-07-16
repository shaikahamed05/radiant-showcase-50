import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Award, Heart, Briefcase, Mail } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Tech Tammina" },
      { name: "description", content: "Build what matters. Grow with people who care about outcomes. Explore engineering, low-code, quality, and business operations roles." },
    ],
  }),
});

const BENEFITS = [
  { icon: Award, title: "Sponsored Certifications", body: "We fully fund platform certifications across Appian, Mendix, Camunda, AWS, and Microsoft." },
  { icon: Heart, title: "Outcome-Led Culture", body: "We celebrate execution and deliverables over time-clocks, offering a supportive team environment." },
  { icon: Briefcase, title: "Enterprise Exposure", body: "Work on business-critical systems for leading brands in insurance, finance, and education." }
];

const ROLES = [
  {
    title: "Senior Appian Developer",
    location: "Visakhapatnam, India / Hybrid",
    area: "Low-Code Engineering",
    skills: "Appian Lead Developer certification, BPMN modeling, Web API integrations."
  },
  {
    title: "Mendix Lead Engineer",
    location: "Visakhapatnam, India",
    area: "Low-Code Engineering",
    skills: "Mendix Advanced/Expert certification, Java plugin creation, React widgets."
  },
  {
    title: "Quality Engineering Analyst",
    location: "Noida, India",
    area: "Quality Engineering",
    skills: "Selenium, API automation (Postman/REST Assured), functional workflow testing."
  },
  {
    title: "AWS Cloud & DevOps Specialist",
    location: "Visakhapatnam, India",
    area: "Digital Engineering",
    skills: "Terraform, AWS Bedrock, CI/CD pipeline building, RDS/DynamoDB."
  }
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build what matters. Grow with people who <span className="text-gradient">care about outcomes.</span></>}
        intro="Discover opportunities, culture, learning, and growth. Join our low-code, digital engineering, and operational teams."
      />

      {/* Culture & Benefits */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Why Join Us"
            title={<>A foundation for continuous learning and career growth</>}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="gradient-border rounded-2xl bg-card p-8 flex flex-col items-center text-center">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow mb-5">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10 text-center">Open Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ROLES.map((role) => (
              <div key={role.title} className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{role.title}</h3>
                      <span className="text-xs text-muted-foreground">{role.location}</span>
                    </div>
                    <span className="rounded-full bg-surface px-2.5 py-1 text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {role.area}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-6">
                    <span className="font-semibold text-foreground block mb-1">Key Skills:</span>
                    {role.skills}
                  </p>
                </div>
                <Link
                  to="/contact"
                  search={{ channel: "careers" }}
                  className="group inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform hover:translate-x-0.5"
                >
                  Apply Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Recruitment */}
      <section className="border-t border-border bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow mb-6">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Don't see your role?</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            We are always looking for certified low-code developers, QA experts, and systems architects. Send your resume and portfolio details to our recruitment team.
          </p>
          <Link
            to="/contact"
            search={{ channel: "careers" }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Submit General Application <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
