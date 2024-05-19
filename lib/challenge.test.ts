import {
  getHeartsLeft,
  decreaseHearts,
  queryChallengeSession,
} from "./challenge"
import { db } from "./db"
import { auth } from "@clerk/nextjs"
import { cache } from "react"
import { mostRecentLang } from "./mostRecentLang"

jest.mock("./db", () => ({
  db: {
    profile: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  },
}))

jest.mock("@clerk/nextjs", () => ({
  auth: jest.fn(),
}))

jest.mock("react", () => ({
  ...jest.requireActual("react"), // use actual for all non-hook parts
  cache: jest.fn((fn) => fn),
}))

jest.mock("./mostRecentLang", () => ({
  mostRecentLang: jest.fn(),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

test("getHeartsLeft calls the correct functions with the correct parameters", async () => {
  const userId = "testUserId"
  ;(auth as jest.Mock).mockImplementation(() => ({ userId }))
  await getHeartsLeft()
  expect(auth).toHaveBeenCalled()
  expect(db.profile.findFirst).toHaveBeenCalledWith({
    where: {
      user: { userId },
      language: await mostRecentLang(),
    },
  })
})

// Add similar tests for decreaseHearts and queryChallengeSession
