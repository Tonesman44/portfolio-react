import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { nav } from '../data/site.js'
import useActiveSection from '../hooks/useActiveSection.js'
import { useCut } from './Cut.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => nav.map((n) => n.id), [])
  const active = useActiveSection(ids)
  const cutTo = useCut()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.4 })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    cutTo(id)
  }

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a href="#top" onClick={go('top')} className="nav__mark" aria-label="Antonio Fabrizio, back to top">
            <span className="nav__mark-plate">AF</span>
            <span className="nav__mark-name">Antonio Fabrizio</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) => {
              const isActive = active === item.id
              return (
                <a key={item.id} href={`#${item.id}`} onClick={go(item.id)} className={`nav__link ${isActive ? 'active' : ''}`} aria-current={isActive ? 'location' : undefined}>
                  {isActive && <motion.span layoutId="nav-active" className="nav__active" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />}
                  <span className="nav__label">{item.label}</span>
                </a>
              )
            })}
          </nav>

          <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <motion.span className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="nav__sheet"
            aria-label="Mobile"
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.3, 1] }}
          >
            {nav.map((item, i) => (
              <motion.div key={item.id} initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.12 + i * 0.04 }}>
                <a href={`#${item.id}`} onClick={go(item.id)} className={`nav__sheet-link ${active === item.id ? 'active' : ''}`}>
                  <span className="nav__sheet-num">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
