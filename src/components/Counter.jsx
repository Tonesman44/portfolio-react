import { useEffect, useState } from 'react'
import { animate, motion, useReducedMotion } from 'motion/react'

// Counts up from 0 to `to` the first time it scrolls into view.
export default function Counter({ to, prefix = '', suffix = '', duration = 1.4, className = '' }) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? to : 0)
  const [go, setGo] = useState(false)

  useEffect(() => {
    if (!go || reduce) return
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [go, to, duration, reduce])

  return (
    <motion.span className={className} onViewportEnter={() => setGo(true)} viewport={{ once: true, amount: 0.5 }}>
      {prefix}{(reduce ? to : n).toLocaleString()}{suffix}
    </motion.span>
  )
}
