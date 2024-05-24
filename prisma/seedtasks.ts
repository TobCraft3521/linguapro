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

  const fourthUnitId = (
    await db.unit.findFirst({
      where: {
        lesson: {
          course: {
            language: "FR",
          },
          index: 0,
        },
        index: 3,
      },
    })
  )?.id

  if (
    !frenchCourseId ||
    !firstUnitId ||
    !secondUnitId ||
    !thirdUnitId ||
    !fourthUnitId
  )
    return

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
      {
        description: "Great job! Let's do some listening. What do you hear?",
        type: "LISTENING",
        index: 2,
        unitId: firstUnitId,
        options: {
          audio: "/sounds/tasks/aller.mp3",
          options: ["Aller", "Boire", "Au revoir"],
        },
        solution: "0",
      },
      {
        description:
          "Fill in the gaps! Click the words in the order they should appear in the text. Don't click the words that don't fit in the text. Click the words again to remove them.",
        type: "GAP",
        index: 3,
        unitId: firstUnitId,
        options: {
          text: "_! Je suis Ethan. J'habite à Paris. _!",
          options: ["Au revoir", "Salut", "Attends"],
        },
        solution: "10",
      },
      {
        description: "Time to introduce some new vocabulary! Match the words.",
        type: "VOCMATCH",
        index: 4,
        unitId: firstUnitId,
        options: [
          ["boire", "aller", "dormir", "parler"],
          ["go", "speak", "sleep", "drink"],
        ],
        solution: "3021",
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
      {
        description:
          "Let's introduce personal pronouns! Map the French pronouns to their English equivalents. Tip: its quite easy. 😉",
        type: "VOCMATCH",
        index: 1,
        unitId: secondUnitId,
        options: [
          ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"],
          [
            "I",
            "you",
            "he",
            "she",
            "one",
            "we",
            "you",
            "they (male or mixed)",
            "they (all female)",
          ],
        ],
        solution: "012345678",
      },
      {
        description:
          "Now you will learn the verb 'to be'. Tip: it's almost as simple as last time. 😉. But make sure to remember them.",
        type: "VOCMATCH",
        index: 2,
        unitId: secondUnitId,
        options: [
          [
            "Je suis",
            "Tu es",
            "Il est",
            "Elle est",
            "On est",
            "Nous sommes",
            "Vous êtes",
            "Ils sont",
            "Elles sont",
          ],
          [
            "They are (all female)",
            "They are (all male or mixed)",
            "You are",
            "We are",
            "One is",
            "She is",
            "He is",
            "You are",
            "I am",
          ],
        ],
        solution: "876543210",
      },
      {
        description:
          "Fill in the gaps! Click the words in the order they should appear in the text. Don't click the words that don't fit in the text. Click the words again to remove them.",
        type: "GAP",
        index: 3,
        unitId: secondUnitId,
        options: {
          text: "Salut! Je _ Ethan! J'habite à _. ",
          options: ["Paris", "suis", "Munich"],
        },
        solution: "10",
      },
      // unit 3
      {
        description:
          "Fill in the gaps! Click the words in the order they should appear in the text. Don't click the words that don't fit in the text. Click the words again to remove them.",
        type: "GAP",
        index: 0,
        unitId: thirdUnitId,
        options: {
          text: "Salut! Je m'appelle _! J'habite à _.",
          options: ["Ethan", "Paris", "Londres"],
        },
        solution: "01",
      },
      {
        description:
          "Great job! Let's learn some more words. Which of these means 'to sleep'?",
        type: "VOCINTRO",
        index: 1,
        unitId: thirdUnitId,
        options: [
          {
            text: "Boire",
            img: "/imgs/tasks/drink.png",
            sound: "/sounds/tasks/boire.mp3",
          },
          {
            text: "Manger",
            img: "/imgs/tasks/food.png",
            sound: "/sounds/tasks/manger.mp3",
          },
          {
            text: "Dormir",
            img: "/imgs/tasks/sleep.png",
            sound: "/sounds/tasks/dormir.mp3",
          },
        ],
        solution: "2",
      },
      {
        description: "Next up, which of these means 'to speak'?",
        type: "VOCINTRO",
        index: 2,
        unitId: thirdUnitId,
        options: [
          {
            text: "Aller",
            img: "/imgs/tasks/walk.png",
            sound: "/sounds/tasks/aller.mp3",
          },
          {
            text: "Parler",
            img: "/imgs/tasks/speak.png",
            sound: "/sounds/tasks/parler.mp3",
          },
          {
            text: "Savoir",
            img: "/imgs/tasks/know.png",
            sound: "/sounds/tasks/savoir.mp3",
          },
        ],
        solution: "1",
      },
      {
        description: "Next up, which of these means 'to know'?",
        type: "VOCINTRO",
        index: 3,
        unitId: thirdUnitId,
        options: [
          {
            text: "Savoir",
            img: "/imgs/tasks/know.png",
            sound: "/sounds/tasks/savoir.mp3",
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
      {
        description: "Last one! Which of these means 'to have'?",
        type: "VOCINTRO",
        index: 4,
        unitId: thirdUnitId,
        options: [
          {
            text: "Avoir",
            img: "/imgs/tasks/have.png",
            sound: "/sounds/tasks/avoir.mp3",
          },
          {
            text: "Manger",
            img: "/imgs/tasks/food.png",
            sound: "/sounds/tasks/manger.mp3",
          },
          {
            text: "Dormir",
            img: "/imgs/tasks/sleep.png",
            sound: "/sounds/tasks/dormir.mp3",
          },
        ],
        solution: "0",
      },
      // unit 4
      {
        description: "Time to introduce some new vocabulary! Match the words.",
        type: "VOCMATCH",
        index: 0,
        unitId: fourthUnitId,
        options: [
          ["boire", "aller", "dormir", "parler"],
          ["go", "speak", "sleep", "drink"],
        ],
        solution: "3021",
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
