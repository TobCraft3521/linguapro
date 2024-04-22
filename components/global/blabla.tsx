import React from "react"

const FullWidthSection = () => {
  return (
    <div className="bg-gray-800 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Explore Our Features
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Discover the power of our language learning platform and take your
            skills to new heights.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Replace with your content */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive Pronunciation Practice
              </h3>
              <p className="mt-2 text-gray-600">
                Master your pronunciation with engaging exercises and real-time
                feedback.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Offline Access
              </h3>
              <p className="mt-2 text-gray-600">
                Access our vast library of lessons offline, perfect for learning
                on the go.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Global Community
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with millions of learners and native speakers worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Personalized Recommendations
              </h3>
              <p className="mt-2 text-gray-600">
                Receive tailored lesson recommendations based on your unique
                learning style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullWidthSection
