import { cn } from "@/lib/utils"
import Image from "next/image"
import { useContext } from "react"
import { useAudio } from "react-use"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

interface ListeningCardProps {
  option: { text: string }
  index: number
  active: boolean
  onClick: () => void
}

const ListeningCard = ({
  option,
  index,
  active,
  onClick,
}: ListeningCardProps) => {
  const { response } = useContext(ChallengeSessionContext) || {
    attempt: "",
    setAttempt: () => {},
  }

  return (
    <div
      className={cn(
        "flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-b-4 p-3 text-lg font-medium hover:bg-black/5 active:border-b-2 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-600 md:min-h-[70px] md:w-[250px]",
        active &&
          " border-sky-300 bg-sky-100 hover:bg-sky-100 dark:border-sky-300 dark:hover:border-sky-300",
        active &&
          response === "correct" &&
          "border-green-500 bg-green-200 hover:bg-green-300",
        active &&
          response === "wrong" &&
          "border-red-500 bg-red-200 hover:bg-red-300",
      )}
      key={index}
      onClick={onClick}
    >
      <p>{option.text}</p>
    </div>
  )
}

export default ListeningCard
