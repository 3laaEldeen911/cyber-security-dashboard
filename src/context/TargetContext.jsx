import { createContext, useContext, useMemo, useState } from 'react'
import { savedTargets } from '@/data/targetsData'

const TargetContext = createContext(null)

export function TargetProvider({ children }) {
  const [activeTarget, setActiveTarget] = useState(savedTargets[0])

  const value = useMemo(
    () => ({
      activeTarget,
      setActiveTarget,
      targets: savedTargets,
    }),
    [activeTarget],
  )

  return <TargetContext.Provider value={value}>{children}</TargetContext.Provider>
}

export function useTargetContext() {
  const context = useContext(TargetContext)

  if (!context) {
    throw new Error('useTargetContext must be used within a TargetProvider')
  }

  return context
}
