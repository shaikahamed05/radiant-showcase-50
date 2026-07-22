import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
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
      { name: "description", content: "Start a conversation with Tech Tammina and share the work you need help solving." },
      { property: "og:title", content: "Contact — Tech Tammina" },
      { property: "og:description", content: "Start a conversation with Tech Tammina." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const { channel } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let defaultMessage = "I would like to start a conversation with Tech Tammina about...";
    if (channel === "expert") {
      defaultMessage = "I would like to speak with an expert about a process, application, or operating challenge.";
    } else if (channel === "demo") {
      defaultMessage = "I would like to arrange a tailored demo for our team.";
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 ">
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
