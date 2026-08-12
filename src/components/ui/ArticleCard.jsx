// ArticleCard — ported from a shadcn/Tailwind/TS source to this project's stack
// (plain JSX + CSS, no Tailwind, no next/image, no class-variance-authority).
// Card/CardHeader/CardContent/CardFooter and Badge collapsed into semantic
// elements with BEM-ish classes; the public API is kept intact.
//
// Props: headline, excerpt, cover, tone, tag, readingTime (SECONDS), writer,
//        publishedAt (Date), clampLines, href, locale

// Human-friendly read time: seconds -> "X min read"
export function formatReadTime(seconds, locale = 'en') {
  if (!seconds || seconds < 60) {
    return locale === 'en' ? 'Less than 1 min read' : '< 1 min'
  }
  const minutes = Math.ceil(seconds / 60)
  return `${minutes} min read`
}

// Date -> "Aug 15, 2025" (localized but concise)
export function formatPostDate(date, locale = 'en') {
  if (!date) return ''
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function ArticleCard({
  headline,
  excerpt,
  cover,
  tone = 1,
  tag,
  readingTime,
  writer,
  publishedAt,
  clampLines = 3,
  href,
  locale = 'en',
  labels = {},
}) {
  const hasMeta = tag || readingTime
  const hasFooter = writer || publishedAt
  const Root = href ? 'a' : 'article'

  return (
    <Root className="card" {...(href ? { href } : {})}>
      {/* header — real cover image if supplied, otherwise a branded wash */}
      <div className="card__header">
        {cover ? (
          <img className="card__cover" src={cover} alt="" loading="lazy" />
        ) : (
          <div className="card__cover card__cover--generated" data-tone={tone}>
            {tag && <span className="card__cover-word">{tag}</span>}
          </div>
        )}
      </div>

      <div className="card__content">
        {hasMeta && (
          <div className="card__meta">
            {tag && <span className="card__badge">{tag}</span>}
            {tag && readingTime ? <span className="card__sep">•</span> : null}
            {readingTime ? (
              <span>{formatReadTime(readingTime, locale)}</span>
            ) : null}
          </div>
        )}

        <h3 className="card__headline">{headline}</h3>

        <p
          className="card__excerpt"
          data-clamped={clampLines > 0 ? 'true' : undefined}
          style={clampLines > 0 ? { WebkitLineClamp: clampLines } : undefined}
        >
          {excerpt}
        </p>
      </div>

      {hasFooter && (
        <div className="card__footer">
          {writer && (
            <div className="card__footer-col">
              <span className="card__footer-label">{labels.by || 'By'}</span>
              <span className="card__footer-value">{writer}</span>
            </div>
          )}
          {publishedAt && (
            <div
              className="card__footer-col"
              style={writer ? { textAlign: 'right' } : undefined}
            >
              <span className="card__footer-label">
                {labels.published || 'Published'}
              </span>
              <span className="card__footer-value">
                {formatPostDate(publishedAt, locale)}
              </span>
            </div>
          )}
        </div>
      )}
    </Root>
  )
}
