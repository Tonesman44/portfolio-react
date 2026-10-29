import { ticker } from '../data/site.js'

// A broadcast-style marquee strip. The list is doubled so the loop is seamless.
export default function Ticker({ items = ticker, tone = 'red', reverse = false }) {
  const list = [...items, ...items]
  return (
    <div className={`ticker ticker--${tone} ${reverse ? 'ticker--reverse' : ''}`} aria-hidden="true">
      <div className="ticker__track">
        {list.map((t, i) => (
          <span key={i} className="ticker__item">
            {t}
            <i className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
