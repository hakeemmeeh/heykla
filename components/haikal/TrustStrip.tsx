import { haikal } from "@/lib/haikal";
import { StoryChapter } from "@/components/haikal/StoryChapter";

export function TrustStrip() {
  return (
    <section className="bg-ivory py-24 sm:py-32" aria-label="Trust signals">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <StoryChapter
            eyebrow="Threat context"
            title="Risk is constant."
            blurb="Readiness must be too. Before deployment comes posture: who is trusted, what standards they hold, and how quickly they respond."
            accent="rose"
          />
          <ul className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {haikal.clients.map((c) => (
              <li key={c} className="text-[10px] font-bold uppercase tracking-widest text-muted/60">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-4 lg:justify-end">
          {haikal.certifications.map((c) => (
            <li
              key={c}
              className="border border-purple/10 bg-purple px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1"
            >
              <span className="mr-2 h-1 w-1 rounded-full bg-rose inline-block" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
