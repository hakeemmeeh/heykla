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
      className="relative overflow-hidden bg-white py-32 sm:py-48"
      aria-labelledby="operational-intel-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-8 bg-purple" />
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-purple">
                Intelligence Layer / Data Integrity
              </p>
            </div>
            <h2 id="operational-intel-heading" className="mt-12 font-display text-5xl font-black leading-[0.9] tracking-tighter text-onyx sm:text-7xl lg:text-8xl">
              Systems that <br />
              <span className="gradient-rose-text-wide uppercase">support command.</span>
            </h2>
          </div>
          
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-onyx/40 transition-colors hover:text-purple"
          >
            Integration
            <span className="h-px w-12 bg-onyx/10 group-hover:w-20 group-hover:bg-purple transition-all" />
          </Link>
        </div>

        <div className="mt-32 grid gap-1 px-1 bg-onyx/5 md:grid-cols-3">
          {capabilities.map((item, i) => (
            <article key={item.title} className="group relative bg-white p-12 transition-all hover:z-10 hover:shadow-2xl sm:p-16">
              <div className="absolute top-12 right-12 text-[10px] font-black tracking-widest text-onyx/10">
                VAR.INT.0{i+1}
              </div>
              <h3 className="mt-12 font-display text-3xl font-black uppercase tracking-tight text-onyx">{item.title}</h3>
              <p className="mt-8 text-lg font-medium leading-relaxed text-onyx/60">{item.detail}</p>
              
              {/* Tactical detail */}
              <div className="mt-12 flex gap-1">
                <div className="h-1 w-4 bg-purple/20" />
                <div className="h-1 w-1 bg-rose" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
