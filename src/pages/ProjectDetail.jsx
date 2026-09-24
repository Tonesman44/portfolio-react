import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import Slideshow from '../components/Slideshow.jsx'
import { getProject, projects } from '../data/projects.js'
import NotFound from './NotFound.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const i = projects.indexOf(project)
  const next = projects[(i + 1) % projects.length]

  return (
    <>
      <div className="wrap back">
        <Link to="/projects" className="textlink"><FaArrowLeft aria-hidden="true" /> All projects</Link>
      </div>
      <PageHead title={project.title} kicker={project.context}>
        <p>{project.tagline}</p>
        <ul className="tags">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      </PageHead>

      <div className="wrap">
        <Slideshow slides={project.slides} host={`${project.slug}.app`} />
      </div>

      <section className="wrap detail">
        <div className="prose">
          <h2 className="h3">What it is</h2>
          <p>{project.summary}</p>
          <div className="detail__links">
            {project.links.map((l, j) => (
              <a key={l.href + j} href={l.href} target="_blank" rel="noreferrer" className={`btn ${j === 0 ? 'btn--red' : 'btn--ghost'}`}>
                {l.label} <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="h3">What I did</h2>
          <ul className="ticks">{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
      </section>

      <div className="wrap">
        <Link to={`/projects/${next.slug}`} className="nextup">
          <span className="nextup__label">Next project</span>
          <span className="nextup__title">{next.title}</span>
        </Link>
      </div>
    </>
  )
}
