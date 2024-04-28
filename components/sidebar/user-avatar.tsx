import { SignOutButton, auth, currentUser } from "@clerk/nextjs"
import { LogOut, User } from "lucide-react"
import { ModeToggle } from "../global/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const UserCard = async ({}) => {
  const user = await currentUser()
  return (
    <article
      className="
      flex
      justify-between 
      items-center 
      px-4 
      py-2 
      dark:bg-zinc-800
      bg-slate-100
      rounded-3xl
  "
    >
      <aside className="flex justify-center items-center gap-2">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback className="bg-black">
            <User />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-muted-foreground"></span>
          <p
            className="w-[100px] 
          overflow-hidden 
          overflow-ellipsis
          truncate
          font-bold
          text-sm
          "
          >
            {user?.username}
          </p>
        </div>
      </aside>
      <div className="flex items-center justify-center space-x-4">
        <ModeToggle />
        <div className="rounded-full overflow-hidden">
          <SignOutButton>
            <LogOut className="cursor-pointer" />
          </SignOutButton>
        </div>
      </div>
    </article>
  )
}

export default UserCard
