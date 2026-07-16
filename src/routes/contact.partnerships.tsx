import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Handshake, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/contact/partnerships")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Partner With Us | Tech Tammina Alliances" },
      { name: "description", content: "Explore a focused technology or go-to-market relationship. Connect with our partnership and ecosystem team." },
    ],
  }),
});

function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title={<>Explore a focused technology or <span className="text-gradient">go-to-market relationship</span></>}
        intro="Connect with our alliances and delivery team to discuss technical integrations, referral programs, or specialized co-delivery options."
      />

      <section className="bg-section py-20">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="gradient-border rounded-2xl bg-card p-12 text-center"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Partnership Request Received</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                Thank you for your proposal. Our alliances team will review your organization details and reach out within 2 business days to discuss collaboration opportunities.
              </p>
              <Link to="/about/partnerships" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn about our current ecosystem <ArrowRight className="h-4 w-4" />
              </Link>
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
              className="gradient-border relative rounded-2xl bg-card p-8 sm:p-12 space-y-6"
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
          )}
        </div>
      </section>
    </>
  );
}
