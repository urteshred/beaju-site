// English — canonical locale. Every other locale mirrors this shape.
export default {
  code: 'en',
  label: 'English',
  htmlLang: 'en',

  meta: {
    title: 'VANTHORE — Hand-Coded Premium Websites',
    description:
      'Vanthore designs and hand-codes premium websites that load fast, feel premium, and earn trust from the first second.',
  },

  nav: { works: 'Works', about: 'About', contact: 'Contact' },

  hero: {
    eyebrow: 'We are Vanthore and we design',
    lines: ['Websites', 'that earn', 'trust'],
    aria: 'Websites that earn trust',
  },

  rail: { call: 'Call', email: 'Email', instagram: 'Insta', copy: 'Copy', copied: 'Copied!' },

  showcase: {
    label: 'Built by hand',
    title: 'This is what a site looks like when ',
    titleStrong: 'every line is written for you.',
  },

  work: {
    label: 'Selected Work',
    visit: 'Visit',
    visitAria: (name) => `Visit the live ${name} website`,
    details: 'Project details',
    detailsHint: 'Hover for details',
    duration: 'Duration',
    weeks: (n) => `${n} weeks`,
    delivered: 'Delivered',
    pages: (n) => `${n} pages`,
    stack: 'Built with',
    scope: 'Scope',
  },

  projects: {
    '01': {
      category: 'E-Commerce Website',
      description:
        'Nonblaze came to us to bring their fire-suppression device to market. We built an e-commerce experience that showcases the product’s best features, earns a cautious buyer’s trust, and makes safety feel genuinely premium, all before they read a single spec.',
      scope: 'Brand, storefront, checkout',
    },
    '02': {
      category: 'Product Website',
      description:
        'Outr asked us to build the product experience for their AI cold-outreach platform end to end. We shipped a bold, unmistakable red brand, a custom-animated mascot, and a smooth multi-step checkout that makes signing up feel effortless.',
      scope: 'Brand, product site, checkout',
    },
    '03': {
      category: 'Marketing Website',
      description:
        'Metrichain needed a conversion-focused home for their done-for-you B2B cold-email service. We hand-coded sharp positioning, an interactive campaign estimator, and deliverability proof, all built to turn cold traffic into booked calls.',
      scope: 'Positioning, marketing site, calculator',
    },
    '04': {
      category: 'Web App',
      description:
        'Scraperity came to us with a data-heavy creator-discovery tool. We showcased its best features in a dense, fast dashboard with live filters, real-time scraping states, and pipeline views that stay clear even under heavy data.',
      scope: 'Product design, dashboard, realtime UI',
    },
    '05': {
      category: 'Portfolio Website',
      description:
        'Miisstudio, a Netherlands-based art agency, wanted the work to lead. We hand-coded a portfolio-grade site with smooth transitions and considered typography that lets the art breathe and feel genuinely gallery-quality.',
      scope: 'Art direction, portfolio site, CMS',
    },
    '06': {
      category: 'Agency Website',
      description:
        'Beaju is a brand and growth studio in Vilnius that helps consumer and tech brands become impossible to ignore. We hand-coded their studio site across six pages: services, process, work and contact, structured so a prospect can self-select and reach the enquiry form without wading through a pitch.',
      scope: 'Studio site, services, case studies',
    },
  },

  about: {
    title: 'About Us',
    lead: 'For three years, Vanthore has designed and hand-coded premium websites that make companies look serious: intuitive, fast, and built with intent. We do one thing at the highest level, and nothing else. That focus is exactly why the work is better.',
    years: 'Years of Experience',
    projects: 'Projects Delivered',
    portrait: 'Portrait',
    readMore: 'Read more about us',
  },

  aboutPage: {
    back: 'Back to home',
    backAbout: 'Back to about',
    eyebrow: 'About Vanthore',
    title: 'A studio that does one thing.',
    lead: 'We design and hand-code premium websites for companies who understand that their site is the first thing a customer judges them on. No templates, no page builders, no second discipline splitting our attention.',
    facts: [
      ['Founded', '2022'],
      ['Projects delivered', '40+'],
      ['Based in', 'Vilnius, LT'],
      ['Working', 'Remote, EU-wide'],
    ],
    whatTitle: 'What we do',
    whatLead:
      'One service, delivered end to end. We take a company from “our site undersells us” to a hand-built site that loads fast, moves smoothly and earns trust before a word of the pitch is read.',
    services: [
      [
        'Marketing sites',
        'The site most companies actually need: sharp positioning, clear structure, and proof placed where it changes a decision.',
      ],
      [
        'Product sites & web apps',
        'Dashboards, data-heavy interfaces and product front-ends that stay fast and legible under real load.',
      ],
      [
        'E-commerce',
        'Storefronts and multi-step checkout flows built to convert, on Shopify or a headless setup.',
      ],
      [
        'Motion & interaction',
        '60fps motion and micro-interactions that signal quality without getting in the way of reading or buying.',
      ],
    ],
    beliefsTitle: 'How we think',
    beliefs: [
      'People decide whether they trust a company in seconds, mostly before reading anything.',
      'Control over every layer is what a visitor actually feels. That is why we hand-code.',
      'Speed is a design decision, not something you bolt on at the end.',
      'Accessibility is a baseline, never a line item on a quote.',
      'Fixed scope and fixed price, so improving the work costs you nothing extra.',
      'You own everything at the end: the code, the hosting, every asset.',
    ],
    clientsTitle: 'Our clients',
    clientsLead:
      'A few of the companies we have built for. Every one was hand-coded from the ground up.',
    blogTitle: 'Writing',
    blogLead:
      'Notes on craft, performance and how we work. No growth-hacking listicles.',
    minRead: 'min read',
    readPost: 'Read',
    by: 'By',
    published: 'Published',
    nextPost: 'Next',
    notFound: 'Post not found',
    notFoundBody: 'That article does not exist, or the link has changed.',
    ctaTitle: 'Want to see what your site could be?',
  },

  process: {
    title: 'Our Process',
    steps: {
      '01': {
        title: 'Research',
        body: 'We dig into your users, market, and business goals to uncover what actually needs solving before we design anything.',
      },
      '02': {
        title: 'Wireframe',
        body: 'We map the structure and flow, every screen, navigation path, and content hierarchy, so the experience makes sense before it looks good.',
      },
      '03': {
        title: 'UI Design',
        body: 'We bring the wireframes to life with visual identity: typography, color, layout, and detail, all shaped around your brand.',
      },
      '04': {
        title: 'Prototype',
        body: 'We build interactive, clickable versions so you can experience the flow and give feedback before a single line of code is written.',
      },
      '05': {
        title: 'Interaction',
        body: 'We layer in motion, transitions, and micro-interactions that make the product feel alive and intuitive to use.',
      },
    },
  },

  faq: {
    label: 'How We Work',
    title: 'Questions, answered.',
    items: [
      {
        q: 'What exactly do you do?',
        a: 'We design and hand-code premium websites, marketing sites and product front-ends. One discipline, done at the highest level, and nothing else.',
      },
      {
        q: 'How long does a project take?',
        a: 'Most sites run 3 to 6 weeks depending on scope. You’ll get a firm timeline after a short discovery call.',
      },
      {
        q: 'How much does it cost?',
        a: 'Every project is fixed-scope and fixed-price. Tell us what you need and we’ll send a clear quote before any work starts, so there are no surprises.',
      },
      {
        q: 'Do you use templates or page builders?',
        a: 'Never. Every line is written by hand, which is exactly why our sites load faster, feel smoother, and are built to last.',
      },
      {
        q: 'What do you need from us to start?',
        a: 'A short call, your goals, and any brand assets you already have. We handle the rest and keep you in the loop at each step.',
      },
    ],
  },

  testimonials: {
    label: 'That’s What They Said',
    dotAria: (company) => `Show testimonial from ${company}`,
    roles: { t1: 'Founder', t2: 'Head of Growth', t3: 'Creative Director' },
    quotes: {
      t1: 'People don’t think about the site at all. They just feel the company behind it is serious. From the first call to launch it was effortless, and the checkout flow they built converts noticeably better than what we had.',
      t2: 'Fast, smooth, and clearly custom. It finally looks like it’s worth paying for. The campaign estimator they hand-coded became our best-performing page, and booked calls went up within the first month.',
      t3: 'They built a portfolio site where the work actually breathes. Gallery-quality typography, transitions that never stutter, and it loads instantly. Clients now take us more seriously before we’ve said a word.',
    },
  },

  contact: {
    availability: 'Available for new projects · Q3 2026',
    headline: ['See the', 'difference', 'yourself'],
    aria: 'See the difference yourself',
    cta: 'Book a 20-minute call',
    ctaSubject: 'Booking a 20-minute call',
    instagram: 'Instagram',
    rights: '© 2026 Vanthore · All rights reserved',
    tagline: 'Hand-coded, never templated.',
    privacy: 'Privacy',
    imprint: 'Imprint',
    backToTop: 'Back to top ↑',
    close: 'Close',
    privacyBody: [
      'We only use the details you send us (your email and, if provided, your phone number) to reply to your enquiry. We do not sell your data and we don’t run third-party advertising trackers on this site.',
      'To ask what we hold or request deletion, email hello@vanthore.com.',
    ],
    privacyNote:
      'Placeholder text — replace with your reviewed privacy policy before launch.',
    imprintBody: 'Vanthore — independent web studio.',
    imprintDetails: '[Registered company name, number & address]',
    imprintNote:
      'Placeholder — add your real business/registration details before launch.',
  },

  lang: { label: 'Language', choose: 'Choose language' },
}
