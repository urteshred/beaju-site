import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { projects } from '../data/content.js'
import { useI18n } from '../i18n/index.jsx'

const pad = (n) => String(n).padStart(2, '0')
const ease = [0.16, 1, 0.3, 1]

function ArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

// Hover/focus reveals the project's production details.
function DetailsButton({ project, copy }) {
  const [open, setOpen] = useState(false)
  const { meta } = project

  return (
    <div
      className="proj__details"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="proj__details-btn"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        data-cursor={copy.details}
      >
        <InfoIcon />
        {copy.details}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="proj__popover"
            role="tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.22, ease }}
          >
            <dl className="proj__facts">
              <div>
                <dt>{copy.duration}</dt>
                <dd>{copy.weeks(meta.weeks)}</dd>
              </div>
              <div>
                <dt>{copy.delivered}</dt>
                <dd>{copy.pages(meta.pages)}</dd>
              </div>
              <div>
                <dt>{copy.scope}</dt>
                <dd>{copy.scopeText}</dd>
              </div>
            </dl>

            <div className="proj__stack">
              <span className="proj__stack-label">{copy.stack}</span>
              <span className="proj__stack-tags">
                {meta.stack.map((s) => (
                  <span className="proj__chip" key={s}>
                    {s}
                  </span>
                ))}
              </span>
            </div>
            <span className="proj__year">{meta.year}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Panel({ project, total, copy, text }) {
  return (
    <motion.article
      className="proj"
      initial={{ opacity: 0, filter: 'blur(16px)', y: 26 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(16px)', y: -26 }}
      transition={{ duration: 0.34, ease }}
    >
      <div className="proj__text">
        <span className="proj__index">
          {project.id} / {pad(total)}
        </span>
        <h3 className="proj__name">{project.name}</h3>
        <span className="proj__cat">{text.category}</span>
        <p className="proj__desc">{text.description}</p>

        <DetailsButton
          project={project}
          copy={{ ...copy, scopeText: text.scope }}
        />
      </div>

      <div className="proj__showcase">
        <a
          className="proj__link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={copy.visitAria(project.name)}
          data-cursor={copy.visit}
        >
          <ArrowIcon />
        </a>

        <div className="proj__browser">
          <div className="proj__bar">
            <span className="proj__dots">
              <i /><i /><i />
            </span>
            <span className="proj__url">{project.domain}</span>
          </div>
          <div className="proj__screen">
            <img src={project.image} alt={`${project.name} website preview`} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function WorkGrid() {
  const { t } = useI18n()
  const ref = useRef(null)
  const total = projects.length
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.max(0, Math.min(total - 1, Math.floor(p * total - 0.0001)))
    setActive((cur) => (cur === next ? cur : next))
  })

  const project = projects[active]

  return (
    <section
      className="work"
      id="work"
      ref={ref}
      style={{ height: `${total * 100}vh` }}
    >
      <div className="work__aura" aria-hidden="true" />

      {/* one snap point per project so scrolling jumps cleanly between them */}
      <div className="work__snaps" aria-hidden="true">
        {projects.map((p) => (
          <span className="work__snap" key={p.id} />
        ))}
      </div>

      <div className="work__pin">
        <div className="work__pin-inner">
          <h2 className="section-label">
            <span className="eyebrow">
              {t.work.label} · {pad(total)}
            </span>
          </h2>

          <div className="work__counter" aria-hidden="true">
            <span className="work__counter-now">{pad(active + 1)}</span>
            <span className="work__counter-sep">/</span>
            <span className="work__counter-total">{pad(total)}</span>
          </div>

          <div className="work__stage">
            <AnimatePresence mode="wait">
              <Panel
                key={project.id}
                project={project}
                total={total}
                copy={t.work}
                text={t.projects[project.id]}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
