import { createContext, useContext } from 'react'

// True once the intro curtain has lifted. The hero waits on it so its animations
// start on a settled page instead of fighting font swaps and image decodes.
export const ReadyContext = createContext(true)

export default function useReady() {
  return useContext(ReadyContext)
}
