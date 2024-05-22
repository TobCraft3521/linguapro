// VocIntro.tsx
import { ClientTask } from "@/app/challenge/page"
import { useContext, useState } from "react"
import VocIntroCard from "./vocintrocard"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

type VocIntroProps = {
  task: ClientTask
}

const VocIntro = ({ task }: VocIntroProps) => {
  const { options } = task
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { attempt, setAttempt, response, setResponse } = useContext(
    ChallengeSessionContext,
  ) || { attempt: "", setAttempt: () => {} }
  const handleClick = (index: number) => {
    setActiveCard(index)
    setAttempt(index.toString())
  }
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="p-4 text-xl font-semibold sm:text-2xl md:max-w-[600px] md:p-16 md:pt-0">
        {task.description}
      </h3>

      <div className="grid max-h-[50vh] w-full grid-cols-2 gap-4 px-8 md:w-auto md:grid-cols-3">
        {(options as { text: string; img: string; sound: string }[]).map(
          (option, index) => (
            <VocIntroCard
              option={option}
              index={index}
              key={index}
              active={index === activeCard}
              onClick={() => handleClick(index)}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default VocIntro
