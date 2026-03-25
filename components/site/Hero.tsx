"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.55;
  const stagger = reduce ? 0 : 0.08;

  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 md:pb-32 md:pt-36">
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, ease }}
        >
          Independent security practice
        </motion.p>
        <motion.h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: stagger, ease }}
        >
          Security that keeps pace with how you ship.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: stagger * 2, ease }}
        >
          {site.description}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: stagger * 3, ease }}
        >
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Book assessment
          </Link>
          <Link
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-muted hover:bg-surface"
          >
            View services
          </Link>
        </motion.div>
        <motion.p
          className="mt-12 text-xs text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur, delay: stagger * 4, ease }}
        >
          Replace placeholder copy in <code className="rounded bg-border/50 px-1.5 py-0.5 font-mono text-[0.7rem]">lib/site.ts</code> with your real positioning and proof points.
        </motion.p>
      </div>
    </section>
  );
}
