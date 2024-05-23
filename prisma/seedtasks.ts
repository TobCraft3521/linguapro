import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

const seed = async () => {
  //french tasks
  const frenchCourseId = (
    await db.course.findFirst({
      where: {
        language: "FR",
      },
    })
  )?.id

  const firstUnitId = (
    await db.unit.findFirst({
      where: {
        lesson: {
          course: {
            language: "FR",
          },
          index: 0,
        },
        index: 0,
      },
    })
  )?.id

  if (!frenchCourseId || !firstUnitId) return

  await db.task.createMany({
    data: [
      {
        description:
          "Bonjour, let's start leaning French! Which of these is the correct translation for 'Hello'?",
        type: "VOCINTRO",
        index: 0,
        unitId: firstUnitId,
        options: [
          {
            text: "Merci",
            img: "/imgs/tasks/merci.png",
            sound: "/sounds/tasks/merci.mp3",
          },
          {
            text: "Au revoir",
            img: "/imgs/tasks/aurevoir.png",
            sound: "/sounds/tasks/aurevoir.mp3",
          },
          {
            text: "Salut",
            img: "/imgs/tasks/salut.png",
            sound: "/sounds/tasks/salut.mp3",
          },
        ],
        solution: "2",
      },
      {
        description:
          "Now some verbs! Which of these is the correct translation for 'To eat'?",
        type: "VOCINTRO",
        index: 1,
        unitId: firstUnitId,
        options: [
          {
            text: "Manger",
            img: "/imgs/tasks/food.png",
            sound: "/sounds/tasks/manger.mp3",
          },
          {
            text: "Boire",
            img: "/imgs/tasks/drink.png",
            sound: "/sounds/tasks/boire.mp3",
          },
          {
            text: "Aller",
            img: "/imgs/tasks/walk.png",
            sound: "/sounds/tasks/aller.mp3",
          },
        ],
        solution: "0",
      },
    ],
  })
}

seed()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await db.$disconnect()
  })
