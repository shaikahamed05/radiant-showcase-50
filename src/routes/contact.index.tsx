import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import { ArrowRight, Building2, Handshake, LifeBuoy, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/section-heading";

const contactSearchSchema = z.object({
  channel: z.string().optional(),
});

export const Route = createFileRoute("/contact/")({
  validateSearch: (search) => contactSearchSchema.parse(search),
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Tech Tammina" },
      { name: "description", content: "Talk to an expert, request a demo, or reach partnerships, support, careers, and office locations." },
      { property: "og:title", content: "Contact — Tech Tammina" },
      { property: "og:description", content: "Start a conversation with Tech Tammina." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const CHANNELS = [
  { slug: "expert", icon: Sparkles, title: "Talk to an Expert", body: "Discuss a process, application, or operational challenge." },
  { slug: "demo", icon: ArrowRight, title: "Request a Demo", body: "See a Tech Tammina solution against your workflow." },
  { slug: "partnerships", icon: Handshake, title: "Partnerships", body: "Explore joint delivery, integration, or go-to-market." },
  { slug: "support", icon: LifeBuoy, title: "Support", body: "Reach managed services and application support teams." },
  { slug: "careers", icon: Building2, title: "Careers", body: "Join the teams building intelligent operations." },
  { slug: "locations", icon: MapPin, title: "Office Locations", body: "Global delivery across multiple time zones." },
];

function ContactPage() {
  const { channel } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let defaultMessage = "";
    if (channel === "expert") {
      defaultMessage = "I would like to talk to an operations expert about...";
    } else if (channel === "demo") {
      defaultMessage = "I would like to request a demo for one of Tech Tammina's solutions.";
    } else if (channel === "partnerships") {
      defaultMessage = "I'm interested in exploring partnership opportunities with Tech Tammina.";
    } else if (channel === "support") {
      defaultMessage = "I need application support for...";
    } else if (channel === "careers") {
      defaultMessage = "I'm interested in career opportunities at Tech Tammina.";
    } else if (channel === "locations") {
      defaultMessage = "I would like to connect with one of your office locations.";
    }
    setMessage(defaultMessage);
  }, [channel]);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Start a <span className="text-gradient">conversation</span></>}
        intro="Tell us where the work is stuck. We'll help define a practical path forward — from a demo to a full operating model."
      />

      <section className="bg-section py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="gradient-border relative rounded-2xl bg-card p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Role" name="role" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                What are you trying to solve?
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                placeholder="Share the process, application, or operational challenge…"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              {sent ? "Thanks — we'll be in touch" : "Send message"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>

          <div className="lg:col-span-2">
            <div className="gradient-border rounded-2xl bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Direct channels</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" /> hello@techtammina.com
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" /> +1 (000) 000-0000
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Global delivery — multiple regions
                </li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {CHANNELS.map((c) => {
                const isSelected = channel === c.slug;
                return (
                  <div
                    key={c.title}
                    className={`gradient-border rounded-xl bg-card p-4 transition-all duration-300 ${
                      isSelected
                        ? "scale-[1.03] ring-2 ring-primary border-transparent shadow-glow-cyan"
                        : "opacity-80"
                    }`}
                  >
                    <c.icon className="h-4 w-4 text-primary" />
                    <div className="mt-2 text-sm font-semibold text-foreground">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
      />
    </div>
  );
}
