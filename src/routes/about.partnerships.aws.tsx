import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Award } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/about/partnerships/aws")({
  component: AwsPage,
  head: () => ({
    meta: [
      { title: "AWS Practice — Tech Tammina" },
      { name: "description", content: "Explore Tech Tammina AWS capabilities, solutions, expertise, resources, and managed services." },
    ],
  }),
});

const SERVICES = [
  "Cloud Architecture & Landing Zone Setup",
  "Infrastructure as Code (IaC) with Terraform/CloudFormation",
  "AWS Bedrock AI Services & Pipeline Integration",
  "Serverless APIs & Microservices (Lambda, API Gateway)",
  "Database Operations & Migration (RDS, DynamoDB)",
  "CI/CD Pipeline Automation & DevOps Security Governance"
];

const CERTIFICATIONS = [
  "AWS Certified Solutions Architects (Associate & Professional)",
  "AWS Certified Developer Associate",
  "AWS Certified SysOps Administrators",
  "AWS Certified DevOps Engineers"
];

function AwsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem Practice"
        title={<span>AWS Practice</span>}
        intro="Cloud architecture, deployment, DevOps, AI services, storage, databases, monitoring, and security."
      />

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Value Proposition */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Practice Overview</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                We design and configure secure, highly available, and cost-effective cloud architectures on AWS. Our practice focuses on serverless applications, container orchestrations, DevOps automation, and integrating cognitive AWS services (like Amazon Bedrock and Textract) directly into client operational workflows.
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
                Discuss your AWS cloud migration, serverless pipeline implementation, or DevOps requirements.
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
