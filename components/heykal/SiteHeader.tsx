"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heykal } from "@/lib/heykal";
import { Wordmark } from "@/components/heykal/Wordmark";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div
        className="h-1 w-full bg-gradient-to-r from-border via-gold/50 to-border"
        aria-hidden
      />
      <div className="flex items-center justify-center gap-3 border-b border-border bg-matte/80 py-2">
        <span className="rank-stripes hidden opacity-90 sm:block" aria-hidden />
        <p className="font-tactical text-[10px] font-semibold uppercase tracking-[0.4em] text-khaki sm:text-[11px]">
          Command posture · 24/7 readiness
        </p>
        <span className="rank-stripes hidden opacity-90 sm:block" style={{ transform: "scaleX(-1)" }} aria-hidden />
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {heykal.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={heykal.hotlineTel}
            className="hidden xl:inline-flex text-xs font-semibold uppercase tracking-wider text-gold hover:text-accent-hover"
          >
            {heykal.hotline}
          </a>
          <Link
            href="/contact"
            className="clip-tactical bg-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Request consultation
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-border px-3 py-2 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {heykal.nav.map((item, i) => (
              <Link
                key={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="text-sm text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={heykal.hotlineTel}
              className="text-sm font-semibold text-gold"
              onClick={() => setOpen(false)}
            >
              {heykal.hotline}
            </a>
            <Link
              href="/contact"
              className="clip-tactical mt-1 bg-gold py-2.5 text-center text-sm font-semibold text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              Request consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
