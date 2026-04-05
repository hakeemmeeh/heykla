"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { haikal } from "@/lib/haikal";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

export function ServiceBands() {
  const reduced = useReducedMotion();
  const reduceHeavy = shouldReduceHeavyMotion(!!reduced, getDeviceMemoryGb());

  return (
    <section className="bg-ivory py-24 sm:py-32" aria-label="Service offerings">
      <div className="mx-auto max-w-7xl space-y-32 px-6">
        {haikal.services.map((s, i) => (
          <motion.article
            key={s.slug}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
            initial={{ opacity: 0, y: reduceHeavy ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.standard }}
          >
            <motion.div
              className={`relative aspect-[16/10] overflow-hidden border border-purple/10 ${i % 2 === 1 ? "lg:order-2" : ""}`}
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
                className="object-cover grayscale contrast-125 transition-all hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple/40 to-transparent" />
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
              <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">{s.subtitle}</p>
              <h2 className="mt-6 font-premium text-3xl font-black uppercase tracking-tight text-purple sm:text-5xl">{s.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{s.description}</p>
              <Link
                href="/contact"
                className="mt-10 inline-flex text-xs font-bold uppercase tracking-widest text-purple underline decoration-rose/40 underline-offset-8 transition-colors hover:decoration-rose"
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
