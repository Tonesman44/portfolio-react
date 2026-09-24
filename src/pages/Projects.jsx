import { Link } from 'react-router-dom'
import { FaArrowRight, FaGithub } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import ScreenMock from '../components/ScreenMock.jsx'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'

export default function Projects() {
  return (
    <>
      <PageHead title="Projects">
        <p>Each project has its own walkthrough, screen by screen, with links to the live build or code.</p>
      </PageHead>

      <div className="wrap projlist">
        {projects.map((p) => {
          const cover = p.slides[0]
          return (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="proj">
              <div className="proj__cover">
                {cover.image ? <img src={cover.image} alt="" /> : <ScreenMock layout={cover.layout} path={cover.path} host={`${p.slug}.app`} />}
              </div>
              <div className="proj__body">
                <p className="proj__context">{p.context}</p>
                <h2 className="proj__title">{p.title}</h2>
                <p className="proj__tagline">{p.tagline}</p>
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <span className="proj__go">View walkthrough <FaArrowRight aria-hidden="true" /></span>
              </div>
            </Link>
          )
        })}

        <a href={site.github} target="_blank" rel="noreferrer" className="proj proj--more">
          <FaGithub className="proj__gh" aria-hidden="true" />
          <span>
            <span className="proj__title">More on GitHub</span>
            <span className="proj__tagline">Coursework, experiments, and everything in between at @Tonesman44.</span>
          </span>
        </a>
      </div>
    </>
  )
}
