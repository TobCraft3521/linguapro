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

  const secondUnitId = (
    await db.unit.findFirst({
      where: {
        lesson: {
          course: {
            language: "FR",
          },
          index: 0,
        },
        index: 1,
      },
    })
  )?.id

  const thirdUnitId = (
    await db.unit.findFirst({
      where: {
        lesson: {
          course: {
            language: "FR",
          },
          index: 0,
        },
        index: 2,
      },
    })
  )?.id

  if (!frenchCourseId || !firstUnitId || !secondUnitId || !thirdUnitId) return

  await db.task.createMany({
    data: [
      // unit 1
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
      // unit 2
      {
        description:
          "Great job! Let's review some vocabulary. What do you hear?",
        type: "LISTENING",
        index: 0,
        unitId: secondUnitId,
        options: {
          audio: "/sounds/tasks/salut.mp3",
          options: ["Merci", "Salut", "Au revoir"],
        },
        solution: "1",
      },
      // unit 3
      {
        description:
          "Fill in the gaps! Click the words in the order they should appear in the text. Don't click the words that don't fit in the text. Click the words again to remove them.",
        type: "GAP",
        index: 0,
        unitId: thirdUnitId,
        options: {
          text: "_! Je suis Ethan. J'habite à Paris. _!",
          options: ["Aurevoir", "Salut", "Attends"],
        },
        solution: "10",
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
