import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/content.js'
import { useI18n } from '../i18n/index.jsx'

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

  const featured = projects[0]

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
              <span className="showcase__url">{featured.domain}</span>
            </div>
            <img
              src={featured.image}
              alt={`${featured.name} website`}
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
