"use client"

import { ClientTask } from "@/app/challenge/page"
import Task from "./task"
import { Loader2 } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import FinishedScreen from "./finished-screen"

interface ChallengeBodyProps {
  activeTaskIndex: number
  tasks: ClientTask[]
  isLoading: boolean
}
const ChallengeBody = ({
  tasks,
  isLoading,
  activeTaskIndex,
}: ChallengeBodyProps) => {
  const { refresh, end, clickedNext } =
    useContext(ChallengeSessionContext) || {}
  const [reload, setReload] = useState(false)
  useEffect(() => {
    setReload(!reload)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-[1024px] flex-1">
        {isLoading ? (
          <div className="flex h-[50vh] items-center justify-center">
            <Loader2 size={48} className="animate-spin text-zinc-600" />
          </div>
        ) : (
          <>
            {tasks.length === 0 && (
              <div className="mx-auto w-screen max-w-xs text-center text-2xl font-medium md:max-w-xl">
                pssst 🤫 I didnt create any tasks for this challenge yet
                <br />
                <br />
                you can close the challenge now
              </div>
            )}
            <div>
              <Task task={tasks[activeTaskIndex]} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ChallengeBody
