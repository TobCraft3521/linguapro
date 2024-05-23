import { ClientTask } from "@/app/challenge/page"
import Image from "next/image"

interface FinishedScreenProps {
  tasks: ClientTask[]
}

const FinishedScreen = ({ tasks }: FinishedScreenProps) => {
  return (
    <>
      <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
        <Image
          src="/imgs/finish.svg"
          alt="finished"
          className="hidden lg:block"
          height={100}
          width={100}
        />
        <Image
          src="/imgs/finish.svg"
          alt="finished"
          className="block lg:hidden"
          height={50}
          width={50}
        />
        <h1 className="text-xl font-bold text-neutral-700 lg:text-3xl">
          Great job! <br /> You&apos;ve finished the challenge
        </h1>
        <div className="flex w-full items-center gap-x-4">
          {/* <ResultCard variant="points" value={tasks.length * 10} /> */}
        </div>
      </div>
    </>
  )
}

export default FinishedScreen
