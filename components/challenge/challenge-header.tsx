"use client"
import { useModal } from "@/hooks/use-modal-store"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { Language } from "@prisma/client"
import { Heart, X } from "lucide-react"
import { Progress } from "../ui/progress"
import { getHeartsLeft } from "@/lib/challenge"
import { useEffect, useState } from "react"
import { get } from "http"

interface ChallengeHeaderProps {
  mostRecentLang?: Language
}

const ChallengeHeader = ({ mostRecentLang }: ChallengeHeaderProps) => {
  const { onOpen } = useModal()
  const [hearts, setHearts] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      setHearts(await getHeartsLeft())
      console.log(await getHeartsLeft())
    }
    fetchData()
  }, [])

  return (
    <div className="flex items-center justify-center max-w-[100vw]">
      <div className="p-8 md:p-12 flex items-center justify-center flex-row gap-4 md:gap-8">
        <button
          onClick={() =>
            onOpen("confirm", {
              title: "Sure you want to cancel the challenge?",
              description:
                "All progress will be lost after the countdown ends when not completing the challenge.",
              variant: "danger",
              redirectUrl: "/dashboard/lang/" + mostRecentLang?.toLowerCase(),
            })
          }
        >
          <X size={24} />
        </button>
        <div className="">
          <Progress
            value={90}
            className="w-[60vw] lg:w-[100vw] lg:max-w-[1024px]"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 font-bold">
          <Heart size={24} className="text-red-600" />
          {hearts}
        </div>
      </div>
    </div>
  )
}

export default ChallengeHeader
