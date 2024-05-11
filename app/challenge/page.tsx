"use client"
import ChallengeHeader from "@/components/challenge/challenge-header"
import { useModal } from "@/hooks/use-modal-store"
import { getProfileProgress } from "@/lib/profiles"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

const Challenge = () => {
  const [progress, setProgress] = useState(0)
  const { onOpen } = useModal()

  useEffect(() => {
    const fetchData = async () => {
      setProgress((await getProfileProgress()) || 0)
    }
    fetchData()
  }, [])
  return (
    <div className="h-screen w-screen">
      <ChallengeHeader />
    </div>
  )
}

export default Challenge
