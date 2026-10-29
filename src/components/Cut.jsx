import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import Stinger from './Stinger.jsx'
import { scrollToId } from '../lib/scroll.js'

// "Cut to" a section the way a broadcast cuts between cameras: the stinger wipes across,
// the page jumps behind it, and the new section is revealed as the wipe clears.
const CutContext = createContext(() => {})

// eslint-disable-next-line react-refresh/only-export-components
export function useCut() {
  return useContext(CutContext)
}

export default function CutProvider({ children }) {
  const reduce = useReducedMotion()
  const [play, setPlay] = useState(0)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const cutTo = useCallback((id) => {
    if (reduce) {
      scrollToId(id)
      history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`)
      return
    }
    timers.current.forEach(clearTimeout)
    setPlay(Date.now())
    timers.current = [
      setTimeout(() => {
        scrollToId(id, { instant: true })
        history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`)
      }, 300),
    ]
  }, [reduce])

  const value = useMemo(() => cutTo, [cutTo])

  return (
    <CutContext.Provider value={value}>
      {children}
      {play > 0 && <Stinger key={play} />}
    </CutContext.Provider>
  )
}
