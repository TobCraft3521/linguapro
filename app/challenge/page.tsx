"use client"
import ChallengeBody from "@/components/challenge/challenge"
import ChallengeFooter from "@/components/challenge/challenge-footer"
import ChallengeHeader from "@/components/challenge/challenge-header"
import { ChallengeSessionContext } from "@/components/providers/challenge-session-context"
import { queryTasks } from "@/lib/challenge"
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
  const { attempt, setAttempt, response, setResponse } =
    useContext(ChallengeSessionContext) || {}

  const footerState = response ? response : attempt ? "check" : "inactive"
  useEffect(() => {
    const fetchData = async () => {
      setMostRecentLanguage(await mostRecentLang())
      setTasks((await queryTasks()) || [])
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div
      className="flex h-screen w-screen flex-col"
      style={{
        overflowX: "hidden",
      }}
    >
      <ChallengeHeader mostRecentLang={mostRecentLanguage} />
      <ChallengeBody tasks={tasks} activeTaskIndex={0} isLoading={isLoading} />
      <ChallengeFooter
        state={footerState as "check" | "inactive" | "wrong" | "correct"}
      />
    </div>
  )
}

export default Challenge
