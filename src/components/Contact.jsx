import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'

const EMAIL = 'hello@vanthore.com'
const PHONE = '+370 647 99015'
const PHONE_HREF = 'tel:+37064799015'
const INSTAGRAM = 'https://www.instagram.com/vanthore.studio/'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

function LegalModal({ kind, onClose, t }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const title = kind === 'privacy' ? t.privacy : t.imprint

  return (
    <motion.div
      className="legal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="legal__panel"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="legal__close" onClick={onClose} aria-label={t.close}>
          ✕
        </button>
        <h3 className="legal__title">{title}</h3>

        {kind === 'privacy' ? (
          <div className="legal__body">
            {t.privacyBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="legal__note">{t.privacyNote}</p>
          </div>
        ) : (
          <div className="legal__body">
            <p>
              <strong>{t.imprintBody}</strong>
              <br />
              {t.imprintDetails}
            </p>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · {PHONE}
            </p>
            <p className="legal__note">{t.imprintNote}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact
  const [legal, setLegal] = useState(null)

  const ctaHref = `mailto:${EMAIL}?subject=${encodeURIComponent(c.ctaSubject)}`
  const links = [
    { label: EMAIL, href: `mailto:${EMAIL}` },
    { label: PHONE, href: PHONE_HREF },
    { label: c.instagram, href: INSTAGRAM },
  ]

  return (
    <footer className="contact wrap" id="contact">
      <motion.div
        className="contact__top"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Vanthore wordmark — swap for a real logo SVG when available */}
        <span className="contact__logo">
          Vanthore<sup>®</sup>
        </span>
        <span className="contact__status">
          <span className="live" aria-hidden="true" />
          {c.availability}
        </span>
      </motion.div>

      <h2 className="contact__headline" aria-label={c.aria}>
        {c.headline.map((w, i) => (
          <motion.span
            key={i}
            style={{ display: 'block' }}
            variants={reveal}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {i === 1 ? <em>{w}</em> : w}
          </motion.span>
        ))}
      </h2>

      {/* Primary CTA — the visual anchor */}
      <motion.a
        className="contact__cta"
        href={ctaHref}
        variants={reveal}
        custom={3}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        data-cursor={c.cta}
      >
        {c.cta}
        <span className="contact__cta-arrow" aria-hidden="true">
          ↗
        </span>
      </motion.a>

      <motion.div
        className="contact__links"
        variants={reveal}
        custom={4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            <span className="arw">↗</span>
            {l.label}
          </a>
        ))}
      </motion.div>

      <div className="footer__bar">
        <span>{c.rights}</span>
        <span>{c.tagline}</span>
        <span className="footer__legal">
          <button onClick={() => setLegal('privacy')}>{c.privacy}</button>
          <button onClick={() => setLegal('imprint')}>{c.imprint}</button>
          <a href="#top">{c.backToTop}</a>
        </span>
      </div>

      <AnimatePresence>
        {legal && (
          <LegalModal kind={legal} onClose={() => setLegal(null)} t={c} />
        )}
      </AnimatePresence>
    </footer>
  )
}
