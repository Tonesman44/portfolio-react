import { useDeferredValue, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'
import { Section, SectionHead } from '../components/Section.jsx'
import Tilt from '../components/Tilt.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCut } from '../components/Cut.jsx'
import { skills, skillGroups, levelLabel } from '../data/skills.js'

const year = new Date().getFullYear()
const groupOf = (id) => skillGroups.find((g) => g.id === id)
const sorts = { group: 'Category', level: 'Level', name: 'A to Z', years: 'Years' }

export default function Skills() {
  const cutTo = useCut()
  const [group, setGroup] = useState(null)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('group')
  const [active, setActive] = useState(skills.find((k) => k.name === 'Angular'))
  const q = useDeferredValue(query.trim().toLowerCase())

  const list = useMemo(() => {
    let out = skills.filter((k) => (!group || k.group === group) && (!q || k.name.toLowerCase().includes(q) || k.used.toLowerCase().includes(q) || groupOf(k.group).label.toLowerCase().includes(q)))
    if (sort === 'level') out = [...out].sort((a, b) => b.level - a.level || a.name.localeCompare(b.name))
    if (sort === 'name') out = [...out].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'years') out = [...out].sort((a, b) => a.since - b.since || b.level - a.level)
    return out
  }, [group, q, sort])

  const g = groupOf(active.group)
  const years = Math.max(1, year - active.since)
  const whereTarget = (w) => (['Excellis', 'Suitable', 'Temple University'].includes(w) ? 'experience' : ['Everywhere'].includes(w) ? null : 'projects')

  return (
    <Section id="skills" className="block--skills">
      <SectionHead number="04" kicker="Skills" title="The loadout">
        <p>Pick a tile to see where I’ve put it to work. Filter by category, sort by level, or just start typing.</p>
      </SectionHead>

      <div className="wrap loadout">
        <Reveal className="loadout__bar" amount={0.6}>
          <div className="filters" role="group" aria-label="Filter skills">
            <button className={`filter ${group === null ? 'is-on' : ''}`} onClick={() => setGroup(null)} aria-pressed={group === null}>Everything <span className="filter__n">{skills.length}</span></button>
            {skillGroups.map((gr) => (
              <button key={gr.id} className={`filter ${group === gr.id ? 'is-on' : ''}`} style={{ '--g': gr.color }} onClick={() => setGroup(group === gr.id ? null : gr.id)} aria-pressed={group === gr.id}>
                <i className="filter__dot" />{gr.label} <span className="filter__n">{skills.filter((k) => k.group === gr.id).length}</span>
              </button>
            ))}
          </div>
          <div className="loadout__tools">
            <label className="search">
              <FaMagnifyingGlass aria-hidden="true" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to filter" aria-label="Filter skills by name" />
              {query && <button onClick={() => setQuery('')} aria-label="Clear search"><FaXmark /></button>}
            </label>
            <label className="sort">
              <span>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort skills">
                {Object.entries(sorts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </label>
          </div>
        </Reveal>

        <div className="loadout__grid">
          <LayoutGroup>
            <motion.div layout className="tiles" role="list">
              <AnimatePresence mode="popLayout">
                {list.map((k) => {
                  const on = active.name === k.name
                  const gr = groupOf(k.group)
                  return (
                    <motion.div
                      key={k.name}
                      layout
                      role="listitem"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    >
                      <Tilt as="button" className={`tile ${on ? 'is-on' : ''}`} style={{ '--g': gr.color }} onClick={() => setActive(k)} aria-pressed={on} max={9}>
                        <span className="tile__top">
                          <k.icon className="tile__icon" aria-hidden="true" />
                          <span className="tile__pips" aria-label={`Level ${k.level} of 5`}>
                            {[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= k.level ? 'on' : ''} />)}
                          </span>
                        </span>
                        <span className="tile__name">{k.name}</span>
                        <span className="tile__group">{gr.label}</span>
                        {on && <motion.span layoutId="tile-ring" className="tile__ring" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />}
                      </Tilt>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              {list.length === 0 && <p className="tiles__empty">Nothing matches “{query}”. Try a shorter word.</p>}
            </motion.div>
          </LayoutGroup>

          <aside className="readout" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={active.name} className="readout__card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} style={{ '--g': g.color }}>
                <span className="readout__group"><i />{g.label}</span>
                <div className="readout__head">
                  <active.icon className="readout__icon" aria-hidden="true" />
                  <h3 className="readout__name">{active.name}</h3>
                </div>
                <div className="readout__meter">
                  <span className="readout__meter-label">{levelLabel[active.level]}</span>
                  <span className="readout__meter-track"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: active.level / 5 }} transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }} /></span>
                </div>
                <dl className="readout__facts">
                  <div><dt>Since</dt><dd>{active.since}</dd></div>
                  <div><dt>Years</dt><dd>{years}{years >= 5 ? '+' : ''}</dd></div>
                  <div><dt>Level</dt><dd>{active.level} / 5</dd></div>
                </dl>
                <p className="readout__used">{active.used}</p>
                <div className="readout__where">
                  {active.where.map((w) => {
                    const t = whereTarget(w)
                    return t
                      ? <a key={w} href={`#${t}`} onClick={(e) => { e.preventDefault(); cutTo(t) }} className="plate plate--dark readout__plate"><span className="plate__text">{w}</span></a>
                      : <span key={w} className="plate plate--dark readout__plate"><span className="plate__text">{w}</span></span>
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="readout__hint">{list.length} of {skills.length} shown</p>
          </aside>
        </div>
      </div>
    </Section>
  )
}
