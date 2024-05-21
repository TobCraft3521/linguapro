import { Lesson } from "@prisma/client"
import { Loader, Loader2 } from "lucide-react"

interface LessonsHeaderProps {
  lesson: Lesson | null
}

const LessonsHeader = ({ lesson }: LessonsHeaderProps) => {
  if (!lesson)
    return (
      <div className="absolute left-8 right-8 top-10 flex animate-pulse items-center justify-center rounded-xl bg-slate-500 px-6 py-4 text-white md:rounded-2xl">
        <Loader2 className="animate-spin" />
      </div>
    )
  return (
    <div
      className="absolute left-8 right-8 top-8 z-20 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 text-white drop-shadow-xl md:top-2 md:rounded-2xl"
      style={{
        background: `linear-gradient(to right, ${lesson.color1Hex}, ${lesson.color2Hex})`,
      }}
    >
      <h1 className="text-lg font-semibold">
        {lesson.index + 1}
        {". "}
        {lesson?.title}
      </h1>
      <p className="text-sm">{lesson?.description}</p>
    </div>
  )
}

export default LessonsHeader
