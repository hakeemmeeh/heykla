"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

const frames = [
  {
    label: "Signal intake",
    title: "Capture live context before risk compounds.",
    copy: "Foot traffic, perimeter behavior, and role-based access get assessed in real-time, not in hindsight.",
  },
  {
    label: "Decision lattice",
    title: "Escalate with command logic, not panic.",
    copy: "Each event follows a response matrix: notify, contain, route, then report across one command channel.",
  },
  {
    label: "Field execution",
    title: "Deploy the right unit, at the right threshold.",
    copy: "Ground teams and surveillance loops stay synchronized, giving leadership a complete picture as incidents unfold.",
  },
] as const;

export function InteractiveCommandScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const reduceHeavy = shouldReduceHeavyMotion(!!reduced, getDeviceMemoryGb());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const firstOpacity = useTransform(scrollYProgress, [0, 0.12, 0.32, 0.4], [0, 1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.28, 0.42, 0.62, 0.7], [0, 1, 1, 0]);
  const thirdOpacity = useTransform(scrollYProgress, [0.58, 0.74, 1], [0, 1, 1]);
  const scanRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const energyRotate = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const glowShift = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.7, 0.45]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[230vh] bg-matte"
      aria-labelledby="interactive-command-title"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">
              Interactive command
            </p>
            <h2 id="interactive-command-title" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Scroll to trace the response chain.
            </h2>

            <div className="relative mt-10 min-h-[180px]">
              <p className="font-tactical text-xs uppercase tracking-[0.24em] text-gold">Command narrative</p>
              <div className="relative mt-4 min-h-[150px]">
                <motion.div style={{ opacity: firstOpacity }} className="absolute inset-0 z-[3]">
                  <p className="font-tactical text-xs uppercase tracking-[0.24em] text-gold">{frames[0].label}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                    {frames[0].title}
                  </p>
                  <p className="mt-3 max-w-md text-sm text-muted">{frames[0].copy}</p>
                </motion.div>
                <motion.div style={{ opacity: secondOpacity }} className="absolute inset-0 z-[4]">
                  <p className="font-tactical text-xs uppercase tracking-[0.24em] text-gold">{frames[1].label}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                    {frames[1].title}
                  </p>
                  <p className="mt-3 max-w-md text-sm text-muted">{frames[1].copy}</p>
                </motion.div>
                <motion.div style={{ opacity: thirdOpacity }} className="absolute inset-0 z-[5]">
                  <p className="font-tactical text-xs uppercase tracking-[0.24em] text-gold">{frames[2].label}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                    {frames[2].title}
                  </p>
                  <p className="mt-3 max-w-md text-sm text-muted">{frames[2].copy}</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-sm border border-border bg-[#1C1C1C]/90 sm:h-[420px]">
            <div className="absolute inset-0 grid-fortress opacity-70" />
            <div className="cgi-noise absolute inset-0 opacity-25" />
            <div className="scanlines absolute inset-0 opacity-45" />
            <motion.div
              className="absolute inset-0"
              style={{
                opacity: glowShift,
                background:
                  "radial-gradient(circle at 30% 25%, rgba(197,164,78,0.25), transparent 42%), radial-gradient(circle at 70% 65%, rgba(61,79,61,0.3), transparent 48%)",
              }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40"
              style={{ rotate: reduceHeavy ? 0 : scanRotate }}
              transition={{ duration: motionTokens.duration.hero, ease: motionTokens.easing.standard }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-khaki/20"
              style={{ rotate: reduceHeavy ? 0 : energyRotate }}
              transition={{ duration: motionTokens.duration.hero, ease: motionTokens.easing.calm }}
            />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6CFC0]/60" />
            <div className="scan-loop absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_24px_rgba(197,164,78,0.75)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-sm border border-gold/25 bg-[#1C1C1C]/80 px-4 py-3">
              <p className="font-tactical text-[10px] uppercase tracking-[0.22em] text-khaki">
                Procedural tactical render · reduced-motion safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
