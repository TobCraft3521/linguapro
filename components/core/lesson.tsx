import { Lesson, Unit } from "@prisma/client"
import { Separator } from "../ui/separator"
import { LessonWithUnits } from "./path"

interface LessonCompProps {
  lesson: LessonWithUnits
}

function pathOffset(index: number, period: number, amplitude: number) {
  return index + amplitude * Math.sin((2 * Math.PI * index) / period)
}

function decreaseBrightness(hex: string, amount: number): string {
  // Parse hex color to RGB
  let r = parseInt(hex.substring(1, 3), 16)
  let g = parseInt(hex.substring(3, 5), 16)
  let b = parseInt(hex.substring(5, 7), 16)

  // Decrease brightness by specified amount
  r = Math.max(0, r - amount)
  g = Math.max(0, g - amount)
  b = Math.max(0, b - amount)

  // Convert RGB back to hex
  const adjustedHex = `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")}`

  return adjustedHex
}

const LessonComp = ({ lesson }: LessonCompProps) => {
  return (
    <div className="lesson m-8" data-lesson-id={lesson.id}>
      <div className="items-center flex my-[8px]">
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
        <h1 className="mx-[16px] text-center">Lesson {lesson.title}</h1>
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {lesson.units.map((unit: Unit) => (
          <div
            key={unit.index}
            className="flex flex-col flex-1 p-8 rounded-full border-b-4 border-slate-600"
            style={{
              transform:
                "translateX(" +
                pathOffset(lesson.index * 5 + unit.index, 10, 100) +
                "px)",
              backgroundColor: lesson.colorHex,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LessonComp
