import { useEffect, useState } from 'react'
import { MotionConfig, useReducedMotion } from 'motion/react'
import CutProvider from './components/Cut.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Spotlight from './components/Spotlight.jsx'
import Stinger from './components/Stinger.jsx'
import Ticker from './components/Ticker.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'
import { scrollToId } from './lib/scroll.js'

function Intro() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(!reduce)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100)
    return () => clearTimeout(t)
  }, [])
  return show ? <Stinger intro /> : null
}

export default function App() {
  // Deep links like /#projects still land on the right section.
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (id && id !== 'top') {
      const t = setTimeout(() => scrollToId(id, { instant: true }), 80)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <CutProvider>
        <a className="skip" href="#main">Skip to content</a>
        <Spotlight />
        <Nav />
        <main id="main">
          <Hero />
          <Ticker />
          <About />
          <Projects />
          <Ticker tone="bone" reverse />
          <Experience />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <Intro />
      </CutProvider>
    </MotionConfig>
  )
}
