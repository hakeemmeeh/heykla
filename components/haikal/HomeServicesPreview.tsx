import Image from "next/image";
import Link from "next/link";
import { haikal } from "@/lib/haikal";
import { StoryChapter } from "@/components/haikal/StoryChapter";

export function HomeServicesPreview() {
  const preview = haikal.services.slice(0, 3);
  return (
    <section className="bg-ivory py-32 sm:py-48" aria-labelledby="home-services-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div id="home-services-heading" className="max-w-2xl">
            <StoryChapter
              eyebrow="Response model"
              title="Disciplined teams."
              blurb="Structured command. Each program layers manpower, protocol, and surveillance to fit your site profile and threat envelope."
              accent="purple"
            />
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-onyx/40 transition-colors hover:text-purple"
          >
            Capabilities
            <span className="h-px w-12 bg-onyx/10 group-hover:w-20 group-hover:bg-purple transition-all" />
          </Link>
        </div>
        
        <div className="mt-32 grid gap-1 px-1 bg-onyx/5 lg:grid-cols-3">
          {preview.map((s, i) => (
            <article
              key={s.slug}
              className="group relative overflow-hidden bg-white p-12 transition-all hover:z-10 hover:shadow-2xl sm:p-16"
            >
              <div className="absolute top-10 right-10 text-[10px] font-black tracking-widest text-onyx/10">
                0{i + 1}
              </div>
              
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose">{s.subtitle}</p>
              <h3 className="mt-12 font-display text-4xl font-black leading-[0.9] text-onyx sm:text-5xl">{s.title}</h3>
              <p className="mt-8 text-lg font-medium leading-relaxed text-onyx/60">{s.description}</p>
              
              <Link
                href={`/services#${s.slug}`}
                className="mt-16 inline-flex h-16 items-center justify-center border border-onyx/5 bg-ivory px-10 text-[10px] font-black uppercase tracking-[0.3em] text-onyx transition-all hover:bg-purple hover:text-white"
              >
                Strategic Entry
              </Link>

              {/* Tactical hover detail */}
              <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-purple transition-transform duration-500 origin-left group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
