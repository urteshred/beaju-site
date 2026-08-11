# Beaju — portfolio landing page

Single-page marketing site for **Beaju**, a studio that designs and hand-codes
premium websites. Editorial/illustrative tone, dark theme, heavy on
scroll-driven motion.

Live-editable with `npm run dev`. Everything is hand-written — no Tailwind, no
UI kit, no page builder (that's the whole point of the brand).

---

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Requires Node 18+ (developed on Node 24).

---

## Stack

| | |
|---|---|
| Build | **Vite 5** |
| UI | **React 18** (plain JSX, no TypeScript) |
| Motion | **Framer Motion 11** |
| Styling | **One hand-written CSS file** — `src/index.css` (CSS custom properties, no preprocessor) |
| Fonts | Google Fonts: Alumni Sans (display), Archivo (body), Fraunces (italic accents) |

Deliberately **no** Tailwind / shadcn / TypeScript. Two components were ported
by hand from shadcn-style sources to this stack (`TextRoll`, `FeaturedShowcase`)
rather than pulling in that toolchain.

---

## Project layout

```
src/
  App.jsx                 section order + hide-nav-on-scroll behaviour
  main.jsx                mounts <I18nProvider><App/></I18nProvider>
  index.css               ALL styling, section by section, commented
  components/
    Hero.jsx              full-screen hero: staggered headline + cat video
    FeaturedShowcase.jsx  scroll-driven 3D tilting browser card
    WorkGrid.jsx          pinned one-project-at-a-time scroll + details popover
    AboutUs.jsx           intro + count-up stats + portrait
    Process.jsx           5 steps, sticky image, active step turns red
    Systems.jsx           "Our Systems" terminal-style tech breakdown
    FAQ.jsx               searchable, tabbed FAQ (46 answers)
    Testimonials.jsx      rotating quote cards
    Contact.jsx           CTA, contact links, footer, legal modals
    Nav.jsx               fixed top-left nav + scrollspy
    SocialRail.jsx        top-right: language, phone, email, Instagram
    LanguageSwitcher.jsx  globe dropdown
    Cursor.jsx            custom spring cursor with hover labels
    TextRoll.jsx          per-character hover roll (nav + process names)
  data/
    content.js            projects, process steps, testimonials (non-text data)
    faq.js                46 FAQ Q&As (English)
    faq.lt.js             Lithuanian FAQ — TRANSLATED BUT NOT WIRED UP YET
    systems.js            "Our Systems" content (English)
  i18n/
    index.jsx             provider, language detection, English fallback
    locales/en|lt|ru|pl.js
public/
  cat-peeps.webm          hero video (10.4 MB, has an alpha channel)
  cat-poster.jpg          hero poster / reduced-motion fallback
  og-image.png            1200×630 social preview (placeholder)
```

---

## How the interesting bits work

**Language / i18n.** `src/i18n/index.jsx` picks a locale in this order:
saved choice (localStorage) → `?lang=lt` URL param → browser language
preferences → device timezone as a geographic hint (`Europe/Vilnius` → LT,
`Europe/Warsaw` → PL…) → English. No IP lookup, no third-party request.
Missing keys in any locale fall back to English automatically, so a partial
translation never renders a blank string. Adding a language = add
`locales/xx.js` mirroring `en.js` and register it in `i18n/index.jsx`.

**Hero.** Sized in viewport-height units so the headline *and* the whole cat
crowd fit one screen with no scrolling. The red headline sits at `z-index:1`,
the video at `z-index:2`, so the text falls *behind* the cats. The video has a
VP9 alpha channel — that transparency is why the layering works.

**Work section.** A `500vh` tall section with a `sticky` inner panel. Scroll
progress maps to a discrete project index, and only the active project is
rendered (via `AnimatePresence`), so each project is crisp at rest and blur
appears only during the ~0.34s transition. One scroll-snap point per project.

**Process.** Each step reports when it crosses the viewport middle; the sticky
left column crossfades to that step's image and the active step name turns red.

---

## Placeholders that still need real content

- **Work screenshots** — all 5 projects use a solid-black placeholder
  (`image` in `data/content.js`). Swap for real site screenshots.
- **Work URLs** — the ↗ buttons all point at `#`. Real live links pending.
- **About portrait** — placeholder box in `AboutUs.jsx`.
- **Process images** — 5 black placeholders (`media` in `data/content.js`).
- **Testimonials** — 100% invented: `name: 'Sample Name'`, anonymous companies
  (`Client A/B/C`) and pravatar photos. Companies are deliberately anonymised so
  this public repo never shows a fabricated quote attributed to a real client.
  **Replace with real attributed testimonials, or delete the section, before
  launch.**
- **Logo** — Contact uses a text wordmark `Beaju®`; swap for a real SVG.
- **OG image** — auto-generated placeholder; `index.html` OG tags point at
  `https://beaju.com/...` (update host on deploy).
- **Legal** — Privacy + Imprint modal copy in `Contact.jsx` is placeholder.
  Needs real reviewed policy and company registration details.
- **Availability line** — "Q3 2026" in `locales/*.js` (`contact.availability`)
  will go stale; update it.

## Known gaps / next steps

- **Translations incomplete.** EN/LT/RU/PL cover hero, nav, work, projects,
  about, process, showcase, testimonials and contact. **Not** translated: the
  **Systems** section (`data/systems.js`) and the **46 FAQ Q&As**
  (`data/faq.js`) plus FAQ UI strings (search placeholder, "N answers", tabs,
  empty state) — these render in English in every language.
  `data/faq.lt.js` is a finished Lithuanian FAQ translation that is **not wired
  up yet**; hooking it in needs a locale-aware selector in `FAQ.jsx`.
- **Hero video is 10.4 MB.** Too heavy. `ffmpeg` could not recompress it
  without destroying the VP9 alpha channel (the headline then gets covered), so
  it needs a smaller re-export from the original 3D source.
- Systems + FAQ section copy is written for a studio's voice but hasn't been
  reviewed by the client.

---

## Deploying

Static output — any host works. Easiest:

```bash
npm run build     # → dist/
```

Then point Vercel / Netlify / Cloudflare Pages at the repo (framework preset
"Vite", build `npm run build`, output `dist`).
