import Link from "next/link";
import { heykal } from "@/lib/heykal";
import { AnimatedStats } from "@/components/heykal/AnimatedStats";
import { StoryChapter } from "@/components/heykal/StoryChapter";

export function WhyHeykal() {
  return (
    <section
      className="bg-surface py-20 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="why-heading">
          <StoryChapter
            eyebrow="Field deployment"
            title="Execution measured in outcomes, not promises."
            blurb="Heykal operates like a fortress system: clear command hierarchy, vetted operators, and oversight that scales from one site to many."
          />
        </div>
        <div className="mt-14">
          <AnimatedStats stats={heykal.stats} />
        </div>
        <div className="mt-14">
          <Link
            href="/about"
            className="inline-flex text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Our story & leadership
          </Link>
        </div>
      </div>
    </section>
  );
}
