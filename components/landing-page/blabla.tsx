import {
  ArrowBigUpDash,
  ChevronsUp,
  Hand,
  Infinity,
  SwatchBook,
  Volume2,
} from "lucide-react"

const Features = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for people just like you
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            Here at LinguaPro we focus on the expirience you have while
            learning, by making interactive and fun lessons that will help you
            learn faster and better.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <Hand className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Interactivity
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our lessons are designed to be interactive and fun, so you can
              learn faster and better.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <ChevronsUp className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Speed</h3>
            <p className="text-gray-500 dark:text-gray-400">
              With our interactive lessons you will learn faster than ever
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <ArrowBigUpDash className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Progress Tracking
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Track your progress and see how much you have improved over time
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <Volume2 className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Hear the language
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Thanks to our advanced natural ai text to speech model you can
              hear the language as it is spoken by natives
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <SwatchBook className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Variation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Track your progress and see how much you have improved over time
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-gray-600 lg:h-12 lg:w-12">
              <Infinity className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Endless Content
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              On our platform we have way more content than you could ever
              consume, still we are always adding new content
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
