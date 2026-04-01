import Link from "next/link";

export function OperationalIntelligence() {
  const capabilities = [
    {
      title: "Guard tour compliance",
      detail:
        "Checkpoint-based patrol verification with timestamped logs, exception flags, and supervisor visibility.",
    },
    {
      title: "Fleet and asset tracking",
      detail:
        "Route history, vehicle status, and geofenced alerts to support dispatch and after-action reporting.",
    },
    {
      title: "Command reporting",
      detail:
        "Incident records and trend summaries for operations leads, compliance teams, and client management.",
    },
  ] as const;

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20"
      aria-labelledby="operational-intel-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,235,0.55), rgba(245,242,235,0.75)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-tactical text-xs font-semibold uppercase tracking-[0.28em] text-khaki">
          Operational intelligence
        </p>
        <h2 id="operational-intel-heading" className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
          Monitoring systems that support field teams and command decisions.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-sm border border-border bg-surface-elevated p-6">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
        >
          Discuss command-layer integration
        </Link>
      </div>
    </section>
  );
}
