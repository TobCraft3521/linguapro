import { useModal } from "@/hooks/use-modal-store"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog"

const ConfirmModal = () => {
  const { isOpen, onClose, type, data } = useModal()
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>Test</DialogHeader>
        <DialogDescription>Test description</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
