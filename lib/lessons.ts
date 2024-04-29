"use server"
import { Language } from "@prisma/client"
import { db } from "./db"

export const getCourses = async () => {
  return await db.course.findMany()
}

export const getLessonsByCourse = async (code: Language) => {
  return await db.lesson.findMany({
    where: {
      course: {
        language: code,
      },
    },
  })
}

export const getUnitsByLesson = async (lessonId: string) => {
  return await db.unit.findMany({
    where: {
      lessonId: lessonId,
    },
  })
}
