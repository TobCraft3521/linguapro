"use client"

import { ClientTask } from "@/app/challenge/page"
import Task from "./task"

interface ChallengeBodyProps {
  activeTaskIndex: number
  tasks: ClientTask[]
}
const ChallengeBody = ({ tasks }: ChallengeBodyProps) => {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-[1024px] flex-1">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  )
}

export default ChallengeBody
