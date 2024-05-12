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
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>{data.title}</DialogHeader>
        <DialogDescription>{data.description}</DialogDescription>
        <div className="flex flex-row justify-between mt-4">
          <Button onClick={handleClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant={data.variant || "default"}>
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
