import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Accessibility } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/contact/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Office Locations | Tech Tammina Offices" },
      { name: "description", content: "Find verified office addresses, regional phone numbers, map directions, and office hours for Tech Tammina US and India locations." },
    ],
  }),
});

const OFFICES = [
  {
    city: "McLean, Virginia",
    country: "United States",
    role: "Global Headquarters",
    address: "8000 Towers Crescent Dr, Suite 1350, McLean, VA 22102",
    phone: "+1 (703) 349-1022",
    email: "hello@techtammina.com",
    hours: "9:00 AM — 6:00 PM EST (Monday - Friday)",
    accessibility: "Wheelchair accessible entrance, elevators, and parking."
  },
  {
    city: "Visakhapatnam, Andhra Pradesh",
    country: "India",
    role: "Global Delivery Center",
    address: "Hill No. 3, IT SEZ, Madhurawada, Visakhapatnam, AP 530048",
    phone: "+91 (891) 662-2555",
    email: "india.ops@techtammina.com",
    hours: "9:00 AM — 6:00 PM IST (Monday - Friday)",
    accessibility: "Accessible workstations, ramp access, and parking."
  },
  {
    city: "Noida, Uttar Pradesh",
    country: "India",
    role: "Regional Delivery Hub",
    address: "Sector 62, Noida, UP 201301",
    phone: "+91 (120) 420-1111",
    email: "india.ops@techtammina.com",
    hours: "9:00 AM — 6:00 PM IST (Monday - Friday)",
    accessibility: "Elevator access, handicap accessible building layout."
  }
];

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Offices"
        title={<>Connect with the right <span className="text-gradient">regional team</span></>}
        intro="Find verified office locations, phone numbers, email addresses, and regional details below."
      />

      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((office) => (
              <div key={office.city} className="gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gradient uppercase block mb-1">{office.role}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{office.city}</h3>
                  <span className="text-xs text-muted-foreground block mb-4">{office.country}</span>

                  <div className="space-y-4 text-xs">
                    <div className="flex gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/80 pt-4 space-y-3 text-[11px]">
                  <div className="flex gap-2 items-start text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{office.hours}</span>
                  </div>
                  <div className="flex gap-2 items-start text-muted-foreground">
                    <Accessibility className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{office.accessibility}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
