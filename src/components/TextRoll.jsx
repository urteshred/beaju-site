import { motion } from 'framer-motion'

// Per-character roll on hover: the visible row slides up while a duplicate
// row slides in from below, staggered letter by letter.
// Ported to this project's stack (framer-motion + plain CSS, no Tailwind).
const STAGGER = 0.035

export default function TextRoll({ children, className = '', center = false }) {
  const chars = String(children).split('')

  const delayFor = (i) =>
    center ? STAGGER * Math.abs(i - (chars.length - 1) / 2) : STAGGER * i

  const row = (variants, hidden) => (
    <span
      className={`text-roll__row${hidden ? ' text-roll__row--under' : ''}`}
      aria-hidden={hidden || undefined}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          className="text-roll__char"
          variants={variants}
          transition={{ ease: 'easeInOut', duration: 0.3, delay: delayFor(i) }}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </span>
  )

  return (
    <motion.span
      className={`text-roll ${className}`.trim()}
      initial="initial"
      whileHover="hovered"
      whileFocus="hovered"
    >
      {row({ initial: { y: 0 }, hovered: { y: '-100%' } }, false)}
      {row({ initial: { y: '100%' }, hovered: { y: '0%' } }, true)}
    </motion.span>
  )
}
