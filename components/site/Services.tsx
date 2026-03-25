import { site } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-surface py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="services-heading" className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Services
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Depth where it matters—without slowing releases.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {site.services.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
