"use client"
import { ChevronsDown } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollHint = () => {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    setTimeout(() => setDisplay(true), 2000)
  }, [])

  return (
    <ChevronsDown
      className="absolute top-[70vh] mx-auto w-full animate-bounce text-slate-500 md:top-[55vh] xl:top-[90vh]"
      style={{ display: display ? "block" : "none" }}
      size={42}
    />
  )
}

export default ScrollHint
