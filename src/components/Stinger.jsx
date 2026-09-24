import { motion, useReducedMotion } from 'motion/react'

// Broadcast-style "stinger" wipe that plays between pages.
// React Router gives the very first location the key "default", so it's skipped on first load.
export default function Stinger({ locationKey }) {
  const reduce = useReducedMotion()
  if (reduce || locationKey === 'default') return null

  return (
    <div className="stinger" aria-hidden="true" key={locationKey}>
      <motion.div
        className="stinger__bar stinger__bar--red"
        initial={{ x: '-130%' }}
        animate={{ x: '130%' }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
      />
      <motion.div
        className="stinger__bar stinger__bar--dark"
        initial={{ x: '-140%' }}
        animate={{ x: '140%' }}
        transition={{ duration: 0.7, delay: 0.06, ease: [0.7, 0, 0.3, 1] }}
      />
    </div>
  )
}
