import Link from "next/link"

const LinguaPro = () => {
  return (
    <span className="z-20 inline-block">
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-6 w-6"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
        </svg>
        <h1 className="flex cursor-pointer text-2xl font-bold">
          Lingua
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Pro
          </span>
        </h1>
      </Link>
    </span>
  )
}

export default LinguaPro
