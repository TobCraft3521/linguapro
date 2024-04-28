import { auth, currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { Language, User } from "@prisma/client"
import { mostRecentLang } from "./mostRecentLang"

export const activeUser = async () => {
  const { userId } = auth()
  if (!userId) return null
  const user = await db.user.findFirst({
    where: {
      userId: userId,
    },
  })
  return user
}

export const initUser = async () => {
  const authUser = await currentUser()
  if (!authUser) return null
  const dbUser = await activeUser()
  if (dbUser) return dbUser

  const user: User = await db.user.create({
    data: {
      userId: authUser.id,
      email: authUser.emailAddresses[0].emailAddress,
      userName: authUser.username || "new-user",
      imageUrl: authUser.imageUrl,
    },
  })
  return user as User
}

export const activeProfile = async () => {
  const { userId } = auth()
  if (!userId) return null
  const dbUser = await activeUser()
  if (!dbUser) return
  const mostRecentLanguage = await mostRecentLang()
  if (!mostRecentLanguage) return
  const profile = await db.profile.findFirst({
    where: {
      userId: dbUser.id,
      language: mostRecentLanguage,
    },
  })
  return profile
}

export const initProfile = async () => {
  const { userId } = auth()
  if (!userId) return null
  const dbUser = await activeUser()
  if (!dbUser) return
  const dbProfile = await activeProfile()
  if (dbProfile) return dbProfile
  const mostRecentLanguage = await mostRecentLang()
  if (!mostRecentLanguage) return
  const profile = await db.profile.create({
    data: {
      userId: dbUser.id,
      language: Language[mostRecentLanguage] as Language,
    },
  })
  return profile
}
