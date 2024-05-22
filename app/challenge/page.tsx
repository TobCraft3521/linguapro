"use client"
import ChallengeBody from "@/components/challenge/challenge"
import ChallengeFooter from "@/components/challenge/challenge-footer"
import ChallengeHeader from "@/components/challenge/challenge-header"
import { queryTasks } from "@/lib/challenge"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { Language, Task, TaskType } from "@prisma/client"
import { JsonValue } from "@prisma/client/runtime/library"
import { useEffect, useState } from "react"

type ClientTask = {
  description: string
  options: JsonValue
  index: number
  type: TaskType
}

const Challenge = () => {
  const [mostRecentLanguage, setMostRecentLanguage] = useState<Language>()
  const [tasks, setTasks] = useState<ClientTask[]>([])
  useEffect(() => {
    const fetchData = async () => {
      setMostRecentLanguage(await mostRecentLang())
      setTasks((await queryTasks()) || [])
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
      <ChallengeBody />
      <ChallengeFooter state="inactive" />
    </div>
  )
}

export default Challenge
