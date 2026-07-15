import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
        {eyebrow}
      </motion.div>
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-5xl"
      >
        {title}
      </motion.h1>
      {intro ? (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className={`mt-4 text-lg leading-relaxed text-muted-foreground ${center ? "mx-auto" : ""}`}
        >
          {intro}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-gradient opacity-25 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}
