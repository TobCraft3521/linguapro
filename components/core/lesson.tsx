"use client"
import { getLessonLockStates, getProfileProgress } from "@/lib/profiles"
import { Unit } from "@prisma/client"
import Image from "next/image"
import { useEffect, useState } from "react"
import "./lesson.css"
import { LessonWithUnits } from "./path"
import toast from "react-hot-toast"
import UnitComp from "./unit"

interface LessonCompProps {
  lesson: LessonWithUnits
}

const LessonComp = ({ lesson }: LessonCompProps) => {
  const side = lesson.index % 2 === 0

  // Define the lockStates as a synchronous function inside the server component
  const [lockStates, setLockStates] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
  ])
  const [nextUnitIndex, setNextUnitIndex] = useState<number>(0)
  const [isActiveLesson, setIsActiveLesson] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const lockStates = await getLessonLockStates(lesson.index)
      setLockStates(lockStates)
      const progress = (await getProfileProgress()) || 0
      const activeLessonIndex = Math.floor(progress / 5)
      setIsActiveLesson(activeLessonIndex === lesson.index)
      setNextUnitIndex(progress % 5)
      setLoading(false)
    }
    fetchData()
  }, [lesson.index])

  return (
    <div className="lesson relative m-8" data-lesson-id={lesson.id}>
      <div className="my-16 flex items-center">
        <hr className="flex-grow basis-[48px] border-0 border-t-[2px] dark:border-t-[1px] dark:border-white" />
        <h1 className="mx-[16px] text-center text-lg font-semibold">
          Lesson: {lesson.index + 1} - {lesson.title}
        </h1>
        <hr className="flex-grow basis-[48px] border-0 border-t-[2px] dark:border-t-[1px] dark:border-white" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Await the lockStates within the map function */}
        {lesson.units.map((unit: Unit, index: number) => (
          <UnitComp
            key={unit.id}
            unit={unit}
            lesson={lesson}
            lockStates={lockStates}
            index={index}
            isActiveLesson={isActiveLesson}
            nextUnitIndex={nextUnitIndex}
            loading={loading}
          />
        ))}
      </div>
      <div
        className="absolute top-[45%]"
        style={{
          left: side ? "7vw" : "",
          right: side ? "" : "7vw",
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
