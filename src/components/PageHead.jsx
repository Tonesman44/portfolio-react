import { motion } from 'motion/react'

export default function PageHead({ title, kicker, children }) {
  return (
    <header className="pagehead wrap">
      {kicker && <p className="pagehead__kicker">{kicker}</p>}
      <h1 className="pagehead__title">
        {title.split(' ').map((word, i) => (
          <span key={i} className="pagehead__clip">
            <motion.span
              className="pagehead__word"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
      {children && <div className="pagehead__intro">{children}</div>}
    </header>
  )
}
