import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Stinger from './components/Stinger.jsx'
import Page from './components/Page.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Experience from './pages/Experience.jsx'
import Skills from './pages/Skills.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const titles = {
  '/': 'Antonio Fabrizio | Full Stack Engineer',
  '/about': 'About | Antonio Fabrizio',
  '/projects': 'Projects | Antonio Fabrizio',
  '/experience': 'Experience | Antonio Fabrizio',
  '/skills': 'Skills | Antonio Fabrizio',
  '/resume': 'Resume | Antonio Fabrizio',
  '/contact': 'Contact | Antonio Fabrizio',
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[location.pathname] ?? 'Antonio Fabrizio'
  }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <Stinger key={location.key} locationKey={location.key} />
      <main id="main">
        <Page key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Page>
      </main>
      <Footer />
    </MotionConfig>
  )
}
