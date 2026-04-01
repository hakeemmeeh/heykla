import { heykal } from "@/lib/heykal";

export function ControlRoomContinuity() {
  const items = [
    "24/7 command desk coverage",
    "Power continuity and backup procedures",
    "Escalation matrix with secondary dispatch readiness",
  ] as const;

  return (
    <section
      className="relative overflow-hidden bg-surface-elevated py-14"
      aria-labelledby="continuity-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-36"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,235,0.55), rgba(245,242,235,0.75)), url('https://images.unsplash.com/photo-1558002038-1055907df827?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.28em] text-khaki">
            Control room continuity
          </p>
          <h2 id="continuity-heading" className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl gradient-ember-text-wide">
            Continuity is designed in before incidents start.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Our operating model keeps monitoring, dispatch, and escalation aligned so response quality remains
            stable under pressure.
          </p>
        </div>
        <div className="rounded-sm border border-border bg-white/80 p-6 backdrop-blur-sm shadow-sm">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={heykal.hotlineTel}
            className="mt-5 inline-flex text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Emergency line: {heykal.hotline}
          </a>
        </div>
      </div>
    </section>
  );
}
