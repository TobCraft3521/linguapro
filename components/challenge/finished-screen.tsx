"use client"
import { ClientTask } from "@/app/challenge/page"
import Image from "next/image"
import ResultCard from "./result-card"
import { useContext, useEffect, useState } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import { queryChallengeSession } from "@/lib/challenge"
import FinishedFooter from "./finished-footer"
import { useAudio } from "react-use"

// interface FinishedScreenProps {
//   tasks: ClientTask[]
// }

const FinishedScreen = () => {
  const { timeLeft, sessionHearts, sessionTaskLength } =
    useContext(ChallengeSessionContext) || {}
  const [finishedSound, _, finishedAudioControls] = useAudio({
    src: "/sounds/finish.mp3",
  })

  useEffect(() => {
    finishedAudioControls.play()
  }, [])

  return (
    <>
      {finishedSound}
      <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
        <Image
          src="/imgs/finish.svg"
          alt="finished"
          className="hidden lg:block"
          height={100}
          width={100}
        />
        <Image
          src="/imgs/finish.svg"
          alt="finished"
          className="block lg:hidden"
          height={50}
          width={50}
        />
        <h1 className="text-xl font-bold text-neutral-700 lg:text-3xl">
          Great job! <br /> You&apos;ve finished the challenge
        </h1>
        <div className="flex w-full items-center gap-x-4">
          <ResultCard variant="xp" value={(sessionTaskLength || 0) * 10} />
          <ResultCard variant="hearts" value={sessionHearts || 0} />
          <ResultCard variant="time" value={timeLeft || 0} />
        </div>
      </div>
      <FinishedFooter />
    </>
  )
}

export default FinishedScreen
