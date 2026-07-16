import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Sparkles, LayoutGrid, Heart } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about/partnerships/")({
  component: PartnershipsPage,
  head: () => ({
    meta: [
      { title: "Partnerships & Ecosystem | Platform Practices" },
      { name: "description", content: "Explore Tech Tammina's verified platform practices and formal alliances across Appian, Mendix, Camunda, AWS, and Microsoft." },
    ],
  }),
});

const PARTNERS = [
  {
    slug: "appian",
    name: "Appian Practice",
    desc: "AI process automation, workflow, case management, data, document automation, and enterprise applications.",
    value: "Deliver end-to-end intelligent automation workflows and Appian components.",
    to: "/about/partnerships/appian"
  },
  {
    slug: "mendix",
    name: "Mendix Practice",
    desc: "Enterprise application development and modernization using the Mendix low-code platform.",
    value: "Build rapid operational portals, mobile apps, and modernization pipelines.",
    to: "/about/partnerships/mendix"
  },
  {
    slug: "camunda",
    name: "Camunda Practice",
    desc: "Process orchestration across people, systems, decisions, and AI-enabled work.",
    value: "Connect disjointed workflows and orchestrate complex microservice transactions.",
    to: "/about/partnerships/camunda"
  },
  {
    slug: "aws",
    name: "AWS Practice",
    desc: "Cloud architecture, deployment, DevOps, AI services, storage, databases, monitoring, and security.",
    value: "Configure robust cloud delivery systems and AI pipeline storage infrastructure.",
    to: "/about/partnerships/aws"
  },
  {
    slug: "microsoft",
    name: "Microsoft Practice",
    desc: "Cloud, identity, productivity, collaboration, data, and enterprise integration.",
    value: "Ensure enterprise security, Azure deployments, and Office/AD ecosystem synchronization.",
    to: "/about/partnerships/microsoft"
  }
];

const CONTRIBUTIONS = [
  { title: "SmartMeta Extractor", desc: "A utility for Appian to extract and normalize document metadata automatically." },
  { title: "HTML to Excel Transformation", desc: "Allows rapid, structured spreadsheet generation directly from HTML markup inputs." },
  { title: "Appian AI Lens", desc: "Provides monitoring and audit dashboard utilities for Appian AI actions." },
  { title: "Custom Smart Services & Utilities", desc: "A collection of Appian plug-ins to improve connector performance and stability." }
];

function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships & Ecosystem"
        title={<>Stronger outcomes through <span className="text-gradient">focused platform practices</span></>}
        intro="We build expertise around leading process automation, application development, and cloud platforms."
      />

      {/* Philosophy */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            center
            eyebrow="Our Philosophy"
            title={<>Deep expertise, not just logo galleries</>}
          />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            We do not claim partnerships lightly. Tech Tammina focuses on formal, active relationships where we maintain certified developers, delivery playbooks, and verified customer success. We treat partner technologies as practices to master and apply to real operational challenges.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10">Our Platform Practices</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p) => (
              <div key={p.name} className="gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{p.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-4">{p.desc}</p>
                  <div className="rounded-xl bg-surface p-4 mb-6">
                    <span className="block text-[10px] font-bold tracking-wider text-gradient uppercase mb-1">Business Value</span>
                    <p className="text-xs text-foreground/80 font-medium">{p.value}</p>
                  </div>
                </div>
                <Link
                  to={p.to as any}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5 mt-2"
                >
                  Explore Practice <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Contributions */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Marketplace & Community"
            title={<>Tools, plugins, and <span className="text-gradient">marketplace contributions</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTRIBUTIONS.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <Sparkles className="h-5 w-5 text-primary mb-4" />
                <h4 className="font-display text-base font-semibold text-foreground mb-2">{c.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            center
            eyebrow="Partnership Interest"
            title={<>Tell us about your ecosystem or alliance idea</>}
          />
          <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
            Share the platform, region, or joint delivery model you are exploring and we will get back to you.
          </p>
          <div className="mt-10">
            <PartnershipForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Discuss your practice requirements</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            Connect with our practice owners to see how we can bring certified delivery capabilities to your initiative.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to the Practice Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gradient-border rounded-2xl bg-card p-10 text-center"
    >
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow mb-6">
        <Check className="h-7 w-7" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Partnership Request Received</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Thank you for your proposal. Our alliances team will review the details and follow up shortly.
      </p>
    </motion.div>
  ) : (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="gradient-border relative rounded-2xl bg-card p-8 sm:p-10 space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Partnership Type *
          </label>
          <select
            required
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          >
            <option value="">Select a type...</option>
            <option value="technology">Technology/ISV Integration</option>
            <option value="referral">Referral/Agent Alliance</option>
            <option value="delivery">Co-Delivery / Subcontracting</option>
            <option value="marketing">Co-Marketing & Events</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Primary Platform Focus *
          </label>
          <input
            required
            type="text"
            placeholder="e.g., Appian, Camunda, Salesforce, Custom Integration"
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
          Proposed Collaboration Overview *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us how you would like to work together, joint solutions, target markets, or referral models..."
          className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Target Regions *
          </label>
          <input
            required
            type="text"
            placeholder="e.g., North America, EMEA, APAC, Global"
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Work Email *
          </label>
          <input
            required
            type="email"
            placeholder="name@company.com"
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Contact Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="First and last name"
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
            Company / Organization *
          </label>
          <input
            required
            type="text"
            placeholder="Your organization"
            className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full group inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
      >
        Submit Proposal
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.form>
  );
}
