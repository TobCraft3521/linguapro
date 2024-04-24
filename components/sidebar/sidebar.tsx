import { cn } from "@/lib/utils"
import { Home } from "lucide-react"

const tabs = [
  {
    name: "Home",
    href: "/dashboard",
    icon: <Home size={24} />,
  },
]

const Sidebar = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "w-[75vw] lg:bg-zinc-50 lg:dark:bg-[#171717] mt-8 lg:mt-0 h-[90vh] lg:flex-1 flex sm:max-w-xs max-w-xs border-r-[1px] p-8",
        className
      )}
    >
      <div>
        {tabs.map((tab) => (
          <div>{tab.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
