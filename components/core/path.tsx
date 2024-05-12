"use client"
import { getLessonsByCourse } from "@/lib/lessons"
import { Language, Lesson, Unit } from "@prisma/client"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import LessonComp from "./lesson"
import LessonsHeader from "./lesson-header"
import Link from "next/link"
import { ArrowBigLeft, ChevronLeft, Loader2 } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"

interface PathProps {}

export type LessonWithUnits = Lesson & { units: Unit[] }

const Path: React.FC<PathProps> = () => {
  const [lessons, setLessons] = useState<LessonWithUnits[] | null>(null)
  const [viewedLesson, setViewedLesson] = useState<Lesson | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { lang } = useParams()

  const handleScroll = () => {
    console.log("first")
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
        rect.bottom <= containerBottom
      ) {
        // Update if the bottom of the element is within the container's bounds with the offset
        const lessonId = element.getAttribute("data-lesson-id")
        newViewedLesson = lessons?.find((lesson) => lesson.id === lessonId)
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
      //console.log(lessons)
      if (!viewedLesson) setViewedLesson(dbLessons[0])
    })()
  }, [lang])

  if (!lang || !((lang as string).toUpperCase() in Language)) return null

  if (!lessons)
    return (
      <div className="flex flex-1 left-0 relative">
        <LessonsHeader lesson={viewedLesson} />
        <div
          className="flex flex-col items-center justify-center text-center flex-1 text-lg text-neutral-500 dark:text-neutral-400 font-bold animate-spin"
          ref={containerRef}
        >
          <Loader2 size={32} />
        </div>
      </div>
    )

  if (lessons?.length === 0)
    return (
      <div className="flex flex-1 left-0 relative">
        <LessonsHeader lesson={viewedLesson} />
        <div
          className="flex flex-col items-center justify-center text-center flex-1 text-lg text-neutral-500 dark:text-neutral-400 font-bold"
          ref={containerRef}
        >
          Whoopsy! No lessons found.
          <Link href="/dashboard" className="flex flex-row items-center mt-2">
            <ChevronLeft /> Back to Courses
          </Link>
        </div>
      </div>
    )

  return (
    <div className="flex flex-1 left-0 relative">
      <LessonsHeader lesson={viewedLesson} />
      <ScrollArea
        className="overflow-y-auto overflow-x-hidden flex-1 pt-36 md:pt-24"
        ref={containerRef}
      >
        {lessons?.map((lesson) => (
          <div key={lesson.id}>
            <LessonComp lesson={lesson} />
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

export default Path
