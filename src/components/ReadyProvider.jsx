import { useCallback, useState } from 'react'
import Curtain from './Curtain.jsx'
import { ReadyContext } from '../hooks/useReady.js'

// Owns the "curtain has lifted" flag. Because `children` keeps the same element references,
// flipping the flag re-renders only components that read it (the hero), not the whole page,
// which keeps the first frame of the intro free of a long React commit.
export default function ReadyProvider({ children }) {
  const [ready, setReady] = useState(false)
  const onLift = useCallback(() => setReady(true), [])
  return (
    <ReadyContext.Provider value={ready}>
      {children}
      <Curtain onLift={onLift} />
    </ReadyContext.Provider>
  )
}
