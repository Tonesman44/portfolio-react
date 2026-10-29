import { motion } from 'motion/react'

const ease = [0.2, 0.8, 0.2, 1]

// Fades and slides children in when they scroll into view. `from` picks the direction.
export default function Reveal({ children, className = '', delay = 0, from = 'up', amount = 0.25, once = true, duration = 0.6, style }) {
  const offsets = { up: { y: 28 }, down: { y: -28 }, left: { x: -36 }, right: { x: 36 }, none: {} }
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// Staggers a list of children.
export function RevealList({ children, className = '', stagger = 0.08, amount = 0.2, from = 'up' }) {
  const offsets = { up: { y: 24 }, left: { x: -28 }, right: { x: 28 }, none: {} }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {Array.isArray(children)
        ? children.map((c, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, ...offsets[from] }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease } } }}>
              {c}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
