"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { heykal } from "@/lib/heykal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

const FILTER_MAP: Record<string, string[]> = {
  All: [],
  Corporate: ["Corporate offices"],
  Residential: ["Residential estates"],
  Retail: ["Retail & malls"],
  Events: ["Events & conferences"],
  Construction: ["Construction sites"],
  Hospitality: ["Hospitality"],
};

const FILTERS = Object.keys(FILTER_MAP);

/* Extra detail content for each industry when shown in the expanded view */
const INDUSTRY_DETAILS: Record<string, { highlights: string[]; approach: string }> = {
  "Corporate offices": {
    highlights: [
      "C-suite and boardroom protection protocols",
      "Multi-floor access credentialing systems",
      "After-hours patrol and lockdown procedures",
      "Visitor management and guest screening",
    ],
    approach:
      "We embed discreet, uniformed personnel into your workplace rhythm—firm at access points, invisible everywhere else. Our teams coordinate with building management, IT, and executive assistants to ensure seamless operations.",
  },
  "Residential estates": {
    highlights: [
      "Perimeter monitoring and breach detection",
      "Family and staff vetting procedures",
      "Night-shift coverage with rapid response",
      "Integration with smart home security systems",
    ],
    approach:
      "Privacy and discretion are non-negotiable. Our officers operate with minimal footprint while maintaining complete perimeter awareness. We coordinate with household staff and local authorities.",
  },
  "Retail & malls": {
    highlights: [
      "Loss prevention and shrinkage reduction",
      "Peak-traffic crowd management",
      "Cash-in-transit and vault coordination",
      "Incident de-escalation training",
    ],
    approach:
      "Retail security demands visibility without intimidation. Our teams blend customer service with vigilance, reducing shrink while maintaining a welcoming environment for shoppers.",
  },
  "Events & conferences": {
    highlights: [
      "Credentialing and access tier management",
      "VIP arrival and departure coordination",
      "Crowd density monitoring and flow control",
      "Emergency evacuation route planning",
    ],
    approach:
      "Every event is a controlled environment with unpredictable elements. We deploy advance teams, establish command posts, and coordinate with venue staff to ensure seamless security coverage.",
  },
  "Construction sites": {
    highlights: [
      "High-value equipment and material protection",
      "Night patrol with checkpoint verification",
      "Vendor and subcontractor access control",
      "Perimeter fencing and monitoring integration",
    ],
    approach:
      "Construction sites present unique challenges: changing layouts, rotating crews, and valuable assets. We adapt patrol routes weekly and coordinate with site managers on access protocols.",
  },
  Hospitality: {
    highlights: [
      "Guest safety and incident response",
      "Nightlife and venue crowd management",
      "Staff safety and escort procedures",
      "Reputation-sensitive incident handling",
    ],
    approach:
      "In hospitality, perception is everything. Our officers are trained in guest relations and de-escalation, handling situations with discretion that protects both guests and your brand reputation.",
  },
};

function IndustryCard({
  industry,
  reduceHeavy,
}: {
  industry: (typeof heykal.industries)[number];
  reduceHeavy: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: reduceHeavy ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: reduceHeavy ? 1 : 0.95 }}
      transition={{
        opacity: { duration: 0.25 },
        scale: { duration: 0.3, ease: motionTokens.easing.standard },
        layout: { type: "spring", stiffness: 350, damping: 30 },
      }}
      className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-surface-elevated shadow-sm transition-shadow hover:shadow-lg hover:shadow-gold/8"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={industry.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/20 to-transparent" />
        <h2 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white drop-shadow-lg">
          {industry.title}
        </h2>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-muted">{industry.description}</p>
        <div className="mt-4">
          <p className="font-tactical text-[10px] uppercase tracking-[0.22em] text-gold">Key risks</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {industry.risks.map((risk) => (
              <li
                key={risk}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-foreground"
              >
                {risk}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-tactical text-[10px] uppercase tracking-[0.22em] text-gold">Recommended services</p>
          <p className="mt-1.5 text-xs text-muted">{industry.serviceMix.join(" · ")}</p>
        </div>
        <Link
          href="/contact"
          className="mt-auto pt-5 text-sm font-semibold text-gold underline decoration-gold/30 underline-offset-4 transition-colors hover:decoration-gold"
        >
          {industry.ctaLabel} →
        </Link>
      </div>
    </motion.article>
  );
}

function DetailPanel({
  industry,
  reduceHeavy,
}: {
  industry: (typeof heykal.industries)[number];
  reduceHeavy: boolean;
}) {
  const details = INDUSTRY_DETAILS[industry.title];
  if (!details) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: reduceHeavy ? 0 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reduceHeavy ? 0 : 24 }}
      transition={{ duration: 0.35, ease: motionTokens.easing.standard }}
      className="flex flex-col rounded-md border border-border bg-surface p-6 shadow-sm lg:p-8"
    >
      {/* Approach */}
      <div>
        <p className="font-tactical text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          Our approach
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
          How we secure {industry.title.toLowerCase()}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted">{details.approach}</p>
      </div>

      {/* Highlights */}
      <div className="mt-8">
        <p className="font-tactical text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          Key capabilities
        </p>
        <ul className="mt-4 space-y-3">
          {details.highlights.map((h, idx) => (
            <motion.li
              key={h}
              initial={{ opacity: 0, x: reduceHeavy ? 0 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: reduceHeavy ? 0 : idx * 0.06,
                ease: motionTokens.easing.standard,
              }}
              className="flex items-start gap-3 text-sm text-foreground"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Service Mix */}
      <div className="mt-8 rounded-md border border-border bg-surface-elevated p-5">
        <p className="font-tactical text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          Recommended service mix
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {industry.serviceMix.map((s) => (
            <li
              key={s}
              className="rounded-full border border-gold/30 bg-gold/8 px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-8">
        <Link
          href="/contact"
          className="clip-tactical inline-flex h-12 w-full items-center justify-center bg-gold px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          {industry.ctaLabel}
        </Link>
        <p className="mt-3 text-center text-xs text-muted">
          Free site appraisal included with every consultation
        </p>
      </div>
    </motion.div>
  );
}

export function IndustriesRevealGrid() {
  const [active, setActive] = useState("All");
  const reduced = useReducedMotion();
  const reduceHeavy = shouldReduceHeavyMotion(!!reduced, getDeviceMemoryGb());

  const filtered =
    active === "All"
      ? heykal.industries
      : heykal.industries.filter((i) => FILTER_MAP[active]?.includes(i.title));

  const isSingle = filtered.length === 1;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* ─── Filter Tabs ─── */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3" role="tablist" aria-label="Filter industries">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5 sm:py-2.5 ${
              active === filter ? "text-accent-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {active === filter && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-full bg-gold shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-[1]">{filter}</span>
          </button>
        ))}
      </div>

      {/* ─── Results Count ─── */}
      <p className="mt-6 font-tactical text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Showing {filtered.length} {filtered.length === 1 ? "industry" : "industries"}
      </p>

      {/* ─── Card Grid / Detail View ─── */}
      <AnimatePresence mode="popLayout">
        {isSingle ? (
          /* Single industry: split detail layout */
          <motion.div
            key={`detail-${filtered[0].title}`}
            layout
            className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="flex flex-col">
              <IndustryCard industry={filtered[0]} reduceHeavy={reduceHeavy} />
            </div>
            <DetailPanel industry={filtered[0]} reduceHeavy={reduceHeavy} />
          </motion.div>
        ) : (
          /* Multiple industries: standard grid */
          <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((i) => (
              <IndustryCard key={i.title} industry={i} reduceHeavy={reduceHeavy} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
