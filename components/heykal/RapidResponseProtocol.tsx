export function RapidResponseProtocol() {
  const steps = [
    {
      id: "01",
      title: "Trigger",
      detail: "Alarm, panic signal, patrol escalation, or hotline incident enters command workflow instantly.",
    },
    {
      id: "02",
      title: "Dispatch",
      detail: "Control room validates context, routes the nearest unit, and prepares backup response lanes.",
    },
    {
      id: "03",
      title: "On-site control",
      detail: "Field team stabilizes scene, executes escalation matrix, and reports status in one command channel.",
    },
  ] as const;

  return (
    <section
      className="relative overflow-hidden bg-surface py-16 sm:py-20"
      aria-labelledby="rapid-response-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,235,0.55), rgba(245,242,235,0.75)), url('https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-tactical text-xs font-semibold uppercase tracking-[0.28em] text-khaki">
          Rapid response protocol
        </p>
        <h2 id="rapid-response-heading" className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
          A clear sequence from incident signal to controlled resolution.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="rounded-sm border border-border bg-surface-elevated p-6">
              <p className="font-tactical text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {step.id}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
