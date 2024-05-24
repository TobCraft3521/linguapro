// GapText.tsx
import { ClientTask } from "@/app/challenge/page"
import { Volume2 } from "lucide-react"
import { useContext, useState } from "react"
import { useAudio } from "react-use"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import GapTextCard from "./gaptext-card"

type GapTextProps = {
  task: ClientTask
}

const GapText = ({ task }: GapTextProps) => {
  const { options: taskOptions } = task as ClientTask & {
    options: {
      text: string
      options: string[]
    }
  }
  const { attempt, setAttempt, response, setResponse } = useContext(
    ChallengeSessionContext,
  ) || { attempt: "", setAttempt: () => {} }
  const handleClick = (index: number) => {
    if (response) return
    if (attempt.indexOf(index.toString()) === -1) {
      setAttempt(attempt + index.toString())
    } else {
      setAttempt(attempt.replace(index.toString(), ""))
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="p-4 text-lg font-semibold sm:text-2xl md:max-w-[800px] md:p-16 md:pt-0">
        {task.description}
      </h3>
      <div className="text-xl">
        {taskOptions.text.split("_").map((word, index) => (
          <span key={index} className="inline-block">
            {word}
            {index !== taskOptions.text.split("_").length - 1 && (
              <span
                className={`${
                  taskOptions.options[parseInt(attempt[index])]
                    ? ""
                    : "text-neutral-300"
                }`}
              >
                {taskOptions.options[parseInt(attempt[index])] ? (
                  <div className="inline-block font-bold">
                    {taskOptions.options[parseInt(attempt[index])]}
                  </div>
                ) : (
                  "_______"
                )}
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="m-4 w-full max-w-[768px] border-t-2" />
      <div className="grid max-h-[50vh] w-full grid-cols-2 gap-4 px-8 md:w-auto md:grid-cols-3">
        {taskOptions.options.map((option, index) => (
          <GapTextCard
            option={option}
            index={index}
            key={index}
            active={attempt.indexOf(index.toString()) !== -1}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default GapText
