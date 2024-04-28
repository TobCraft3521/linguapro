"use server"
import { auth } from "@clerk/nextjs"
import { db } from "./db"
import { Language } from "@prisma/client"

export const mostRecentLang = async () => {
  const { userId } = auth()
  if (!userId) return
  const res = await db.user.findUnique({
    where: {
      userId,
    },
  })
  return res?.mostRecentLang as Language
}

export const updateMostRecentLang = async (code: Language) => {
  const { userId } = auth()
  if (!userId) return
  await db.user.update({
    where: {
      userId,
    },
    data: {
      mostRecentLang: Language[code] as Language,
    },
  })
}
