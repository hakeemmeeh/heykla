"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getDeviceMemoryGb, motionTokens, shouldReduceHeavyMotion } from "@/lib/motion";

export function AboutHeroReveal({ image }: { image: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const reduceHeavy = shouldReduceHeavyMotion(!!reduced, getDeviceMemoryGb());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], reduceHeavy ? [0, 0] : [-16, 16]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], reduceHeavy ? [1, 1] : [1.04, 1]);

  return (
    <div ref={sectionRef} className="relative aspect-[21/9] min-h-[280px] w-full overflow-hidden sm:min-h-[360px]">
      <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-[#1C1C1C]/30 to-[#1C1C1C]/10"
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.standard }}
      />
    </div>
  );
}
