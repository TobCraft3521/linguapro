"use client"
import { updateMostRecentLang } from "@/lib/mostRecentLang"
import { Language } from "@prisma/client"
import { useRouter } from "next/navigation"
import toast, { useToaster } from "react-hot-toast"

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
    toast.promise(
      Promise.all([
        updateMostRecentLang(code.toUpperCase() as Language),
        router.push(`/dashboard/lang/${code}`),
        router.refresh(),
      ]),
      {
        loading: "Loading...",
        success: "Language selected!",
        error: "Error selecting language.",
      }
    )
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
