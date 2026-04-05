"use client";

import { contactSchema } from "@/lib/contact-schema";
import { haikal } from "@/lib/haikal";
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
    <form className="grid gap-8" onSubmit={onSubmit} noValidate>
      <input type="text" name="_company_url" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
            Full name
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-3 w-full border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none focus:border-rose focus:ring-1 focus:ring-rose"
          />
          {fieldErrors.name ? (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="q-email" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
            Work email
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-3 w-full border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none focus:border-rose focus:ring-1 focus:ring-rose"
          />
          {fieldErrors.email ? (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="q-phone" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
            Phone
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-3 w-full border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none focus:border-rose focus:ring-1 focus:ring-rose"
          />
          {fieldErrors.phone ? (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="q-company" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
            Organization
          </label>
          <input
            id="q-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-3 w-full border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none focus:border-rose focus:ring-1 focus:ring-rose"
          />
          {fieldErrors.company ? (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
              {fieldErrors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
          Primary interest
        </label>
        <select
          id="q-service"
          name="serviceInterest"
          required
          className="mt-3 w-full border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none focus:border-rose focus:ring-1 focus:ring-rose appearance-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {haikal.services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / multiple">Other / multiple</option>
        </select>
        {fieldErrors.serviceInterest ? (
          <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
            {fieldErrors.serviceInterest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="q-message" className="text-[10px] font-bold uppercase tracking-widest text-purple/60">
          How can we help?
        </label>
        <textarea
          id="q-message"
          name="message"
          rows={5}
          required
          placeholder="Sites, timelines, threat context—share what you can."
          className="mt-3 w-full resize-y border border-purple/10 bg-white px-5 py-4 text-sm font-medium text-purple outline-none placeholder:text-purple/30 focus:border-rose focus:ring-1 focus:ring-rose"
        />
        {fieldErrors.message ? (
          <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-[10px] font-bold uppercase tracking-wider text-red-500" role="alert">
          {formError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="text-[10px] font-bold uppercase tracking-widest text-rose" role="status">
          Thank you. Our desk will contact you shortly.
        </p>
      ) : null}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative inline-flex h-16 items-center justify-center bg-purple px-10 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-purple/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{status === "loading" ? "Transmitting…" : "Transmit request"}</span>
          <div className="absolute inset-0 border border-rose/30 group-hover:border-rose/60" />
        </button>
      </div>
    </form>
  );
}
