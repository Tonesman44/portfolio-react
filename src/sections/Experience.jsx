import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Reveal, { RevealList } from '../components/Reveal.jsx'
import Plate from '../components/Plate.jsx'
import { useCut } from '../components/Cut.jsx'
import { experience } from '../data/experience.js'

function Photos({ job }) {
  if (!job.photos.length) {
    return (
      <div className="xp__panel">
        <img src={job.logo} alt="" className="xp__panel-logo" />
        <p className="xp__panel-big">{job.panel.big}</p>
        <p className="xp__panel-small">{job.panel.small}</p>
      </div>
    )
  }
  return (
    <div>
      <div className={`xp__photos xp__photos--${job.photos.length}`}>
        {job.photos.map((p, i) => (
          <motion.figure
            key={p.alt}
            className={p.span === 'wide' ? 'is-wide' : ''}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.img src={p.src} alt={p.alt} loading="lazy" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
          </motion.figure>
        ))}
      </div>
      {job.photoNote && <p className="xp__photo-note">{job.photoNote}</p>}
    </div>
  )
}

export default function Experience() {
  const cutTo = useCut()
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 70%'] })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section id="experience">
      <SectionHead number="03" kicker="Experience" title="Where I have worked">
        <p>Two engineering roles and one very busy esports program.</p>
      </SectionHead>

      <div className="wrap xplist" ref={listRef}>
        <span className="xplist__rail" aria-hidden="true"><motion.i style={{ scaleY: line }} /></span>
        {experience.map((job, i) => (
          <article key={job.id} className={`xp ${i % 2 ? 'xp--flip' : ''}`} aria-labelledby={`${job.id}-title`}>
            <motion.span className="xp__node" aria-hidden="true" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }} />
            <div className="xp__text">
              <Reveal from="up" className="xp__head">
                <span className="xp__logo"><img src={job.logo} alt={`${job.company} logo`} /></span>
                <div>
                  <h3 id={`${job.id}-title`} className="xp__company">{job.company}</h3>
                  <p className="xp__meta">{job.dates}. {job.place}</p>
                </div>
              </Reveal>
              <Reveal from="left" delay={0.1}><Plate className="xp__role">{job.role}</Plate></Reveal>
              <RevealList className="ticks" stagger={0.07}>
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </RevealList>
              <Reveal delay={0.1}><ul className="tags">{job.stack.map((s) => <li key={s}>{s}</li>)}</ul></Reveal>
              {job.more && (
                <Reveal delay={0.15}>
                  <a href={`#${job.more.to}`} onClick={(e) => { e.preventDefault(); cutTo(job.more.to) }} className="textlink">{job.more.label} <FaArrowRight aria-hidden="true" /></a>
                </Reveal>
              )}
            </div>
            <Photos job={job} />
          </article>
        ))}
      </div>
    </Section>
  )
}
