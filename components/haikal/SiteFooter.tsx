import Link from "next/link";
import { haikal } from "@/lib/haikal";
import { Wordmark } from "@/components/haikal/Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-onyx/10 bg-onyx text-white">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:py-48">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Wordmark />
            <p className="mt-8 text-lg font-medium leading-relaxed text-white/40">
              Elite physical security & surveillance. Structure, vigilance, and discretion—physical security for organizations that
              cannot afford gaps.
            </p>
            
            {/* 24/7 Command Integration */}
            <div className="mt-12 inline-flex items-center gap-6 border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md">
              <div className="relative flex h-3 w-3" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-rose" />
              </div>
              <div>
                <p className="font-tactical text-[10px] font-black uppercase tracking-[0.5em] text-rose/60">
                  Command Integration
                </p>
                <a href={haikal.hotlineTel} className="mt-2 block text-xl font-bold tracking-tighter text-white hover:text-purple transition-colors">
                  {haikal.hotline}
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid gap-16 sm:grid-cols-2 lg:gap-32">
            <nav aria-label="Footer Navigation">
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose">Navigate</p>
              <ul className="mt-8 flex flex-col gap-6">
                {haikal.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-purple transition-all group-hover:w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div>
              <p className="font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose">Standards</p>
              <ul className="mt-8 flex flex-col gap-6">
                {haikal.certifications.map((c) => (
                  <li key={c} className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                    {c}
                  </li>
                ))}
              </ul>
              
              <p className="mt-16 font-tactical text-[10px] font-black uppercase tracking-[0.4em] text-rose">Connected</p>
              <ul className="mt-8 flex gap-8">
                {haikal.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-xs font-black uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Base Layer */}
        <div className="mt-32 flex flex-col items-center justify-between gap-12 border-t border-white/5 pt-12 lg:flex-row">
          <div className="flex gap-1">
            <div className="h-1 w-1 bg-rose/40" />
            <div className="h-1 w-4 bg-purple/40" />
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            © {new Date().getFullYear()} {haikal.name} / Global Strategic Defense Group
          </p>
          
          <div className="flex gap-12">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-rose transition-colors">Privacy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-rose transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
