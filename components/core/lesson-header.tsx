import { Lesson } from "@prisma/client"
import { Loader, Loader2 } from "lucide-react"

interface LessonsHeaderProps {
  lesson: Lesson | null
}

const LessonsHeader = ({ lesson }: LessonsHeaderProps) => {
  if (!lesson)
    return (
      <div className="absolute flex items-center justify-center top-10 left-8 right-8 bg-slate-500 text-white py-4 px-6 rounded-xl md:rounded-2xl animate-pulse">
        <Loader2 className="animate-spin" />
      </div>
    )
  return (
    <div
      className="absolute top-8 md:top-2 left-8 right-8 bg-black text-white py-4 px-6 rounded-xl md:rounded-2xl drop-shadow-xl z-20"
      style={{
        backgroundColor: lesson?.colorHex,
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
