import React from "react"

const FullWidthSection = () => {
  return (
    <div className="bg-gray-800 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Flueny: Elevate Your Language Skills with Ethan
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            With Flueny, your language skills grow alongside Ethan's life,
            guiding you through a dynamic learning experience.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Replace with your content */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive Lessons
              </h3>
              <p className="mt-2 text-gray-600">
                Engage with immersive lessons designed to enhance your language
                proficiency through interactive exercises and real-world
                scenarios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Adaptive Learning
              </h3>
              <p className="mt-2 text-gray-600">
                Personalize your learning journey with adaptive algorithms that
                tailor lesson content and difficulty based on your progress and
                preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Community Engagement
              </h3>
              <p className="mt-2 text-gray-600">
                Join a vibrant community of language enthusiasts and native
                speakers from around the world to practice, exchange cultural
                insights, and foster global connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
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
