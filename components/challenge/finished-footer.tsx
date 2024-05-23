"use client"
import { checkSolution } from "@/lib/challenge"
import { Button } from "../ui/button"
import { useContext, useEffect, useState } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"
import { Loader2 } from "lucide-react"
import { useAudio } from "react-use"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { mostRecentLang } from "@/lib/mostRecentLang"

const FinishedFooter = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const redirectHome = async () => {
    setLoading(true)
    router.push("/dashboard/lang/" + (await mostRecentLang())?.toLowerCase())
    setLoading(false)
  }
  return (
    <div className={cn("flex h-24 w-full justify-center md:h-44")}>
      <div
        className={cn(
          "flex w-full flex-row items-center justify-between border-t-2 px-16 py-8 dark:border-t-zinc-700 md:px-32 md:py-12 lg:w-[1024px]",
        )}
      >
        <div></div>
        <Button variant="super" onClick={redirectHome}>
          {!loading ? (
            "Done"
          ) : (
            <Loader2 size={24} className="animate-spin text-white" />
          )}
        </Button>
      </div>
    </div>
  )
}

export default FinishedFooter
