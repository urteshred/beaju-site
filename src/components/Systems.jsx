import { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { systems } from '../data/systems.js'

const ease = [0.16, 1, 0.3, 1]

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
}
const lineVariants = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
}

function Terminal({ system }) {
  return (
    <div className="term">
      <div className="term__bar">
        <span className="term__dots">
          <i /><i /><i />
        </span>
        <span className="term__file">{system.file}</span>
        <span className="term__tags">
          {system.meta.map((m) => (
            <span className="term__tag" key={m}>
              {m}
            </span>
          ))}
        </span>
      </div>

      <motion.div
        className="term__body"
        variants={listVariants}
        initial="hidden"
        animate="show"
        key={system.id}
        aria-label={`${system.title} stack`}
      >
        {system.lines.map((l, i) => (
          <motion.div
            className="term__line"
            data-kind={l.kind || 'normal'}
            variants={lineVariants}
            key={i}
          >
            <span className="term__ln">{l.n ?? ''}</span>
            <span className="term__code">{l.text}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="term__foot">
        <span className="term__prompt">›</span>
        <p>{system.how}</p>
      </div>
    </div>
  )
}

export default function Systems() {
  const [active, setActive] = useState(0)

  const onKey = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(systems.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(0, i - 1))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActive(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setActive(systems.length - 1)
    }
  }, [])

  return (
    <section className="systems" id="systems">
      <div className="wrap">
        <div className="systems__head">
          <span className="eyebrow">What We Build On</span>
          <h2 className="systems__title">Our Systems</h2>
          <p className="systems__lead">
            No page builders, no theme underneath. Here is the actual stack, layer
            by layer, and what each one does for your site.
          </p>
        </div>

        <div className="systems__grid">
          {/* layer list */}
          <ul
            className="systems__list"
            role="tablist"
            aria-label="Stack layers"
            onKeyDown={onKey}
          >
            {systems.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.id} role="presentation">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className="systems__item"
                    data-active={isActive}
                    onClick={() => setActive(i)}
                  >
                    {isActive && (
                      <motion.span
                        className="systems__item-bg"
                        layoutId="systems-active"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                    <span className="systems__item-inner">
                      <span className="systems__num">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <strong className="systems__item-title">{s.title}</strong>
                        <span className="systems__item-desc">{s.desc}</span>
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* terminal panel */}
          <div
            className="systems__panel"
            role="tabpanel"
            aria-live="polite"
            aria-label={`${systems[active].title} details`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={systems[active].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease }}
              >
                <Terminal system={systems[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
