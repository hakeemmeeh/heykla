import type { Metadata } from "next";
import { AppShell } from "@/components/haikal/AppShell";
import { IndustriesRevealGrid } from "@/components/haikal/IndustriesRevealGrid";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Security programs tailored for corporate, residential, retail, events, construction, and hospitality.",
};

export default function IndustriesPage() {
  return (
    <AppShell>
      <section className="relative bg-purple py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 grid-fortress opacity-[0.15]" aria-hidden />
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Industries</p>
          <h1 className="mt-8 max-w-5xl font-premium text-4xl font-black uppercase tracking-tight text-white sm:text-6xl italic">
            Mission-ready programs.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ivory/70">
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
