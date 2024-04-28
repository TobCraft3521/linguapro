import Link from "next/link"

const Flueny = () => {
  return (
    <span className="z-20">
      <Link
        href="/"
        className="flex flex-row gap-2 justify-center items-center"
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
        <p className="cursor-pointer flex">
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-500"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            F
          </span>
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-500"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            L
          </span>
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-400"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            U
          </span>
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-400"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            E
          </span>
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-300"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            N
          </span>
          <span
            className="uppercase text-2xl flex flex-1 justify-center items-center text-teal-300"
            style={{
              fontFamily: "Varela Round",
              fontWeight: 950,
            }}
          >
            Y
          </span>
        </p>
      </Link>
    </span>
  )
}

export default Flueny
