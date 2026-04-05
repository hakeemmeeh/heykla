import { haikal } from "@/lib/haikal";
import { StoryChapter } from "@/components/haikal/StoryChapter";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-labelledby="testimonials-heading">
      <div className="relative mx-auto max-w-7xl px-6">
        <div id="testimonials-heading">
          <StoryChapter
            eyebrow="Proof of control"
            title="Trusted in live environments."
            blurb="These outcomes come from repeatable command habits: disciplined communication, incident readiness, and calm escalation."
            accent="rose"
          />
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {haikal.testimonials.map((t) => (
            <article
              key={t.org}
              className="relative flex flex-col pt-10"
            >
              <span className="absolute top-0 left-0 text-5xl font-serif text-rose opacity-40 select-none" aria-hidden>&ldquo;</span>
              <blockquote className="flex-1 font-premium text-lg font-bold leading-relaxed text-onyx">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-8 border-t border-warm-grey">
                <p className="font-premium text-sm font-black uppercase tracking-widest text-purple">{t.name}</p>
                <p className="mt-1 font-tactical text-[10px] font-bold uppercase tracking-[0.2em] text-rose">{t.org}</p>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
