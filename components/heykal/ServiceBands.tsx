"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heykal } from "@/lib/heykal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

export function ServiceBands() {
  const reduced = useReducedMotion();
  const reduceHeavy = shouldReduceHeavyMotion(!!reduced, getDeviceMemoryGb());

  return (
    <section className="py-16 sm:py-24" aria-label="Service offerings">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
        {heykal.services.map((s, i) => (
          <motion.article
            key={s.slug}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
            initial={{ opacity: 0, y: reduceHeavy ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.standard }}
          >
            <motion.div
              className={`relative aspect-[16/10] overflow-hidden rounded-sm border border-border ${i % 2 === 1 ? "lg:order-2" : ""}`}
              initial={{ opacity: 0, x: reduceHeavy ? 0 : i % 2 === 1 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: motionTokens.duration.base,
                delay: 0.05,
                ease: motionTokens.easing.standard,
              }}
            >
              <Image
                src={s.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
            </motion.div>
            <motion.div
              className={i % 2 === 1 ? "lg:order-1" : ""}
              initial={{ opacity: 0, x: reduceHeavy ? 0 : i % 2 === 1 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: motionTokens.duration.base,
                delay: 0.1,
                ease: motionTokens.easing.standard,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{s.subtitle}</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted leading-relaxed">{s.description}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                Discuss this program
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
