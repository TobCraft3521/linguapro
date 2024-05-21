import React from "react"
import LinguaPro from "../header/linguapro-logo"

const FullWidthSection = () => {
  return (
    <div className="info bg-slate-100 bg-cover bg-fixed py-8 dark:bg-zinc-900 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-4xl">
            Lingua
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
            : Elevate Your Language Skills with Ethan
          </h2>
          <p className="mt-4 text-xl text-gray-800 dark:text-white">
            With LinguaPro, your language skills grow alongside Ethan&apos;s
            life, guiding you through a dynamic learning experience.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive Lessons
              </h3>
              <p className="mt-2 text-gray-600">
                Engage with immersive lessons designed to enhance your language
                proficiency through interactive exercises and real-world
                scenarios.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Adaptive Learning
              </h3>
              <p className="mt-2 text-gray-600">
                Personalize your learning journey with adaptive algorithms that
                tailor lesson content and difficulty based on your progress and
                preferences.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Community Engagement
              </h3>
              <p className="mt-2 text-gray-600">
                Join a vibrant community of language enthusiasts and native
                speakers from around the world to practice, exchange cultural
                insights, and foster global connections.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Progress Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Monitor your language learning journey with detailed progress
                tracking features, including performance analytics,
                achievements, and personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullWidthSection
