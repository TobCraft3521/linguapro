"use client"
import { getLessonsByCourse } from "@/lib/lessons"
import { Language } from "@prisma/client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface PathProps {}

const Path = ({}: PathProps) => {
  const [lessons, setLessons] = useState([])
  const [units, setUnits] = useState([])

  const { lang } = useParams()
  if (!lang || !((lang as string).toUpperCase() in Language)) return null

  useEffect(() => {
    ;(async () => {
      const dbLessons = await getLessonsByCourse(
        (lang as string).toUpperCase() as Language
      )
      console.log("first")
      console.log(dbLessons)
    })()
  }, [])

  return <div className="flex flex-1"></div>
}

export default Path
