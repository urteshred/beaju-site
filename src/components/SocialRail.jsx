import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useI18n } from '../i18n/index.jsx'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  )
}

// An icon that opens a small "connected" bubble showing the contact detail
// (instead of launching the phone / mail app). Click the value to copy it.
function InfoIcon({ id, label, icon, value, open, setOpen, labels }) {
  const [copied, setCopied] = useState(false)
  const isOpen = open === id

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* clipboard blocked — bubble still shows the value to read */
    }
  }

  return (
    <div className="rail__item">
      <button
        type="button"
        className="rail__btn"
        aria-label={label}
        aria-expanded={isOpen}
        data-cursor={label}
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {icon}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="rail__bubble"
            initial={{ opacity: 0, y: -6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="rail__bubble-label">{label}</span>
            <button
              className="rail__bubble-value"
              onClick={copy}
              data-cursor={labels.copy}
            >
              {copied ? labels.copied : value}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SocialRail() {
  const { t } = useI18n()
  const [open, setOpen] = useState(null)
  const rootRef = useRef(null)

  // Close any open bubble on outside click or Escape.
  useEffect(() => {
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(null)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="rail" ref={rootRef}>
      <LanguageSwitcher />
      <InfoIcon
        id="call"
        label={t.rail.call}
        labels={t.rail}
        icon={<PhoneIcon />}
        value="+370 647 99015"
        open={open}
        setOpen={setOpen}
      />
      <InfoIcon
        id="email"
        label={t.rail.email}
        labels={t.rail}
        icon={<MailIcon />}
        value="hello@vanthore.com"
        open={open}
        setOpen={setOpen}
      />
      <a
        className="rail__btn"
        href="https://www.instagram.com/vanthore.studio/"
        target="_blank"
        rel="noreferrer"
        aria-label={`Vanthore — ${t.rail.instagram}`}
        data-cursor={t.rail.instagram}
      >
        <InstagramIcon />
      </a>
    </div>
  )
}
