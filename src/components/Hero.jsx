import { motion } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Each line sits in an overflow-hidden mask and slides up on load, staggered.
const lineVariants = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: {
      delay: 0.35 + i * 0.14,
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const { t } = useI18n()
  const lines = t.hero.lines

  return (
    <header className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />

      <motion.p
        className="hero__eyebrow"
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        {t.hero.eyebrow}
      </motion.p>

      {/* Red headline — sits BEHIND the cat video (lower z-index) */}
      <h1 className="hero__headline" aria-label={t.hero.aria}>
        {lines.map((l, i) => (
          <span className="hero__line" key={l}>
            <motion.span
              variants={lineVariants}
              initial="hidden"
              animate="show"
              custom={i}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Foreground cat crowd — the headline falls behind this */}
      <motion.div
        className="hero__cats"
        aria-hidden="true"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          src="/cat-peeps.webm"
          poster="/cat-poster.jpg"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>
    </header>
  )
}
