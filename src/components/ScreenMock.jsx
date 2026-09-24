// Wireframe of an app screen, used when a slide has no screenshot yet.
const L = ({ w = 100, t = 'line' }) => <span className={`sm-${t}`} style={{ width: `${w}%` }} />
const rows = (n, fn) => Array.from({ length: n }, (_, i) => fn(i))

const layouts = {
  search: () => (
    <div className="sm sm--search">
      <div className="sm-hero">
        <L w={46} t="title" />
        <L w={30} />
        <div className="sm-searchbar"><span className="sm-input" /><span className="sm-input sm-input--sm" /><span className="sm-btn" /></div>
        <div className="sm-chips">{rows(4, (i) => <span key={i} className="sm-chip" />)}</div>
      </div>
      <div className="sm-cards3">{rows(3, (i) => <div key={i} className="sm-card"><span className="sm-img" /><L w={70} /><L w={40} /></div>)}</div>
    </div>
  ),
  list: () => (
    <div className="sm sm--list">
      <aside className="sm-side">{rows(7, (i) => <div key={i} className="sm-check"><span className={i % 3 === 0 ? 'on' : ''} /><L w={50 + (i % 3) * 14} /></div>)}</aside>
      <div className="sm-rows">
        {rows(4, (i) => (
          <div key={i} className={`sm-row ${i === 1 ? 'is-hot' : ''}`}>
            <span className="sm-img" />
            <div className="sm-row__body"><L w={60} t="title" /><L w={80} /><L w={45} /></div>
            <div className="sm-row__price"><span className="sm-price" /><span className="sm-btn" /></div>
          </div>
        ))}
      </div>
    </div>
  ),
  detail: () => (
    <div className="sm sm--detail">
      <div className="sm-gallery"><span className="sm-img sm-img--big" /><div className="sm-thumbs">{rows(4, (i) => <span key={i} className="sm-img" />)}</div></div>
      <div className="sm-info">
        <L w={75} t="title" /><L w={40} />
        <div className="sm-stars">{rows(5, (i) => <span key={i} className={i < 4 ? 'on' : ''} />)}</div>
        {rows(4, (i) => <L key={i} w={95 - i * 12} />)}
        <div className="sm-pricebox"><span className="sm-price" /><span className="sm-btn sm-btn--wide" /></div>
      </div>
    </div>
  ),
  form: () => (
    <div className="sm sm--form">
      <div className="sm-fields">
        <L w={40} t="title" />
        {rows(4, (i) => <div key={i} className="sm-field"><L w={24} /><span className="sm-input" /></div>)}
        <span className="sm-btn sm-btn--wide" />
      </div>
      <aside className="sm-summary">{rows(5, (i) => <div key={i} className="sm-sumrow"><L w={45} /><L w={18} /></div>)}<div className="sm-sumtotal" /></aside>
    </div>
  ),
  confirm: () => (
    <div className="sm sm--confirm">
      <span className="sm-check-big" />
      <L w={36} t="title" />
      <L w={52} />
      <div className="sm-summary sm-summary--inline">{rows(3, (i) => <div key={i} className="sm-sumrow"><L w={45} /><L w={18} /></div>)}</div>
    </div>
  ),
  grid: () => (
    <div className="sm sm--grid">
      <div className="sm-toolbar"><L w={22} t="title" /><span className="sm-input sm-input--sm" /></div>
      <div className="sm-posters">{rows(10, (i) => <div key={i} className={`sm-poster ${i === 2 ? 'is-hot' : ''}`}><span className="sm-img" /><L w={80} /></div>)}</div>
    </div>
  ),
  dashboard: () => (
    <div className="sm sm--dash">
      <div className="sm-stats">{rows(3, (i) => <div key={i} className="sm-stat"><L w={50} /><span className="sm-num" /></div>)}</div>
      <div className="sm-dashgrid">
        <div className="sm-chart">{[40, 65, 50, 85, 60, 95, 70].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
        <div className="sm-rows sm-rows--tight">{rows(4, (i) => <div key={i} className="sm-row"><L w={60} /><span className={`sm-badge ${i === 0 ? 'is-hot' : ''}`} /></div>)}</div>
      </div>
    </div>
  ),
  table: () => (
    <div className="sm sm--table">
      <div className="sm-toolbar"><L w={22} t="title" /><span className="sm-btn" /></div>
      <div className="sm-table">
        <div className="sm-tr sm-tr--head">{rows(5, (i) => <L key={i} w={60} />)}</div>
        {rows(6, (r) => <div key={r} className={`sm-tr ${r === 2 ? 'is-hot' : ''}`}>{rows(5, (i) => <L key={i} w={40 + ((r + i) % 4) * 14} />)}</div>)}
      </div>
    </div>
  ),
}

export default function ScreenMock({ layout = 'grid', host = 'app.local', path = '/' }) {
  const Body = layouts[layout] ?? layouts.grid
  return (
    <div className="screen" role="img" aria-label={`Wireframe of the ${layout} screen`}>
      <div className="screen__bar">
        <span className="screen__dots"><i /><i /><i /></span>
        <span className="screen__url">{host}{path}</span>
      </div>
      <div className="screen__body"><Body /></div>
    </div>
  )
}
