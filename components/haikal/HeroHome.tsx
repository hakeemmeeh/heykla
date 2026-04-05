"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { haikal } from "@/lib/haikal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

/* ── Hero image panels matching the Haikal Fortress theme ── */
const PANELS = [
  {
    src: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "CCTV surveillance cameras",
  },
  {
    src: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Security operations control room",
  },
  {
    src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=480&q=80",
    alt: "Tactical security guard",
  },
  {
    src: "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Surveillance camera close-up",
  },
  {
    src: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Security control room monitors",
  },
] as const;


export function HeroHome() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const memoryGb = getDeviceMemoryGb();
  const reduceHeavyMotion = shouldReduceHeavyMotion(!!reduce, memoryGb);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] overflow-hidden bg-ivory"
      aria-labelledby="hero-title"
    >
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-20 transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000')" }}
          aria-hidden
        />
        <div className="absolute inset-0 scanlines opacity-[0.03]" aria-hidden />
        <div className="absolute inset-0 cgi-noise opacity-[0.02]" aria-hidden />
        <div className="absolute inset-0 grid-fortress opacity-[0.04]" aria-hidden />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-end px-6 pb-24 lg:pb-32">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           style={{ opacity }}
        >
          <div className="inline-flex items-center gap-4 border-l-2 border-purple pl-6">
            <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
            <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-onyx/60">
              Elite Asset Protection / Global Standards
            </p>
          </div>
          
          <h1
            id="hero-title"
            className="mt-12 font-display text-7xl font-black leading-[0.85] tracking-tighter text-onyx sm:text-8xl lg:text-[11rem]"
          >
            <span className="block italic tracking-[-0.04em] opacity-10 uppercase">THE NEW</span>
            <span className="block -mt-4 lg:-mt-12 relative">
              <span className="gradient-rose-text-wide uppercase">HAIKAL</span>
              <span className="absolute -bottom-4 right-0 lg:-right-12 hidden lg:block h-px w-64 bg-rose/40" />
            </span>
          </h1>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <div>
              <p className="max-w-xl font-display text-xl font-bold leading-tight text-onyx/80 sm:text-2xl">
                Structure over spectacle. We deliver bespoke security protocols 
                engineered for high-stakes environments and discerning clientele.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="group relative inline-flex h-20 items-center justify-center overflow-hidden bg-onyx px-12 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-purple"
              >
                <span className="relative z-10">Start Protocol</span>
                <div className="absolute inset-0 -translate-x-full bg-purple transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-20 items-center justify-center border border-onyx/10 bg-white px-10 text-xs font-black uppercase tracking-[0.3em] text-onyx transition-all hover:border-purple/40 hover:bg-ivory"
              >
                Intelligence
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Side Detail ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-12 hidden lg:flex">
         <div className="h-48 w-px bg-onyx/10" />
         <span className="rotate-90 origin-center whitespace-nowrap text-[10px] font-black uppercase tracking-[0.8em] text-onyx/20">STRATEGIC VIGILANCE</span>
         <div className="h-48 w-px bg-onyx/10" />
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent"
        aria-hidden
      />
    </section>
  );
}
