import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Antonio Fabrizio. Built with React and a lot of Red Bull.</p>
        <div className="footer__links">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href={`mailto:${site.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  )
}
