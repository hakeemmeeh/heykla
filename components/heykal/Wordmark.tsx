import Link from "next/link";
import { heykal } from "@/lib/heykal";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-premium border-b-2 border-amber/50 pb-1 text-lg font-extrabold tracking-[0.18em] text-foreground sm:text-xl ${className}`}
    >
      {heykal.wordmark}
    </Link>
  );
}
