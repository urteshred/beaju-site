// Content sourced from beaju-context.docx — Beaju: hand-coded premium websites.
// Work screenshots are solid-black placeholders — swap `image` for real website
// photos, and `url` for live links, later.

const BLACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='10'><rect width='16' height='10' fill='%23000000'/></svg>"

// Structural / non-translatable project data. Translatable copy (category,
// description, scope) lives in src/i18n/locales/*.js keyed by `id`.
// `meta` powers the hover "project details" popup. Stack names and numbers are
// language-independent; the labels around them are translated.
export const projects = [
  {
    id: '01',
    name: 'Nonblaze',
    domain: 'nonblaze.com',
    url: '#',
    image: BLACK,
    meta: {
      weeks: 6,
      year: 2025,
      pages: 9,
      stack: ['React', 'Next.js', 'Shopify', 'GSAP'],
    },
  },
  {
    id: '02',
    name: 'Outr',
    domain: 'outr.ai',
    url: '#',
    image: BLACK,
    meta: {
      weeks: 8,
      year: 2025,
      pages: 12,
      stack: ['React', 'Framer Motion', 'Stripe', 'Node'],
    },
  },
  {
    id: '03',
    name: 'Metrichain',
    domain: 'metrichain.com',
    url: '#',
    image: BLACK,
    meta: {
      weeks: 4,
      year: 2024,
      pages: 6,
      stack: ['Astro', 'TypeScript', 'Tailwind'],
    },
  },
  {
    id: '04',
    name: 'Scraperity',
    domain: 'scraperity.com',
    url: '#',
    image: BLACK,
    meta: {
      weeks: 10,
      year: 2025,
      pages: 14,
      stack: ['React', 'TanStack Query', 'Postgres', 'WebSockets'],
    },
  },
  {
    id: '05',
    name: 'Miisstudio',
    domain: 'miisstudio.nl',
    url: '#',
    image: BLACK,
    meta: {
      weeks: 5,
      year: 2024,
      pages: 7,
      stack: ['React', 'Framer Motion', 'Sanity CMS'],
    },
  },
]

// UI/UX process steps — assets only; titles/bodies come from the active locale.
// Images are black placeholders (swap `media` for real ones later).
export const skills = [
  { step: '01', media: BLACK },
  { step: '02', media: BLACK },
  { step: '03', media: BLACK },
  { step: '04', media: BLACK },
  { step: '05', media: BLACK },
]

// PLACEHOLDER testimonials — names, titles, quotes and photos are invented.
// Replace every field with a real, attributed testimonial before launch, or
// remove the section. Quotes/roles are translated per locale; the name,
// company and photo are not.
export const testimonials = [
  { id: 't1', name: 'Sample Name', company: 'Outr', photo: 'https://i.pravatar.cc/240?img=13' },
  { id: 't2', name: 'Sample Name', company: 'Metrichain', photo: 'https://i.pravatar.cc/240?img=32' },
  { id: 't3', name: 'Sample Name', company: 'Miisstudio', photo: 'https://i.pravatar.cc/240?img=45' },
]
