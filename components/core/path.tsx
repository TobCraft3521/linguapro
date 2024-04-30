"use client"
import { getLessonsByCourse } from "@/lib/lessons"
import { Language, Lesson } from "@prisma/client"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import LessonComp from "./lesson"
import LessonsHeader from "./lesson-header"

interface PathProps {}

const Path: React.FC<PathProps> = () => {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [viewedLesson, setViewedLesson] = useState<Lesson | null>(null)

  const { lang } = useParams()
  if (!lang || !((lang as string).toUpperCase() in Language)) return null

  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return

    const containerTop = container.getBoundingClientRect().top
    const containerBottom = container.getBoundingClientRect().bottom

    // Add an offset to trigger the change earlier
    const offset = 200 // Adjust this value as needed

    const elements = container.querySelectorAll(".lesson")

    let newViewedLesson = null

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()

      if (
        rect.bottom > containerTop - offset &&
        rect.bottom <= containerBottom + offset
      ) {
        // Update if the bottom of the element is within the container's bounds with the offset
        const lessonId = element.getAttribute("data-lesson-id")
        newViewedLesson = lessons.find((lesson) => lesson.id === lessonId)
      }
    })

    if (newViewedLesson) {
      setViewedLesson(newViewedLesson)
    }
  }

  useEffect(() => {
    // Add scroll event listener to the container
    const container = containerRef.current as HTMLDivElement
    container.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up the event listener when the component unmounts
    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [lessons]) // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    ;(async () => {
      const dbLessons = await getLessonsByCourse(
        (lang as string).toUpperCase() as Language
      )
      setLessons(dbLessons)
      console.log(lessons)
      if (!viewedLesson) setViewedLesson(dbLessons[0])
    })()
  }, [lang])

  return (
    <div className="flex flex-1 left-0 relative">
      <LessonsHeader lesson={viewedLesson} />
      <div
        className="h-[100vh] overflow-y-scroll flex-1 pt-32"
        ref={containerRef}
      >
        {lessons.map((lesson) => (
          <div key={lesson.id}>
            <LessonComp lesson={lesson} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Path
