"use server"
import { db } from "./db"
import { queryActiveProfile } from "./profiles"

export const decreaseHearts = async () => {
  const profile = await queryActiveProfile()
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
  const profile = await queryActiveProfile()
  if (!profile) return
  const challengeSession = {
    hearts: profile?.hearts,
    language: profile?.language,
    startedAt: profile?.startedAt,
    progress: profile?.challengeProgress,
    timeLimit: await queryChallengeTime(),
  }

  if (
    challengeSession.startedAt.getTime() +
      (challengeSession.timeLimit || 0) * 1000 <
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

    challengeSession.hearts = 5
    challengeSession.startedAt = new Date()
    challengeSession.progress = 0
  }

  return challengeSession
}

export const queryChallengeTime = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
  const activeLesson = Math.floor(profile.progress / 5)
  const activeUnit = profile.progress % 5

  return (
    await db.lesson.findFirst({
      where: {
        course: {
          language: profile.language,
        },
        index: activeLesson,
      },
      include: {
        units: {
          orderBy: {
            index: "asc",
          },
        },
      },
    })
  )?.units[activeUnit].timeLimit
}

export const checkSolution = async (solution: String) => {
  const profile = await queryActiveProfile()
  if (!profile) return
  if (await isChallengeSessionExpired()) return { right: false, expired: true }
  const activeLesson = Math.floor(profile.progress / 5)
  const activeUnit = profile.progress % 5
  const lesson = await db.lesson.findFirst({
    where: {
      course: {
        language: profile.language,
      },
      index: activeLesson,
    },
    include: {
      units: {
        orderBy: {
          index: "asc",
        },
        include: {
          tasks: {
            orderBy: {
              index: "asc",
            },
          },
        },
      },
    },
  })
  if (!lesson) return
  const unit = lesson.units[activeUnit]
  const task = unit.tasks[profile.challengeProgress]
  const right = task.solution === solution
  const end = profile.challengeProgress + 1 === unit.tasks.length
  if (right) {
    if (!end) {
      await db.profile.update({
        where: {
          id: profile.id,
        },
        data: {
          challengeProgress: profile.challengeProgress + 1,
        },
      })
    } else {
      await db.profile.update({
        where: {
          id: profile.id,
        },
        data: {
          progress: profile.progress + 1,
          xp: profile.xp + unit.tasks.length * 10,
          challengeProgress: 0,
          hearts: 5,
          startedAt: new Date(new Date().getTime() - unit.timeLimit * 1000),
        },
      })
    }
  } else {
    await decreaseHearts()
  }

  return {
    right,
    expired: false,
    end,
  }
}

export const queryChallengeProgress = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
  return profile.challengeProgress
}

export const queryChallengeTasksLength = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
  const activeLesson = Math.floor(profile.progress / 5)
  const activeUnit = profile.progress % 5
  const lesson = await db.lesson.findFirst({
    where: {
      course: {
        language: profile.language,
      },
      index: activeLesson,
    },
    include: {
      units: {
        orderBy: {
          index: "asc",
        },
        include: {
          tasks: {
            orderBy: {
              index: "asc",
            },
          },
        },
      },
    },
  })
  if (!lesson) return
  return lesson.units[activeUnit].tasks.length
}

export const queryTasks = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
  const activeLesson = Math.floor(profile.progress / 5)
  const activeUnit = profile.progress % 5
  const unit = await db.unit.findFirst({
    where: {
      lesson: {
        course: {
          language: profile.language,
        },
        index: activeLesson,
      },
      index: activeUnit,
    },
    include: {
      tasks: {
        orderBy: {
          index: "asc",
        },
      },
    },
  })
  const tasks = unit?.tasks
  // ⚠️ dont send solution to client
  return tasks?.map((task) => {
    return {
      description: task.description,
      options: task.options,
      index: task.index,
      type: task.type,
    }
  })
}

export const resetChallengeSession = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
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

export const isChallengeSessionExpired = async () => {
  const profile = await queryActiveProfile()
  if (!profile) return
  const timeLimit = await queryChallengeTime()
  return profile.startedAt.getTime() + (timeLimit || 0) * 1000 < Date.now()
}
