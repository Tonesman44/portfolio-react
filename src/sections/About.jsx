import { motion } from 'motion/react'
import { FaTrophy, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Reveal, { RevealList } from '../components/Reveal.jsx'
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

const facts = [
  ['Now', 'Full stack engineer, Excellis Interactive'],
  ['Before', 'Software engineer intern, Suitable'],
  ['School', 'B.S. Information Science and Technology, Temple, 2026'],
  ['Side quest', 'Brainrot Brawl, a Roblox arena fighter'],
]

const mosaic = [
  { src: lab, alt: 'Temple players lined up at their stations in the esports lab', cls: 'mosaic__a' },
  { src: broadcast, alt: 'Stream overlay reading Temple Cherry versus Drexel Gold', cls: 'mosaic__b' },
  { src: match, alt: 'A Temple player mid-match with a teammate watching', cls: 'mosaic__c' },
  { src: desk, alt: 'Casters talking at the Temple broadcast desk', cls: 'mosaic__d' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHead number="01" kicker="About me" title="Engineer by day, operator by night">
        <p>
          I’m a full stack engineer at Excellis Interactive and a 2026 graduate of Temple University, where I studied Information Science and Technology. I started out at Suitable writing test suites and migrating Angular to React. Now I work across the whole stack: .NET APIs, Angular and Ionic front ends, and the AI tooling that takes our team from a business request to sprint-ready tickets.
        </p>
      </SectionHead>

      <div className="wrap about">
        <RevealList className="facts" from="left" stagger={0.07}>
          {facts.map(([k, v]) => (
            <div key={k} className="facts__row"><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </RevealList>

        <section className="esports" aria-labelledby="esports-title">
          <Reveal className="esports__head" from="up">
            <img src={owl} alt="" className="esports__logo" />
            <div>
              <h3 id="esports-title" className="h2">Temple Esports</h3>
              <p className="esports__lede">Esports taught me as much about running a team as any job has.</p>
              <div className="esports__plates">
                <Plate>Head of competitive operations</Plate>
                <Plate tone="dark">Marvel Rivals player</Plate>
              </div>
            </div>
          </Reveal>

          <div className="mosaic">
            {mosaic.map((m, i) => (
              <motion.figure
                key={m.src}
                className={m.cls}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <motion.img src={m.src} alt={m.alt} loading="lazy" whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} />
              </motion.figure>
            ))}
          </div>

          <Reveal from="up" amount={0.5}>
            <a className="champ" href={site.necc} target="_blank" rel="noreferrer">
              <FaTrophy className="champ__icon" aria-hidden="true" />
              <span className="champ__text">
                <span className="champ__title">2026 NECC Division II National Champions</span>
                <span className="champ__sub">Marvel Rivals. See the bracket on Liquipedia</span>
              </span>
              <FaArrowUpRightFromSquare className="champ__out" aria-hidden="true" />
              <span className="champ__shine" aria-hidden="true" />
            </a>
          </Reveal>

          <div className="esports__body">
            <Reveal className="prose" from="left">
              <p>
                As head of competitive operations, I ran the machinery behind every Temple team: who we recruited, when we practiced, how players developed, and where the program was headed. Each game had its own team lead, and my job was to keep all of them pulling in the same direction.
              </p>
              <p>
                I also brought schools together in person, organizing and hosting a collegiate LAN tournament in Center City Philadelphia. And I kept my own hands on the keyboard as a player on the Marvel Rivals roster that went on to win the NECC Division II national title in 2026.
              </p>
            </Reveal>
            <RevealList className="ticks" from="right" stagger={0.08}>
              {duties.map((d) => <li key={d}>{d}</li>)}
            </RevealList>
          </div>
        </section>
      </div>
    </Section>
  )
}
