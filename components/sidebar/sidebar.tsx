import { mostRecentLang } from "@/lib/mostRecentLang"
import { cn } from "@/lib/utils"
import { Home, Languages, Settings, User } from "lucide-react"
import Flueny from "../header/flueny-logo"
import Tab from "./tab"
import UserCard from "./user-avatar"

const Sidebar = async ({ className }: { className: string }) => {
  const mostRecentLanguage = await mostRecentLang()
  const tabs = [
    {
      name: "Home",
      href: "/dashboard/lang/" + mostRecentLanguage,
      icon: <Home size={24} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={24} />,
    },
    {
      name: "Courses",
      href: "/dashboard",
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
        "w-[75vw] flex-col gap-8 lg:bg-zinc-50 lg:dark:bg-[#232323] mt-8 lg:mt-0 h-[90vh] lg:h-[100vh] lg:flex-1 flex sm:max-w-xs max-w-xs border-r-[1px] pr-8 lg:p-8 lg:pb-6 z-10 rounded-r-3xl",
        className
      )}
    >
      <div className="space-y-8">
        <Flueny />
        <div className="w-full">
          <h1 className="ml-4 text-zinc-500 text-lg font-semibold">
            Dashboard
          </h1>
          <div className="flex gap-1 flex-col">
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
