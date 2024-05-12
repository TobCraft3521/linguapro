import React from "react"

const AdditionalInfoBlock = () => {
  return (
    <div
      className="bg-gray-900 py-8 bg-fixed bg-cover pt-16"
      style={{
        backgroundImage: "url('/imgs/backgrounds/bggradientred2.webp')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Why Choose Flueny?
            </h2>
            <p className="text-lg mb-4 text-white">
              We offer a unique and engaging way to learn languages. Here&apos;s
              why you should choose us:
            </p>
            <ul className="list-disc ml-8 text-white">
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
          <div className="md:w-1/2 md:pl-8">
            <img
              src="/images/community.jpg"
              alt="Community"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfoBlock
