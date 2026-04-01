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

  useMotionValueEvent(spring, "change", (v) => {
    setDisplay(Math.round(v));
  });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      spring.set(value);
      return;
    }
    spring.set(value);
  }, [inView, reduceMotion, spring, value]);

  return (
    <div ref={ref} className="border-l-2 border-gold/30 pl-6">
      <p className="font-display text-4xl font-bold tabular-nums text-foreground sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
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
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} reduceMotion={!!reduce} />
      ))}
    </div>
  );
}
