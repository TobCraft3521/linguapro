import { checkSolution } from "@/lib/challenge"
import { Button } from "../ui/button"
import { useContext, useEffect, useState } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import { Loader2 } from "lucide-react"
import { useAudio } from "react-use"

export interface ChallengeFooterProps {
  state: "inactive" | "check" | "wrong" | "correct"
}

const ChallengeFooter = ({ state }: ChallengeFooterProps) => {
  const [loading, setLoading] = useState(false)
  const [correct, _c, correctControls] = useAudio({
    src: "/sounds/correct.wav",
  })
  const [wrong, _w, wrongControls] = useAudio({
    src: "/sounds/incorrect.wav",
  })
  const {
    attempt,
    triggerRefresh,
    triggerRefreshHearts,
    setAttempt,
    setResponse,
    refresh,
  } = useContext(ChallengeSessionContext) || {
    attempt: "",
    setResponse: () => {},
    setAttempt: () => {},
    triggerRefresh: () => {},
    triggerRefreshHearts: () => {},
  }
  const handleCheck = async () => {
    setLoading(true)
    const { right } = (await checkSolution(attempt || "")) || {}
    if (right) {
      correctControls.play()
    } else {
      wrongControls.play()
    }
    setResponse(right ? "correct" : "wrong")
    setLoading(false)
    triggerRefreshHearts()
  }

  const handleRetry = () => {
    setResponse("")
    setAttempt("")
  }

  const handleNext = () => {
    setResponse("")
    setAttempt("")
    triggerRefresh()
  }

  useEffect(() => {
    setResponse("")
    setAttempt("")
  }, [refresh])

  return (
    <div className="flex h-24 w-full justify-center md:h-44 ">
      {correct}
      {wrong}
      <div className="flex w-full flex-row items-center justify-between border-t-2 px-16 py-8 dark:border-t-zinc-700 md:px-32 md:py-12 lg:w-[1024px]">
        {state === "inactive" && (
          <>
            <div className="">Do the task before you can check it</div>
            <Button variant="secondary" disabled>
              Check
            </Button>
          </>
        )}
        {state === "check" && (
          <>
            <div className="">Check</div>
            <Button variant="secondary" onClick={handleCheck}>
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>Check</>
              )}
            </Button>
          </>
        )}
        {state === "correct" && (
          <>
            <div className="text-green-500">Correct</div>
            <Button variant="secondary" onClick={handleNext}>
              Next
            </Button>
          </>
        )}
        {state === "wrong" && (
          <>
            <div className="text-red-500">Wrong</div>
            <Button variant="danger" onClick={handleRetry}>
              Retry
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default ChallengeFooter
