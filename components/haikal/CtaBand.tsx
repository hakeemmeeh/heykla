import Link from "next/link";
import { haikal } from "@/lib/haikal";
import { StoryChapter } from "@/components/haikal/StoryChapter";

export function CtaBand() {
  return (
    <section className="bg-ivory py-24 sm:py-32" aria-labelledby="cta-band-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div id="cta-band-heading" className="max-w-2xl">
          <StoryChapter
            eyebrow="Next step"
            title="Move from exposure to command."
            blurb="Share your operational context and we will scope a practical protection model for your people, assets, and schedule."
            accent="rose"
          />
        </div>
        <div className="flex flex-col gap-6 sm:items-end">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center bg-purple px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-purple/90"
          >
            <span>Request a consultation</span>
            <div className="absolute inset-0 border border-rose/30 group-hover:border-rose/60" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-tactical text-[10px] font-bold uppercase tracking-widest text-rose">Hotline</span>
            <a href={haikal.hotlineTel} className="text-lg font-bold text-onyx hover:text-rose transition-colors">
              {haikal.hotline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
