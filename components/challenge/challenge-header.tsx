"use client"
import { useModal } from "@/hooks/use-modal-store"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { Language } from "@prisma/client"

interface ChallengeHeaderProps {
  mostRecentLang?: Language
}

const ChallengeHeader = ({ mostRecentLang }: ChallengeHeaderProps) => {
  const { onOpen } = useModal()

  return (
    <div>
      <button
        onClick={() =>
          onOpen("confirm", {
            title: "Sure you want to cancel the challenge?",
            description:
              "All progress will be lost when not completing the challenge.",
            variant: "danger",
            redirectUrl: "/dashboard/lang/" + mostRecentLang?.toLowerCase(),
          })
        }
      >
        Moin
      </button>
    </div>
  )
}

export default ChallengeHeader
