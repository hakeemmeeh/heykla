import type { Metadata } from "next";
import { AppShell } from "@/components/heykal/AppShell";
import { FreeAppraisalCta } from "@/components/heykal/FreeAppraisalCta";
import { MapEmbed } from "@/components/heykal/MapEmbed";
import { QuoteForm } from "@/components/heykal/QuoteForm";
import { heykal } from "@/lib/heykal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a consultation or reach ${heykal.name} 24/7 via the command desk.`,
};

export default function ContactPage() {
  return (
    <AppShell>
      <div className="sticky top-[6.25rem] z-40 border-y border-border bg-matte/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="font-tactical text-[11px] font-semibold uppercase tracking-[0.25em] text-khaki">
            Emergency desk active 24/7
          </p>
          <a
            href={heykal.hotlineTel}
            className="font-display text-sm font-bold text-gold hover:text-accent-hover"
          >
            {heykal.hotline}
          </a>
        </div>
      </div>

      <section className="bg-surface-elevated py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Request a consultation
          </h1>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Share your sites, schedules, and risks—we respond from the desk with next steps, usually within one
            business day for non-emergency inquiries.
          </p>
        </div>
      </section>
      <FreeAppraisalCta />

      <section className="py-16 sm:py-20" aria-labelledby="quote-form-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-5 sm:px-6">
          <div className="lg:col-span-3">
            <h2 id="quote-form-heading" className="sr-only">
              Quote request form
            </h2>
            <QuoteForm />
          </div>
          <aside className="space-y-8 lg:col-span-2">
            <div className="rounded-sm border border-border bg-surface p-6">
              <p className="font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Command desk</p>
              <a
                href={heykal.hotlineTel}
                className="mt-2 block font-display text-2xl font-bold text-foreground hover:text-gold"
              >
                {heykal.hotline}
              </a>
              <p className="mt-2 text-sm text-muted">24/7 for active clients and emergencies.</p>
            </div>
            <div className="rounded-sm border border-border bg-surface p-6">
              <p className="font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Email</p>
              <a
                href={`mailto:${heykal.email}`}
                className="mt-2 block text-sm font-semibold text-foreground underline decoration-gold/40 underline-offset-4 hover:text-gold"
              >
                {heykal.email}
              </a>
              <p className="mt-3 text-xs text-muted">{heykal.addressLine}</p>
            </div>
            <div>
              <p className="font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Location</p>
              <p className="mt-2 text-sm text-muted">
                Map shows a placeholder landmark—update <code className="font-mono text-gold/90">MapEmbed</code>{" "}
                with your real coordinates.
              </p>
              <div className="mt-4">
                <MapEmbed />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <a
        href={heykal.hotlineTel}
        className="clip-tactical fixed bottom-4 right-4 z-50 inline-flex h-12 items-center justify-center bg-gold px-5 text-sm font-semibold text-accent-foreground shadow-lg shadow-black/30 sm:hidden"
        aria-label="Call emergency hotline"
      >
        24/7 Hotline
      </a>
    </AppShell>
  );
}
