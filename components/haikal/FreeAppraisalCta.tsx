import Link from "next/link";

export function FreeAppraisalCta() {
  return (
    <section
      className="relative overflow-hidden bg-purple py-24 sm:py-32"
      aria-labelledby="appraisal-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] grayscale contrast-125"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-tactical text-[10px] font-bold uppercase tracking-[0.4em] text-rose">
            Free site appraisal
          </p>
          <h2 id="appraisal-cta-heading" className="mt-6 font-premium text-3xl font-black uppercase tracking-tight text-white sm:text-5xl italic gradient-rose-text-wide">
            Get a practical appraisal.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/70 sm:text-xl">
            We review your environment, risk pattern, and staffing needs, then return a clear recommendation.
          </p>
        </div>
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center bg-rose px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-rose/90"
        >
          <span>Request free appraisal</span>
          <div className="absolute inset-0 border border-white/20 group-hover:border-white/40" />
        </Link>
      </div>
    </section>
  );
}
