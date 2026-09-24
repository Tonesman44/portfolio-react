import { FaDownload, FaFileWord, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import preview from '../assets/photos/resume-preview.jpg'
import { site } from '../data/site.js'

const glance = [
  ['Now', 'Full stack engineer, Excellis Interactive'],
  ['Before', 'Software engineer intern, Suitable'],
  ['Education', 'B.S. Information Science and Technology, Temple University, 3.5 GPA'],
  ['Leadership', 'Head of competitive operations, Temple Esports'],
]

export default function Resume() {
  return (
    <>
      <PageHead title="Resume">
        <p>One page, updated {site.resumeUpdated}. Grab whichever format you need.</p>
      </PageHead>

      <div className="wrap resume">
        <a className="resume__paper" href={site.resumePdf} target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab">
          <img src={preview} alt="Preview of Antonio Fabrizio’s one-page resume" />
        </a>

        <aside className="resume__side">
          <div className="resume__actions">
            <a className="btn btn--red btn--block" href={site.resumePdf} download><FaDownload aria-hidden="true" /> Download PDF</a>
            <a className="btn btn--ghost btn--block" href={site.resumeDocx} download><FaFileWord aria-hidden="true" /> Download Word</a>
            <a className="textlink" href={site.resumePdf} target="_blank" rel="noreferrer">Open in a new tab <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </div>
          <dl className="glance">
            {glance.map(([k, v]) => (
              <div key={k} className="glance__row"><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  )
}
