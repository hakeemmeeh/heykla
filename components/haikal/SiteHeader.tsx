"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { haikal } from "@/lib/haikal";
import { Wordmark } from "@/components/haikal/Wordmark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] bg-ivory/80 backdrop-blur-xl border-b border-onyx/5">
      <div className="mx-auto flex h-32 max-w-7xl items-start justify-between gap-12 px-6 pt-6 sm:h-36 lg:h-40">
        <div className="flex-1 hidden lg:flex items-center gap-10 pt-4">
          {haikal.nav.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-onyx/60 transition-colors hover:text-purple"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Wordmark className="-mt-2" />

        <div className="flex-1 flex items-center justify-end gap-10 pt-4">
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {haikal.nav.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-onyx/60 transition-colors hover:text-purple"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-onyx/10" />
            <a
              href={haikal.hotlineTel}
              className="group flex flex-col items-end"
            >
              <span className="text-[8px] font-black uppercase tracking-widest text-rose">24/7 Command</span>
              <span className="text-xs font-black tracking-widest text-onyx group-hover:text-purple transition-colors">{haikal.hotline}</span>
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center border border-onyx/10 text-onyx lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-white/5 bg-purple px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6">
            {haikal.nav.map((item, i) => (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-ivory hover:text-rose"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={haikal.hotlineTel}
                className="text-xs font-bold tracking-widest text-rose"
                onClick={() => setOpen(false)}
              >
                {haikal.hotline}
              </a>
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center border border-rose/50 bg-white/5 text-xs font-bold uppercase tracking-widest text-white"
                onClick={() => setOpen(false)}
              >
                Request consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
