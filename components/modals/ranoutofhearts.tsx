import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { useModal } from "@/hooks/use-modal-store"
import {
  AlarmClock,
  AlertCircle,
  HeartCrack,
  Hourglass,
  Loader2,
  XCircle,
} from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { resetChallengeSession } from "@/lib/challenge"
import { useContext, useState } from "react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

const RanOutOfHeartsModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const router = useRouter()
  const { triggerRefresh, refresh } = useContext(ChallengeSessionContext) || {}
  const [isLoading, setIsLoading] = useState(false)

  const isModalOpen = isOpen && type === "nohearts"
  const onRetry = async () => {
    setIsLoading(true)
    await resetChallengeSession()
    triggerRefresh && triggerRefresh()
    onClose()
    setIsLoading(false)
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="mx-auto max-w-lg bg-white p-6 dark:bg-black">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HeartCrack className="text-red-600" size={24} />
            Ran Out of Hearts
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Unfortunately, you have run out of hearts. Please try again or upgrade
          to the Premium plan to get unlimited hearts.
        </DialogDescription>
        <div className="flex w-full flex-row justify-between pt-4">
          <Button variant="outline">Back</Button>
          <Button variant="super" className="w-[67px]" onClick={onRetry}>
            {isLoading ? <Loader2 className="animate-spin" /> : <> Retry</>}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RanOutOfHeartsModal
