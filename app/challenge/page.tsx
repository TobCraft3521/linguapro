"use client"
import ChallengeBody from "@/components/challenge/challenge"
import ChallengeFooter from "@/components/challenge/challenge-footer"
import ChallengeHeader from "@/components/challenge/challenge-header"
import FinishedScreen from "@/components/challenge/finished-screen"
import { ChallengeSessionContext } from "@/components/providers/challenge-session-context"
import { queryChallengeProgress, queryTasks } from "@/lib/challenge"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { Language, Task, TaskType } from "@prisma/client"
import { JsonValue } from "@prisma/client/runtime/library"
import { useContext, useEffect, useState } from "react"

export type ClientTask = {
  description: string
  options: JsonValue
  index: number
  type: TaskType
}

const Challenge = () => {
  const [mostRecentLanguage, setMostRecentLanguage] = useState<Language>()
  const [tasks, setTasks] = useState<ClientTask[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTaskIndex, setActiveTaskIndex] = useState(0)
  const {
    attempt,
    refresh,
    setAttempt,
    response,
    setResponse,
    end,
    clickedNext,
  } = useContext(ChallengeSessionContext) || {}

  const footerState = response ? response : attempt ? "check" : "inactive"
  useEffect(() => {
    const fetchData = async () => {
      setMostRecentLanguage(await mostRecentLang())
      setTasks((await queryTasks()) || [])
      setIsLoading(false)
      setActiveTaskIndex((await queryChallengeProgress()) || 0)
    }
    fetchData()
  }, [refresh])

  return (
    <div
      className="flex h-screen w-screen flex-col"
      style={{
        overflowX: "hidden",
      }}
    >
      {!end || !clickedNext ? (
        <>
          <ChallengeHeader mostRecentLang={mostRecentLanguage} />
          <ChallengeBody
            tasks={tasks}
            activeTaskIndex={activeTaskIndex}
            isLoading={isLoading}
          />
          <ChallengeFooter
            state={footerState as "check" | "inactive" | "wrong" | "correct"}
          />
        </>
      ) : (
        <FinishedScreen tasks={tasks} />
      )}
    </div>
  )
}

export default Challenge
