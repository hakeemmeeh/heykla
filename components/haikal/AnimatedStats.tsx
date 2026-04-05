"use client";

import { useInView, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatItem({
  value,
  suffix,
  label,
  reduceMotion,
}: {
  value: number;
  suffix: string;
  label: string;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const spring = useSpring(0, { stiffness: 90, damping: 26 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useMotionValueEvent(spring, "change", (v) => setDisplay(Math.round(v)));

  return (
    <div ref={ref} className="group relative pt-12">
      <div className="absolute top-0 left-0 h-px w-12 bg-white/10 group-hover:w-full group-hover:bg-rose transition-all duration-700" />
      <span className="font-display text-6xl font-black tabular-nums text-white lg:text-7xl">
        {display}<span className="text-rose opacity-40">{suffix}</span>
      </span>
      <p className="mt-4 font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose/60">
        {label}
      </p>
    </div>
  );
}

export function AnimatedStats({
  stats,
}: {
  stats: readonly { label: string; value: number; suffix: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} reduceMotion={!!reduce} />
      ))}
    </div>
  );
}
