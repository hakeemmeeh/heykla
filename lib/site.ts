/** Replace with your agency’s real offering; keep claims verifiable. */
export const site = {
  name: "Shieldline",
  description:
    "Security assessments, hardening, and continuous resilience for teams shipping fast without losing trust.",
  services: [
    {
      title: "Offensive security",
      blurb:
        "Controlled attack simulations and code review that map to real business risk—not checkbox scans.",
    },
    {
      title: "Secure architecture",
      blurb:
        "Threat modeling, zero-trust patterns, and pragmatic controls that fit your stack and pace.",
    },
    {
      title: "Detection & response",
      blurb:
        "Logging, alerting, and playbooks your engineers can run—documented, tested, and maintainable.",
    },
  ],
  process: [
    { step: "01", title: "Scope & context", detail: "Assets, crown jewels, and constraints—aligned to leadership." },
    { step: "02", title: "Assess", detail: "Hands-on review with clear severity and exploitability." },
    { step: "03", title: "Remediate", detail: "Paired fixes, patches, and design changes—prioritized by impact." },
    { step: "04", title: "Prove resilience", detail: "Re-test, metrics, and readiness drills your board can understand." },
  ],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
