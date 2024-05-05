"use client"
import { getLessonLockStates } from "@/lib/profiles"
import { Unit } from "@prisma/client"
import Image from "next/image"
import { useEffect, useState } from "react"
import "./lesson.css"
import { LessonWithUnits } from "./path"

interface LessonCompProps {
  lesson: LessonWithUnits
}

function pathOffset(index: number, period: number, amplitude: number) {
  return index + amplitude * Math.sin((2 * Math.PI * index) / period)
}

const LessonComp = ({ lesson }: LessonCompProps) => {
  const side = lesson.index % 2 === 0

  // Define the lockStates as a synchronous function inside the server component
  const [lockStates, setLockStates] = useState<boolean[]>([])
  useEffect(() => {
    const getLockStates = async () => {
      const lockStates = await getLessonLockStates(lesson.index)
      setLockStates(lockStates)
    }
    getLockStates()
  }, [])

  return (
    <div className="lesson m-8 relative" data-lesson-id={lesson.id}>
      <div className="items-center flex my-8">
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
        <h1 className="mx-[16px] text-center font-semibold">
          Lesson {lesson.title}
        </h1>
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        {/* Await the lockStates within the map function */}
        {lesson.units.map((unit: Unit, index: number) => (
          <div
            key={unit.index}
            className="flex justify-center items-center text-2xl text-white font-extrabold w-16 h-16 rounded-full border-b-4 border-slate-600 rbutton"
            style={{
              transform:
                "translateX(" +
                pathOffset(lesson.index * 5 + unit.index, 10, 100) +
                "px)",
              backgroundColor: lockStates[index] ? "#6c7478" : lesson.colorHex,
            }}
          >
            {unit.index + 1}
          </div>
        ))}
      </div>
      <div
        className="absolute top-[45%]"
        style={{
          left: side ? "10vw" : "",
          right: side ? "" : "10vw",
        }}
      >
        {lesson.image !== "" && (
          <Image
            src={lesson.image}
            alt="Lesson image"
            width={200}
            height={200}
          />
        )}
      </div>
    </div>
  )
}

export default LessonComp
