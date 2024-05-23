"use client"
import { useModal } from "@/hooks/use-modal-store"
import { createContext, useState, ReactNode } from "react"

type ContextProps = {
  refresh: boolean
  triggerRefresh: () => void
  refreshHearts: boolean
  triggerRefreshHearts: () => void
  attempt: string
  setAttempt: React.Dispatch<React.SetStateAction<string>>
  response: string
  setResponse: React.Dispatch<React.SetStateAction<string>>
  end: boolean
  setEnd: React.Dispatch<React.SetStateAction<boolean>>
  clickedNext: boolean
  setClickedNext: React.Dispatch<React.SetStateAction<boolean>>
  timeLeft: number
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  hearts: number
  setHearts: React.Dispatch<React.SetStateAction<number>>
  sessionHearts: number // for end screen
  setSessionHearts: React.Dispatch<React.SetStateAction<number>>
  sessionTaskLength: number
  setSessionTaskLength: React.Dispatch<React.SetStateAction<number>>
  taskLength: number
  setTaskLength: React.Dispatch<React.SetStateAction<number>>
}

export const ChallengeSessionContext = createContext<ContextProps | null>(null)

export const ChallengeSessionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [refresh, setRefresh] = useState(false)
  const [refreshHearts, setRefreshHearts] = useState(false)
  const [attempt, setAttempt] = useState("")
  const [response, setResponse] = useState("")
  const [end, setEnd] = useState(false)
  const [clickedNext, setClickedNext] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [hearts, setHearts] = useState(5)
  const [sessionHearts, setSessionHearts] = useState(5)
  const [sessionTaskLength, setSessionTaskLength] = useState(0)
  const [taskLength, setTaskLength] = useState(0)
  const { onClose } = useModal()

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh) // Toggle the refresh state
    onClose()
  }

  const triggerRefreshHearts = () => {
    setRefreshHearts((prevRefreshHearts) => !prevRefreshHearts)
  }

  const contextValue: ContextProps = {
    refresh,
    triggerRefresh,
    attempt,
    setAttempt,
    response,
    setResponse,
    refreshHearts,
    triggerRefreshHearts,
    end,
    setEnd,
    clickedNext,
    setClickedNext,
    timeLeft,
    setTimeLeft,
    hearts,
    setHearts,
    sessionHearts,
    setSessionHearts,
    sessionTaskLength,
    setSessionTaskLength,
    taskLength,
    setTaskLength,
  }

  return (
    <ChallengeSessionContext.Provider value={contextValue}>
      {children}
    </ChallengeSessionContext.Provider>
  )
}
