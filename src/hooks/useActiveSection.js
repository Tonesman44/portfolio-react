import { useEffect, useState } from 'react'
import { NAV_H } from '../lib/scroll.js'

// Scroll spy: the active section is the last one whose top has passed a line a third of the way down the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const line = window.scrollY + NAV_H + window.innerHeight * 0.33
      let current = ids[0]
      for (const id of ids) {
        const el = id === 'top' ? document.body : document.getElementById(id)
        if (!el) continue
        const top = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = id
      }
      // Bottom of the page always lights the last section.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = ids[ids.length - 1]
      setActive((prev) => (prev === current ? prev : current))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure) }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ids])

  return active
}
