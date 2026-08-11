import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n, localeList } from '../i18n/index.jsx'

export default function LanguageSwitcher() {
  const { code, t, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang__btn"
        aria-expanded={open}
        aria-label={t.lang.choose}
        data-cursor={t.lang.label}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
        <span className="lang__code">{code}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="lang__menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {localeList.map((l) => (
              <li key={l.code}>
                <button
                  className="lang__opt"
                  data-active={l.code === code}
                  onClick={() => {
                    setLocale(l.code)
                    setOpen(false)
                  }}
                >
                  <span className="lang__opt-code">{l.code}</span>
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
