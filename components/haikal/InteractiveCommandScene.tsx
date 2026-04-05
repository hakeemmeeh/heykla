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
      className="relative h-[250vh] bg-purple"
      aria-labelledby="interactive-command-title"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">
              Interactive command
            </p>
            <h2 id="interactive-command-title" className="mt-6 font-premium text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Trace the response chain.
            </h2>

            <div className="relative mt-12 min-h-[220px]">
              <p className="font-tactical text-[10px] uppercase tracking-[0.3em] text-white/40">Command narrative</p>
              <div className="relative mt-6 min-h-[180px]">
                {frames.map((frame, index) => {
                  const opacity = index === 0 ? firstOpacity : index === 1 ? secondOpacity : thirdOpacity;
                  return (
                    <motion.div key={index} style={{ opacity }} className="absolute inset-0 z-[3]">
                      <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.3em] text-rose">{frame.label}</p>
                      <p className="mt-4 font-premium text-2xl font-black uppercase leading-tight text-white">
                        {frame.title}
                      </p>
                      <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">{frame.copy}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden border border-white/10 bg-onyx/40 sm:h-[500px]">
            <div className="absolute inset-0 grid-fortress opacity-40 mix-blend-overlay" />
            <div className="cgi-noise absolute inset-0 opacity-15" />
            <div className="scanlines absolute inset-0 opacity-30" />
            
            <motion.div
              className="absolute inset-0"
              style={{
                opacity: glowShift,
                background:
                  "radial-gradient(circle at 30% 25%, rgba(196,122,138,0.15), transparent 45%), radial-gradient(circle at 70% 65%, rgba(61,26,110,0.3), transparent 50%)",
              }}
            />
            
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/30"
              style={{ rotate: reduceHeavy ? 0 : scanRotate }}
            />
            
            <motion.div
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/10"
              style={{ rotate: reduceHeavy ? 0 : energyRotate }}
            />
            
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="scan-loop absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
            
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose shadow-[0_0_20px_rgba(196,122,138,0.8)]" />
            
            <div className="absolute bottom-6 left-6 right-6 border-l-2 border-rose bg-white/5 px-6 py-4 backdrop-blur-md">
              <p className="font-tactical text-[9px] uppercase tracking-[0.3em] text-ivory/80">
                Procedural tactical render · protocol active
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
