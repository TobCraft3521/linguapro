"use server"
import { Language } from "@prisma/client"
import { db } from "./db"
import { cache } from "react"
import { auth } from "@clerk/nextjs"
import { mostRecentLang } from "./mostRecentLang"
import { start } from "repl"

export const getHeartsLeft = cache(async () => {
  const { userId } = auth()
  if (!userId) return
  return (
    await db.profile.findFirst({
      where: {
        user: {
          userId,
        },
        language: await mostRecentLang(),
      },
    })
  )?.hearts
})

export const decreaseHearts = async () => {
  const { userId } = auth()
  if (!userId) return
  const profile = await db.profile.findFirst({
    where: {
      user: {
        userId,
      },
      language: await mostRecentLang(),
    },
  })
  if (!profile) return
  await db.profile.update({
    where: {
      id: profile.id,
    },
    data: {
      hearts: Math.max(profile.hearts - 1, 0),
    },
  })
}

export const queryChallengeSession = async () => {
  const { userId } = auth()
  if (!userId) return
  const profile = await db.profile.findFirst({
    where: {
      user: {
        userId,
      },
      language: await mostRecentLang(),
    },
  })
  if (!profile) return
  const challengeSession = {
    hearts: profile?.hearts,
    language: profile?.language,
    startedAt: profile?.startedAt,
    progress: profile?.challengeProgress,
  }

  if (
    challengeSession.startedAt.getTime() + SESSION_DURATION * 1000 <
    Date.now()
  ) {
    // expired: reset session
    await db.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        challengeProgress: 0,
        startedAt: new Date(),
        hearts: 5,
      },
    })
  }

  return challengeSession
}

const SESSION_DURATION = 60 // in seconds
