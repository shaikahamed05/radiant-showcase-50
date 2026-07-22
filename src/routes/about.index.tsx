import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Heart, UserCheck, Calendar, Users, MapPin, Award, Activity } from "lucide-react";
import { fadeUp, PageHero, SectionHeading, stagger } from "@/components/section-heading";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Tech Tammina | Intelligent Operations Company" },
      { name: "description", content: "Learn how Tech Tammina combines AI, automation, digital engineering, managed services, and business operations to build intelligent operations." },
      { property: "og:title", content: "About Tech Tammina | Intelligent Operations Company" },
      { property: "og:description", content: "Learn how Tech Tammina combines AI, automation, digital engineering, managed services, and business operations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const BELIEFS = [
  {
    icon: UserCheck,
    title: "Business First",
    body: "Technology should solve a clear operating problem and create measurable value."
  },
  {
    icon: Activity,
    title: "Build for Change",
    body: "Applications, workflows, and operating models must be able to evolve."
  },
  {
    icon: Heart,
    title: "Deliver as a Partner",
    body: "Long-term success requires transparency, shared accountability, and continuous improvement."
  }
];

const SNAPSHOT = [
  { icon: Calendar, label: "Founding Year", val: "2005" },
  { icon: Users, label: "Employee Count", val: "500+" },
  { icon: MapPin, label: "Global Locations", val: "US & India" },
  { icon: Award, label: "Certifications", val: "ISO 9001 & 27001" }
];

const SUBPAGES = [
  { label: "Leadership", desc: "Meet the team responsible for strategy and delivery.", to: "/about/leadership" },
  { label: "Why Tech Tammina", desc: "Understand our combination of business, technology, and quality.", to: "/about/why-tech-tammina" },
  { label: "Office Locations", desc: "Explore our regional teams and delivery locations across the US, India, Netherlands, and UAE.", to: "/contact/locations" },
  { label: "Partnerships & Ecosystem", desc: "Explore our formal practices, platform alliances, and contributions.", to: "/about/partnerships" },
  { label: "Careers", desc: "Discover culture, values, and open opportunities.", to: "/careers" }
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Overview"
        title={<>Business understanding. Engineering discipline. <span className="text-gradient">Operational focus.</span></>}
        intro="Tech Tammina brings technology and business operations together to create lasting value."
      />

      {/* Who We Are */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-semibold text-foreground">Who We Are</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tech Tammina is a technology consulting and business solutions company focused on improving how organizations operate. We combine enterprise AI & intelligent automation, digital engineering, quality engineering, managed services, and business operations to solve complex, practical challenges across regulated and operationally intensive industries.
              </p>
              <div className="pt-4 grid gap-6 sm:grid-cols-2">
                {BELIEFS.map((b) => (
                  <div key={b.title} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <b.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{b.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-2xl bg-card p-8 h-fit">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">Company Snapshot</h3>
              <div className="space-y-6">
                {SNAPSHOT.map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow">
                      <s.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">{s.label}</span>
                      <span className="block text-sm font-semibold text-foreground">{s.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Explore Our Organization"
            title={<>Learn more about our <span className="text-gradient">values, leadership, and reach</span></>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUBPAGES.map((sp) => (
              <Link
                key={sp.to}
                to={sp.to as any}
                search={sp.search as any}
                className="group relative block rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-all hover:scale-[1.01]"
              >
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {sp.label}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                  {sp.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
