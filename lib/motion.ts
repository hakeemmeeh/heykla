export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.28,
    hero: 0.6,
    commandScan: 1.4,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    calm: [0.25, 0.1, 0.25, 1] as const,
  },
} as const;

export function shouldReduceHeavyMotion(reducedMotion: boolean, memoryGb?: number) {
  if (reducedMotion) return true;
  if (typeof memoryGb !== "number") return false;
  return memoryGb <= 4;
}

export function getDeviceMemoryGb() {
  if (typeof navigator === "undefined") return undefined;
  type NavWithMemory = Navigator & { deviceMemory?: number };
  return (navigator as NavWithMemory).deviceMemory;
}
