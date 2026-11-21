import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa6'
import heroPhoto from '../assets/photos/hero-graduation.jpg'
import { useCut } from '../components/Cut.jsx'
import { Section } from '../components/Section.jsx'
import useReady from '../hooks/useReady.js'

const ease = [0.2, 0.8, 0.2, 1]

// Every intro animation is a variant that waits for the curtain to lift (see Curtain.jsx),
// and only transform and opacity animate, so nothing repaints while the page settles.
const v = (hidden, shown, delay, duration = 0.6) => ({
  hidden,
  show: { ...shown, transition: { duration, delay, ease } },
})

const board = [
  { to: 'experience', top: 'Full stack engineer at Excellis Interactive', bottom: 'Since June 2025' },
  { to: 'projects', top: 'Movie Club Video is live', bottom: 'Angular, ASP.NET Core and Postgres' },
  { to: 'about', top: 'Temple University, class of 2026', bottom: 'B.S. Information Science and Technology' },
]

export default function Hero() {
  const cutTo = useCut()
  const ready = useReady()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const typeY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 60]) // on top of the photo's own drift
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const state = ready ? 'show' : 'hidden'

  const go = (id) => (e) => { e.preventDefault(); cutTo(id) }

  return (
    <Section id="top" className="herowrap">
      <motion.div className="hero wrap" ref={ref} initial="hidden" animate={state}>
        <motion.div className="hero__type" style={{ y: typeY, opacity: fade }}>
          <h1 className="hero__name" aria-label="Antonio Fabrizio">
            {['Antonio', 'Fabrizio'].map((w, i) => (
              <span className="hero__line" key={w}>
                <motion.span variants={v({ y: '100%' }, { y: '0%' }, 0.05 + i * 0.1, 0.7)}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <div className="lowerthird" aria-label="Full stack engineer at Excellis Interactive">
            <motion.span className="lowerthird__a" variants={v({ x: '-110%' }, { x: '0%' }, 0.45, 0.5)}>
              <span>Full stack engineer</span>
            </motion.span>
            <motion.span className="lowerthird__b" variants={v({ x: '-110%', opacity: 0 }, { x: '0%', opacity: 1 }, 0.58, 0.5)}>
              <span>Excellis Interactive</span>
            </motion.span>
          </div>

          <motion.div variants={v({ opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 0.72, 0.5)}>
            <p className="hero__intro">
              I build CRM platforms and cross-platform apps with .NET, Angular, and Ionic, from the data model to the last pixel. Off the clock I built Movie Club Video for my friends’ movie club, ship a Roblox fighting game, and played on Temple’s national championship Marvel Rivals roster.
            </p>
            <div className="hero__cta">
              <a className="btn btn--red" href="#projects" onClick={go('projects')}>See my projects <FaArrowRight aria-hidden="true" /></a>
              <a className="btn btn--ghost" href="#contact" onClick={go('contact')}>Get in touch</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero__visual" style={{ y: photoY }}>
        {/* The accent slab sits behind the photo and is sized from it, so it never outgrows the picture.
            Three layers keep the transforms apart: parallax (motion y), slant (CSS), grow-in (motion scaleY). */}
        <motion.span className="hero__panel" style={{ y: panelY }} aria-hidden="true">
          <span className="hero__panel-slant">
            <motion.i variants={v({ scaleY: 0 }, { scaleY: 1 }, 0.05, 0.7)} />
          </span>
        </motion.span>

        <motion.figure className="hero__photo">
          <motion.img
            src={heroPhoto}
            alt="Antonio Fabrizio smiling in his Temple graduation gown, holding his diploma"
            width={1000}
            height={1250}
            fetchPriority="high"
            decoding="async"
            variants={v({ scale: 1.12 }, { scale: 1 }, 0.1, 1.1)}
          />
          <motion.span className="hero__shutter" aria-hidden="true" variants={v({ scaleX: 1 }, { scaleX: 0 }, 0.12, 0.75)} />
          <motion.span className="hero__tag" variants={v({ x: 30, opacity: 0 }, { x: 0, opacity: 1 }, 0.9, 0.5)}>
            <i />Temple, class of 2026
          </motion.span>
        </motion.figure>
        </motion.div>

        <motion.a href="#about" onClick={go('about')} className="hero__scroll" variants={v({ opacity: 0 }, { opacity: 1 }, 1.2)} style={{ opacity: fade }} aria-label="Scroll to about">
          <span>Scroll</span>
          <FaArrowDown aria-hidden="true" />
        </motion.a>
      </motion.div>

      <motion.nav className="board wrap" aria-label="Highlights" initial="hidden" animate={state} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } } }}>
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
