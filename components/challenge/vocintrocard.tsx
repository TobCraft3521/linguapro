import { cn } from "@/lib/utils"
import Image from "next/image"
import { useContext } from "react"
import { useAudio } from "react-use"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

interface VocIntroCardProps {
  option: { text: string; img: string; sound: string }
  index: number
  active: boolean
  onClick: () => void
}

const VocIntroCard = ({
  option,
  index,
  active,
  onClick,
}: VocIntroCardProps) => {
  const [audio, _, controls] = useAudio({ src: option.sound || "" })
  const { response } = useContext(ChallengeSessionContext) || {
    attempt: "",
    setAttempt: () => {},
  }

  const playSound = () => {
    controls.play()
  }

  return (
    <div
      className={cn(
        "flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-600 md:min-h-[217px] md:w-[250px]",
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
      onClick={() => {
        onClick()
        playSound()
      }}
    >
      <Image src={option.img} alt={option.text} width={100} height={100} />
      <p>{option.text}</p>
      {audio}
    </div>
  )
}

export default VocIntroCard
