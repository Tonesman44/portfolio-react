import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa6'
import profile from '../assets/photos/profile.jpg'
import { useCut } from '../components/Cut.jsx'
import { Section } from '../components/Section.jsx'

const ease = [0.2, 0.8, 0.2, 1]
const T0 = 0.9 // the intro stinger clears the screen around here

const board = [
  { to: 'experience', top: 'Full stack engineer at Excellis Interactive', bottom: 'Since June 2025' },
  { to: 'about', top: 'NECC Division II national champions', bottom: 'Marvel Rivals, 2026' },
  { to: 'projects', top: 'Brainrot Brawl is live on Roblox', bottom: '15 fighters, 6 arenas, 46K lines of Luau' },
]

export default function Hero() {
  const cutTo = useCut()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const typeY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const go = (id) => (e) => { e.preventDefault(); cutTo(id) }

  return (
    <Section id="top" className="herowrap">
      <div className="hero wrap" ref={ref}>
        <motion.span className="hero__panel" style={{ y: panelY }} aria-hidden="true" />

        <motion.div className="hero__type" style={{ y: typeY, opacity: fade }}>
          <h1 className="hero__name" aria-label="Antonio Fabrizio">
            {['Antonio', 'Fabrizio'].map((w, i) => (
              <span className="hero__line" key={w}>
                <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: T0 + i * 0.1, ease }}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <div className="lowerthird" aria-label="Full stack engineer at Excellis Interactive">
            <motion.span className="lowerthird__a" initial={{ x: '-110%' }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: T0 + 0.45, ease }}>
              <span>Full stack engineer</span>
            </motion.span>
            <motion.span className="lowerthird__b" initial={{ x: '-110%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: T0 + 0.6, ease }}>
              <span>Excellis Interactive</span>
            </motion.span>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: T0 + 0.8, duration: 0.5 }}>
            <p className="hero__intro">
              I build CRM platforms and cross-platform apps with .NET, Angular, and Ionic, from the data model to the last pixel. Off the clock I ship a Roblox fighting game, ran competitive operations for Temple Esports, and played on our national championship Marvel Rivals roster.
            </p>
            <div className="hero__cta">
              <a className="btn btn--red" href="#projects" onClick={go('projects')}>See my projects <FaArrowRight aria-hidden="true" /></a>
              <a className="btn btn--ghost" href="#contact" onClick={go('contact')}>Get in touch</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.figure
          className="hero__photo"
          style={{ y: photoY }}
          initial={{ opacity: 0, clipPath: 'polygon(20% 0, 20% 0, 0 100%, 0 100%)' }}
          animate={{ opacity: 1, clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
          transition={{ duration: 0.8, delay: T0 + 0.15, ease }}
        >
          <img src={profile} alt="Antonio Fabrizio smiling in front of a graffiti wall" />
          <motion.span className="hero__tag" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: T0 + 1, duration: 0.5, ease }}>
            <i />Horsham, PA
          </motion.span>
        </motion.figure>

        <motion.a href="#about" onClick={go('about')} className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: T0 + 1.4 }} style={{ opacity: fade }} aria-label="Scroll to about">
          <span>Scroll</span>
          <FaArrowDown aria-hidden="true" />
        </motion.a>
      </div>

      <motion.nav className="board wrap" aria-label="Highlights" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: T0 + 0.9 } } }}>
        {board.map((b) => (
          <motion.a key={b.to} href={`#${b.to}`} onClick={go(b.to)} className="board__cell" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
            <span className="board__top">{b.top}</span>
            <span className="board__bottom">{b.bottom}</span>
            <FaArrowRight className="board__arrow" aria-hidden="true" />
          </motion.a>
        ))}
      </motion.nav>
    </Section>
  )
}
