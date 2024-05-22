"use client"
import { useModal } from "@/hooks/use-modal-store"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export interface ConfirmModalData {
  title?: string
  description?: string
  redirectUrl?: string
  variant?: "danger" | "default"
}

const ConfirmModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const router = useRouter()

  const isModalOpen = isOpen && type === "confirm"

  const handleClose = () => {
    onClose()
  }
  const handleConfirm = () => {
    onClose()
    if (data.redirectUrl) {
      router.push(data.redirectUrl)
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white dark:bg-black">
        <DialogHeader>{data.title}</DialogHeader>
        <DialogDescription>{data.description}</DialogDescription>
        <div className="mt-4 flex flex-row justify-between">
          <Button onClick={handleClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant={data.variant || "super"}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
