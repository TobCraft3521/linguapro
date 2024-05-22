"use client"
import { useModal } from "@/hooks/use-modal-store"
import { createContext, useState, ReactNode } from "react"

type ContextProps = {
  refresh: boolean
  triggerRefresh: () => void
  attempt: string
  setAttempt: React.Dispatch<React.SetStateAction<string>>
  response: string
  setResponse: React.Dispatch<React.SetStateAction<string>>
}

export const ChallengeSessionContext = createContext<ContextProps | null>(null)

export const ChallengeSessionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [refresh, setRefresh] = useState(false)
  const [attempt, setAttempt] = useState("")
  const [response, setResponse] = useState("")
  const { onClose } = useModal()

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh) // Toggle the refresh state
    onClose()
  }

  const contextValue: ContextProps = {
    refresh,
    triggerRefresh,
    attempt,
    setAttempt,
    response,
    setResponse,
  }

  return (
    <ChallengeSessionContext.Provider value={contextValue}>
      {children}
    </ChallengeSessionContext.Provider>
  )
}
