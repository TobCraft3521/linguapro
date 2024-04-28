"use server"
import { auth } from "@clerk/nextjs"
import { db } from "./db"

export const mostRecentLang = async () => {
  const { userId } = auth()
  if (!userId) return
  const res = await db.user.findUnique({
    where: {
      userId,
    },
  })
  return res?.mostRecentLang
}

export const updateMostRecentLang = async (code: string) => {
  const { userId } = auth()
  if (!userId) return
  await db.user.update({
    where: {
      userId,
    },
    data: {
      mostRecentLang: code,
    },
  })
}
