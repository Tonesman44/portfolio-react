import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { nav } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" onClick={close} className="nav__mark" aria-label="Antonio Fabrizio, home">
          <span className="nav__mark-plate">AF</span>
          <span className="nav__mark-name">Antonio Fabrizio</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav__link">
              {({ isActive }) => (
                <>
                  {isActive && <motion.span layoutId="nav-active" className="nav__active" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />}
                  <span className="nav__label">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
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
              <motion.div key={item.to} initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.12 + i * 0.04 }}>
                <NavLink to={item.to} end={item.end} onClick={close} className="nav__sheet-link">
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
