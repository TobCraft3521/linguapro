import React from "react"

const IntroductionBlock = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Ethan's Language Adventure!
          </h2>
          <p className="text-lg mb-4">
            Learn languages while guiding Ethan through his journey of growth
            and discovery.
          </p>
          <div className="md:hidden mb-4">
            <img
              src="/images/ethan.jpg"
              alt="Ethan"
              className="w-full rounded-lg"
            />
          </div>
          <p className="text-gray-700 dark:text-white">
            Our app offers an immersive language learning experience intertwined
            with Ethan's life story. Each stage of Ethan's life corresponds to a
            different age group of learners, ensuring that the content is
            engaging and relevant. Join Ethan today and embark on a journey of
            language learning and personal growth!
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="hidden md:block mb-4">
            <img
              src="/images/app-insight.jpg"
              alt="App Insight"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:hidden mb-4">
            <img
              src="/images/ethan.jpg"
              alt="Ethan"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionBlock
