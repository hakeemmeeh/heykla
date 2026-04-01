import Link from "next/link";
import { heykal } from "@/lib/heykal";

export function HomeIndustriesTeaser() {
  const items = heykal.industries.slice(0, 3);
  return (
    <section className="py-20 sm:py-28" aria-labelledby="industries-teaser-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="industries-teaser-heading"
          className="font-tactical text-xs font-semibold uppercase tracking-[0.3em] text-khaki"
        >
          Operational theaters
        </h2>
        <p className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Where the mission runs day to day.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.title} className="rounded-sm border border-border bg-surface-elevated p-6">
              <h3 className="font-display text-lg font-bold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{i.description}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/industries"
          className="mt-10 inline-flex text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
        >
          See all industries
        </Link>
      </div>
    </section>
  );
}
