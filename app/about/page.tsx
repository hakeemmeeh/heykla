import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { AboutHeroReveal } from "@/components/heykal/AboutHeroReveal";
import { AppShell } from "@/components/heykal/AppShell";
import { heykal } from "@/lib/heykal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, leadership, and the meaning behind Heykal—structure, fortress, and disciplined protection.",
};

const storyImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=85";

export default function AboutPage() {
  return (
    <AppShell>
      <section className="relative">
        <AboutHeroReveal image={storyImage} />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">About Heykal</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Security engineered like a fortress.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            <em className="not-italic text-gold">Heykal</em> draws from Somali and Arabic roots meaning
            fortress and form. We built this company for clients who need structure over spectacle—clear
            command, disciplined deployment, and resilience by design.
          </p>
        </div>
      </section>

      <section className="section-fade section-fade-soft bg-surface py-16 sm:py-24" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="mission-heading" className="font-display text-2xl font-bold sm:text-3xl">
            Mission
          </h2>
          <div className="hairline-gold my-8 max-w-lg" />
          <p className="max-w-3xl text-muted leading-relaxed">
            Deploy vetted professionals, clear command, and accountable technology so leaders can operate
            without second-guessing what happens at the perimeter, in the lobby, or on the road. We train for
            judgment under stress—because protocols alone do not stop incidents; people do.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            <li className="rounded-sm border border-border bg-surface-elevated p-6">
              <h3 className="font-display text-lg font-bold">Discipline</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Rank structure, radio discipline, and after-action reviews on every significant event.
              </p>
            </li>
            <li className="rounded-sm border border-border bg-surface-elevated p-6">
              <h3 className="font-display text-lg font-bold">Discretion</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Low visibility when the moment allows; unmistakable presence when it does not.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-fade section-fade-soft py-16 sm:py-24" aria-labelledby="leadership-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="leadership-heading" className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki">
            Leadership
          </h2>
          <p className="mt-3 font-display text-3xl font-bold sm:text-4xl">Operators at the helm.</p>
          <p className="mt-3 max-w-2xl text-muted">
            Replace bios and imagery with verified leadership profiles as your roster firms up.
          </p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {heykal.leadership.map((person) => (
              <li key={person.name} className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border">
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{person.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{person.role}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-fade section-fade-strong bg-matte py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <p className="font-display text-xl font-bold">Need a program brief?</p>
          <Link
            href="/contact"
            className="clip-tactical inline-flex h-12 items-center justify-center bg-gold px-7 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
          >
            Request a consultation
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
