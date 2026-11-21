// Rendered mock screens for flows the public build hides behind a login. Styled to look like the real apps,
// scaled with container-query units so they read the same at any card size.

const AspShell = ({ children, active }) => (
  <div className="mk mk--asp">
    <header className="mk-asp__nav">
      <span className="mk-asp__brand">ActiveStays<i>Planned</i></span>
      <span className="mk-asp__links"><b className={active === 'home' ? 'on' : ''}>Home</b><b>Search ▾</b></span>
      <span className="mk-asp__user">Antonio F. <b>Log out</b></span>
    </header>
    <div className="mk-asp__body">{children}</div>
    <footer className="mk-asp__foot">© 2026 Antonio Fabrizio &amp; Charles Toothaker | ActiveStays<i>Planned</i>MVC</footer>
  </div>
)

const screens = {
  'asp-checkout': () => (
    <AspShell>
      <div className="mk-asp__cols">
        <section className="mk-card">
          <h3>Checkout</h3>
          <p className="mk-muted">Traveler information</p>
          <div className="mk-grid2">
            <label>First name<span className="mk-input">Antonio</span></label>
            <label>Last name<span className="mk-input">Fabrizio</span></label>
            <label>Email<span className="mk-input">antonio@example.com</span></label>
            <label>Phone<span className="mk-input">(215) 555-0144</span></label>
          </div>
          <p className="mk-muted mk-mt">Payment</p>
          <div className="mk-grid2">
            <label className="mk-span2">Card number<span className="mk-input">•••• •••• •••• 4242</span></label>
            <label>Expiration<span className="mk-input">09 / 28</span></label>
            <label>CVC<span className="mk-input">•••</span></label>
          </div>
          <span className="mk-btn mk-btn--asp mk-btn--wide">Complete booking</span>
        </section>
        <aside className="mk-card mk-card--tint">
          <h4>Trip summary</h4>
          <p className="mk-muted">Philadelphia, PA · Nov 10 to Nov 14, 2026</p>
          <ul className="mk-lines">
            <li><span>🏨 The Ritz-Carlton · Deluxe King, 4 nights</span><b>$1,556.00</b></li>
            <li><span>✈️ Delta DL601 · LAS to PHL</span><b>$355.00</b></li>
            <li><span>🚗 Hertz · Midsize, 4 days</span><b>$212.00</b></li>
            <li><span>🎟️ 76ers vs. Celtics · Sec 112</span><b>$148.00</b></li>
          </ul>
          <ul className="mk-lines mk-lines--sum">
            <li><span>Subtotal</span><b>$2,271.00</b></li>
            <li><span>Taxes and fees</span><b>$227.10</b></li>
            <li className="mk-total"><span>Total</span><b>$2,498.10</b></li>
          </ul>
        </aside>
      </div>
    </AspShell>
  ),

  'asp-confirm': () => (
    <AspShell>
      <div className="mk-asp__center">
        <span className="mk-check">✓</span>
        <h3>Booking confirmed!</h3>
        <p className="mk-muted">Confirmation <b>ASP-2026-04817</b> · A receipt was sent to antonio@example.com</p>
        <div className="mk-card mk-card--itin">
          <ul className="mk-itin">
            <li><i>🏨</i><span><b>The Ritz-Carlton</b>Check-in Nov 10 · Check-out Nov 14 · Deluxe King</span><em>Confirmed</em></li>
            <li><i>✈️</i><span><b>Delta DL601</b>Las Vegas to Philadelphia · Nov 10, 6:00 AM · 5h 35m</span><em>Confirmed</em></li>
            <li><i>🚗</i><span><b>Hertz midsize</b>Pick up PHL Nov 10 · Return Nov 14</span><em>Confirmed</em></li>
            <li><i>🎟️</i><span><b>76ers vs. Celtics</b>Wells Fargo Center · Nov 12, 7:00 PM · Section 112</span><em>Confirmed</em></li>
          </ul>
        </div>
        <div className="mk-row">
          <span className="mk-btn mk-btn--asp">View my trips</span>
          <span className="mk-btn mk-btn--ghost">Find restaurants on Yelp</span>
        </div>
      </div>
    </AspShell>
  ),

}

export default function AppMock({ screen }) {
  const Screen = screens[screen]
  if (!Screen) return null
  return (
    <div className="mock" role="img" aria-label={`Rendered mock of the ${screen.replace(/-/g, ' ')} screen`}>
      <Screen />
    </div>
  )
}
