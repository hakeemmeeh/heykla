import { heykal } from "@/lib/heykal";
import { StoryChapter } from "@/components/heykal/StoryChapter";

export function TrustStrip() {
  return (
    <section className="bg-surface py-14" aria-label="Trust signals">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <StoryChapter
            eyebrow="Threat context"
            title="Risk is constant. Readiness must be too."
            blurb="Before deployment comes posture: who is trusted, what standards they hold, and how quickly they respond when conditions shift."
          />
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {heykal.clients.map((c) => (
              <li key={c} className="text-sm font-medium text-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-3 lg:justify-end">
          {heykal.certifications.map((c) => (
            <li
              key={c}
              className="rounded-sm border border-gold/30 bg-surface-elevated px-3 py-2 text-xs font-medium text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
