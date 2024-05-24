// Listening.tsx
import { ClientTask } from "@/app/challenge/page"
import { useContext, useState } from "react"
import ListeningCard from "./listening-card"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import { useAudio } from "react-use"
import { Play, Volume2 } from "lucide-react"

type ListeningProps = {
  task: ClientTask
}

const Listening = ({ task }: ListeningProps) => {
  const { options: taskOptions } = task as ClientTask & {
    options: {
      audio: string
      options: string[]
    }
  }
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { attempt, setAttempt, response, setResponse } = useContext(
    ChallengeSessionContext,
  ) || { attempt: "", setAttempt: () => {} }
  const handleClick = (index: number) => {
    if (response) return
    setActiveCard(index)
    setAttempt(index.toString())
  }
  const [audio, _, audioControls] = useAudio({
    src: taskOptions.audio,
  })

  const handlePlay = () => {
    audioControls.play()
  }
  return (
    <div className="flex flex-col items-center text-center">
      {audio}
      <h3 className="p-4 text-xl font-semibold sm:text-2xl md:max-w-[600px] md:p-16 md:pt-0">
        {task.description}
      </h3>

      <div
        className="flex h-full cursor-pointer flex-row items-center justify-center gap-4 rounded-xl border-2 border-b-4 p-3  font-semibold uppercase hover:bg-black/5 active:border-b-2 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-600 md:min-h-[70px] md:w-[250px]"
        onClick={handlePlay}
      >
        <Volume2
          size={24}
          className="h-7 w-7 rounded-full bg-zinc-300 p-2  text-white"
        />
        play audio
      </div>
      <div className="m-4 w-full max-w-[768px] border-t-2" />
      <div className="grid max-h-[50vh] w-full grid-cols-2 gap-4 px-8 md:w-auto md:grid-cols-3">
        {taskOptions.options.map((option, index) => (
          <ListeningCard
            option={option}
            index={index}
            key={index}
            active={index === activeCard}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Listening
