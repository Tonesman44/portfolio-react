import { motion } from 'motion/react'

const ease = [0.2, 0.8, 0.2, 1]

// A section of the single page. The id is what the nav scrolls to.
export function Section({ id, className = '', children, ...rest }) {
  return (
    <section id={id} className={`block ${className}`} {...rest}>
      {children}
    </section>
  )
}

// Section heading with the words sliding up out of a clip as it scrolls into view.
// The in-view check sits on the header (the words start outside their clip, so they could never intersect on their own).
export function SectionHead({ kicker, title, number, children, className = '' }) {
  return (
    <motion.header
      className={`shead wrap ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {(number || kicker) && (
        <motion.p className="shead__kicker" variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } } }}>
          {number && <span className="shead__num">{number}</span>}
          {kicker}
        </motion.p>
      )}
      <h2 className="shead__title">
        {title.split(' ').map((word, i) => (
          <span key={i} className="shead__clip">
            <motion.span
              className="shead__word"
              variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { delay: 0.05 + i * 0.07, duration: 0.55, ease } } }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
      {children && (
        <motion.div className="shead__intro" variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5, ease } } }}>
          {children}
        </motion.div>
      )}
    </motion.header>
  )
}
