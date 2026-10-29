// Rendered mock screens for projects without a public build. Styled to look like the real apps,
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

const PetShell = ({ children, role = 'customer', active }) => (
  <div className="mk mk--pet">
    <aside className="mk-pet__side">
      <span className="mk-pet__brand"><i>🐾</i> Pet Adoption Center</span>
      <nav>
        {(role === 'staff'
          ? ['Dashboard', 'Applications', 'Pets', 'Users', 'Emails', 'Reports']
          : ['Find a pet', 'My applications', 'Adoption stats', 'Account']
        ).map((n) => <b key={n} className={n === active ? 'on' : ''}>{n}</b>)}
      </nav>
      <span className="mk-pet__who">{role === 'staff' ? 'Employee · Dana K.' : 'Customer · Antonio F.'}</span>
    </aside>
    <div className="mk-pet__main">{children}</div>
  </div>
)

const PETS = [
  { emoji: '🐶', name: 'Luna', breed: 'Beagle mix', age: '2 yrs', size: 'Medium', status: 'Available' },
  { emoji: '🐱', name: 'Pepper', breed: 'Domestic shorthair', age: '4 yrs', size: 'Small', status: 'Available' },
  { emoji: '🐕', name: 'Max', breed: 'Lab retriever', age: '5 yrs', size: 'Large', status: 'Pending' },
  { emoji: '🐈', name: 'Olive', breed: 'Tabby', age: '1 yr', size: 'Small', status: 'Available' },
  { emoji: '🐩', name: 'Mochi', breed: 'Mini poodle', age: '3 yrs', size: 'Small', status: 'Available' },
  { emoji: '🐰', name: 'Clover', breed: 'Holland lop', age: '2 yrs', size: 'Small', status: 'Adopted' },
]

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

  'pet-login': () => (
    <div className="mk mk--pet mk--pet-login">
      <div className="mk-pet__hero">
        <span className="mk-pet__brand mk-pet__brand--big"><i>🐾</i> Pet Adoption Center</span>
        <p>Every pet deserves a second chance. Sign in to find yours.</p>
        <div className="mk-pet__stats"><b>24</b><span>pets available</span><b>311</b><span>adoptions to date</span><b>9</b><span>days to adopt, on average</span></div>
      </div>
      <div className="mk-card mk-card--login">
        <h3>Sign in</h3>
        <div className="mk-seg"><b className="on">Customer</b><b>Employee</b></div>
        <label>Username<span className="mk-input">antonio.f</span></label>
        <label>Password<span className="mk-input">••••••••••</span></label>
        <span className="mk-btn mk-btn--pet mk-btn--wide">Sign in</span>
        <p className="mk-muted">New here? <b>Create an account</b></p>
      </div>
    </div>
  ),

  'pet-browse': () => (
    <PetShell active="Find a pet">
      <div className="mk-toolbar">
        <h3>Find a pet</h3>
        <div className="mk-filters">
          <span className="mk-select">Species: Any ▾</span>
          <span className="mk-select">Breed: Any ▾</span>
          <span className="mk-select">Age: Any ▾</span>
          <span className="mk-select on">Status: Available ▾</span>
        </div>
      </div>
      <div className="mk-pets">
        {PETS.map((p) => (
          <article key={p.name} className={`mk-pet ${p.status !== 'Available' ? 'is-off' : ''}`}>
            <span className="mk-pet__pic">{p.emoji}</span>
            <b>{p.name}</b>
            <span className="mk-muted">{p.breed} · {p.age} · {p.size}</span>
            <em className={`mk-badge mk-badge--${p.status.toLowerCase()}`}>{p.status}</em>
            <span className={`mk-btn mk-btn--pet mk-btn--sm ${p.status !== 'Available' ? 'is-dim' : ''}`}>Apply to adopt</span>
          </article>
        ))}
      </div>
    </PetShell>
  ),

  'pet-apply': () => (
    <PetShell active="Find a pet">
      <div className="mk-asp__cols mk-asp__cols--pet">
        <section className="mk-card">
          <h3>Adoption application</h3>
          <div className="mk-grid2">
            <label>Full name<span className="mk-input">Antonio Fabrizio</span></label>
            <label>Phone<span className="mk-input">(215) 555-0144</span></label>
            <label className="mk-span2">Address<span className="mk-input">412 Fairmount Ave, Philadelphia, PA 19123</span></label>
            <label>Housing<span className="mk-input">Apartment, with yard access ▾</span></label>
            <label>Other pets<span className="mk-input">None ▾</span></label>
            <label className="mk-span2">Why Luna?<span className="mk-input mk-input--tall">We work from home most days and walk the river trail every morning. Looking for a medium dog who can keep up.</span></label>
          </div>
          <span className="mk-btn mk-btn--pet">Submit application</span>
        </section>
        <aside className="mk-card mk-card--tint">
          <span className="mk-pet__pic mk-pet__pic--big">🐶</span>
          <h4>Luna</h4>
          <p className="mk-muted">Beagle mix · 2 years · Medium · Female</p>
          <ul className="mk-lines"><li><span>Spayed</span><b>Yes</b></li><li><span>Vaccinated</span><b>Up to date</b></li><li><span>Good with kids</span><b>Yes</b></li><li><span>Adoption fee</span><b>$150</b></li></ul>
          <p className="mk-muted mk-small">Applications are reviewed by staff within 2 business days. You will get an email either way.</p>
        </aside>
      </div>
    </PetShell>
  ),

  'pet-staff': () => (
    <PetShell role="staff" active="Dashboard">
      <h3>Dashboard</h3>
      <div className="mk-stats">
        <div><span>Available pets</span><b>24</b></div>
        <div className="hot"><span>Pending applications</span><b>7</b></div>
        <div><span>Adoptions this month</span><b>11</b></div>
        <div><span>Avg. days to adopt</span><b>9</b></div>
      </div>
      <div className="mk-asp__cols mk-asp__cols--dash">
        <section className="mk-card">
          <h4>Pending applications</h4>
          <ul className="mk-apps">
            <li><span><b>Luna</b> · Antonio Fabrizio</span><em>Today</em><i className="ok">Approve</i><i className="no">Deny</i></li>
            <li><span><b>Max</b> · Priya Raman</span><em>Yesterday</em><i className="ok">Approve</i><i className="no">Deny</i></li>
            <li><span><b>Mochi</b> · Chris Dole</span><em>2 days ago</em><i className="ok">Approve</i><i className="no">Deny</i></li>
            <li className="done"><span><b>Pepper</b> · Elena Torres</span><em>Approved · confirmation email sent ✓</em></li>
          </ul>
        </section>
        <aside className="mk-card">
          <h4>Adoptions by month</h4>
          <div className="mk-chart">{[6, 9, 7, 12, 10, 14, 11].map((h, i) => <span key={i} style={{ height: `${h * 6}%` }} className={i === 5 ? 'hot' : ''} />)}</div>
          <p className="mk-muted mk-small">Apr to Oct 2026</p>
        </aside>
      </div>
    </PetShell>
  ),

  'pet-records': () => (
    <PetShell role="staff" active="Pets">
      <div className="mk-toolbar">
        <h3>Records <span className="mk-seg mk-seg--inline"><b className="on">Pets</b><b>Users</b></span></h3>
        <div className="mk-row"><span className="mk-btn mk-btn--pet mk-btn--sm">+ Add</span><span className="mk-btn mk-btn--ghost mk-btn--sm">Modify</span><span className="mk-btn mk-btn--ghost mk-btn--sm">Delete</span></div>
      </div>
      <table className="mk-table">
        <thead><tr><th>ID</th><th>Name</th><th>Species</th><th>Breed</th><th>Age</th><th>Status</th></tr></thead>
        <tbody>
          {PETS.map((p, i) => (
            <tr key={p.name} className={i === 0 ? 'is-sel' : ''}>
              <td>{1041 + i}</td><td>{p.name}</td><td>{['Dog', 'Cat', 'Dog', 'Cat', 'Dog', 'Rabbit'][i]}</td><td>{p.breed}</td><td>{p.age}</td>
              <td><em className={`mk-badge mk-badge--${p.status.toLowerCase()}`}>{p.status}</em></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mk-muted mk-small">Showing 6 of 31 pets · Row 1041 selected</p>
    </PetShell>
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
