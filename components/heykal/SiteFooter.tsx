import Link from "next/link";
import { heykal } from "@/lib/heykal";
import { Wordmark } from "@/components/heykal/Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-matte">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {heykal.tagline}. Structure, vigilance, and discretion—physical security for organizations that
              cannot afford gaps.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 border border-border border-l-4 border-l-gold bg-surface px-4 py-3 clip-tactical">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <div>
                <p className="font-tactical text-xs font-semibold uppercase tracking-[0.2em] text-khaki">
                  24/7 emergency net
                </p>
                <a href={heykal.hotlineTel} className="text-sm font-semibold text-foreground hover:text-gold">
                  {heykal.hotline}
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            <nav aria-label="Footer">
              <p className="font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Navigate</p>
              <ul className="mt-4 flex flex-col gap-2">
                {heykal.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Certifications</p>
              <ul className="mt-4 flex flex-col gap-2">
                {heykal.certifications.map((c) => (
                  <li key={c} className="text-sm text-muted">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-tactical text-xs font-semibold uppercase tracking-widest text-khaki">Social</p>
              <ul className="mt-2 flex gap-4 print:gap-2">
                {heykal.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-sm text-muted hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4">
          <span className="rank-stripes opacity-80" aria-hidden />
          <div className="hairline-gold min-w-0 flex-1" />
          <span className="rank-stripes opacity-80" style={{ transform: "scaleX(-1)" }} aria-hidden />
        </div>
        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {heykal.name}. All rights reserved. Replace legal copy, regions, and
          registrations with verified disclosures.
        </p>
      </div>
    </footer>
  );
}
