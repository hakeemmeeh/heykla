import type { Metadata } from "next";
import { AppShell } from "@/components/haikal/AppShell";
import { FreeAppraisalCta } from "@/components/haikal/FreeAppraisalCta";
import { MapEmbed } from "@/components/haikal/MapEmbed";
import { QuoteForm } from "@/components/haikal/QuoteForm";
import { haikal } from "@/lib/haikal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a consultation or reach ${haikal.name} 24/7 via the command desk.`,
};

export default function ContactPage() {
  return (
    <AppShell>
      <div className="sticky top-[4.5rem] z-40 border-y border-white/10 bg-purple/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">
            Emergency desk active 24/7
          </p>
          <a
            href={haikal.hotlineTel}
            className="font-premium text-lg font-black uppercase text-white hover:text-rose transition-colors"
          >
            {haikal.hotline}
          </a>
        </div>
      </div>

      <section className="bg-purple py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Contact</p>
          <h1 className="mt-8 max-w-3xl font-premium text-4xl font-black uppercase tracking-tight text-white sm:text-6xl italic">
            Consult command.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ivory/70 sm:text-2xl">
            Share your sites, schedules, and risks—we respond from the desk with next steps, usually within one
            business day for non-emergency inquiries.
          </p>
        </div>
      </section>
      <FreeAppraisalCta />

      <section className="bg-ivory py-24 sm:py-32" aria-labelledby="quote-form-heading">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 id="quote-form-heading" className="sr-only">
              Quote request form
            </h2>
            <QuoteForm />
          </div>
          <aside className="space-y-10 lg:col-span-2">
            <div className="relative border border-purple/10 bg-purple p-10 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-4">
                <div className="h-4 w-px bg-rose/40" />
                <div className="mt-1 h-px w-4 bg-rose/40" />
              </div>
              <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Command desk</p>
              <a
                href={haikal.hotlineTel}
                className="mt-6 block font-premium text-3xl font-black uppercase text-white hover:text-rose transition-colors"
              >
                {haikal.hotline}
              </a>
              <p className="mt-4 text-sm text-ivory/60 font-medium">24/7 for active clients and emergencies.</p>
            </div>
            
            <div className="p-10 border border-purple/10 bg-white/50 backdrop-blur-sm">
              <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Email</p>
              <a
                href={`mailto:${haikal.email}`}
                className="mt-6 block text-lg font-bold text-purple underline decoration-rose/40 underline-offset-8 transition-colors hover:text-rose"
              >
                {haikal.email}
              </a>
              <p className="mt-6 text-sm font-medium text-muted">{haikal.addressLine}</p>
            </div>
            
            <div>
              <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">Location</p>
              <p className="mt-4 text-sm text-muted">
                Map shows a placeholder landmark—update <code className="font-mono text-purple/90">MapEmbed</code>{" "}
                with your real coordinates.
              </p>
              <div className="mt-8 border border-purple/10 overflow-hidden">
                <MapEmbed />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <a
        href={haikal.hotlineTel}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center bg-rose px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl transition-all hover:bg-rose/90 sm:hidden"
        aria-label="Call emergency hotline"
      >
        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        24/7 Hotline
      </a>
    </AppShell>
  );
}
