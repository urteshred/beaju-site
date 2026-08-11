import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TextRoll from './TextRoll.jsx'
import { useI18n } from '../i18n/index.jsx'

const sections = [
  { id: 'work', key: 'works' },
  { id: 'about', key: 'about' },
  { id: 'contact', key: 'contact' },
]

export default function Nav() {
  const { t } = useI18n()
  const items = sections.map((s) => ({ ...s, label: t.nav[s.key] }))
  const [active, setActive] = useState(null)

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      const mark = window.scrollY + window.innerHeight * 0.4
      let current = null // hero → nothing highlighted
      for (const it of sections) {
        const el = document.getElementById(it.id)
        if (el && el.getBoundingClientRect().top + window.scrollY <= mark) {
          current = it.id
        }
      }
      // guard: at the very bottom the footer may be too short to reach the
      // mark line, so force the last item active.
      const doc = document.documentElement
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        current = sections[sections.length - 1].id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <nav className="nav">
      {items.map((it) => {
        const isActive = active === it.id
        return (
          <a
            key={it.id}
            href={`#${it.id}`}
            data-cursor={it.label}
            className="nav__link"
            data-active={isActive}
          >
            {isActive && (
              <motion.span
                className="nav__marker"
                layoutId="nav-marker"
                transition={{ type: 'spring', stiffness: 500, damping: 34 }}
              />
            )}
            <TextRoll className="nav__text">{it.label}</TextRoll>
          </a>
        )
      })}
    </nav>
  )
}
