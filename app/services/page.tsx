import type { Metadata } from "next";
import { AppShell } from "@/components/heykal/AppShell";
import { FreeAppraisalCta } from "@/components/heykal/FreeAppraisalCta";
import { OperationalIntelligence } from "@/components/heykal/OperationalIntelligence";
import { RapidResponseProtocol } from "@/components/heykal/RapidResponseProtocol";
import { ServiceBands } from "@/components/heykal/ServiceBands";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Manned guarding, executive protection, event security, patrols, CCTV consultation, installation and monitoring.",
};

export default function ServicesPage() {
  return (
    <AppShell>
      <section className="relative bg-surface-elevated py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 grid-fortress opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Capability at scale—grounded in people and process.
          </h1>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Physical security remains our spine. Surveillance and monitoring extend visibility—never a
            substitute for officers who can think, communicate, and act.
          </p>
        </div>
      </section>
      <div className="section-fade section-fade-soft"><ServiceBands /></div>
      <div className="section-fade section-fade-strong"><RapidResponseProtocol /></div>
      <div className="section-fade section-fade-soft"><OperationalIntelligence /></div>
      <div className="section-fade section-fade-strong"><FreeAppraisalCta /></div>
    </AppShell>
  );
}
