import { site } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="process-heading" className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Process
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A clear line from first scope to proven fix.
        </p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((p) => (
            <li key={p.step} className="relative">
              <span className="font-mono text-xs text-muted">{p.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
