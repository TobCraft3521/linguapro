import { cn } from "@/lib/utils"
import { UserButton, auth, currentUser } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import { ModeToggle } from "../global/mode-toggle"
import { Button } from "../ui/button"
import Flueny from "./flueny-logo"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Sidebar from "../sidebar/sidebar"

interface HeaderProps {
  border?: boolean
}

const Header = async ({ border }: HeaderProps) => {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <header
      className={cn(
        "top-0 h-16 w-full flex justify-between items-center md:pl-16 pl-8 pr-8 border-b-[1px]",
        !border && "border-b-0 pt-8"
      )}
    >
      <Flueny />
      <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
        {!userId && (
          <div className="flex-row gap-2 justify-center items-center hidden md:flex">
            <a href="/sign-up">
              <Button variant="primary" className="uppercase font-extrabold">
                Sign Up
              </Button>
            </a>
            <a href="/sign-in">
              <Button variant="outline" className="uppercase font-extrabold">
                Sign In
              </Button>
            </a>
          </div>
        )}
        {userId && (
          <div className="flex flex-row justify-center items-center gap-2 uppercase font-semibold text-sm h-full">
            <UserButton />
            {user?.username}
          </div>
        )}
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent>
            <Sidebar className="" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
