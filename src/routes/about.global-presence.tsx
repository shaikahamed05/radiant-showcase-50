import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Globe2, Clock, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about/global-presence")({
  component: GlobalPresencePage,
  head: () => ({
    meta: [
      { title: "Global Presence — Tech Tammina" },
      { name: "description", content: "Learn about Tech Tammina global presence: locations, delivery model, and time-zone collaboration." },
    ],
  }),
});

const LOCATIONS = [
  {
    city: "McLean, Virginia",
    country: "United States",
    type: "Headquarters & Onshore Strategy",
    desc: "Houses our core business analysts, client program managers, low-code strategists, and executive leaders. Ensures local accountability and direct communication."
  },
  {
    city: "Visakhapatnam, Andhra Pradesh",
    country: "India",
    type: "Global Delivery Center",
    desc: "Our primary hub for low-code engineering (Appian, Mendix, Camunda), Quality Engineering test factories, cloud orchestration, and 24/7 managed services."
  },
  {
    city: "Noida, Uttar Pradesh",
    country: "India",
    type: "Regional Delivery Hub",
    desc: "Provides additional developer capacity, specialized business operations support, and business process outsourcing (BPO) team operations."
  }
];

const COLLAB_PILLARS = [
  {
    icon: Clock,
    title: "Time-Zone Synchronization",
    body: "We structure daily standups, handoffs, and status reviews during overlapping office hours to ensure seamless collaboration between US client teams and offshore resources."
  },
  {
    icon: ShieldCheck,
    title: "Onshore Governance",
    body: "US-based client engagement leads act as your single point of contact. They translate requirements, check progress, and guarantee deliverables."
  },
  {
    icon: Globe2,
    title: "Offshore Delivery Scale",
    body: "Our India centers provide highly specialized, certified engineering talent at scale, allowing clients to run continuous development cycles efficiently."
  }
];

function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title={<>Global delivery. <span className="text-gradient">Local accountability.</span></>}
        intro="Present operating locations, delivery capabilities, time-zone coverage, collaboration model, and office contact links."
      />

      {/* Locations */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            center
            eyebrow="Our Centers"
            title={<>Where we operate</>}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{loc.city}</h3>
                      <span className="text-xs text-muted-foreground">{loc.country}</span>
                    </div>
                  </div>
                  <span className="block text-xs font-semibold text-gradient mb-4">{loc.type}</span>
                  <p className="text-xs leading-relaxed text-muted-foreground">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-semibold text-foreground">Our Collaboration Model</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Running global operations requires structured communications. Our model is built to ensure you get the cost benefit of offshore engineering with zero communication lag or governance deficiencies.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              {COLLAB_PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-section py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Want to visit our offices?</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            Check our regional office directions, verified locations, phone numbers, and operational hours.
          </p>
          <Link
            to="/contact"
            search={{ channel: "locations" }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Check Office Locations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
