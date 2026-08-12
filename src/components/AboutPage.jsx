import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import { posts, formatDate } from '../data/blog.js'
import { useI18n } from '../i18n/index.jsx'

const ease = [0.16, 1, 0.3, 1]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease },
  }),
}

function Section({ children, className = '' }) {
  return (
    <motion.section
      className={`page__section ${className}`.trim()}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {children}
    </motion.section>
  )
}

export default function AboutPage() {
  const { t, code } = useI18n()
  const a = t.aboutPage

  return (
    <article className="page">
      <div className="wrap">
        <a className="page__back" href="/">
          ← {a.back}
        </a>

        <header className="page__header">
          <span className="eyebrow">{a.eyebrow}</span>
          <h1 className="page__title">{a.title}</h1>
          <p className="page__lead">{a.lead}</p>
        </header>

        {/* at a glance */}
        <Section className="page__facts">
          {a.facts.map(([label, value]) => (
            <div className="page__fact" key={label}>
              <span className="page__fact-value">{value}</span>
              <span className="page__fact-label">{label}</span>
            </div>
          ))}
        </Section>

        {/* what we do */}
        <Section>
          <h2 className="page__h2">{a.whatTitle}</h2>
          <p className="page__body">{a.whatLead}</p>
          <div className="page__services">
            {a.services.map(([title, body], i) => (
              <div className="page__service" key={title}>
                <span className="page__service-num">0{i + 1}</span>
                <h3 className="page__service-title">{title}</h3>
                <p className="page__service-body">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* how we think */}
        <Section>
          <h2 className="page__h2">{a.beliefsTitle}</h2>
          <ul className="page__beliefs">
            {a.beliefs.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Section>

        {/* clients */}
        <Section>
          <h2 className="page__h2">{a.clientsTitle}</h2>
          <p className="page__body">{a.clientsLead}</p>
          <div className="page__clients">
            {projects.map((p) => (
              <div className="page__client" key={p.id}>
                <div className="page__client-top">
                  <span className="page__client-name">{p.name}</span>
                  <span className="page__client-year">{p.meta.year}</span>
                </div>
                <span className="page__client-cat">
                  {t.projects[p.id].category}
                </span>
                <p className="page__client-scope">{t.projects[p.id].scope}</p>
                <span className="page__client-stack">
                  {p.meta.stack.join(' · ')}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* blog */}
        <Section>
          <h2 className="page__h2" id="blog">
            {a.blogTitle}
          </h2>
          <p className="page__body">{a.blogLead}</p>
          <div className="page__posts">
            {posts.map((post, i) => (
              <motion.a
                className="post-card"
                href={`/blog/${post.slug}`}
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3), ease }}
              >
                <div className="post-card__meta">
                  <span className="post-card__cat">{post.category}</span>
                  <span className="post-card__dot">·</span>
                  <time dateTime={post.date}>{formatDate(post.date, code)}</time>
                  <span className="post-card__dot">·</span>
                  <span>
                    {post.readingTime} {a.minRead}
                  </span>
                </div>
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <span className="post-card__more">{a.readPost} ↗</span>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* closing CTA */}
        <Section className="page__cta">
          <h2 className="page__cta-title">{a.ctaTitle}</h2>
          <a className="contact__cta" href="/#contact">
            {t.contact.cta}
            <span className="contact__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </Section>
      </div>
    </article>
  )
}
