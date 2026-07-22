import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/section-heading";
import { SOLUTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/contact/request-demo")({
  component: RequestDemoPage,
  head: () => ({
    meta: [
      { title: "Request a Demo | Tech Tammina" },
      { name: "description", content: "Schedule a purpose-built demonstration for Policy Checking, COI Compliance, Claims Operations, or other enterprise solutions." },
    ],
  }),
});

function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Request a Demo"
        title={<>See the solution in the <span className="text-gradient">context of your business</span></>}
        intro="Tell us about your volume, current systems, and operating challenge. We will configure the demo around your specific needs."
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
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Request Submitted Successfully</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                Thank you for your request. An enterprise solutions specialist will contact you within 1 business day to confirm your preferred date and requirements.
              </p>
              <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore our solutions <ArrowRight className="h-4 w-4" />
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
                    Solution of Interest *
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                  >
                    <option value="">Select a solution...</option>
                    {SOLUTIONS.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                    <option value="other">Other / Custom Enterprise Workflow</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
                    Estimated Volume or Scale *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g., 5,000 policies/month, 50+ users"
                    className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
                  What is your primary Business Challenge? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share the process bottlenecks, audit concerns, or timelines you are aiming to solve..."
                  className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
                  Current Process or Systems in use *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Manual email checks, Legacy ERP, Shared spreadsheets"
                  className="w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
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
                    Full Name *
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
                    Company Name *
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
                Submit Demo Request
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
