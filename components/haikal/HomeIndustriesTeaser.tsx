import Link from "next/link";
import { haikal } from "@/lib/haikal";

export function HomeIndustriesTeaser() {
  const items = haikal.industries.slice(0, 3);
  return (
    <section className="bg-purple py-24 sm:py-32" aria-labelledby="industries-teaser-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="industries-teaser-heading"
          className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose"
        >
          Operational theaters
        </h2>
        <p className="mt-8 font-premium text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
          Where the mission runs day to day.
        </p>
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.title} className="relative border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="absolute top-0 right-0 p-3">
                <div className="h-3 w-3 border-t border-r border-rose/40" />
              </div>
              <h3 className="font-premium text-xl font-bold uppercase text-white">{i.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">{i.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <Link
            href="/industries"
            className="text-xs font-bold uppercase tracking-widest text-rose underline decoration-rose/40 underline-offset-8 transition-colors hover:decoration-rose"
          >
            See all industries
          </Link>
        </div>
      </div>
    </section>
  );
}
