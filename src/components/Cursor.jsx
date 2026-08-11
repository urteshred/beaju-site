import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// A custom cursor with personality:
//  - a soft ring that lags behind on a spring (with velocity-based squash)
//  - a tight center dot that tracks instantly
//  - on interactive elements the ring blooms and a label can appear
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const [down, setDown] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Ring lags; dot is snappy.
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 })
  const dotX = useSpring(x, { stiffness: 900, damping: 40 })
  const dotY = useSpring(y, { stiffness: 900, damping: 40 })

  // Squash the ring in the direction of travel based on lag distance.
  const dx = useTransform(() => x.get() - ringX.get())
  const dy = useTransform(() => y.get() - ringY.get())
  const rotate = useTransform(() => (Math.atan2(dy.get(), dx.get()) * 180) / Math.PI)
  const stretch = useTransform(() => {
    const d = Math.hypot(dx.get(), dy.get())
    return Math.min(0.4, d / 200)
  })
  const scaleX = useTransform(stretch, (s) => 1 + s)
  const scaleY = useTransform(stretch, (s) => 1 - s * 0.7)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor]')
      if (t) {
        setHovering(true)
        setLabel(t.getAttribute('data-cursor') || '')
      }
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) {
        setHovering(false)
        setLabel('')
      }
    }
    const dn = () => setDown(true)
    const up = () => setDown(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    window.addEventListener('pointerout', out)
    window.addEventListener('pointerdown', dn)
    window.addEventListener('pointerup', up)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerout', out)
      window.removeEventListener('pointerdown', dn)
      window.removeEventListener('pointerup', up)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-ring"
        data-hovering={hovering}
        style={{
          x: ringX,
          y: ringY,
          rotate: hovering ? 0 : rotate,
          scaleX: hovering ? 1 : scaleX,
          scaleY: hovering ? 1 : scaleY,
        }}
        animate={{
          width: hovering ? 74 : 34,
          height: hovering ? 74 : 34,
          opacity: down ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {label && <span className="cursor-label">{label}</span>}
      </motion.div>

      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovering ? 0 : down ? 0.6 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  )
}
