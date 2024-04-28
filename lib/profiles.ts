import { auth, currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { User } from "@prisma/client"

export const activeUser = async () => {
  const { userId } = auth()
  if (!userId) return null
  const user = await db.user.findUnique({
    where: {
      userId: userId,
    },
  })
  return user
}

export const initProfile = async () => {
  const authUser = await currentUser()
  if (!authUser) return null
  const dbUser = await activeUser()
  if (dbUser) return dbUser

  const user: User = await db.user.create({
    data: {
      userId: authUser.id,
      email: authUser.emailAddresses[0].emailAddress,
      name: authUser.firstName + " " + authUser.lastName,
      userName: authUser.username || "new-user",
      imageUrl: authUser.imageUrl,
    },
  })
  return user as User
}
