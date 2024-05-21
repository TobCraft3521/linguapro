import React from "react"

const Pricing = () => {
  const freePerks = [
    "Basic lessons",
    "Popular languages",
    "Basic exercise types",
  ]

  const paidPerks = [
    "Full access to all lessons",
    "Complete access to all languages",
    "No time limits on exercises",
    "Unlimited hearts",
    "All premium features",
  ]

  return (
    <div
      className="bg-white px-8 py-32 text-gray-900 dark:bg-black dark:text-white"
      //   style={{
      //     backgroundImage: "url('/imgs/backgrounds/pricingbg.png')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <h2 className="mb-12 text-center text-4xl font-extrabold">
        Pricing Plans
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Free Card */}
        <div className="min-h-[430px] w-full rounded-2xl border border-gray-300 bg-white p-6 drop-shadow-2xl dark:border-gray-800 dark:bg-gray-800 md:w-1/5">
          <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold">
            Limited
          </h3>
          <p className="mb-6 ml-1 text-2xl font-bold">FREE</p>
          <button className="w-full rounded-md border border-indigo-600 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-indigo-600 hover:text-white dark:text-white">
            Get Started
          </button>
          <ul className="mt-6">
            {freePerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Paid Tier Card */}
        <div className="relative min-h-[430px] w-full rounded-2xl border border-indigo-600 bg-[rgb(17,24,39)] p-8 text-white drop-shadow-2xl dark:bg-gray-800 md:w-1/5">
          <div className="absolute top-0 z-10 h-32 w-full rounded-full bg-purple-900 blur-[120px] dark:block" />

          <h3 className="text mb-4 inline-block rounded-full border border-gray-500 px-4 py-1 font-semibold text-white">
            Ultimate
          </h3>
          <p className="mb-6 ml-1 text-2xl font-bold">
            $12.99 <small className="text-md text-gray-400">/month</small>
          </p>
          <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold transition-all hover:from-purple-600 hover:to-[#df00be]">
            Upgrade Now
          </button>
          <ul className="mt-6">
            {paidPerks.map((perk, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
