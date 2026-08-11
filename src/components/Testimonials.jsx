import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/content.js'
import { useI18n } from '../i18n/index.jsx'

export default function Testimonials() {
  const { t: tr } = useI18n()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const stopped = useRef(false) // once the user picks a quote, stop auto-rotate

  // Auto-rotate, unless paused (hover/focus) or the user has interacted.
  useEffect(() => {
    if (paused || stopped.current) return
    const t = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      6000,
    )
    return () => clearInterval(t)
  }, [i, paused])

  const select = (idx) => {
    stopped.current = true
    setI(idx)
  }

  const t = testimonials[i]

  return (
    <section className="section wrap" id="testimonials">
      <h2 className="section-label">
        <span className="eyebrow">{tr.testimonials.label}</span>
      </h2>

      <div
        className="quotes"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="quotes__stage">
          <AnimatePresence mode="wait">
            <motion.figure
              className="quote-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote>“{tr.testimonials.quotes[t.id]}”</blockquote>
              <figcaption className="who">
                <img src={t.photo} alt="" />
                <div className="who__meta">
                  <div className="n">{t.name}</div>
                  <div className="r">
                    {tr.testimonials.roles[t.id]},{' '}
                    <span className="who__co">{t.company}</span>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="quotes__nav">
          {testimonials.map((item, idx) => (
            <button
              key={idx}
              className="quotes__dot"
              data-active={idx === i}
              aria-label={`${tr.testimonials.dotAria} ${item.company}`}
              onClick={() => select(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
