"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface TabProps {
  tab: {
    name: string
    href: string
    icon: React.ReactNode
  }
}

const Tab = ({ tab }: TabProps) => {
  const path = usePathname()
  const isActive = path.toLowerCase() === tab.href.toLowerCase()
  return (
    <Link href={tab.href}>
      <div className="block">
        <div
          className={cn(
            "flex items-center py-2 px-4 rounded-lg transition- hover:bg-slate-200 dark:hover:bg-zinc-700 cursor-pointer",
            isActive ? "bg-slate-200 dark:bg-zinc-700" : ""
          )}
        >
          {tab.icon}
          <span className="ml-2 text-sm font-medium">{tab.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default Tab
