"use client"
import { Unit } from "@prisma/client"
import { LessonWithUnits } from "./path"
import toast from "react-hot-toast"
import { useState } from "react"
import "./unit.css"

interface UnitProps {
  unit: Unit
  lesson: LessonWithUnits
  lockStates: boolean[]
  index: number
  isActiveLesson: boolean
  nextUnitIndex: number
}

function pathOffset(index: number, period: number, amplitude: number) {
  return index + amplitude * Math.sin((2 * Math.PI * index) / period)
}

const UnitComp = ({
  unit,
  lesson,
  lockStates = [false, true, true, true, true],
  index,
  isActiveLesson,
  nextUnitIndex,
}: UnitProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleOnClick = (unit: Unit) => {
    if (!isActiveLesson || unit.index !== nextUnitIndex) {
      toast.error("You must complete the previous unit first", {
        id: "error",
        duration: 2000,
      })
      return
    } else {
      toast.success("Unit completed!", {
        id: "success",
        duration: 2000,
      })
    }
  }

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const translateY = isHovered ? "4px" : "0"

  return (
    <div className="flex flex-row relative">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        key={unit.index}
        className="flex justify-center items-center cursor-pointer select-none text-2xl text-white font-extrabold w-20 h-16 rounded-[50%] specialshadow rbutton"
        style={{
          transform:
            "translate(" +
            pathOffset(lesson.index * 5 + unit.index, 10, 150) +
            "px," +
            translateY +
            ")",
          backgroundColor: lockStates[index] ? "#6c7478" : lesson.colorHex,
        }}
        onClick={() => handleOnClick(unit)}
      >
        {unit.index + 1}
      </div>
      <div>
        {isActiveLesson && unit.index === nextUnitIndex && (
          <div className="absolute top-1/2 right-[-120%] transform translate-x-28 -translate-y-1/2 arrow">
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-xl shadow text-sm uppercase font-semibold">
              Click Here to Get Started
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UnitComp