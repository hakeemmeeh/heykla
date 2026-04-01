import Image from "next/image";
import Link from "next/link";
import { heykal } from "@/lib/heykal";
import { StoryChapter } from "@/components/heykal/StoryChapter";

export function HomeServicesPreview() {
  const preview = heykal.services.slice(0, 3);
  return (
    <section className="py-20 sm:py-28" aria-labelledby="home-services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div id="home-services-heading">
            <StoryChapter
              eyebrow="Response model"
              title="Disciplined teams. Structured command."
              blurb="Each program layers manpower, protocol, and surveillance to fit your site profile and threat envelope."
              accent="ember"
            />
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            View all capabilities
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {preview.map((s) => (
            <article
              key={s.slug}
              className="group overflow-hidden rounded-sm border border-border bg-surface-elevated shadow-[0_0_0_1px_rgba(197,164,78,0.08)_inset]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{s.subtitle}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
