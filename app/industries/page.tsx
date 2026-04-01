import type { Metadata } from "next";
import { AppShell } from "@/components/heykal/AppShell";
import { IndustriesRevealGrid } from "@/components/heykal/IndustriesRevealGrid";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Security programs tailored for corporate, residential, retail, events, construction, and hospitality.",
};

export default function IndustriesPage() {
  return (
    <AppShell>
      <section className="bg-surface-elevated py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">Industries</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Programs tuned to how your world actually moves.
          </h1>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            We align staffing models, technology, and legal requirements to each environment—so officers show up
            useful on day one.
          </p>
        </div>
      </section>

      <section className="section-fade py-16 sm:py-24" aria-label="Industry verticals">
        <IndustriesRevealGrid />
      </section>
    </AppShell>
  );
}
