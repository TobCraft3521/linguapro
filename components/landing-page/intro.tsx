import React from "react"

const IntroductionBlock = () => {
  return (
    <div className="mx-auto w-screen bg-white px-4 py-16 dark:bg-black dark:bg-transparent md:flex md:justify-center md:pb-32">
      <div className="max-w-6xl md:flex md:items-center">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
            Welcome to Ethan&apos;s Language Adventure!
          </h2>
          <p className="text-gray-800 dark:text-white">
            Learn languages while guiding Ethan through his journey of growth
            and discovery. Our app offers an immersive language learning
            experience intertwined with Ethan&apos;s life story. Each stage of
            Ethan&apos;s life corresponds to a different age group of learners,
            ensuring that the content is engaging and relevant. Join Ethan today
            and embark on a journey of language learning and personal growth!
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img
            src="/imgs/ethan/kidethan.png"
            alt="Ethan"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default IntroductionBlock
