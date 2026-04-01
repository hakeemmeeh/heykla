import { heykal } from "@/lib/heykal";
import { StoryChapter } from "@/components/heykal/StoryChapter";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-matte py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-26"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,236,228,0.55), rgba(240,236,228,0.72)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div id="testimonials-heading">
          <StoryChapter
            eyebrow="Proof of control"
            title="Trusted in live environments."
            blurb="These outcomes come from repeatable command habits: disciplined communication, incident readiness, and calm escalation."
          />
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {heykal.testimonials.map((t) => (
            <li
              key={t.org}
              className="flex flex-col border-l-2 border-gold/40 pl-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-gold">{t.org}</p>
              </figcaption>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xs text-muted">
          Logos shown as name-only placeholders—swap for permitted client marks.
        </p>
      </div>
    </section>
  );
}
