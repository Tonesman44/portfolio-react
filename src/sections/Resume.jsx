import { FaDownload, FaFileWord, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Reveal, { RevealList } from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
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
    <Section id="resume">
      <SectionHead number="05" kicker="Resume" title="One page, two formats">
        <p>Updated {site.resumeUpdated}. Grab whichever format you need.</p>
      </SectionHead>

      <div className="wrap resume">
        <Reveal from="left" amount={0.3}>
          <Tilt max={4} className="resume__tilt">
            <a className="resume__paper" href={site.resumePdf} target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab">
              <img src={preview} alt="Preview of Antonio Fabrizio’s one-page resume" loading="lazy" />
            </a>
          </Tilt>
        </Reveal>

        <aside className="resume__side">
          <RevealList className="resume__actions" from="right">
            <a className="btn btn--red btn--block" href={site.resumePdf} download><FaDownload aria-hidden="true" /> Download PDF</a>
            <a className="btn btn--ghost btn--block" href={site.resumeDocx} download><FaFileWord aria-hidden="true" /> Download Word</a>
            <a className="textlink" href={site.resumePdf} target="_blank" rel="noreferrer">Open in a new tab <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </RevealList>
          <RevealList className="glance" from="right" stagger={0.06}>
            {glance.map(([k, v]) => (
              <div key={k} className="glance__row"><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </RevealList>
        </aside>
      </div>
    </Section>
  )
}
