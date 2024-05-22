// path: /components/ChallengeHeader.tsx

"use client"
import { useModal } from "@/hooks/use-modal-store"
import { Language } from "@prisma/client"
import { Heart, Loader2, Timer, X } from "lucide-react"
import { useContext, useEffect, useRef, useState } from "react"
import { Progress } from "../ui/progress"
import { queryChallengeSession } from "@/lib/challenge"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

interface ChallengeHeaderProps {
  mostRecentLang?: Language
}

const ChallengeHeader = ({ mostRecentLang }: ChallengeHeaderProps) => {
  const { onOpen } = useModal()
  const { refresh } = useContext(ChallengeSessionContext) || {}
  const [hearts, setHearts] = useState<number | undefined>(undefined)
  const [expirationTime, setExpirationTime] = useState<number | undefined>(
    undefined,
  )
  const [progress, setProgress] = useState<number | undefined>(undefined)
  const [remainingTime, setRemainingTime] = useState<number | undefined>(
    undefined,
  )
  const isLoading = useRef(true)

  useEffect(() => {
    isLoading.current = true
    const fetchData = async () => {
      const challengeSession = await queryChallengeSession()
      const startTime = challengeSession?.startedAt.getTime() || 0
      const timeLimit = (challengeSession?.timeLimit || 0) * 1000
      setHearts(challengeSession?.hearts)
      setExpirationTime(startTime + timeLimit)
      setProgress(challengeSession?.progress)
      isLoading.current = false
    }
    fetchData()
    console.log("fetching data")
  }, [refresh])

  useEffect(() => {
    const updateRemainingTime = () => {
      if (expirationTime !== undefined && !isLoading.current) {
        const now = new Date().getTime()
        const timeLeft = expirationTime - now
        setRemainingTime(timeLeft > 0 ? timeLeft : 0)
        if (timeLeft <= 0) {
          clearInterval(interval) // Clear interval when time runs out
          onOpen("timeout") // Trigger the timeout modal
        }
      }
    }

    const interval = setInterval(updateRemainingTime, 1000)

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [expirationTime, onOpen, refresh])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex max-w-[100vw] items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4 p-8 pb-0 md:gap-8 md:p-0 md:py-12 xl:max-w-[1024px]">
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
        <Progress value={progress} className="w-[40vw] xl:w-[100vw] " />
        <div className="flex flex-row items-center justify-center gap-2 font-bold">
          <Heart size={24} className="text-red-600" />
          {hearts !== undefined ? (
            hearts
          ) : (
            <Loader2 className="animate-spin text-black" size={18} />
          )}
        </div>
        <div
          className="flex flex-row items-center justify-center gap-2 font-bold"
          onClick={() => onOpen("timeout")}
        >
          <Timer size={24} className="text-gray-800 dark:text-white" />
          {remainingTime !== undefined ? (
            formatTime(remainingTime)
          ) : (
            <Loader2 className="animate-spin text-black" size={18} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ChallengeHeader
