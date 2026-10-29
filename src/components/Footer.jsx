import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from 'react-icons/fa6'
import { site } from '../data/site.js'
import { useCut } from './Cut.jsx'

export default function Footer() {
  const cutTo = useCut()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Antonio Fabrizio. Built with React, Vite, and Motion.</p>
        <div className="footer__links">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href={`mailto:${site.email}`} aria-label="Email"><FaEnvelope /></a>
          <a href="#top" onClick={(e) => { e.preventDefault(); cutTo('top') }} aria-label="Back to top" className="footer__top"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  )
}
