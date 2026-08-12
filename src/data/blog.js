// Blog posts. English source; add translations later if needed (the About page
// falls back to English like the rest of the i18n layer).
// `body` is an array of blocks so it renders without a markdown dependency:
//   { p: '...' }            paragraph
//   { h: '...' }            subheading
//   { list: ['...'] }       bulleted list
//   { quote: '...' }        pull quote

export const posts = [
  {
    slug: 'why-we-dont-use-templates',
    title: 'Why we don’t use templates',
    date: '2026-07-28',
    readingTime: 6,
    category: 'Craft',
    excerpt:
      'A purchased theme looks fine in a screenshot and falls apart in the details. Here is what actually breaks, and what it costs you.',
    body: [
      {
        p: 'Most “custom” websites are a purchased theme with a page-builder plugin on top. That is not a criticism of the people who buy them; it is the default path, and it looks perfectly reasonable until you inspect what you actually received.',
      },
      { h: 'What a template really gives you' },
      {
        p: 'A theme is built to satisfy thousands of unknown buyers at once. To do that it ships every feature anyone might want, which means your visitors download code for a restaurant menu, a real-estate listing and an events calendar you will never use.',
      },
      {
        list: [
          'Bloated stylesheets where you use maybe 8% of the rules.',
          'Layouts that hold together with the demo content and break with yours.',
          'Animation bolted on by a plugin, so it stutters on mid-range phones.',
          'A stack of plugins that each need updating, and eventually conflict.',
        ],
      },
      { h: 'The part your visitors feel' },
      {
        p: 'People decide whether they trust a company in seconds, and most of that judgement happens before they read anything. It is how fast the page arrives, how smoothly it moves, whether the type looks considered. None of that is a conscious evaluation, which is exactly why you cannot argue a visitor out of a bad first impression.',
      },
      {
        quote:
          'A slow, generic site quietly costs you: visitors bounce, leads don’t convert, and a serious business ends up looking like an amateur one.',
      },
      { h: 'What we do instead' },
      {
        p: 'We write every line by hand. Not for purity, and not because it is fun to type — because it is the only way to control every layer. When we control the layers, we control the loading order, the animation budget, the exact typographic rhythm, and how the layout behaves with your real content rather than a designer’s placeholder text.',
      },
      {
        p: 'The trade-off is honest: hand-coding takes longer up front and costs more than a theme. What you buy is a site that stays fast, stays extensible, and does not need rebuilding in eighteen months when the plugin stack rots.',
      },
    ],
  },
  {
    slug: 'speed-is-a-design-decision',
    title: 'Speed is a design decision, not a technical one',
    date: '2026-07-14',
    readingTime: 5,
    category: 'Performance',
    excerpt:
      'Performance gets filed under engineering. It is really a series of design choices, and most of them happen before anyone writes code.',
    body: [
      {
        p: 'Teams treat speed as something you fix at the end: compress the images, add a caching layer, ship it. By then most of the damage is already designed in.',
      },
      { h: 'Where the weight actually comes from' },
      {
        p: 'Almost every slow site we audit is slow for the same handful of reasons, and none of them are exotic.',
      },
      {
        list: [
          'Hero video or imagery exported at desktop resolution and served to phones.',
          'Four font weights loaded when the design uses two.',
          'A carousel that pulls in a library to do what CSS scroll-snap does natively.',
          'Third-party embeds — chat widgets, analytics, pixels — each with their own payload.',
        ],
      },
      { h: 'Designing for a budget' },
      {
        p: 'We set a performance budget at the design stage and treat it like any other constraint, the same way you would treat a print bleed or a brand colour. If a hero video will not fit the budget, we find out while it is still a sketch, not after it is built.',
      },
      {
        quote:
          'Loading fast is not the reward for good engineering. It is the consequence of deciding early what the page is allowed to cost.',
      },
      {
        p: 'This is also the least glamorous part of what we do, and the part clients notice most. Nobody compliments a site for loading quickly. They just stay.',
      },
    ],
  },
  {
    slug: 'what-60fps-actually-signals',
    title: 'What 60fps actually signals',
    date: '2026-06-30',
    readingTime: 4,
    category: 'Motion',
    excerpt:
      'Smooth motion is not decoration. It is one of the few honest signals a visitor has that the thing they are looking at was made carefully.',
    body: [
      {
        p: 'A visitor cannot inspect your code, audit your process or verify your claims. What they can do, instantly and without thinking, is notice whether things move properly.',
      },
      { h: 'Why stutter reads as cheap' },
      {
        p: 'We are extremely good at detecting irregular motion — it is old, useful wiring. When an animation drops frames, the eye registers the inconsistency even if the viewer could not name what bothered them. The conclusion they reach is not “this site has a rendering problem.” It is “this feels cheap.”',
      },
      { h: 'The rules we hold ourselves to' },
      {
        list: [
          'Animate transform and opacity. Almost nothing else is free.',
          'Motion serves orientation: it should explain where something came from.',
          'Nothing important waits on an animation to finish before it can be read.',
          'Respect prefers-reduced-motion. Some people get genuinely unwell otherwise.',
        ],
      },
      {
        quote:
          '60fps motion and precise interactions signal quality without saying a word.',
      },
      {
        p: 'The last rule is the one people skip. A reduced-motion fallback is not an accessibility checkbox; it is the difference between a visitor enjoying your site and closing it because it made them dizzy.',
      },
    ],
  },
  {
    slug: 'anatomy-of-a-site-that-earns-trust',
    title: 'Anatomy of a site that earns trust',
    date: '2026-06-16',
    readingTime: 7,
    category: 'Strategy',
    excerpt:
      'Trust is not a section you add. It accumulates from a dozen small decisions, in a specific order, before the visitor reaches your pitch.',
    body: [
      {
        p: 'Clients often ask where to put the trust signals, expecting an answer like “above the testimonials.” The honest answer is that trust is built by the whole page, in sequence, and the recognisable trust elements arrive late.',
      },
      { h: 'The order that works' },
      {
        list: [
          'Say what you do in plain words, immediately. No riddles.',
          'Show the work before you describe it. Proof outranks adjectives.',
          'Make the specifics visible: timelines, scope, what is included.',
          'Handle the obvious objection before the visitor has to go hunting.',
          'Only then ask for the meeting.',
        ],
      },
      { h: 'The things that quietly destroy it' },
      {
        p: 'A stock photo of a handshake. A testimonial with no name attached. Fake urgency. A statistic with no source. Each one is small, and each one tells an attentive visitor that you are willing to pad the truth, which invites them to discount everything else on the page.',
      },
      {
        quote:
          'When someone lands on a site we built, they shouldn’t think about the website at all. They should just feel that the company behind it is serious.',
      },
      {
        p: 'That is the whole goal. The site is not the product; it is the reason someone believes you are worth talking to.',
      },
    ],
  },
  {
    slug: 'how-we-scope-a-project',
    title: 'How we scope a project (and why the price does not move)',
    date: '2026-05-29',
    readingTime: 6,
    category: 'Process',
    excerpt:
      'Fixed scope, fixed price. That only works if the scoping is done properly, so here is exactly how we do it.',
    body: [
      {
        p: 'Hourly billing puts the client and the studio on opposite sides: every hour we spend improving something is an hour you pay for. Fixed price flips that. Once the number is agreed, our incentive is to work well and finish.',
      },
      { h: 'What happens on the first call' },
      {
        p: 'Twenty minutes, free, and mostly us asking questions. What does the business actually do, who needs to believe you, what has to exist on the site, and what is the deadline attached to. We are trying to find the edges of the project, not sell you anything.',
      },
      { h: 'What lands in the quote' },
      {
        list: [
          'Every page and template, named individually.',
          'Which integrations are wired in — CRM, CMS, payments, analytics.',
          'What we need from you, and when we need it.',
          'What is explicitly not included, so there are no assumptions.',
          'Two rounds of revisions per stage, already priced in.',
        ],
      },
      { h: 'When the scope does change' },
      {
        p: 'Sometimes it should. You see the prototype and realise the flow needs an extra step. We price that change and tell you the timeline impact before doing the work, and you decide. Nothing lands on an invoice that you have not agreed to in advance.',
      },
      {
        quote:
          'You know the full cost before we start, and it does not move unless you ask for something outside the agreed scope.',
      },
    ],
  },
  {
    slug: 'accessibility-is-not-an-upsell',
    title: 'Accessibility is not an upsell',
    date: '2026-05-12',
    readingTime: 5,
    category: 'Craft',
    excerpt:
      'We build to WCAG AA as a baseline and never itemise it. Here is what that involves, and why charging extra for it makes no sense.',
    body: [
      {
        p: 'Some studios quote accessibility as an optional line item. We find that strange. It is roughly like quoting extra for a building that people can get into.',
      },
      { h: 'The baseline, concretely' },
      {
        list: [
          'A real heading hierarchy, so screen readers can navigate the page.',
          'Every interactive element reachable and operable by keyboard.',
          'Visible focus states — not the default ring removed and forgotten.',
          'Contrast that passes AA, checked rather than eyeballed.',
          'Alt text that describes purpose, and empty alt for decoration.',
          'A reduced-motion path through every animation.',
        ],
      },
      { h: 'Why it is cheaper to do from the start' },
      {
        p: 'Retrofitting accessibility means unpicking finished markup and rebuilding components. Doing it as you go costs almost nothing extra, because the correct structure is barely more work than the incorrect one. The expensive version is the one where you skip it and come back later.',
      },
      {
        p: 'There is a commercial argument too — a meaningful share of your audience benefits directly, and search engines reward the same semantic structure. But the main reason is simpler than that: the alternative is building something that deliberately excludes people.',
      },
    ],
  },
  {
    slug: 'multilingual-sites-done-properly',
    title: 'Multilingual sites, done properly',
    date: '2026-04-24',
    readingTime: 6,
    category: 'Engineering',
    excerpt:
      'Auto-translating a site and calling it multilingual is worse than staying in one language. What careful localisation actually requires.',
    body: [
      {
        p: 'Adding a language to a website is usually treated as a translation task. It is really a design, engineering and editorial task at the same time, and the translation is the easy part.',
      },
      { h: 'What breaks first' },
      {
        list: [
          'Layout. German and Lithuanian run long; a button sized for English clips.',
          'Plurals. Lithuanian and Russian have three forms, not two.',
          'Dates, currency and number formats.',
          'Detection that guesses wrong and traps the visitor in a language.',
        ],
      },
      { h: 'How we detect language' },
      {
        p: 'Deliberately without an IP lookup. We read the visitor’s own browser language preferences first, because that is a stated preference rather than a guess, then fall back to the device timezone as a geographic hint. No third-party geolocation service, no data leaving the page, and a visible switcher that always overrides everything and is remembered.',
      },
      {
        quote:
          'A visitor’s browser already tells you what language they want. Guessing from their IP address is both less accurate and more invasive.',
      },
      { h: 'The editorial part' },
      {
        p: 'Machine translation gets you a draft. It does not get you idiom, register, or the confidence a native speaker hears immediately. We build the system so a partial translation falls back gracefully to the source language, which means a language can go live properly rather than half-broken.',
      },
    ],
  },
]

export const postBySlug = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (iso, locale = 'en') =>
  new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
