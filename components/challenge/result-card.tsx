import { cn } from "@/lib/utils"
import { Timer } from "lucide-react"
import Image from "next/image"

interface ResultCardProps {
  variant: "xp" | "time" | "hearts"
  value: number
}

const ResultCard = ({ variant, value }: ResultCardProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }
  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        variant === "xp" && "border-orange-400 bg-orange-400",
        variant === "hearts" && "border-rose-500 bg-rose-500",
        variant === "time" && "border-blue-400 bg-blue-400",
      )}
    >
      <div
        className={cn(
          "rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white",
          variant === "hearts" && "bg-rose-500",
          variant === "xp" && "bg-orange-400",
          variant === "time" && "bg-blue-400",
        )}
      >
        {variant === "hearts" && "Hearts Left"}
        {variant === "xp" && "XP Earned"}
        {variant === "time" && "Time Left"}
      </div>
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold",
          variant === "hearts" && "text-rose-500",
          variant === "xp" && "text-orange-400",
          variant === "time" && "text-blue-400",
        )}
      >
        {variant === "hearts" && (
          <Image
            src="/imgs/heart.svg"
            alt="heart icon"
            height={30}
            width={30}
            className="mr-1.5"
          />
        )}
        {variant === "xp" && (
          <Image
            src="/imgs/points.svg"
            alt="flash icon"
            height={30}
            width={30}
            className="mr-1.5"
          />
        )}
        {variant === "time" && (
          <Timer size={30} className="mr-1.5 text-blue-400" />
        )}
        {variant !== "time" ? value : formatTime(value)}
      </div>
    </div>
  )
}

export default ResultCard
