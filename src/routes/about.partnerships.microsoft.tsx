import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Award } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/about/partnerships/microsoft")({
  component: MicrosoftPage,
  head: () => ({
    meta: [
      { title: "Microsoft Practice — Tech Tammina" },
      { name: "description", content: "Explore Tech Tammina Microsoft capabilities, solutions, expertise, resources, and managed services." },
    ],
  }),
});

const SERVICES = [
  "Azure Cloud Infrastructure & Virtual Network Design",
  "Active Directory, IAM, and SSO Integration",
  "Microsoft 365 & SharePoint Document Automation",
  "Power Automate (RPA) & Workflow Integrations",
  "SQL Server Administration & Business Intelligence",
  "Azure DevOps & Secure Infrastructure Deployment"
];

const CERTIFICATIONS = [
  "Microsoft Certified: Azure Solutions Architect Expert",
  "Microsoft Certified: Azure Developer Associate",
  "Microsoft Certified: Identity and Access Administrator",
  "Microsoft Certified: Power Platform Developer"
];

function MicrosoftPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem Practice"
        title={<span>Microsoft Practice</span>}
        intro="Cloud, identity, productivity, collaboration, data, and enterprise integration."
      />

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Value Proposition */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Practice Overview</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                We design and configure Microsoft-centric solutions that establish secure, connected enterprise environments. Our practice focuses on Microsoft Azure infrastructure deployments, Active Directory single sign-on (SSO) configuration, SharePoint content integrations, and leveraging the Power Platform to automate user tasks.
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
                Discuss your Azure cloud infrastructure, Microsoft integration requirements, or Power Platform automation.
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
