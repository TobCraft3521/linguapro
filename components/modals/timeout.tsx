// path: /components/TimeOutModal.tsx

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
import { AlarmClock, AlertCircle, Hourglass, XCircle } from "lucide-react"
import { Button } from "../ui/button"

const TimeOutModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const isModalOpen = isOpen && type === "timeout"
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="mx-auto max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlarmClock className="text-red-600" size={24} />
            Time Ran Out
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Unfortunately, the time for this challenge has expired. Please try
          again or review your progress.
        </DialogDescription>
        <div className="flex w-full flex-row justify-between pt-4">
          <Button variant="outline">Back</Button>
          <Button variant="super">Retry</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TimeOutModal
