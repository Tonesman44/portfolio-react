import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import Plate from '../components/Plate.jsx'
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
    <div className={`xp__photos xp__photos--${job.photos.length}`}>
      {job.photos.map((p) => (
        <figure key={p.alt} className={p.span === 'wide' ? 'is-wide' : ''}>
          <img src={p.src} alt={p.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <PageHead title="Experience">
        <p>Two engineering roles and one very busy esports program.</p>
      </PageHead>

      <div className="wrap xplist">
        {experience.map((job, i) => (
          <article key={job.id} className={`xp ${i % 2 ? 'xp--flip' : ''}`} aria-labelledby={`${job.id}-title`}>
            <div className="xp__text">
              <header className="xp__head">
                <span className="xp__logo"><img src={job.logo} alt={`${job.company} logo`} /></span>
                <div>
                  <h2 id={`${job.id}-title`} className="xp__company">{job.company}</h2>
                  <p className="xp__meta">{job.dates}. {job.place}</p>
                </div>
              </header>
              <Plate className="xp__role">{job.role}</Plate>
              <ul className="ticks">{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <ul className="tags">{job.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              {job.more && <Link to={job.more.to} className="textlink">{job.more.label} <FaArrowRight aria-hidden="true" /></Link>}
            </div>
            <Photos job={job} />
          </article>
        ))}
      </div>
    </>
  )
}
