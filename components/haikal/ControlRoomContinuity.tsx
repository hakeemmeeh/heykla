import { haikal } from "@/lib/haikal";

export function ControlRoomContinuity() {
  const items = [
    "24/7 command desk coverage",
    "Power continuity and backup procedures",
    "Escalation matrix with secondary dispatch readiness",
  ] as const;

  return (
    <section
      className="relative overflow-hidden bg-purple py-24 sm:py-32"
      aria-labelledby="continuity-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558002038-1055907df827?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">
            Control room continuity
          </p>
          <h2 id="continuity-heading" className="mt-6 max-w-3xl font-premium text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Continuity is designed in.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            Our operating model keeps monitoring, dispatch, and escalation aligned so response quality remains
            stable under pressure.
          </p>
        </div>
        <div className="relative border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <div className="absolute top-0 right-0 p-4">
            <div className="h-4 w-px bg-rose/40" />
            <div className="mt-1 h-px w-4 bg-rose/40" />
          </div>
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item} className="flex gap-4 text-sm font-medium text-ivory">
                <span className="mt-1 h-2 w-2 bg-rose" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.2em] text-rose/60">Flash response</p>
            <a
              href={haikal.hotlineTel}
              className="mt-2 inline-flex text-lg font-bold text-white hover:text-rose transition-colors"
            >
              {haikal.hotline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
