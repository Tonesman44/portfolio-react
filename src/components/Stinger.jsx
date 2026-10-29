import { motion } from 'motion/react'

// Broadcast-style "stinger" wipe. Mount it with a fresh key to play it once.
export default function Stinger({ intro = false }) {
  const ease = [0.7, 0, 0.3, 1]
  const d = intro ? 0.9 : 0.75
  return (
    <div className="stinger" aria-hidden="true">
      <motion.div
        className="stinger__bar stinger__bar--red"
        initial={{ x: '-130%' }}
        animate={{ x: '130%' }}
        transition={{ duration: d, ease }}
      />
      <motion.div
        className="stinger__bar stinger__bar--dark"
        initial={{ x: '-140%' }}
        animate={{ x: '140%' }}
        transition={{ duration: d, delay: 0.06, ease }}
      />
      {intro && (
        <motion.div
          className="stinger__mark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
          transition={{ duration: d, times: [0, 0.25, 0.6, 1] }}
        >
          AF
        </motion.div>
      )}
    </div>
  )
}
