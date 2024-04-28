import { cn } from "@/lib/utils"
import { Home, Settings, User } from "lucide-react"
import Link from "next/link"
import Flueny from "../header/flueny-logo"
import UserCard from "./user-avatar"

const tabs = [
  {
    name: "Home",
    href: "/dashboard",
    icon: <Home size={24} />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: <User size={24} />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings size={24} />,
  },
]

const Sidebar = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "w-[75vw] flex-col gap-8 lg:bg-zinc-50 lg:dark:bg-[#171717] mt-8 lg:mt-0 h-[90vh] lg:h-[100vh] lg:flex-1 flex sm:max-w-xs max-w-xs border-r-[1px] pr-8 lg:p-8 lg:pb-6 z-10 rounded-r-3xl",
        className
      )}
    >
      <div className="space-y-8">
        <Flueny />
        <div className="w-full flex gap-1 flex-col">
          <h1 className="ml-4 text-zinc-500">Dashboard</h1>
          {tabs.map((tab) => (
            <Link href={tab.href}>
              <div className="bg-slate-100 dark:bg-zinc-800 w-full p-2 pl-4 rounded-lg flex flex-row gap-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all">
                {tab.icon} {tab.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-end">
        <UserCard />
      </div>
    </div>
  )
}

export default Sidebar
