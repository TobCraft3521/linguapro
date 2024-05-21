import { mostRecentLang } from "@/lib/mostRecentLang"
import { cn } from "@/lib/utils"
import { Home, Languages, Settings, User } from "lucide-react"
import LinguaPro from "../header/linguapro-logo"
import Tab from "./tab"
import UserCard from "./user-avatar"
import { Separator } from "../ui/separator"

const Sidebar = async ({ className }: { className: string }) => {
  const mostRecentLanguage = await mostRecentLang()
  const tabs = [
    {
      name: "Home",
      href: mostRecentLanguage
        ? `/dashboard/lang/${mostRecentLanguage.toLowerCase()}`
        : "/dashboard",
      icon: <Home size={24} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={24} />,
    },
    {
      name: "Courses",
      href: mostRecentLanguage ? `/dashboard` : "/dashboard/",
      icon: <Languages size={24} />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings size={24} />,
    },
  ]
  return (
    <div
      className={cn(
        "z-10 mt-8 flex h-[90vh] w-[75vw] max-w-xs flex-col gap-8 pr-8 sm:max-w-xs lg:mt-0 lg:h-[100vh] lg:flex-1 lg:p-8 lg:pb-6",
        className,
      )}
    >
      <div className="space-y-8">
        <div className="ml-8">
          <LinguaPro />
        </div>
        <div className="w-full">
          <h1 className="text-md ml-4 font-bold uppercase text-zinc-500">
            Dashboard
          </h1>
          <Separator className="m-1 mb-3" />
          <div className="flex flex-col gap-1">
            {tabs.map((tab, index) => (
              <Tab tab={tab} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end">
        <UserCard />
      </div>
    </div>
  )
}

export default Sidebar
