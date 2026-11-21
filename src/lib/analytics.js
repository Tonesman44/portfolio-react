// Privacy-friendly analytics through Vercel Web Analytics: no cookies, no personal data.
//
// The site is one page, so instead of URL changes we report "virtual" page views the first time a
// visitor reaches each section (/about, /projects, ...) or each project card (/projects/<slug>).
// Page views work on Vercel's free Hobby plan. Custom events (event() below) only show up on
// Vercel Pro; on Hobby they are dropped without errors.
//
// Turn it on in Vercel: Project > Analytics > Enable. Nothing loads in `npm run dev`.
import { inject, pageview, track } from '@vercel/analytics'

let started = false
const seen = new Set()

export function startAnalytics() {
  if (started || !import.meta.env.PROD) return
  started = true
  inject({ mode: 'production', disableAutoTrack: true, framework: 'react' })
  viewOnce('/')
}

// Counts a virtual page view once per visit.
export function viewOnce(path) {
  if (!started || seen.has(path)) return
  seen.add(path)
  pageview({ route: path, path })
}

export function event(name, data) {
  if (!started) return
  track(name, data)
}
