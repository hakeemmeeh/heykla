"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heykal } from "@/lib/heykal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

/* ── Hero image panels matching Theme 4 (Obsidian Ember) ── */
const PANELS = [
  {
    src: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "CCTV surveillance cameras",
  },
  {
    src: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Security guard on night duty",
  },
  {
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Luxury interior under protection",
  },
  {
    src: "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=480",
    alt: "Security guard patrolling",
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

  /* ── Parallax on scroll ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceHeavyMotion ? [0, 0] : [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.35]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] overflow-hidden bg-[#0C0A09]"
      aria-labelledby="hero-title"
    >
      {/* ── Dark cinematic background ── */}
      <div className="absolute inset-0">
        {/* Warm amber radial glow — top */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,116,10,0.15),transparent_55%)]"
          aria-hidden
        />
        {/* Copper glow — bottom right */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(232,146,45,0.10),transparent_50%)]"
          aria-hidden
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5))]"
          aria-hidden
        />
        {/* Fortress grid (very subtle) */}
        <div className="absolute inset-0 grid-fortress opacity-30 mix-blend-soft-light" aria-hidden />
        {/* Film grain */}
        <div className="texture-film absolute inset-0 opacity-20" aria-hidden />

        {/* Ember particles */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <motion.div
            className="absolute top-12 left-[15%] h-1 w-1 rounded-full bg-amber/60"
            animate={{ y: [0, -80, -160], opacity: [0, 0.8, 0], x: [0, 10, 20] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-20 right-[25%] h-0.5 w-0.5 rounded-full bg-copper/50"
            animate={{ y: [0, -60, -120], opacity: [0, 0.6, 0], x: [0, -8, -16] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-8 right-[40%] h-1 w-1 rounded-full bg-amber/40"
            animate={{ y: [0, -100, -200], opacity: [0, 0.5, 0], x: [0, 15, 30] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-16 left-[60%] h-0.5 w-0.5 rounded-full bg-copper/60"
            animate={{ y: [0, -70, -140], opacity: [0, 0.7, 0], x: [0, -5, -10] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* ── Hero content ── */}
      <motion.div
        className="relative z-[1] mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]"
        style={{ opacity }}
        initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionTokens.duration.hero, ease: motionTokens.easing.standard }}
      >
        {/* Left — Text content */}
        <motion.div style={{ y }}>
          <div className="inline-flex w-fit flex-wrap items-center gap-4 rounded-sm border border-amber/25 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <span className="rank-stripes" aria-hidden />
            <p className="font-tactical text-xs font-semibold uppercase tracking-[0.32em] text-amber [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
              Elite physical security & surveillance
            </p>
          </div>
          <h1
            id="hero-title"
            className="mt-6 max-w-xl font-premium text-5xl font-extrabold leading-[1.05] tracking-[-0.01em] text-white [text-shadow:0_4px_22px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl"
          >
            HEYKAL SECURITY
          </h1>
          <p className="mt-3 max-w-xl font-premium text-3xl font-bold italic leading-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-amber via-copper to-gold bg-clip-text text-transparent">
              Your Fortress. Our Mission.
            </span>
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] sm:text-lg">
            {heykal.name} delivers bespoke protection for discerning clientele.
            Secure your assets with unmatched expertise, advanced technology,
            and unwavering dedication.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.div
              initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.base, delay: 0.08, ease: motionTokens.easing.standard }}
            >
              <Link
                href="/contact"
                className="clip-tactical inline-flex h-12 items-center justify-center gradient-ember px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Request a Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.base, delay: 0.14, ease: motionTokens.easing.standard }}
            >
              <Link
                href="/services"
                className="clip-tactical inline-flex h-12 items-center justify-center border border-amber/30 bg-white/5 px-7 text-sm font-semibold text-white transition-colors hover:border-amber/60 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Image panels (Theme 4 asymmetric collage) */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: reduceHeavyMotion ? 0 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: motionTokens.duration.base, delay: 0.22, ease: motionTokens.easing.standard }}
        >
          {/* Top row — 2 images */}
          <div className="grid grid-cols-2 gap-2.5">
            {PANELS.slice(0, 2).map((panel, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-amber/15"
              >
                <img
                  src={panel.src}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-amber/[0.06] mix-blend-overlay" />
              </div>
            ))}
          </div>
          {/* Bottom row — 3 images */}
          <div className="mt-2.5 grid grid-cols-3 gap-2.5">
            {PANELS.slice(2, 5).map((panel, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-amber/15"
              >
                <img
                  src={panel.src}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-amber/[0.06] mix-blend-overlay" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Bottom fade to main bg ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />
    </section>
  );
}
