import React from "react"

const AdditionalInfoBlock = () => {
  return (
    <div className="bg-white bg-cover bg-fixed py-8 pt-16 dark:bg-black md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative md:flex md:items-center">
          <div className="absolute left-20 top-20 h-96 w-96 bg-indigo-100 blur-[128px] dark:bg-white dark:blur-[256px]" />
          <div className="z-20 md:w-1/2">
            <img
              src="/imgs/ethan/teenethan.png"
              alt="Community"
              className="w-full rounded-lg"
            />
          </div>
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
              Why Choose Lingua
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pro
              </span>
              ?
            </h2>
            <p className="mb-8 text-lg text-gray-800 dark:text-white">
              We offer a unique and engaging way to learn languages. Here&apos;s
              why you should choose us:
            </p>
            <ul className="ml-8 list-disc text-gray-800 dark:text-white">
              <li>Interactive gameplay makes learning fun and immersive</li>
              <li>
                Curriculum tailored to different age groups ensures relevance
              </li>
              <li>
                Track Ethan&apos;s progress as you advance in your language
                skills
              </li>
              <li>Unlock achievements and rewards as you learn</li>
              <li>Access to a vibrant community of learners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfoBlock
