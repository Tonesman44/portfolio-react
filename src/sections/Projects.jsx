import { createRef, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { FaArrowUpRightFromSquare, FaChevronDown, FaGithub } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import VideoReel from '../components/VideoReel.jsx'
import Slideshow from '../components/Slideshow.jsx'
import CaseStudy from '../components/CaseStudy.jsx'
import { useCut } from '../components/Cut.jsx'
import useMedia from '../hooks/useMedia.js'
import { NAV_H } from '../lib/scroll.js'
import { event, viewOnce } from '../lib/analytics.js'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'

const GAP = 20 // breathing room above a stuck card

// Where a card sticks. A card that fits on screen sticks just under the nav. A taller card
// (for example after "How it is built" is opened) gets a negative top, so the page scrolls
// all the way through it first and it only sticks once its bottom edge is on screen.
function useStickyTop(ref, enabled) {
  const [top, setTop] = useState(NAV_H + GAP)
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const measure = () => setTop(Math.min(NAV_H + GAP, window.innerHeight - el.offsetHeight - GAP))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [ref, enabled])
  return top
}

// Cards stack: each one sticks and the next slides over it, shrinking the one beneath.
function ProjectCard({ p, i, cardRef, nextRef, stack }) {
  const [open, setOpen] = useState(false)
  const cutTo = useCut()
  const top = useStickyTop(cardRef, stack)
  const { scrollYProgress } = useScroll({ target: nextRef ?? cardRef, offset: ['start end', 'start start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, nextRef && stack ? 0.94 : 1])
  const filter = useTransform(scrollYProgress, [0, 1], ['brightness(1)', nextRef && stack ? 'brightness(0.55)' : 'brightness(1)'])
  const num = String(i + 1).padStart(2, '0')
  const bodyId = `${p.slug}-more`

  const toggle = () => {
    setOpen((o) => !o)
    if (!open) event('Project details opened', { project: p.title })
  }

  return (
    <motion.article
      ref={cardRef}
      className={`pcard ${stack ? 'is-stacked' : ''}`}
      style={stack ? { scale, filter, zIndex: i + 1, top } : undefined}
      aria-labelledby={`${p.slug}-title`}
      onViewportEnter={() => viewOnce(`/projects/${p.slug}`)}
      viewport={{ amount: 0.4, once: true }}
    >
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

          <div className={`pmore ${open ? 'is-open' : ''}`}>
            <button type="button" className="pmore__toggle" onClick={toggle} aria-expanded={open} aria-controls={bodyId}>
              {p.framework ? 'How it is built and what I did' : 'What I did'}
              <FaChevronDown className="pmore__chev" aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={bodyId}
                  className="pmore__clip"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="pmore__body">
                    {p.framework?.map((f) => <p key={f}>{f}</p>)}
                    <ul className="ticks">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pcard__links">
            {p.caseStudy && (
              <a href={`#case-${p.slug}`} className="btn btn--ghost" onClick={(e) => { e.preventDefault(); cutTo(`case-${p.slug}`); event('Case study opened', { project: p.title }) }}>
                Read the case study
              </a>
            )}
            {p.links.map((l, j) => (
              <a
                key={l.href + j}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`btn ${j === 0 ? 'btn--red' : 'btn--ghost'}`}
                onClick={() => event('Project link', { project: p.title, link: l.label })}
              >
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
  const withCase = projects.filter((p) => p.caseStudy)

  return (
    <Section id="projects" className="block--projects">
      <SectionHead number="02" kicker="Projects" title="Things I have shipped">
        <p>A full-stack site my movie club uses every week, a Roblox fighting game with real players, a client site that is live for a friend’s business, and a travel booking app from Temple. Scroll through the stack. Each card has a walkthrough, clips or screenshots, and links to the live build.</p>
      </SectionHead>

      <div className="wrap">
        <div className="stack">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} cardRef={refs[i]} nextRef={refs[i + 1]} stack={stack} />
          ))}
        </div>

        {withCase.map((p) => <CaseStudy key={p.slug} project={p} />)}

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
