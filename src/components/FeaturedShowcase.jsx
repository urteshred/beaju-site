import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'

// The live site shown inside the frame. It must send framing headers that allow
// this origin (X-Frame-Options / CSP frame-ancestors), otherwise the browser
// blocks it and we show the fallback below.
const EMBED_URL = 'https://beaju.com/'
const EMBED_LABEL = 'beaju.com'

// Scroll-driven 3D reveal: the card starts tilted back and flattens toward the
// viewer as you scroll, while the heading drifts up.
// Ported to this project's stack (framer-motion + plain CSS, no Tailwind).
export default function FeaturedShowcase() {
  const { t } = useI18n()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.8, 0.95] : [1.04, 1],
  )
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  // The frame can be blocked by the embedded site's own headers. If nothing has
  // loaded shortly after mount, fall back to a link card instead of a blank box.
  const [embedBlocked, setEmbedBlocked] = useState(false)
  const frameRef = useRef(null)

  // Browsers deliberately hide whether a cross-origin frame was refused, so we
  // can't detect it reliably. Instead: if the frame never reports a load within
  // a few seconds, assume it was blocked and show the link fallback.
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    const timer = setTimeout(() => setEmbedBlocked(true), 3000)
    return () => clearTimeout(timer)
  }, [loaded])

  return (
    <section className="showcase" ref={containerRef} aria-labelledby="showcase-title">
      <div className="showcase__inner">
        <motion.div className="showcase__head" style={{ y: translate }}>
          <span className="eyebrow">{t.showcase.label}</span>
          <h2 className="showcase__title" id="showcase-title">
            {t.showcase.title}
            <span className="showcase__title-strong">{t.showcase.titleStrong}</span>
          </h2>
        </motion.div>

        <motion.div
          className="showcase__card"
          style={{ rotateX: rotate, scale }}
        >
          <div className="showcase__screen">
            <div className="showcase__bar" aria-hidden="true">
              <span className="showcase__dots">
                <i /><i /><i />
              </span>
              <span className="showcase__url">{EMBED_LABEL}</span>
            </div>

            {/* Scrollable, keyboard-focusable live embed of the site */}
            <div className="showcase__viewport">
              <iframe
                ref={frameRef}
                className="showcase__frame"
                src={EMBED_URL}
                title={`${EMBED_LABEL} — live site preview (scrollable)`}
                loading="lazy"
                scrolling="yes"
                tabIndex={0}
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
                onLoad={() => {
                  setLoaded(true)
                  setEmbedBlocked(false)
                }}
                onError={() => setEmbedBlocked(true)}
              />

              {embedBlocked && (
                <div className="showcase__blocked">
                  <p className="showcase__blocked-text">
                    {EMBED_LABEL} blocks being displayed inside another site.
                  </p>
                  <a
                    className="showcase__blocked-link"
                    href={EMBED_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open {EMBED_LABEL} ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
