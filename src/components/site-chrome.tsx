import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export const NAV_LINKS = [
  { label: "Capabilities", to: "/capabilities" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const SUBTABS: Record<string, { label: string; to: string; params?: Record<string, string>; search?: Record<string, string>; hash?: string }[]> = {
  Capabilities: [
    { label: "Enterprise Transformation", to: "/capabilities/$slug", params: { slug: "enterprise-transformation" } },
    { label: "Digital Engineering", to: "/capabilities/$slug", params: { slug: "digital-engineering" } },
    { label: "Quality Engineering", to: "/capabilities/$slug", params: { slug: "quality-engineering" } },
    { label: "Managed Services", to: "/capabilities/$slug", params: { slug: "managed-services" } },
    { label: "Business Operations", to: "/capabilities/$slug", params: { slug: "business-operations" } },
  ],
  Industries: [
    { label: "Insurance", to: "/industries/$slug", params: { slug: "insurance" } },
    { label: "Financial Services", to: "/industries/$slug", params: { slug: "financial-services" } },
    { label: "Healthcare & Life Sciences", to: "/industries/$slug", params: { slug: "healthcare-life-sciences" } },
    { label: "Manufacturing", to: "/industries/$slug", params: { slug: "manufacturing" } },
    { label: "Education", to: "/industries/$slug", params: { slug: "education" } },
    { label: "Public Sector", to: "/industries/$slug", params: { slug: "public-sector" } },
  ],
  Solutions: [
    { label: "Policy Checking Automation", to: "/solutions/$slug", params: { slug: "policy-checking-automation" } },
    { label: "COI Compliance Management", to: "/solutions/$slug", params: { slug: "coi-compliance-management" } },
    { label: "Claims Operations", to: "/solutions/$slug", params: { slug: "claims-automation" } },
    { label: "Proposal Automation", to: "/solutions/$slug", params: { slug: "renewal-intelligence" } },
    { label: "Document Intelligence", to: "/solutions/$slug", params: { slug: "fleet-management" } },
    { label: "Vendor & Compliance Management", to: "/solutions/$slug", params: { slug: "vendor-management" } },
    { label: "Order Management", to: "/solutions/$slug", params: { slug: "order-management" } },
    { label: "Compliance Management", to: "/solutions/$slug", params: { slug: "compliance-management" } },
    { label: "HRMS & Employee Hub", to: "/solutions/$slug", params: { slug: "hrms-and-employee-hub" } },
    { label: "University Admissions Management", to: "/solutions/$slug", params: { slug: "university-admissions-management" } },
    { label: "Complaint & Service Request Management", to: "/solutions/$slug", params: { slug: "complaint-and-service-request-management" } },
  ],
  Resources: [
    { label: "Insights", to: "/resources", search: { type: "insight" } },
    { label: "Case Studies", to: "/resources", search: { type: "case-study" } },
    { label: "White Papers & Research", to: "/resources", search: { type: "white-paper" } },
    { label: "Events & Webinars", to: "/resources", search: { type: "webinar" } },
    { label: "News", to: "/resources", search: { type: "news" } },
    { label: "Videos & Downloads", to: "/resources", search: { type: "video" } },
  ],
  About: [
    { label: "Company Overview", to: "/about" },
    { label: "Leadership", to: "/about/leadership" },
    { label: "Why Tech Tammina", to: "/about/why-tech-tammina" },
    { label: "Talk to an Expert", to: "/contact", search: { channel: "expert" } },
    { label: "Request a Demo", to: "/contact", search: { channel: "demo" } },
    { label: "Partnerships & Ecosystem", to: "/about/partnerships" },
    { label: "Global Presence", to: "/about/global-presence" },
    { label: "Careers", to: "/careers" },
  ],
  Contact: [
    { label: "Contact Form", to: "/contact" },
    { label: "Office Locations", to: "/contact/locations" },
  ],
};

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="https://techtammina.com/wp-content/uploads/2026/03/Tech-Tammina-Top-IT-Companies-in-Visakhapatnam.webp"
            alt="Tech Tammina Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex h-full">
          {NAV_LINKS.map((n) => {
            const hasSubtabs = !!SUBTABS[n.label];
            return (
              <div
                key={n.to}
                className="relative flex items-center h-full"
                onMouseEnter={() => hasSubtabs && setActiveMenu(n.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={n.to}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-5 flex items-center gap-1"
                  activeProps={{ className: "text-foreground" }}
                >
                  {n.label}
                  {hasSubtabs && (
                    <span className="inline-block transition-transform duration-200" style={{ transform: activeMenu === n.label ? 'rotate(180deg)' : 'none' }}>
                      <ChevronDown className="h-3 w-3 opacity-60" />
                    </span>
                  )}
                </Link>

                <AnimatePresence>
                  {activeMenu === n.label && hasSubtabs && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1 rounded-2xl border border-border bg-popover p-2 shadow-card backdrop-blur-md ${n.label === "Solutions" ? "grid grid-cols-2 gap-1 min-w-[520px]" : "flex flex-col gap-1 min-w-[240px]"
                        }`}
                    >
                      {SUBTABS[n.label].map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to as any}
                          params={sub.params}
                          search={sub.search}
                          hash={sub.hash}
                          className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground transition-colors text-left font-medium block"
                          onClick={() => setActiveMenu(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface/60 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 md:hidden max-h-[80vh] overflow-y-auto">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((n) => {
              const hasSubtabs = !!SUBTABS[n.label];
              const isExpanded = !!mobileExpanded[n.label];
              return (
                <div key={n.to} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground font-semibold"
                      activeProps={{ className: "text-foreground bg-surface" }}
                    >
                      {n.label}
                    </Link>
                    {hasSubtabs && (
                      <button
                        onClick={() => toggleMobileExpanded(n.label)}
                        className="p-2 text-muted-foreground hover:text-foreground"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubtabs && isExpanded && (
                    <div className="pl-6 flex flex-col gap-1 border-l border-border/60 ml-3 my-1">
                      {SUBTABS[n.label].map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to as any}
                          params={sub.params}
                          search={sub.search}
                          hash={sub.hash}
                          onClick={() => {
                            setOpen(false);
                            setActiveMenu(null);
                          }}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground block"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src="https://techtammina.com/wp-content/uploads/2026/03/Tech-Tammina-Top-IT-Companies-in-Visakhapatnam.webp"
              alt="Tech Tammina Logo"
              className="h-12 w-auto object-contain md:h-14"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Connecting AI, automation, and expertise to drive business impact.
          </p>
        </div>

        <FooterCol
          title="Explore"
          links={[
            { label: "Capabilities", to: "/capabilities" },
            { label: "Industries", to: "/industries" },
            { label: "Solutions", to: "/solutions" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "About", to: "/about" },
            { label: "Resources", to: "/resources" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <div>
          <div className="font-display text-sm font-semibold text-foreground">
            Ready to talk?
          </div>
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tech Tammina. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: "/capabilities" | "/industries" | "/solutions" | "/about" | "/resources" | "/contact" }[];
}) {
  return (
    <div>
      <div className="font-display text-sm font-semibold text-foreground">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
