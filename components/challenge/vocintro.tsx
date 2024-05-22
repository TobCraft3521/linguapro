// VocIntro.tsx
import { ClientTask } from "@/app/challenge/page"
import Image from "next/image"
import React from "react"

type VocIntroProps = {
  task: ClientTask
}

const VocIntro = ({ task }: VocIntroProps) => {
  const { options } = task

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="p-16 pt-0 text-2xl font-semibold md:max-w-[40vw]">
        {task.description}
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {(options as { text: string; img: string; sound: string }[]).map(
          (option, index) => (
            <div
              className="flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2 dark:border-zinc-700 dark:hover:bg-zinc-700 md:min-h-[217px] md:w-[250px]"
              key={index}
            >
              <Image
                src={option.img}
                alt={option.text}
                width={100}
                height={100}
              />
              <p>{option.text}</p>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default VocIntro
