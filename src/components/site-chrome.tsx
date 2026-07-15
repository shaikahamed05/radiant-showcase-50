import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

export const NAV_LINKS = [
  { label: "Capabilities", to: "/capabilities" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "About", to: "/about" as const },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent-gradient text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Tech<span className="text-gradient"> Tammina</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
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
        <div className="border-t border-border bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-foreground bg-surface" }}
              >
                {n.label}
              </Link>
            ))}
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
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-gradient text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="font-display text-base font-semibold">
              Tech<span className="text-gradient"> Tammina</span>
            </span>
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
