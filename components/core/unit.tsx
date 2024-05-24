"use client"
import { Unit } from "@prisma/client"
import { LessonWithUnits } from "./path"
import toast from "react-hot-toast"
import { useContext, useState } from "react"
import "./unit.css"
import { redirect, useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { ChallengeSessionContext } from "../providers/challenge-session-context"

interface UnitProps {
  unit: Unit
  lesson: LessonWithUnits
  lockStates: boolean[]
  index: number
  isActiveLesson: boolean
  nextUnitIndex: number
  loading: boolean
}

function pathOffset(index: number, period: number, amplitude: number) {
  return index + amplitude * Math.sin((2 * Math.PI * index) / period)
}

const UnitComp = ({
  unit,
  lesson,
  lockStates = [true, true, true, true, true],
  index,
  isActiveLesson,
  nextUnitIndex,
  loading,
}: UnitProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const { end, setEnd } = useContext(ChallengeSessionContext) || {
    setEnd: () => {},
  }

  const handleOnClick = (unit: Unit) => {
    if (loading) {
      toast.loading("Loading...", { id: "loading", duration: 1000 })
      return
    }
    if (!isActiveLesson || unit.index !== nextUnitIndex) {
      toast.error("This unit is locked", {
        id: "error",
        duration: 2000,
      })
      return
    } else {
      toast.success("Entering challenge!", {
        id: "success",
        duration: 2000,
      })
      setEnd(false)
      router.push("/challenge")
    }
  }

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const translateY = isHovered ? "4px" : "0"

  return (
    <div className="relative flex flex-row">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        key={unit.index}
        className="specialshadow rbutton flex h-16 w-20 cursor-pointer select-none items-center justify-center rounded-[50%] text-2xl font-extrabold text-white"
        style={{
          transform:
            "translate(" +
            pathOffset(lesson.index * 6 + unit.index, 10, 150) +
            "px," +
            translateY +
            ")",
          backgroundColor: lockStates[index] ? "#6c7478" : lesson.color1Hex,
        }}
        onClick={() => handleOnClick(unit)}
      >
        {!loading ? (
          unit.index + 1
        ) : (
          <Loader2 size={24} className="animate-spin text-slate-400" />
        )}
      </div>

      {isActiveLesson && unit.index === nextUnitIndex && (
        <div
          className="arrow absolute top-[-2rem] animate-bounce"
          style={{
            position: "absolute",
            left: pathOffset(lesson.index * 6 + unit.index, 10, 150) + "px",
          }}
        >
          <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-1 text-center text-sm font-semibold uppercase text-white shadow">
            Start
          </div>
        </div>
      )}
    </div>
  )
}

export default UnitComp
