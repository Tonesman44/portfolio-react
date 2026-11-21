import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa6'
import Reveal, { RevealList } from './Reveal.jsx'
import { event } from '../lib/analytics.js'
import { caseStudies } from '../data/caseStudies.js'

const ease = [0.2, 0.8, 0.2, 1]

// Tabbed write-up of a project's hardest problems: problem, what I built, a real code excerpt, result.
export default function CaseStudy({ project }) {
  const cs = caseStudies[project.slug]
  const [active, setActive] = useState(cs?.parts[0].id)
  if (!cs) return null
  const part = cs.parts.find((x) => x.id === active)

  const pick = (id) => {
    setActive(id)
    event('Case study tab', { project: project.title, tab: id })
  }

  return (
    <section id={`case-${project.slug}`} className="case" aria-labelledby={`case-${project.slug}-title`}>
      <Reveal className="case__head">
        <p className="case__kicker">{cs.kicker} · {project.title}</p>
        <h3 id={`case-${project.slug}-title`} className="case__title">{cs.title}</h3>
        <p className="case__intro">{cs.intro}</p>
      </Reveal>

      <RevealList className="arch" from="left" stagger={0.09}>
        {cs.architecture.map((n, i) => (
          <div key={n.name} className="arch__node">
            <span className="arch__name">{n.name}</span>
            <span className="arch__detail">{n.detail}</span>
            {i < cs.architecture.length - 1 && <FaArrowRight className="arch__arrow" aria-hidden="true" />}
            {n.name === 'Render' && cs.sidecar && (
              <span className="arch__side"><b>{cs.sidecar.name}</b>{cs.sidecar.detail}</span>
            )}
          </div>
        ))}
      </RevealList>

      <div className="case__tabs" role="tablist" aria-label="Hard problems">
        {cs.parts.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={active === x.id}
            aria-controls={`panel-${x.id}`}
            className={`case__tab ${active === x.id ? 'is-on' : ''}`}
            onClick={() => pick(x.id)}
          >
            <span className="case__tabnum">{String(i + 1).padStart(2, '0')}</span>
            {x.tab}
            {active === x.id && <motion.span layoutId={`case-tab-${project.slug}`} className="case__tabbar" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={part.id}
          id={`panel-${part.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${part.id}`}
          className="case__panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease }}
        >
          <div className="case__text">
            <h4 className="case__label">The problem</h4>
            <p>{part.problem}</p>
            <h4 className="case__label">What I built</h4>
            <ul className="ticks">{part.solution.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="case__result"><b>Result.</b> {part.result}</p>
          </div>
          <figure className="code">
            <figcaption className="code__bar">
              <span className="screen__dots"><i /><i /><i /></span>
              <span className="code__file">{part.code.file}</span>
              <span className="code__lang">{part.code.lang}</span>
            </figcaption>
            <pre className="code__body"><code>{part.code.text}</code></pre>
          </figure>
        </motion.div>
      </AnimatePresence>

      <RevealList className="case__foot" stagger={0.08}>
        {cs.footer.map((f) => (
          <div key={f.label} className="case__stat"><b>{f.n}</b><span>{f.label}</span></div>
        ))}
      </RevealList>
    </section>
  )
}
