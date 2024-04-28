"use client"
import { updateMostRecentLang } from "@/lib/mostRecentLang"
import { useRouter } from "next/navigation"

interface LanguageCardProps {
  language: {
    name: string
    code: string
    icon: React.ReactNode
  }
}

const LanguageCard = ({ language }: LanguageCardProps) => {
  const router = useRouter()

  const handleLanguageSelect = async (code: string) => {
    await updateMostRecentLang(code)
    await router.push(`/dashboard/lang/${code}`)
  }
  return (
    <div
      className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 dark:hover:bg-zinc-800 cursor-pointer active:border-b-2 flex flex-col items-center justify-center p-3 pb-6 md:min-h-[217px] md:w-min-[170px] md:w-max-[200px]"
      onClick={() => handleLanguageSelect(language.code)}
    >
      <div className="rounded-lg drop-shadow-md border object-cover w-16 md:w-28 overflow-hidden mt-8">
        {language.icon}
      </div>
      <p className="text-neutral-700 dark:text-white text-center font-bold mt-8">
        {language.name}
      </p>
    </div>
  )
}

export default LanguageCard
