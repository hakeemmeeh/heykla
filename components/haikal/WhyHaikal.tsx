import Link from "next/link";
import { haikal } from "@/lib/haikal";
import { AnimatedStats } from "@/components/haikal/AnimatedStats";
import { StoryChapter } from "@/components/haikal/StoryChapter";

export function WhyHaikal() {
  return (
    <section
      className="bg-ivory py-24 sm:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div id="why-heading">
          <StoryChapter
            eyebrow="Field deployment"
            title="Execution measured in outcomes."
            blurb="Haikal operates like a fortress system: clear command hierarchy, vetted operators, and oversight that scales from one site to many."
            accent="rose"
          />
        </div>
        <div className="mt-20">
          <AnimatedStats stats={haikal.stats} />
        </div>
        <div className="mt-20 flex justify-center">
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-3 bg-purple px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-purple/90"
          >
            <span>Our story & leadership</span>
            <div className="absolute inset-0 border border-rose/30 group-hover:border-rose/60" />
          </Link>
        </div>
      </div>
    </section>
  );
}
