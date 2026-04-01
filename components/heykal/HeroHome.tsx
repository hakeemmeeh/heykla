"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { heykal } from "@/lib/heykal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

/* ── Video clips: dark cinematic security footage (Obsidian Ember style) ── */
const CLIPS = [
  {
    src: "https://videos.pexels.com/video-files/5380642/5380642-sd_640_360_24fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1920&q=80&auto=format&fit=crop",
    alt: "Security personnel on night watch",
  },
  {
    src: "https://videos.pexels.com/video-files/7534235/7534235-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80&auto=format&fit=crop",
    alt: "CCTV surveillance monitoring",
  },
  {
    src: "https://videos.pexels.com/video-files/5240508/5240508-sd_640_360_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop",
    alt: "Corporate building at dusk",
  },
  {
    src: "https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80&auto=format&fit=crop",
    alt: "Command center operations",
  },
] as const;

const CLIP_DURATION = 7000; // ms per clip
const FADE_DURATION = 1.2; // seconds for crossfade

export function HeroHome() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const memoryGb = getDeviceMemoryGb();
  const [scanDone, setScanDone] = useState(false);
  const [activeClip, setActiveClip] = useState(0);
  const reduceHeavyMotion = shouldReduceHeavyMotion(!!reduce, memoryGb);

  /* ── Command scan intro timer ── */
  useEffect(() => {
    if (reduceHeavyMotion) {
      const immediate = window.setTimeout(() => setScanDone(true), 0);
      return () => window.clearTimeout(immediate);
    }
    const t = window.setTimeout(
      () => setScanDone(true),
      Math.round(motionTokens.duration.commandScan * 1000),
    );
    return () => window.clearTimeout(t);
  }, [reduceHeavyMotion]);

  /* ── Auto-advance clips ── */
  useEffect(() => {
    if (!scanDone) return;
    const interval = window.setInterval(() => {
      setActiveClip((prev) => (prev + 1) % CLIPS.length);
    }, CLIP_DURATION);
    return () => window.clearInterval(interval);
  }, [scanDone]);

  /* ── Parallax on scroll ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceHeavyMotion ? [0, 0] : [0, 56]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceHeavyMotion ? [1, 1] : [1, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.35]);

  /* ── Video ref callback for autoplay ── */
  const handleVideoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el) {
      el.play().catch(() => {
        /* autoplay blocked — poster image shows as fallback */
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[92vh] overflow-hidden" aria-labelledby="hero-title">
      {/* ── Video background layer ── */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        {/* Fallback poster image (loads instantly) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CLIPS[0].poster})` }}
          aria-hidden
        />

        {/* Crossfading video clips */}
        <AnimatePresence>
          <motion.div
            key={activeClip}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          >
            <video
              ref={handleVideoRef}
              src={CLIPS[activeClip].src}
              poster={CLIPS[activeClip].poster}
              muted
              playsInline
              autoPlay
              loop={false}
              preload="auto"
              className="h-full w-full object-cover"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/68 via-[#1C1C1C]/72 to-[#1C1C1C]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,116,10,0.12),transparent_52%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,146,45,0.08),transparent_45%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" aria-hidden />
        <div className="absolute inset-0 grid-fortress opacity-80 mix-blend-soft-light" aria-hidden />
        <div className="texture-film absolute inset-0 opacity-25" aria-hidden />
      </motion.div>

      {/* ── Command scan intro ── */}
      {!scanDone ? (
        <motion.div
          className="absolute inset-0 z-[2] flex items-center justify-center bg-[#1C1C1C]/85 backdrop-blur-[2px]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden
        >
          <div className="w-full max-w-xl px-6 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-tactical text-xs font-semibold uppercase tracking-[0.35em] text-khaki">
                Command scan
              </p>
              <p className="font-tactical text-xs uppercase tracking-[0.25em] text-muted">Phase 01</p>
            </div>
            <div className="h-1 overflow-hidden bg-[#1C1C1C]/40">
              <motion.div
                className="h-full bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{
                  duration: motionTokens.duration.commandScan,
                  ease: motionTokens.easing.standard,
                }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}

      {/* ── Hero content ── */}
      <motion.div
        className="relative z-[1] mx-auto grid min-h-[92vh] max-w-6xl items-end gap-8 px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:grid-cols-[1fr_360px]"
        style={{ opacity }}
        initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionTokens.duration.hero, ease: motionTokens.easing.standard }}
      >
        <div>
        <div className="inline-flex w-fit flex-wrap items-center gap-4 rounded-sm border border-gold/30 bg-[#1C1C1C]/55 px-3 py-2 backdrop-blur-sm">
          <span className="rank-stripes" aria-hidden />
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.32em] text-gold [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
            Elite physical security & surveillance
          </p>
        </div>
        <h1
          id="hero-title"
          className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.015em] text-white [text-shadow:0_4px_22px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your Fortress.
          <span className="font-premium block bg-gradient-to-r from-amber via-copper to-gold bg-clip-text text-transparent">
            Our Mission.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] sm:text-lg">
          From manned guarding to executive protection, {heykal.name} secures people, property, and
          operations with disciplined command and 24/7 readiness.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.base, delay: 0.08, ease: motionTokens.easing.standard }}
          >
            <Link
            href="/contact"
            className="clip-tactical inline-flex h-12 items-center justify-center bg-gold px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Request a consultation
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: reduceHeavyMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.base, delay: 0.14, ease: motionTokens.easing.standard }}
          >
            <Link
            href="/services"
            className="clip-tactical inline-flex h-12 items-center justify-center border border-white/30 bg-white/15 px-7 text-sm font-semibold text-white transition-colors hover:border-gold/60 hover:bg-white/25"
            >
              Explore services
            </Link>
          </motion.div>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-6 pt-8 font-tactical text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          <span className="text-khaki/90">Licensed & insured</span>
          <span className="hidden text-white/40 sm:inline" aria-hidden>
            |
          </span>
          <span>Vetted operators</span>
          <span className="text-gold">24/7 command desk</span>
        </div>
        </div>

        {/* ── Image collage (Obsidian Ember style) ── */}
        <motion.aside
          className="relative hidden gap-2 lg:grid lg:grid-cols-2 lg:grid-rows-2"
          style={{ width: 340, height: 340 }}
          initial={{ opacity: 0, x: reduceHeavyMotion ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: motionTokens.duration.base, delay: 0.18, ease: motionTokens.easing.standard }}
          aria-label="Security operations gallery"
        >
          {/* CCTV surveillance monitors */}
          <div className="relative overflow-hidden rounded-sm border border-amber/20">
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80&auto=format&fit=crop"
              alt="CCTV surveillance monitors"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          {/* Security guard on night post */}
          <div className="relative overflow-hidden rounded-sm border border-amber/20">
            <img
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80&auto=format&fit=crop"
              alt="Security personnel on post"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          {/* Luxury interior under protection */}
          <div className="relative overflow-hidden rounded-sm border border-amber/20">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&auto=format&fit=crop"
              alt="Luxury interior under protection"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          {/* Guard patrolling dark corridor */}
          <div className="relative overflow-hidden rounded-sm border border-amber/20">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80&auto=format&fit=crop"
              alt="Security command center"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Warm ember glow overlay on whole collage */}
          <div className="pointer-events-none absolute -inset-1 rounded-sm bg-[radial-gradient(ellipse_at_center,_rgba(212,116,10,0.08),transparent_70%)]" aria-hidden />
        </motion.aside>
      </motion.div>
    </section>
  );
}
