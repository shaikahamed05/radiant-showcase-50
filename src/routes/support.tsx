import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, CheckCircle, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/section-heading";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Client Support — Tech Tammina" },
      { name: "description", content: "Reach the correct client support desk, view emergency escalation procedures, and access secure support portals." },
    ],
  }),
});

function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support Portal"
        title={<>Reach the correct <span className="text-gradient">client support channel</span></>}
        intro="Use dedicated secure channels to raise incidents, request features, or check application performance."
      />

      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="gradient-border rounded-2xl bg-card p-8 sm:p-12 space-y-6">
              <h3 className="font-display text-xl font-semibold text-foreground">Operational Support Desk</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For authorized clients with active Managed Services agreements, please log in to your secure client support portal to submit tickets, view SLA progress, and track incidents.
              </p>
              
              <div className="rounded-xl border border-border bg-surface p-6 flex items-start gap-4">
                <ShieldAlert className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Do not submit sensitive production data here</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    This public site is not monitored for PII, HIPAA, or financial data compliance. Incident escalation details and credentials must only be shared through the secure client support portal.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://support.techtammina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
                >
                  Log In to Secure Portal <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {/* Escalation Guidelines */}
            <div className="gradient-border rounded-2xl bg-card p-6 shadow-sm">
              <h4 className="font-display text-base font-semibold text-foreground mb-3">Severity Guidance & SLAs</h4>
              <ul className="space-y-4 text-xs">
                <li className="border-b border-border/60 pb-3">
                  <span className="font-semibold text-red-500 uppercase block mb-1">Severity 1 (Critical)</span>
                  <p className="text-muted-foreground leading-relaxed">Complete application outage blocking core business. 30-minute SLA response.</p>
                </li>
                <li className="border-b border-border/60 pb-3">
                  <span className="font-semibold text-orange-500 uppercase block mb-1">Severity 2 (High)</span>
                  <p className="text-muted-foreground leading-relaxed">System operational but with severe degradation of key features. 2-hour response.</p>
                </li>
                <li>
                  <span className="font-semibold text-green-600 uppercase block mb-1">Severity 3 (Normal)</span>
                  <p className="text-muted-foreground leading-relaxed">Minor defects, cosmetics, or service requests. 8-hour response.</p>
                </li>
              </ul>
            </div>

            {/* Emergency Support */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-display text-base font-semibold text-foreground mb-2">Emergency Hotline</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                For Severity 1 emergencies requiring immediate assistance, please use your dedicated client hotline number provided in your onboarding handbook.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
