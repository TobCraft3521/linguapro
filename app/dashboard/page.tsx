import LanguageCard from "@/components/global/language-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { initUser } from "@/lib/profiles"
import { auth, redirectToSignUp } from "@clerk/nextjs"
import { DE, ES, FR, IT } from "country-flag-icons/react/3x2"

interface DashboardProps {}

const languages = [
  {
    name: "French",
    code: "fr",
    icon: <FR />,
  },
  {
    name: "German",
    code: "de",
    icon: <DE />,
  },
  {
    name: "Spanish",
    code: "es",
    icon: <ES />,
  },
  {
    name: "Italian",
    code: "it",
    icon: <IT />,
  },
]

const Dashboard = async ({}: DashboardProps) => {
  const userId = auth()
  if (!userId) return redirectToSignUp()
  const user = await initUser()

  return (
    <div className="bg-gray-0 flex h-[100vh] flex-1 flex-col md:p-8">
      <ScrollArea className="p-4 md:p-0">
        <div>
          <h1 className="mt-8 text-center text-2xl font-semibold">
            Welcome{" "}
            <span className="inline-block bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
              {user?.userName}
            </span>
            !
            <br />
            Select a language to get started.
          </h1>
          <p className="text-center font-light text-slate-400">
            Don&apos;t worry, you can always learn other languages later.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 py-16 md:grid-cols-3 md:p-16 xl:grid-cols-4">
          {languages.map((language, index) => (
            <LanguageCard language={language} key={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default Dashboard
