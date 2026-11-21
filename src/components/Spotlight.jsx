import { useEffect, useRef } from 'react'

// A soft red spotlight that follows the pointer across the black background.
// The glow is one pre-painted element moved with a transform, so following the
// pointer never repaints the page.
export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    const paint = () => {
      raf = 0
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
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

  return (
    <div className="spot" aria-hidden="true">
      <div className="spot__glow" ref={ref} />
    </div>
  )
}
