"use client"

import { useEffect, useState } from "react"
import ConfirmModal from "../modals/confirm-modal"
import TimeOutModal from "../modals/timeout"
import RanOutOfHeartsModal from "../modals/ranoutofhearts"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
      {/* all modals go here */}
      <ConfirmModal />
      <TimeOutModal />
      <RanOutOfHeartsModal />
    </>
  )
}
