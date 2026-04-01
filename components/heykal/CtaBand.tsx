import Link from "next/link";
import { heykal } from "@/lib/heykal";
import { StoryChapter } from "@/components/heykal/StoryChapter";

export function CtaBand() {
  return (
    <section className="bg-surface-elevated py-16" aria-labelledby="cta-band-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div id="cta-band-heading">
          <StoryChapter
            eyebrow="Next step"
            title="Move from exposure to command."
            blurb="Share your operational context and we will scope a practical protection model for your people, assets, and schedule."
          />
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <Link
            href="/contact"
            className="clip-tactical inline-flex h-12 items-center justify-center bg-gold px-7 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
          >
            Request a consultation
          </Link>
          <a href={heykal.hotlineTel} className="text-sm font-semibold text-gold hover:text-accent-hover">
            {heykal.hotline}
          </a>
        </div>
      </div>
    </section>
  );
}
