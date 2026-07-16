import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
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
    city: "USA",
    company: "Tech Tammina LLC",
    address: "4460 Brookfield Corporate Dr, Suite N, Chantilly, VA 20151, USA",
    phone: "+1-703-349-1074",
    altPhone: "703-991-5532",
    email: "info@tammina.com"
  },
  {
    city: "Visakhapatnam, India",
    company: "Sree Tammina Software Solutions (I) PVT LTD.",
    address: "SVS Towers, Sankaramatham Rd, Visakhapatnam, AP, India 530016",
    phone: "+91-891-2555200, 2555204",
    altPhone: "+91-891-2555201",
    email: "info@tammina.com"
  },
  {
    city: "Hyderabad, India",
    company: "Sree Tammina Software Solutions (I) PVT LTD.",
    address: "2nd Floor, C-Block, Win Win Towers, Madhapur, HITEC City, Hyderabad -500081, Telangana",
    phone: "",
    altPhone: "",
    email: "info@tammina.com"
  },
  {
    city: "Amsterdam, Netherlands",
    company: "Tech Tammina BV",
    address: "Keizersgracht 391A, 1016 EJ, Amsterdam, Netherlands",
    phone: "+31-645-828-790",
    altPhone: "",
    email: "netherlands@tammina.com"
  },
  {
    city: "Dubai, UAE",
    company: "Tech Tammina IT Services CO. L.L.C",
    address: "Office No. 106, Level 1, Coastal Building, Near Al Twar Centre, Al Qusais 2, P.O. Box: 51150 Dubai, UAE",
    phone: "",
    altPhone: "",
    email: "info@tammina.com"
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{office.city}</h3>
                  <span className="text-xs text-muted-foreground block mb-4">{office.company}</span>

                  <div className="space-y-4 text-xs">
                    <div className="flex gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{office.address}</span>
                    </div>
                    {office.phone ? (
                      <div className="flex gap-2 items-center">
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{office.phone}</a>
                      </div>
                    ) : null}
                    {office.altPhone ? (
                      <div className="flex gap-2 items-center">
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        <a href={`tel:${office.altPhone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{office.altPhone}</a>
                      </div>
                    ) : null}
                    <div className="flex gap-2 items-center">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">{office.email}</a>
                    </div>
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
