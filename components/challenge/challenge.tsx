"use client"

import { Task, TaskType } from "@prisma/client"

interface ChallengeBodyProps {
  activeTaskIndex: number
  tasks: Task[]
}
const ChallengeBody = ({}) => {
  return <div className="w-full flex-1"></div>
}

export default ChallengeBody
