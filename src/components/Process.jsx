import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { skills } from '../data/content.js'
import TextRoll from './TextRoll.jsx'
import { useI18n } from '../i18n/index.jsx'

function Step({ skill, index, active, onEnter, text }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' })

  // Whichever step is crossing the viewport middle becomes active.
  useEffect(() => {
    if (inView) onEnter(index)
  }, [inView, index, onEnter])

  return (
    <div ref={ref} className="process__step" data-active={active === index}>
      <span className="process__num">{skill.step}</span>
      <h3 className="process__name">
        <TextRoll>{text.title}</TextRoll>
      </h3>

      {/* inline image + description for mobile (sticky panel is hidden there) */}
      <div className="process__step-media">
        <img src={skill.media} alt={text.title} loading="lazy" />
      </div>
      <p className="process__step-body">{text.body}</p>
    </div>
  )
}

export default function Process() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const step = skills[active]
  const activeText = t.process.steps[step.step]

  return (
    <section className="process" id="process">
      <div className="wrap">
        <h2 className="process__title">{t.process.title}</h2>

        <div className="process__grid">
          {/* sticky column — one image at a time + its description underneath */}
          <div className="process__left">
            <div className="process__media" aria-hidden="true">
              <AnimatePresence>
                <motion.div
                  className="process__frame"
                  key={active}
                  initial={{ y: '100%', scale: 1.08 }}
                  animate={{ y: '0%', scale: 1 }}
                  exit={{ y: '-100%', scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  <img src={step.media} alt="" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="process__caption">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="process__caption-title">
                    <span className="process__caption-num">{step.step}.</span>{' '}
                    {activeText.title}
                  </p>
                  <p className="process__caption-body">{activeText.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* bolded skill names — the active one turns red */}
          <div className="process__steps">
            {skills.map((s, i) => (
              <Step
                key={s.step}
                skill={s}
                index={i}
                active={active}
                onEnter={setActive}
                text={t.process.steps[s.step]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
