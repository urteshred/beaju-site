// Full FAQ bank. Written in English; the tabbed FAQ falls back to this for
// every locale until translations are commissioned (see i18n fallback).
// `tags` are extra keywords that only the search matches against.

export const faqCategories = {
  basics: 'Basics',
  process: 'Process',
  pricing: 'Pricing',
  tech: 'Tech & Systems',
  design: 'Design',
  launch: 'Launch & Support',
}

export const faqData = {
  basics: [
    {
      q: 'What exactly does Beaju do?',
      a: 'We design and hand-code premium websites: marketing sites, product sites, online stores and web apps. One discipline, done at the highest level, and nothing else. That focus is the reason the work is better.',
      tags: 'services what you do agency studio',
    },
    {
      q: 'Who do you work with?',
      a: 'Companies that treat their website as a first impression rather than a checkbox. Usually founders, marketing leads and brand owners who know a templated site would undersell what they actually do.',
      tags: 'clients customers ideal fit b2b startups',
    },
    {
      q: 'What makes you different from a template or website builder?',
      a: 'Most "custom" sites are a purchased theme with a builder plugin on top. They look fine in a screenshot and fall apart in the details: bloated code, slow loading, stuttering animation. We write every line by hand, so we control every layer, and that is exactly what your visitors feel.',
      tags: 'difference unique custom vs template wordpress wix squarespace',
    },
    {
      q: 'Do you only build websites?',
      a: 'Yes, deliberately. We are not a full-service agency spread thin across a dozen disciplines. We make exceptional websites, and that narrow focus is why ours are better than a generalist studio would produce.',
      tags: 'scope services only specialise focus',
    },
    {
      q: 'Can you redesign our existing site?',
      a: 'Often that is exactly what we do. We audit what you have, keep what works, and rebuild the rest from scratch so you get the speed and polish of a hand-coded site without losing your existing content or search rankings.',
      tags: 'redesign rebuild refresh revamp existing migrate',
    },
    {
      q: 'Do you work with clients outside Lithuania?',
      a: 'Yes. We work remotely with clients across Europe and beyond. Everything runs over calls, email and shared previews, so location has never been a constraint on the work.',
      tags: 'international remote location abroad europe worldwide country',
    },
    {
      q: 'What languages can the website be in?',
      a: 'Any. We build multilingual sites regularly, including automatic language detection based on the visitor and a manual switcher. This very site runs in English, Lithuanian, Russian and Polish.',
      tags: 'multilingual translation languages localisation i18n',
    },
    {
      q: 'How big is the team?',
      a: 'Small and senior by design. You work directly with the people building your site, never through an account manager relaying messages, which is why decisions and revisions happen fast.',
      tags: 'team size people who staff freelance',
    },
  ],

  process: [
    {
      q: 'What does the process look like start to finish?',
      a: 'Five stages: research, structure, UI design, prototype, then build and launch. You see and approve the work at the end of each stage, so there is never a big reveal at the end that misses the mark.',
      tags: 'process steps stages workflow how it works method',
    },
    {
      q: 'How long does a project take?',
      a: 'Most sites run 3 to 6 weeks depending on scope. A focused landing page can be under two weeks; a data-heavy web app runs longer. You get a firm timeline after a short discovery call, before anything is signed.',
      tags: 'timeline duration how long weeks fast speed schedule',
    },
    {
      q: 'What do you need from us to start?',
      a: 'A short call, your goals, and any brand assets you already have. If you have copy, logos or photography, great. If not, we will tell you exactly what to gather and handle the rest.',
      tags: 'requirements start kickoff onboarding what we need assets',
    },
    {
      q: 'How involved do we need to be?',
      a: 'Roughly one call per stage plus feedback on what we send. That is usually a few hours across the whole project. We keep you informed at every step without turning it into a second job.',
      tags: 'involvement time commitment meetings feedback communication',
    },
    {
      q: 'How many rounds of revisions are included?',
      a: 'Two rounds of revisions per stage are built into every project. Because you approve each stage before we move on, projects rarely need more than that.',
      tags: 'revisions changes feedback rounds edits amends',
    },
    {
      q: 'Will we see it before it is built?',
      a: 'Always. You get a clickable, interactive prototype before a single line of production code is written, so you can walk the real flow and change your mind while changes are still cheap.',
      tags: 'prototype preview mockup design first see before',
    },
    {
      q: 'What if we do not have brand assets yet?',
      a: 'That is fine. We can build the visual identity as part of the project: type, colour, layout and detail shaped around what your business actually does.',
      tags: 'no brand logo identity assets branding from scratch',
    },
    {
      q: 'Can you work to a fixed deadline?',
      a: 'Yes, if you tell us early. If you have a launch, funding round or trade show to hit, we scope the project backwards from that date and agree what fits.',
      tags: 'deadline rush urgent launch date fixed time',
    },
  ],

  pricing: [
    {
      q: 'How much does a website cost?',
      a: 'It depends on scope, so we quote per project rather than publishing a price list. Tell us what you need on a short call and you get a clear, itemised quote before any work begins.',
      tags: 'price cost budget how much quote estimate money',
    },
    {
      q: 'How does pricing work?',
      a: 'Fixed scope, fixed price. You know the full cost before we start, and it does not move unless you ask for something outside the agreed scope.',
      tags: 'fixed price hourly rate model billing quote',
    },
    {
      q: 'How does payment work?',
      a: 'Typically 50% to book the project and start work, and 50% on completion before launch. For longer builds we split it across milestones instead.',
      tags: 'payment deposit invoice terms upfront milestones',
    },
    {
      q: 'Are there ongoing costs?',
      a: 'The site itself has no licence fee from us. You pay for your own domain and hosting, which is usually modest, plus any third-party services you choose such as a CMS or email platform. We tell you these before you commit.',
      tags: 'monthly recurring subscription maintenance hosting fees ongoing',
    },
    {
      q: 'What is not included?',
      a: 'Domain and hosting fees, paid third-party services, stock photography licences and ongoing content writing after launch. Anything that is not included is listed explicitly in the quote.',
      tags: 'excluded extra not included hidden costs',
    },
    {
      q: 'What happens if the scope changes mid-project?',
      a: 'We tell you the cost and timeline impact before doing the work, and you decide. Nothing gets added to an invoice that you have not agreed to in advance.',
      tags: 'scope creep change request extra work additional',
    },
    {
      q: 'Do you charge for the first call?',
      a: 'No. The initial 20-minute call is free, and so is the quote that follows it. You only pay once you decide to go ahead.',
      tags: 'free consultation discovery call quote no obligation',
    },
  ],

  tech: [
    {
      q: 'What technologies do you use?',
      a: 'Mostly React, Next.js and Astro, with TypeScript, and Framer Motion or GSAP for motion. We pick per project rather than forcing every client into the same stack.',
      tags: 'stack technologies react next astro javascript typescript framework tools',
    },
    {
      q: 'Why hand-code instead of WordPress, Webflow or Squarespace?',
      a: 'Because control over every layer is what your visitors feel. Hand-coded sites load faster, so people do not leave before they see you and Google ranks you higher. Motion runs at 60fps. Layouts are built around your brand rather than bent to fit a theme. And the code stays clean enough to extend for years instead of rotting into a tangle of plugins.',
      tags: 'wordpress webflow squarespace wix builder cms why hand coded custom',
    },
    {
      q: 'Where is the site hosted?',
      a: 'On modern edge hosting such as Vercel, Netlify or Cloudflare, so your site is served from close to your visitors. We set it up and hand over full ownership of the account.',
      tags: 'hosting server vercel netlify cloudflare deploy where',
    },
    {
      q: 'Can we edit the content ourselves?',
      a: 'Yes, if you want that. We can connect a headless CMS so your team edits text and images through a simple admin panel, with no risk of breaking the layout.',
      tags: 'cms edit content update self-serve admin manage text',
    },
    {
      q: 'Which CMS do you use?',
      a: 'Usually Sanity, Contentful or Storyblok, depending on how your team works. If you already use something, we will normally connect to it rather than make you migrate.',
      tags: 'cms sanity contentful storyblok headless strapi',
    },
    {
      q: 'Do you build online stores?',
      a: 'Yes. We build e-commerce on Shopify or a headless setup, including custom product pages and multi-step checkout flows designed to actually convert.',
      tags: 'ecommerce shop store shopify checkout payments sell products',
    },
    {
      q: 'Can you integrate with our CRM, analytics or booking tools?',
      a: 'Yes. Forms, CRMs such as HubSpot or Pipedrive, analytics, booking tools like Calendly, payment providers and email platforms all integrate cleanly. Tell us what you use and we will wire it in.',
      tags: 'integration crm hubspot analytics calendly stripe api forms zapier',
    },
    {
      q: 'Is the site accessible?',
      a: 'We build to WCAG AA as a baseline: proper heading structure, keyboard navigation, visible focus states, sufficient colour contrast and reduced-motion support. Accessibility is part of the build, not an upsell.',
      tags: 'accessibility wcag a11y screen reader keyboard disabled contrast',
    },
    {
      q: 'Do you build web apps, not just websites?',
      a: 'Yes. Dashboards, data-heavy interfaces and product front-ends are part of what we do, including realtime states and complex filtering that stay fast under load.',
      tags: 'web app dashboard saas product application software',
    },
  ],

  design: [
    {
      q: 'Do you design the brand as well?',
      a: 'We can shape the visual identity around your website: typography, colour, layout and detail. For a full brand programme including naming and print, we will tell you honestly when a brand specialist is the better call.',
      tags: 'branding identity logo brand design visual',
    },
    {
      q: 'Can you follow our existing brand guidelines?',
      a: 'Yes. If you have guidelines, we work inside them and extend them for the web where the guidelines do not reach, which is common for brands built for print first.',
      tags: 'brand guidelines existing style guide match consistent',
    },
    {
      q: 'What about animation and motion?',
      a: 'Motion is a big part of why our sites feel expensive. We use precise, 60fps interactions that signal quality without saying a word, and we never let animation get in the way of reading or buying.',
      tags: 'animation motion interaction scroll effects transitions 60fps',
    },
    {
      q: 'Will the site work on mobile?',
      a: 'Every site is built responsive from the start and tested on real phone and tablet sizes. For most of our clients, mobile is where the majority of visitors arrive.',
      tags: 'mobile responsive phone tablet ipad screen sizes',
    },
    {
      q: 'Do you write the copy?',
      a: 'We shape structure, headlines and positioning as part of the design, since layout and words cannot be separated. For long-form content we work from your material or bring in a copywriter.',
      tags: 'copywriting content text words writing headlines messaging',
    },
    {
      q: 'Where do images and photography come from?',
      a: 'Your own photography is always best and we will art-direct a shoot brief if useful. Otherwise we use licensed stock or generated visuals chosen to look deliberate rather than generic.',
      tags: 'images photos photography stock assets pictures visuals',
    },
    {
      q: 'Can we see the design before development starts?',
      a: 'Yes, that is the point of the prototype stage. Nothing goes into code until you have seen the real thing and signed off on it.',
      tags: 'design first approval sign off preview figma',
    },
  ],

  launch: [
    {
      q: 'What happens at launch?',
      a: 'We connect your domain, configure hosting and analytics, run a final pass on speed, accessibility and cross-browser behaviour, then go live with you. Nothing is switched over without your say-so.',
      tags: 'launch go live deploy domain dns publish',
    },
    {
      q: 'Do you handle SEO?',
      a: 'Technical SEO is built in: clean semantic markup, fast loading, proper metadata, sitemaps, structured data and social share previews. Ongoing keyword strategy and content marketing is a separate discipline we do not pretend to own.',
      tags: 'seo google search ranking metadata sitemap traffic optimisation',
    },
    {
      q: 'How fast will the site actually be?',
      a: 'We target strong Core Web Vitals and typically land well inside Google’s thresholds. Speed is not a nice-to-have here: it is the first thing a visitor judges and one of the things Google measures.',
      tags: 'speed performance fast core web vitals lighthouse loading',
    },
    {
      q: 'What support do we get after launch?',
      a: 'Every project includes a support window after go-live to fix anything that surfaces in real use. Beyond that we offer ongoing retainers or simply pick things up as you need them.',
      tags: 'support maintenance after launch warranty retainer help bugs',
    },
    {
      q: 'Who owns the code and the site?',
      a: 'You do, completely. You get the repository, the hosting account and every asset. There is no lock-in and no situation where you need our permission to move.',
      tags: 'ownership code repository lock-in rights transfer own',
    },
    {
      q: 'Can you add features later?',
      a: 'Yes, and the code is written so that stays easy. Clean, hand-written code can be extended years later, which is the opposite of what happens to a stack of plugins.',
      tags: 'future features add later extend grow phase two updates',
    },
    {
      q: 'What if something breaks?',
      a: 'Email us. Within the support window fixes are free, and after that we respond quickly because we wrote the code and know exactly where to look.',
      tags: 'broken bug error support fix downtime problem',
    },
  ],
}

export const faqCount = Object.values(faqData).reduce((n, a) => n + a.length, 0)
