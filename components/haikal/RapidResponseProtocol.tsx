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
      className="relative overflow-hidden bg-onyx py-32 sm:py-48"
      aria-labelledby="rapid-response-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] grayscale contrast-125"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      
      {/* Decorative hairline */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rose/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="inline-flex items-center gap-4">
          <span className="h-px w-8 bg-rose" />
          <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-rose">
            Command Protocol / 0.8s Baseline
          </p>
        </div>
        
        <h2 id="rapid-response-heading" className="mt-12 max-w-5xl font-display text-6xl font-black leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-9xl">
          <span className="block opacity-20 italic">SIGNAL TO</span>
          <span className="block gradient-rose-text-wide uppercase">RESOLUTION.</span>
        </h2>
        
        <div className="mt-32 grid gap-1 px-1 bg-white/5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="relative bg-onyx p-12 transition-all hover:bg-white/5 sm:p-16">
              <div className="absolute top-12 right-12 text-[10px] font-black tracking-[0.4em] text-white/10">
                VAR_{step.id}
              </div>
              
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose/60">
                Phase {step.id}
              </p>
              <h3 className="mt-12 font-display text-3xl font-black uppercase tracking-tight text-white">{step.title}</h3>
              <p className="mt-8 text-lg font-medium leading-relaxed text-white/50">{step.detail}</p>
              
              {/* Internal detail */}
              <div className="mt-12 h-1 w-8 bg-purple/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
