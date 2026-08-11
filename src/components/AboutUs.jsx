import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'

// Rolls up from 0 to `to` the first time it scrolls into view.
function CountUp({ to, suffix = '', duration = 1300 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf

    const run = () => {
      if (raf) cancelAnimationFrame(raf)
      let start
      const step = (t) => {
        if (start === undefined) start = t
        const p = Math.min(1, (t - start) / duration)
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    // Re-roll every time it enters view; reset to 0 when it leaves.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run()
        } else {
          if (raf) cancelAnimationFrame(raf)
          setVal(0)
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AboutUs() {
  const { t } = useI18n()

  return (
    <section className="aboutus" id="about">
      <div className="wrap aboutus__grid">
        <div className="aboutus__text">
          <motion.h2
            className="aboutus__title"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            className="aboutus__lead"
            variants={reveal}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
          >
            {t.about.lead}
          </motion.p>

          <motion.div
            className="aboutus__stats"
            variants={reveal}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
          >
            <div className="aboutus__stat">
              <span className="n">
                <CountUp to={3} />
              </span>
              <span className="l">{t.about.years}</span>
            </div>
            <div className="aboutus__stat">
              <span className="n">
                <CountUp to={40} suffix="+" />
              </span>
              <span className="l">{t.about.projects}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="aboutus__portrait"
          variants={reveal}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          {/* portrait placeholder — swap for a real photo later */}
          <div className="aboutus__portrait-ph">
            <span>{t.about.portrait}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
