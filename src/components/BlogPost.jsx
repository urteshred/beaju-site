import { motion } from 'framer-motion'
import { posts, postBySlug, formatDate } from '../data/blog.js'
import { useI18n } from '../i18n/index.jsx'

const ease = [0.16, 1, 0.3, 1]

export default function BlogPost({ slug }) {
  const { t, code } = useI18n()
  const a = t.aboutPage
  const post = postBySlug(slug)

  if (!post) {
    return (
      <article className="page">
        <div className="wrap">
          <a className="page__back" href="/about">
            ← {a.backAbout}
          </a>
          <header className="page__header">
            <h1 className="page__title">{a.notFound}</h1>
            <p className="page__lead">{a.notFoundBody}</p>
          </header>
        </div>
      </article>
    )
  }

  const index = posts.findIndex((p) => p.slug === slug)
  const next = posts[(index + 1) % posts.length]

  return (
    <article className="page">
      <div className="wrap">
        <a className="page__back" href="/about">
          ← {a.backAbout}
        </a>

        <motion.header
          className="page__header post__header"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
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
          <h1 className="page__title post__title">{post.title}</h1>
          <p className="page__lead">{post.excerpt}</p>
        </motion.header>

        <motion.div
          className="post__body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {post.body.map((block, i) => {
            if (block.h) return <h2 key={i} className="post__h2">{block.h}</h2>
            if (block.quote)
              return (
                <blockquote key={i} className="post__quote">
                  {block.quote}
                </blockquote>
              )
            if (block.list)
              return (
                <ul key={i} className="post__list">
                  {block.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )
            return (
              <p key={i} className="post__p">
                {block.p}
              </p>
            )
          })}
        </motion.div>

        <div className="post__next">
          <span className="post__next-label">{a.nextPost}</span>
          <a className="post__next-link" href={`/blog/${next.slug}`}>
            {next.title} ↗
          </a>
        </div>

        <div className="page__cta">
          <h2 className="page__cta-title">{a.ctaTitle}</h2>
          <a className="contact__cta" href="/#contact">
            {t.contact.cta}
            <span className="contact__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}
