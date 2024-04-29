import Path from "@/components/core/path"
import { mostRecentLang } from "@/lib/mostRecentLang"
import { activeUser, initProfile } from "@/lib/profiles"
import { currentUser, redirectToSignUp } from "@clerk/nextjs"
import { redirect } from "next/navigation"

const PathPage = async () => {
  const user = await currentUser()
  if (!user?.id) return redirectToSignUp()
  if (!(await activeUser())) return redirect("/dashboard")
  if (!(await mostRecentLang())) return redirect("/dashboard")
  const profile = await initProfile()
  return (
    <div className="flex flex-1">
      <Path />
    </div>
  )
}

export default PathPage
