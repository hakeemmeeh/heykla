# Security agency marketing site — build specification

**Role:** Single source of truth for UI/UX, frontend quality, motion, and trust patterns.  
**Stack assumption:** Next.js (App Router) + TypeScript + Tailwind CSS v4.  
**Inspiration (patterns only):** [Godly](https://godly.website/) for spatial and motion *ideas*; [21st.dev](https://21st.dev/) for component *structure*—never copy proprietary branding, logos, or distinct illustrations.

---

## 0. Non‑negotiables (“no hallucination”)

- **Verify before shipping:** APIs, CSS properties, and browser behavior using [MDN Web Docs](https://developer.mozilla.org/) and when needed [Can I use](https://caniuse.com/)—do not guess support.
- **Claims on the site:** Only state certifications, clients, metrics, or guarantees the business can **prove**. No invented awards, logos, or “bank‑grade” language without substance.
- **Third‑party assets:** Licensed fonts, icons, images, and 3D models only; keep license notes in the repo if required.

---

## 1. Agency‑grade UI/UX principles

1. **One primary story per viewport:** Hero states *who you help*, *how*, *one* main CTA; avoid competing focal points.
2. **Typographic hierarchy:** Clear `h1` → `h2` → `h3`; body line length ~60–75 characters where possible; comfortable line-height (roughly 1.4–1.6 for UI text).
3. **Spacing system:** Use a **fixed scale** (e.g. 4/8px base) consistently; section padding breathes; align to a **grid** so sections feel “designed,” not stacked.
4. **Color:** Limited palette; high contrast for text vs background; use accent color sparingly for CTAs and key links.
5. **Dark/light:** If both, **respect `prefers-color-scheme`** and/or a persisted toggle; no flash of wrong theme on load (avoid layout/CLS when toggling).
6. **Motion:** Purposeful, short, and reversible; never block reading or navigation. Honor **`prefers-reduced-motion`** (see §6).
7. **Security vertical tone:** Competence and clarity over fear; avoid stock “matrix/hoodie” tropes unless deliberate brand choice.

---

## 2. Information architecture (suggested)

Order and naming are adjustable; keep **trust early** and **CTA repeated** sanely.

1. **Header:** Logo, primary nav, prominent **Contact / Assessment** CTA.
2. **Hero:** Value proposition, subcopy, primary + secondary CTA, optional proof strip (logos only if real).
3. **Services / offerings:** 3–6 cards; each: outcome, who it’s for, link to detail if needed.
4. **Process:** 3–5 steps; scannable.
5. **Proof:** Case-style blur bullets or metrics **only if accurate**; logos with permission.
6. **Insights / resources (optional):** Blog or guides if maintained.
7. **Footer:** Contact, legal (Privacy, Terms if applicable), social, sitemap links.

---

## 3. Frontend engineering standards

### 3.1 Semantic HTML & SEO

- One **`h1`** per page; headings in order; meaningful **landmarks** (`header`, `main`, `nav`, `footer`).
- **Metadata:** Unique `title` and `description` per route; Open Graph/Twitter cards for share previews **when** sharing matters.
- **Images:** `alt` text that describes meaning; decorative images `alt=""`.

### 3.2 Accessibility (baseline)

- Align interactive targets with [WCAG 2.2](https://www.w3.org/TR/WCAG22/) **Understanding** docs—especially **focus visible**, **contrast**, **keyboard** access, and **labels** on forms.
- Full keyboard path through nav, modals, and carousels; **visible focus ring** (do not `outline: none` without replacement).
- **Forms:** Associated labels, error text linked to fields (`aria-describedby` where appropriate), clear success states.

### 3.3 Performance

- Optimize against **Core Web Vitals** using official guidance: [web.dev — Vitals](https://web.dev/articles/vitals) — **LCP**, **INP**, **CLS** are the standard user-centric metrics (names and definitions per Google’s docs).
- **Images:** Modern formats where appropriate; responsive `sizes`/`srcset` for content images; avoid huge hero assets without lazy strategy.
- **Fonts:** `font-display: swap` (or documented strategy); subset weights; avoid loading unused families.
- **JavaScript:** Code-split heavy sections (e.g. 3D, charts); dynamic import for below-the-fold experiences.
- **Third‑party scripts:** Minimal; load analytics/consent-gated where required.

### 3.4 Motion & 3D

- **Reduced motion:** Implement `prefers-reduced-motion: reduce` — replace or disable non‑essential animation and parallax; keep essential feedback (e.g. subtle focus) per [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
- **3D / WebGL:** Lazy mount; cap device pixel ratio on WebGL where appropriate; loading fallback (skeleton or static image); dispose GPU resources on unmount in R3F patterns.
- **Scroll‑driven scenes:** Prefer throttled/RAF patterns; avoid synchronous heavy work in scroll listeners; test mobile thermal behavior.

### 3.5 Security (technical)

- **Dependencies:** Keep framework/libs updated; audit with your toolchain (`npm audit` / equivalent; fix or justify).
- **Headers & hosting:** Follow hosting provider and Next.js deployment guidance for HTTPS, environment variables, and **no secrets in client bundles**.
- **Forms:** Server-side validation; rate limiting / CAPTCHA only if product requires—decide explicitly.

### 3.6 Internationalization & localization

- If multilingual: plan routes or locale prefixes early; avoid hard‑coded strings in components long-term.

---

## 4. Design system — minimum deliverables

Document in code (tokens or theme file):

- **Type scale** (sizes, weights, letter-spacing for display vs body).
- **Spacing scale** and **radius** tokens.
- **Color palette** (background, surface, text primary/secondary, border, accent, danger/success if needed).
- **Focus ring** style shared across interactive elements.
- **Breakpoints** and container max-width.

---

## 5. Components — quality bar

- **Navigation:** Mobile menu reachable via keyboard; trap focus only when modal pattern is correct; ESC closes.
- **Buttons:** Clear disabled/loading states; do not rely on color alone.
- **Cards:** Entire card clickable only if one action; otherwise distinct controls.
- **Modals/dialogs:** Focus trap, return focus, aria attributes per [WAI‑ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) where applicable.

---

## 6. Content & trust

- **Testimonials / logos:** Real names/roles where possible; permission documented.
- **Compliance claims:** “SOC 2,” “ISO 27001,” etc. only with accurate scope language.
- **Responsible disclosure** / security contact: link if offering offensive security or running a program.

---

## 7. Definition of Done (per page)

- [ ] Lighthouse or equivalent: no critical a11y regressions; performance budget discussed (set numeric targets per project).
- [ ] Keyboard + screen reader smoke test on header, hero CTAs, forms.
- [ ] `prefers-reduced-motion` verified.
- [ ] CLS stable: no late-loading text/fonts shifting layout without reserved space.
- [ ] Metadata present; social previews if in scope.
- [ ] 3D/motion sections degrade gracefully (slow devices / WebGL unavailable).

---

## 8. References (official / canonical)

- WCAG 2.2: https://www.w3.org/TR/WCAG22/  
- Understanding WCAG: https://www.w3.org/WAI/WCAG22/Understanding/  
- MDN: https://developer.mozilla.org/  
- Core Web Vitals: https://web.dev/articles/vitals  
- WAI‑ARIA APG: https://www.w3.org/WAI/ARIA/apg/

---

## 9. Handoff note for implementers

When importing patterns from galleries or component sites, **rebuild** with this project’s tokens and accessibility review—**do not** ship unmodified demo code that bloats JS or breaks semantics.
