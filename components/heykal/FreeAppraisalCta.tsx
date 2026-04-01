import Link from "next/link";

export function FreeAppraisalCta() {
  return (
    <section
      className="relative overflow-hidden bg-matte py-14"
      aria-labelledby="appraisal-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,236,228,0.55), rgba(240,236,228,0.72)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-tactical text-xs font-semibold uppercase tracking-[0.28em] text-khaki">
            Free site appraisal
          </p>
          <h2 id="appraisal-cta-heading" className="mt-2 font-display text-2xl font-bold sm:text-3xl gradient-ember-text-wide">
            Get a practical security appraisal before you commit.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            We review your environment, risk pattern, and staffing needs, then return a clear recommendation.
          </p>
        </div>
        <Link
          href="/contact"
          className="clip-tactical inline-flex h-12 items-center justify-center gradient-ember px-7 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Request free appraisal
        </Link>
      </div>
    </section>
  );
}
