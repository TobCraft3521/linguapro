import { ClientTask } from "@/app/challenge/page"
import React, { useContext, useState, useEffect } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import { cn } from "@/lib/utils" // Importing cn utility function
import { Button } from "../ui/button"

interface Props {
  task: ClientTask
}

const MatchWordsTask: React.FC<Props> = ({ task }) => {
  const { options } = task as ClientTask & {
    options: [string[], string[]]
  }
  const [leftWords, rightWords] = options

  const { attempt, setAttempt, refresh } = useContext(
    ChallengeSessionContext,
  ) || {
    attempt: "",
    setAttempt: () => {},
    refresh: 0,
  }

  const [currentLeftIndex, setCurrentLeftIndex] = useState(0)
  const [rightSelections, setRightSelections] = useState<boolean[]>(
    Array(rightWords.length).fill(false),
  )

  useEffect(() => {
    setAttempt(Array(leftWords.length).fill("").join(""))
  }, [leftWords.length, setAttempt])

  // Reset task when refresh variable changes
  useEffect(() => {
    resetAttempt()
  }, [refresh])

  const handleRightClick = (rightIndex: number) => {
    const newRightSelections = [...rightSelections]
    newRightSelections[rightIndex] = true
    setRightSelections(newRightSelections)

    const newAttempt = attempt.split("")
    newAttempt[currentLeftIndex] = rightIndex.toString()
    setAttempt(newAttempt.join(""))

    setCurrentLeftIndex(currentLeftIndex + 1)
  }

  const resetAttempt = () => {
    setAttempt("")
    setCurrentLeftIndex(0)
    setRightSelections(Array(rightWords.length).fill(false))
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4">
      <h3 className="p-4 text-lg font-semibold sm:text-2xl md:max-w-[800px] md:p-16 md:pt-0">
        {task.description}
      </h3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-1 flex-col items-center gap-2">
          {leftWords.map((word, index) => (
            <div
              key={index}
              className={cn(
                "flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-b-4 p-2 text-base font-medium hover:bg-black/5 active:border-b-2 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-600 md:min-h-[50px] md:w-[200px]",
                index === currentLeftIndex ? "border-blue-500" : "",
              )}
            >
              {word}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col items-center gap-2">
          {rightWords.map((word, index) => (
            <div
              key={index}
              className={cn(
                "flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-b-4 p-2 text-base font-medium hover:bg-black/5 active:border-b-2 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-600 md:min-h-[50px] md:w-[200px]",
                rightSelections[index]
                  ? "cursor-not-allowed bg-gray-200"
                  : "bg-white",
                !rightSelections[index] && "hover:bg-gray-100",
              )}
              onClick={() => !rightSelections[index] && handleRightClick(index)}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-end px-4">
        <Button variant="danger" onClick={resetAttempt} className="w-auto">
          Reset
        </Button>
      </div>
    </div>
  )
}

export default MatchWordsTask
