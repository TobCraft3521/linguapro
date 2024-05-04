"use server"
import { Language } from "@prisma/client"
import { db } from "./db"
import { cache } from "react"

export const getCourses = cache(async () => {
  return await db.course.findMany()
})

export const getLessonsByCourse = cache(async (code: Language) => {
  return await db.lesson.findMany({
    where: {
      course: {
        language: code,
      },
    },
    include: {
      units: {
        orderBy: {
          index: "asc",
        },
      },
    },
    orderBy: {
      index: "asc",
    },
  })
})

export const getUnitsByLesson = cache(async (lessonId: string) => {
  return await db.unit.findMany({
    where: {
      lessonId: lessonId,
    },
  })
})
