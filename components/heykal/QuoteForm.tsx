"use client";

import { contactSchema } from "@/lib/contact-schema";
import { heykal } from "@/lib/heykal";
import { useState } from "react";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "company" | "serviceInterest" | "message", string>
>;

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get("_company_url") ?? "").length > 0) {
      setStatus("idle");
      return;
    }

    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      serviceInterest: String(fd.get("serviceInterest") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        name: flat.name?.[0],
        email: flat.email?.[0],
        phone: flat.phone?.[0],
        company: flat.company?.[0],
        serviceInterest: flat.serviceInterest?.[0],
        message: flat.message?.[0],
      });
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setFormError(body?.error ?? "Something went wrong. Try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setFormError("Network error. Check your connection.");
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <input type="text" name="_company_url" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-1.5 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          {fieldErrors.name ? (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="q-email" className="text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1.5 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          {fieldErrors.email ? (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          {fieldErrors.phone ? (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="q-company" className="text-sm font-medium text-foreground">
            Organization
          </label>
          <input
            id="q-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          {fieldErrors.company ? (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {fieldErrors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="text-sm font-medium text-foreground">
          Primary interest
        </label>
        <select
          id="q-service"
          name="serviceInterest"
          required
          className="mt-1.5 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {heykal.services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / multiple">Other / multiple</option>
        </select>
        {fieldErrors.serviceInterest ? (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {fieldErrors.serviceInterest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="q-message" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="q-message"
          name="message"
          rows={5}
          required
          placeholder="Sites, timelines, threat context—share what you can."
          className="mt-1.5 w-full resize-y rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-gold"
        />
        {fieldErrors.message ? (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-red-400" role="alert">
          {formError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="text-sm font-medium text-gold" role="status">
          Thank you. Our desk will contact you shortly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="clip-tactical inline-flex h-12 items-center justify-center bg-gold px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}
