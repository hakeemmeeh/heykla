import Link from "next/link";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-surface py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-background px-8 py-12 sm:px-12 sm:py-16">
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Ready for a grounded view of your risk?
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Share your stack, timelines, and what “secure enough” means for your leadership team—we’ll
            reply with a scoped proposal. Wire this block to your form or calendar provider when ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Email hello@example.com
            </Link>
            <span className="flex items-center text-sm text-muted">
              Update the address in <code className="mx-1 font-mono text-[0.8rem]">ContactCta.tsx</code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
