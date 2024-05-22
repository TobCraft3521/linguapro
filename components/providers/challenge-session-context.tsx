"use client"
import { createContext, useState, ReactNode } from "react"

type ContextProps = {
  refresh: boolean
  triggerRefresh: () => void
}

export const ChallengeSessionContext = createContext<ContextProps | null>(null)

export const ChallengeSessionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [refresh, setRefresh] = useState(false)

  const triggerRefresh = () => {
    console.log("Triggering refresh")
    setRefresh((prevRefresh) => !prevRefresh) // Toggle the refresh state
  }

  const contextValue: ContextProps = {
    refresh,
    triggerRefresh,
  }

  console.log("Context value:", contextValue)

  return (
    <ChallengeSessionContext.Provider value={contextValue}>
      {children}
    </ChallengeSessionContext.Provider>
  )
}
