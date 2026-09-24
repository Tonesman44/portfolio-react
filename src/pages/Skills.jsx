import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PageHead from '../components/PageHead.jsx'
import { keyboard, skillGroups } from '../data/skills.js'

const all = keyboard.flat()

export default function Skills() {
  const [group, setGroup] = useState(null)
  const [active, setActive] = useState(all.find((k) => k.name === 'Angular'))

  const pick = (k) => {
    setActive(k)
    if (group && k.group !== group) setGroup(null)
  }

  return (
    <>
      <PageHead title="Skills">
        <p>Press any key to see where I’ve put it to work. Pick a category to light up just those keys.</p>
      </PageHead>

      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter skills">
          <button className={`filter ${group === null ? 'is-on' : ''}`} onClick={() => setGroup(null)} aria-pressed={group === null}>Everything</button>
          {skillGroups.map((g) => (
            <button key={g.id} className={`filter ${group === g.id ? 'is-on' : ''}`} onClick={() => setGroup(g.id)} aria-pressed={group === g.id}>
              {g.label} <span className="filter__n">{all.filter((k) => k.group === g.id).length}</span>
            </button>
          ))}
        </div>

        <div className="kb">
          <div className="kb__screen" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={active.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }} className="kb__readout">
                <active.icon className="kb__readout-icon" aria-hidden="true" />
                <div>
                  <p className="kb__readout-name">{active.name}</p>
                  <p className="kb__readout-used">{active.used}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <span className="kb__group">{skillGroups.find((g) => g.id === active.group)?.label}</span>
          </div>

          <div className="kb__deck">
            {keyboard.map((row, r) => (
              <div className="kb__row" key={r}>
                {row.map((k) => {
                  const dim = group && k.group !== group
                  const on = active.name === k.name
                  return (
                    <button
                      key={k.name}
                      className={`key ${dim ? 'is-dim' : ''} ${on ? 'is-on' : ''} ${group && !dim ? 'is-lit' : ''}`}
                      style={{ '--w': k.w ?? 1 }}
                      onClick={() => pick(k)}
                      aria-pressed={on}
                    >
                      <span className="key__cap">
                        <k.icon className="key__icon" aria-hidden="true" />
                        <span className="key__label">{k.name}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
