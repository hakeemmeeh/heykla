import Link from "next/link";
import { haikal } from "@/lib/haikal";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group relative z-50 flex flex-col items-center gap-2 transition-all duration-500 hover:scale-[1.05] ${className}`}
    >
      <div className="relative flex h-16 w-16 items-center justify-center bg-purple shadow-[0_20px_50px_rgba(74,53,138,0.3)] sm:h-20 sm:w-20 overflow-hidden">
        {/* Fortress Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <svg viewBox="0 0 100 100" className="h-10 w-10 text-white sm:h-12 sm:w-12 relative z-10 transition-transform duration-500 group-hover:scale-110">
          {/* Main Shield - Sharper Geometry */}
          <path fill="currentColor" d="M50 10 L85 24 L85 58 C85 82 68 93 50 97 C32 93 15 82 15 58 L15 24 L50 10 Z" />
          {/* Internal Detail */}
          <path fill="none" stroke="white" strokeWidth="2" opacity="0.2" d="M50 15 L80 27 L80 56 C80 78 65 88 50 92 C35 88 20 78 20 56 L20 27 L50 15 Z" />
          {/* Interlocked H - Custom Letterform */}
          <path fill="none" stroke="white" strokeWidth="10" strokeLinecap="square" d="M38 38 L38 72 M62 38 L62 72 M38 55 L62 55" />
        </svg>
        
        {/* Tactical Corners */}
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-white/10" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-rose/60 group-hover:h-full group-hover:w-full transition-all duration-700" />
      </div>
      
      <div className="flex flex-col items-center leading-none mt-2">
        <span className="font-display text-base font-black tracking-[0.4em] text-onyx sm:text-lg">
          HAIKAL
        </span>
        <span className="mt-2 font-tactical text-[8px] font-black tracking-[0.6em] text-rose/60 uppercase">
          Elite Strategic Defense
        </span>
      </div>
    </Link>
  );
}
