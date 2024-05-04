import Path from "@/components/core/path"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { activeUser, initProfile } from "@/lib/profiles"
import { currentUser, redirectToSignUp } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const PathPage = async () => {
  //const router = useRouter()
  const user = await currentUser()
  if (!user?.id) return redirectToSignUp()
  if (!(await activeUser())) return redirect("/dashboard")
  if (!(await mostRecentLang())) return redirect("/dashboard")
  //router.refresh()
  const profile = await initProfile()
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 xl:max-w-[55vw]">
        <Path />
      </div>
      {/* right sidebar stuff */}
    </div>
  )
}

export default PathPage
