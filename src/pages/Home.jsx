import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa6'
import profile from '../assets/photos/profile.jpg'
import { projects } from '../data/projects.js'

const ease = [0.2, 0.8, 0.2, 1]

const board = [
  { to: '/experience', top: 'Full stack engineer at Excellis Interactive', bottom: 'Since June 2025' },
  { to: '/about', top: 'NECC Division II national champions', bottom: 'Marvel Rivals, 2026' },
  { to: '/resume', top: 'B.S. Information Science and Technology', bottom: 'Temple University, May 2026' },
]

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero__type">
          <h1 className="hero__name" aria-label="Antonio Fabrizio">
            {['Antonio', 'Fabrizio'].map((w, i) => (
              <span className="hero__line" key={w}>
                <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease }}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <div className="lowerthird" aria-label="Full stack engineer at Excellis Interactive">
            <motion.span className="lowerthird__a" initial={{ x: '-110%' }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.55, ease }}>
              <span>Full stack engineer</span>
            </motion.span>
            <motion.span className="lowerthird__b" initial={{ x: '-110%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7, ease }}>
              <span>Excellis Interactive</span>
            </motion.span>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
            <p className="hero__intro">
              I build CRM platforms and cross-platform apps with .NET, Angular, and Ionic, from the data model to the last pixel. Off the clock I ran competitive operations for Temple Esports and played on our national championship Marvel Rivals roster.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--red" to="/projects">See my projects</Link>
              <Link className="btn btn--ghost" to="/contact">Get in touch</Link>
            </div>
          </motion.div>
        </div>

        <motion.figure className="hero__photo" initial={{ opacity: 0, clipPath: 'polygon(20% 0, 20% 0, 0 100%, 0 100%)' }} animate={{ opacity: 1, clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }} transition={{ duration: 0.8, delay: 0.25, ease }}>
          <img src={profile} alt="Antonio Fabrizio smiling in front of a graffiti wall" />
        </motion.figure>
      </section>

      <nav className="board wrap" aria-label="Highlights">
        {board.map((b) => (
          <Link key={b.to} to={b.to} className="board__cell">
            <span className="board__top">{b.top}</span>
            <span className="board__bottom">{b.bottom}</span>
            <FaArrowRight className="board__arrow" aria-hidden="true" />
          </Link>
        ))}
      </nav>

      <section className="wrap section">
        <div className="section__head">
          <h2 className="h2">Recent projects</h2>
          <Link to="/projects" className="textlink">All projects</Link>
        </div>
        <ol className="rowlist">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="rowlist__item">
                <span className="rowlist__title">{p.title}</span>
                <span className="rowlist__desc">{p.tagline}</span>
                <span className="rowlist__stack">{p.stack.slice(0, 2).join(', ')}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
