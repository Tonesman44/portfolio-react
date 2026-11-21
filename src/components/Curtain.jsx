import { useEffect } from 'react'
import { useReducedMotion } from 'motion/react'
import heroPhoto from '../assets/photos/hero-graduation.jpg'

const MAX_WAIT = 1400 // never hold the page longer than this, even on a slow connection

// The curtain itself is plain HTML in index.html, so it covers the page from the very
// first paint (no flash of the hero before the wipe). This waits for the display fonts
// and the hero photo, then lifts it with a CSS transform and calls onLift.
export default function Curtain({ onLift }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = document.getElementById('curtain')
    let done = false
    const lift = () => {
      if (done) return
      done = true
      if (!el || reduce) {
        el?.remove()
        onLift()
        return
      }
      // Two frames so the browser has painted the settled page under the curtain first.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.classList.add('curtain--go')
        setTimeout(onLift, 260) // the hero starts as the wipe passes over it
        el.addEventListener('transitionend', () => el.remove(), { once: true })
        setTimeout(() => el.remove(), 1500)
      }))
    }

    const img = new Image()
    img.src = heroPhoto
    const fonts = document.fonts
      ? Promise.all([
          document.fonts.load('900 100px "Big Shoulders Display"'),
          document.fonts.load('800 20px "Big Shoulders Display"'),
          document.fonts.load('400 16px "Schibsted Grotesk"'),
          document.fonts.load('700 16px "Schibsted Grotesk"'),
        ])
      : Promise.resolve()
    const decode = img.decode ? img.decode().catch(() => {}) : Promise.resolve()

    Promise.all([fonts, decode]).then(lift, lift)
    const cap = setTimeout(lift, MAX_WAIT)
    return () => clearTimeout(cap)
  }, [onLift, reduce])

  return null
}
