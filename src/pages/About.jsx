import { FaTrophy, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import PageHead from '../components/PageHead.jsx'
import Plate from '../components/Plate.jsx'
import { site } from '../data/site.js'
import owl from '../assets/logos/temple-esports.png'
import lab from '../assets/photos/esports-lab.jpg'
import match from '../assets/photos/esports-match.jpg'
import broadcast from '../assets/photos/esports-broadcast.jpg'
import desk from '../assets/photos/esports-desk.jpg'

const duties = [
  'Directed competitive operations across multiple esports teams, overseeing team leads, player development, and program strategy.',
  'Managed game-specific team leaders to coordinate recruitment, scheduling, and competitive performance.',
  'Organized and hosted a collegiate LAN tournament in Center City Philadelphia, bringing together teams from multiple schools.',
  'Represented the program as a player on the Marvel Rivals team.',
]

export default function About() {
  return (
    <>
      <PageHead title="About me">
        <p>
          I’m a full stack engineer at Excellis Interactive and a 2026 graduate of Temple University, where I studied Information Science and Technology. I started out at Suitable writing test suites and migrating Angular to React. Now I work across the whole stack: .NET APIs, Angular and Ionic front ends, and the AI tooling that takes our team from a business request to sprint-ready tickets.
        </p>
      </PageHead>

      <section className="esports wrap" aria-labelledby="esports-title">
        <div className="esports__head">
          <img src={owl} alt="" className="esports__logo" />
          <div>
            <h2 id="esports-title" className="h2">Temple Esports</h2>
            <p className="esports__lede">Esports taught me as much about running a team as any job has.</p>
            <div className="esports__plates">
              <Plate>Head of competitive operations</Plate>
              <Plate tone="dark">Marvel Rivals player</Plate>
            </div>
          </div>
        </div>

        <div className="mosaic">
          <figure className="mosaic__a"><img src={lab} alt="Temple players lined up at their stations in the esports lab" /></figure>
          <figure className="mosaic__b"><img src={broadcast} alt="Stream overlay reading Temple Cherry versus Drexel Gold" /></figure>
          <figure className="mosaic__c"><img src={match} alt="A Temple player mid-match with a teammate watching" /></figure>
          <figure className="mosaic__d"><img src={desk} alt="Casters talking at the Temple broadcast desk" /></figure>
        </div>

        <a className="champ" href={site.necc} target="_blank" rel="noreferrer">
          <FaTrophy className="champ__icon" aria-hidden="true" />
          <span className="champ__text">
            <span className="champ__title">2026 NECC Division II National Champions</span>
            <span className="champ__sub">Marvel Rivals. See the bracket on Liquipedia</span>
          </span>
          <FaArrowUpRightFromSquare className="champ__out" aria-hidden="true" />
        </a>

        <div className="esports__body">
          <div className="prose">
            <p>
              As head of competitive operations, I ran the machinery behind every Temple team: who we recruited, when we practiced, how players developed, and where the program was headed. Each game had its own team lead, and my job was to keep all of them pulling in the same direction.
            </p>
            <p>
              I also brought schools together in person, organizing and hosting a collegiate LAN tournament in Center City Philadelphia. And I kept my own hands on the keyboard as a player on the Marvel Rivals roster that went on to win the NECC Division II national title in 2026.
            </p>
          </div>
          <ul className="ticks">
            {duties.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
