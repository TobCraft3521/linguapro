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
  const [lockStates, setLockStates] = useState<boolean[]>([])
  const [nextUnitIndex, setNextUnitIndex] = useState<number>(0)
  const [isActiveLesson, setIsActiveLesson] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const lockStates = await getLessonLockStates(lesson.index)
      setLockStates(lockStates)
      const progress = (await getProfileProgress()) || 0
      const activeLessonIndex = Math.floor(progress / 5)
      setIsActiveLesson(activeLessonIndex === lesson.index)
      setNextUnitIndex(progress % 5)
    }
    fetchData()
  }, [lesson.index])

  return (
    <div className="lesson m-8 relative" data-lesson-id={lesson.id}>
      <div className="items-center flex my-16">
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
        <h1 className="mx-[16px] text-center font-semibold text-lg">
          Lesson: {lesson.index + 1} - {lesson.title}
        </h1>
        <hr className="basis-[48px] flex-grow dark:border-t-[1px] border-t-[2px] border-0 dark:border-white" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
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
          />
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
