import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/haikal/AppShell";
import { haikal } from "@/lib/haikal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, leadership, and the meaning behind Haikal—structure, fortress, and disciplined protection.",
};

const storyImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=85";

export default function AboutPage() {
  return (
    <AppShell>
      {/* ── Editorial Hero ── */}
      <section className="relative overflow-hidden bg-ivory pt-32 lg:pt-48">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-onyx/5 hidden lg:block" aria-hidden />
        
        {/* Background Image Panel (Vertical Split) */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 border-l-2 border-purple pl-6">
                <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-onyx/60">
                  Mission Readiness / CORE_01
                </p>
              </div>
              
              <h1 className="mt-12 font-display text-7xl font-black leading-[0.85] tracking-tighter text-onyx sm:text-8xl lg:text-9xl uppercase">
                <span className="block italic opacity-10">THE NEW</span>
                <span className="block -mt-4 lg:-mt-8 gradient-rose-text-wide">HAIKAL</span>
              </h1>
              
              <p className="mt-12 max-w-xl text-xl font-medium leading-relaxed text-onyx/60 sm:text-2xl">
                <em className="not-italic text-purple">Haikal</em> draws from Somali and Arabic roots meaning
                fortress and form. We built this company for clients who need structure over spectacle—clear
                command and resilience by design.
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[3/4] overflow-hidden lg:ml-12"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
               <Image
                 src={storyImage}
                 alt="High stakes tactical environment"
                 fill
                 className="object-cover grayscale contrast-125 transition-transform duration-[20s] hover:scale-110"
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 priority
               />
               <div className="absolute inset-0 bg-purple/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission: Obsidian Layer ── */}
      <section className="bg-onyx py-32 sm:py-48" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div id="mission-heading" className="max-w-3xl">
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-8 bg-rose" />
                <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-rose">
                  Command Intent
                </p>
              </div>
              <h2 className="mt-12 font-display text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl lg:text-8xl italic">
                Judgment under <br />
                <span className="gradient-rose-text-wide uppercase">stress.</span>
              </h2>
            </div>
          </div>

          <div className="mt-32 grid gap-1 px-1 bg-white/5 lg:grid-cols-3">
             <div className="bg-onyx p-12 sm:p-16">
               <p className="text-xl font-medium leading-relaxed text-white/50">
                Deploy vetted professionals, clear command, and accountable technology so leaders can operate
                without second-guessing what happens at the perimeter.
               </p>
             </div>
             
             {[
               { title: "Discipline", detail: "Rank structure, radio discipline, and after-action reviews on every significant event.", id: "01" },
               { title: "Discretion", detail: "Low visibility when the moment allows; unmistakable presence when it does not.", id: "02" }
             ].map((v) => (
                <article key={v.title} className="group relative bg-onyx p-12 transition-all hover:bg-white/5 sm:p-16">
                  <div className="absolute top-12 right-12 text-[10px] font-black tracking-widest text-white/10 italic">
                    CORE_{v.id}
                  </div>
                  <h3 className="mt-12 font-display text-3xl font-black uppercase tracking-tight text-white">{v.title}</h3>
                  <p className="mt-8 text-lg font-medium leading-relaxed text-white/40">{v.detail}</p>
                  <div className="mt-12 h-1 w-8 bg-purple/40" />
                </article>
             ))}
          </div>
        </div>
      </section>

      {/* ── Leadership: Cinematic Grid ── */}
      <section className="bg-ivory py-32 sm:py-48" aria-labelledby="leadership-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-8 bg-purple" />
                <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-purple">
                  Tactical Command
                </p>
              </div>
              <h2 id="leadership-heading" className="mt-12 font-display text-5xl font-black leading-[0.9] tracking-tighter text-onyx sm:text-7xl lg:text-8xl">
                Operators <br />
                <span className="italic opacity-20">AT THE HELM.</span>
              </h2>
            </div>
          </div>

          <ul className="mt-32 grid gap-1 px-1 bg-onyx/5 sm:grid-cols-2 lg:grid-cols-3">
            {haikal.leadership.map((person, i) => (
              <li key={person.name} className="group relative bg-white p-6 transition-all hover:z-10 hover:shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 transition-all group-hover:grayscale-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-onyx/10 mix-blend-multiply" />
                </div>
                
                <div className="mt-12 px-6 pb-12">
                  <div className="flex items-center justify-between">
                    <p className="font-tactical text-[10px] font-black uppercase tracking-widest text-rose">0{i+1}</p>
                    <div className="h-px w-12 bg-onyx/10" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-black uppercase tracking-tight text-onyx">{person.name}</h3>
                  <p className="mt-2 font-tactical text-[10px] font-black uppercase tracking-widest text-onyx/40">{person.role}</p>
                  <p className="mt-8 text-base font-medium leading-relaxed text-onyx/60">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Authoritative CTA ── */}
      <section className="bg-onyx py-32">
        <div className="mx-auto grid max-w-7xl gap-24 px-6 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-rose">Protocol active</p>
            </div>
            <h2 className="mt-12 font-display text-4xl font-black leading-tight tracking-tighter text-white sm:text-6xl">
              Need a <br />
              <span className="gradient-rose-text-wide uppercase">Briefing?</span>
            </h2>
            <p className="mt-8 text-xl font-medium text-white/50">
              Connect with our command team to review operational blueprints and site-specific protocols.
            </p>
          </div>
          
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="group relative inline-flex h-24 items-center justify-center overflow-hidden bg-white px-16 text-xs font-black uppercase tracking-[0.4em] text-onyx transition-all hover:bg-purple hover:text-white"
            >
              <span className="relative z-10">Consult command</span>
              <div className="absolute inset-0 -translate-y-full bg-purple transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
