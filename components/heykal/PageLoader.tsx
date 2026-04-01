"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heykal } from "@/lib/heykal";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      const immediate = window.setTimeout(() => setDone(true), 0);
      document.body.style.overflow = "";
      return () => window.clearTimeout(immediate);
    }

    document.body.style.overflow = "hidden";
    const started = performance.now();
    const finish = () => {
      const elapsed = performance.now() - started;
      window.setTimeout(() => {
        setDone(true);
        document.body.style.overflow = "";
      }, Math.max(0, 620 - elapsed));
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(() => requestAnimationFrame(finish));
    } else {
      window.addEventListener("load", () => requestAnimationFrame(() => requestAnimationFrame(finish)), {
        once: true,
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <>
      {children}
      <AnimatePresence>
        {!done ? (
          <motion.div
            key="page-loader"
            role="status"
            aria-live="polite"
            aria-busy="true"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="sr-only">Loading {heykal.name}</span>
            <p className="font-display text-2xl font-bold tracking-[0.35em] text-gold sm:text-3xl">
              {heykal.wordmark}
            </p>
            <p className="font-tactical mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-khaki/90">
              Securing theater · stand by
            </p>
            <div className="mt-5 flex gap-2" aria-hidden>
              <span className="rank-stripes" />
            </div>
            <div className="mt-4 h-px w-40 overflow-hidden bg-border sm:w-48">
              <motion.div
                className="h-full bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: reduce ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
