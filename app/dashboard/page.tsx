import LanguageCard from "@/components/global/language-card"
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
    <div className="bg-gray-0 h-[100vh] flex flex-1 flex-col p-8">
      <div>
        <h1 className="text-2xl font-semibold text-center mt-8">
          Welcome{" "}
          <span className="bg-gradient-to-r inline-block from-[#7F00FF] to-[#E100FF] text-transparent bg-clip-text">
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

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4 py-16 md:p-16">
        {languages.map((language, index) => (
          <LanguageCard language={language} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
