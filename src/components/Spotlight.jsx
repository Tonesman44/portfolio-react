import { useEffect } from 'react'

// A soft red spotlight that follows the pointer across the black background.
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const root = document.documentElement
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    const paint = () => {
      raf = 0
      root.style.setProperty('--mx', `${x}px`)
      root.style.setProperty('--my', `${y}px`)
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return <div className="spot" aria-hidden="true" />
}
