import { motion } from 'motion/react'

// Broadcast-style "stinger" wipe used when the nav cuts between sections.
// Mount it with a fresh key to play it once. Only transforms animate, so it stays on the compositor.
export default function Stinger() {
  const ease = [0.7, 0, 0.3, 1]
  return (
    <div className="stinger" aria-hidden="true">
      <motion.div
        className="stinger__bar stinger__bar--red"
        initial={{ x: '-130%' }}
        animate={{ x: '130%' }}
        transition={{ duration: 0.75, ease }}
      />
      <motion.div
        className="stinger__bar stinger__bar--dark"
        initial={{ x: '-140%' }}
        animate={{ x: '140%' }}
        transition={{ duration: 0.75, delay: 0.06, ease }}
      />
    </div>
  )
}
