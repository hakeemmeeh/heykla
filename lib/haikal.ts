/** Haikal Security — content module. Replace placeholders with verified facts only. */

export const haikal = {
  name: "Haikal Security",
  tagline: "Elite physical security & surveillance",
  wordmark: "HAIKAL",
  hotline: "+1 (800) 555-0199",
  hotlineTel: "tel:+18005550199",
  email: "operations@haikalsecurity.com",
  addressLine: "By appointment — operations worldwide",
  /** Use a real embed when you have an address */
  mapQuery: "Corporate+security+headquarters",

  services: [
    {
      slug: "guarding",
      title: "Manned guarding",
      subtitle: "Armed & unarmed",
      description:
        "Uniformed professionals protecting your people, perimeter, and reputation—trained to de‑escalate first, act decisively when required.",
      image:
        "https://images.unsplash.com/photo-1772743227731-e16af7c8d85a?w=1200&q=80&auto=format&fit=crop",
    },
    {
      slug: "executive",
      title: "Executive protection",
      subtitle: "VIP & principal security",
      description:
        "Low‑profile coverage for executives, dignitaries, and high‑visibility principals—travel logistics, advance work, and 24/7 readiness.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80&auto=format&fit=crop",
    },
    {
      slug: "events",
      title: "Event security",
      subtitle: "Crowds under control",
      description:
        "From corporate summits to private galas—credentialing, access, and response teams scaled to your headcount and venue.",
      image:
        "https://images.unsplash.com/photo-1762698070244-731ae64e5ff6?w=1200&q=80&auto=format&fit=crop",
    },
    {
      slug: "patrol",
      title: "Patrol services",
      subtitle: "Sites on rotation",
      description:
        "Randomized and scheduled patrols, incident logging, and partnership with local authorities when situations escalate.",
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
    },
    {
      slug: "cctv-consult",
      title: "CCTV consultation",
      subtitle: "Design & strategy",
      description:
        "Camera placement, blind‑spot analysis, storage and retention policy—aligned to privacy law and operational reality.",
      image:
        "https://images.unsplash.com/photo-1544481169-ad8c8624110b?w=1200&q=80&auto=format&fit=crop",
    },
    {
      slug: "cctv-install",
      title: "Installation & monitoring",
      subtitle: "Turnkey surveillance",
      description:
        "Install, integrate, and monitor feeds with escalation protocols—secondary to our on‑ground teams, never a substitute.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    },
  ] as const,

  stats: [
    { label: "Years operational", value: 18, suffix: "+" },
    { label: "Personnel deployed", value: 340, suffix: "+" },
    { label: "Client sites active", value: 120, suffix: "+" },
    { label: "Command availability", value: 24, suffix: "/7" },
  ] as const,

  industries: [
    {
      title: "Corporate offices",
      description: "Lobby protocols, after-hours access, executive floors.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
      risks: ["After-hours access", "Executive movement", "Reception bottlenecks"],
      serviceMix: ["Manned guarding", "Executive protection", "CCTV consultation"],
      ctaLabel: "Secure this office",
    },
    {
      title: "Residential estates",
      description: "Gated communities, family offices, discreet presence.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
      risks: ["Perimeter breaches", "Visitor screening", "Night-time incidents"],
      serviceMix: ["Manned guarding", "Patrol services", "CCTV installation"],
      ctaLabel: "Secure this estate",
    },
    {
      title: "Retail & malls",
      description: "Shrink, crowd safety, and incident containment.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80&auto=format&fit=crop",
      risks: ["Shrink hotspots", "Peak-time crowds", "Cash movement"],
      serviceMix: ["Event security", "Patrol services", "Guard monitoring"],
      ctaLabel: "Secure this retail site",
    },
    {
      title: "Events & conferences",
      description: "Credentialing, perimeter, and VIP lanes.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop",
      risks: ["Ingress congestion", "VIP routing", "Backstage access"],
      serviceMix: ["Event security", "Executive protection", "CCTV monitoring"],
      ctaLabel: "Secure this event",
    },
    {
      title: "Construction sites",
      description: "Equipment protection, night patrols, vendor control.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
      risks: ["Equipment theft", "Unauthorized entry", "Night shift exposure"],
      serviceMix: ["Patrol services", "Manned guarding", "Tracking solutions"],
      ctaLabel: "Secure this site",
    },
    {
      title: "Hospitality",
      description: "Guest safety, nightlife venues, reputation risk.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop",
      risks: ["Guest disturbance", "Venue crowd flow", "After-hours incidents"],
      serviceMix: ["Manned guarding", "Event security", "CCTV installation"],
      ctaLabel: "Secure this venue",
    },
  ] as const,

  testimonials: [
    {
      quote:
        "Haikal’s team became part of our building’s rhythm—firm at access points, invisible everywhere else. Our board noticed the difference in week one.",
      name: "Director of Operations",
      org: "Global Asset Manager",
    },
    {
      quote:
        "Executive travel used to keep me up at night. Their advance work and on‑principal detail gave us room to focus on the deal.",
      name: "Chief of Staff",
      org: "Private Holdings Group",
    },
    {
      quote:
        "Event nights are unpredictable. Haikal’s command post coordination with local teams was textbook—no drama, just control.",
      name: "Head of Events",
      org: "International Summit Series",
    },
  ] as const,

  certifications: [
    "Licensed & insured",
    "ISO-aligned procedures",
    "Background-vetted personnel",
    "24/7 command desk",
  ] as const,

  clients: ["Fortress Holdings", "Atlas Retail", "Crown Events", "Northline Estates", "Harbor Hospitality"] as const,

  leadership: [
    {
      name: "Ahmed H.",
      role: "Managing Director",
      bio: "Former close-protection lead for diplomatic missions; builds teams for complex, multi-site programs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    },
    {
      name: "Sarah Okonkwo",
      role: "Director of Operations",
      bio: "Logistics and legal compliance across jurisdictions; scales guard force and patrol coverage.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    },
    {
      name: "Marcus Webb",
      role: "Technical Surveillance",
      bio: "CCTV architecture and monitoring integration; bridges physical presence with sensor networks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    },
  ] as const,

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ] as const,

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X", href: "https://twitter.com" },
  ] as const,
} as const;
