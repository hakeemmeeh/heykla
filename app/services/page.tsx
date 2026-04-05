import type { Metadata } from "next";
import { AppShell } from "@/components/haikal/AppShell";
import { FreeAppraisalCta } from "@/components/haikal/FreeAppraisalCta";
import { OperationalIntelligence } from "@/components/haikal/OperationalIntelligence";
import { RapidResponseProtocol } from "@/components/haikal/RapidResponseProtocol";
import { ServiceBands } from "@/components/haikal/ServiceBands";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Manned guarding, executive protection, event security, patrols, CCTV consultation, installation and monitoring.",
};

export default function ServicesPage() {
  return (
    <AppShell>
      {/* ── Capabilities Hero ── */}
      <section className="relative overflow-hidden bg-ivory pt-32 lg:pt-48">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-onyx/5 hidden lg:block" aria-hidden />
        
        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <div className="inline-flex items-center gap-4 border-l-2 border-purple pl-6">
            <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
            <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-onyx/60">
              Capability / Tactical Scope
            </p>
          </div>
          
          <h1 className="mt-12 max-w-4xl font-display text-7xl font-black leading-[0.85] tracking-tighter text-onyx sm:text-8xl lg:text-9xl uppercase">
            <span className="block italic opacity-10">CORE</span>
            <span className="block -mt-4 lg:-mt-8 gradient-rose-text-wide">CAPABILITIES.</span>
          </h1>
          
          <p className="mt-12 max-w-2xl text-xl font-medium leading-relaxed text-onyx/60 sm:text-2xl">
            Physical security remains our spine. Surveillance and monitoring extend visibility—never a
            substitute for officers who can think, communicate, and act.
          </p>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 hidden lg:block">
           <div className="flex h-32 w-32 items-center justify-center border-t border-l border-onyx/10 bg-white/40 backdrop-blur-sm">
              <span className="font-tactical text-[10px] font-black tracking-widest text-onyx/20 rotate-90">READY_02</span>
           </div>
        </div>
      </section>

      <div className="relative z-10 -mt-12 lg:-mt-24">
        <ServiceBands />
      </div>
      
      <RapidResponseProtocol />
      <OperationalIntelligence />
      <FreeAppraisalCta />
    </AppShell>
  );
}
