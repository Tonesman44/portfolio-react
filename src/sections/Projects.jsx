import { createRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import VideoReel from '../components/VideoReel.jsx'
import Slideshow from '../components/Slideshow.jsx'
import useMedia from '../hooks/useMedia.js'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'

// Cards stack: each one sticks under the nav and the next slides over it, shrinking the one beneath.
function ProjectCard({ p, i, cardRef, nextRef, stack }) {
  const { scrollYProgress } = useScroll({ target: nextRef ?? cardRef, offset: ['start end', 'start start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, nextRef && stack ? 0.94 : 1])
  const filter = useTransform(scrollYProgress, [0, 1], ['brightness(1)', nextRef && stack ? 'brightness(0.55)' : 'brightness(1)'])
  const num = String(i + 1).padStart(2, '0')

  return (
    <motion.article ref={cardRef} className={`pcard ${stack ? 'is-stacked' : ''}`} style={stack ? { scale, filter, zIndex: i + 1 } : undefined} aria-labelledby={`${p.slug}-title`}>
      <div className="pcard__inner">
        <div className="pcard__text">
          <p className="pcard__kicker"><span className="pcard__num">{num}</span>{p.kicker}</p>
          <h3 id={`${p.slug}-title`} className="pcard__title">{p.title}</h3>
          <p className="pcard__context">{p.context}</p>
          <p className="pcard__tagline">{p.tagline}</p>
          <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>

          {p.stats && (
            <dl className="pstats">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <dt><Counter to={s.n} suffix={s.suffix ?? ''} /></dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <p className="pcard__summary">{p.summary}</p>

          <details className="pmore">
            <summary>{p.framework ? 'How it is built and what I did' : 'What I did'}</summary>
            <div className="pmore__body">
              {p.framework?.map((f) => <p key={f}>{f}</p>)}
              <ul className="ticks">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
          </details>

          <div className="pcard__links">
            {p.links.map((l, j) => (
              <a key={l.href + j} href={l.href} target="_blank" rel="noreferrer" className={`btn ${j === 0 ? 'btn--red' : 'btn--ghost'}`}>
                {l.label} <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="pcard__media">
          {p.media.type === 'reel'
            ? <VideoReel clips={p.media.clips} stills={p.media.stills} />
            : <Slideshow slides={p.media.slides} host={p.media.host} note={p.media.note} />}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const refs = useMemo(() => projects.map(() => createRef()), [])
  const stack = useMedia('(min-width: 961px) and (min-height: 700px)')

  return (
    <Section id="projects" className="block--projects">
      <SectionHead number="02" kicker="Projects" title="Things I have shipped">
        <p>A Roblox fighting game with real players, a client site that is live for a friend’s business, and two full-stack apps from Temple. Scroll through the stack. Each card has a walkthrough, clips or screenshots, and links to the live build.</p>
      </SectionHead>

      <div className="wrap">
        <div className="stack">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} cardRef={refs[i]} nextRef={refs[i + 1]} stack={stack} />
          ))}
        </div>

        <Reveal amount={0.5}>
          <a href={site.github} target="_blank" rel="noreferrer" className="more-gh">
            <FaGithub className="more-gh__icon" aria-hidden="true" />
            <span>
              <span className="more-gh__title">More on GitHub</span>
              <span className="more-gh__sub">Coursework, experiments, and everything in between at @Tonesman44.</span>
            </span>
            <FaArrowUpRightFromSquare className="more-gh__out" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
