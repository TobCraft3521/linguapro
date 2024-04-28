import Path from "@/components/core/path"
import { initProfile } from "@/lib/profiles"
import { currentUser, redirectToSignUp } from "@clerk/nextjs"

const PathPage = async () => {
  const user = await currentUser()
  if (!user?.id) return redirectToSignUp()
  const profile = await initProfile()
  return (
    <div className="flex flex-1">
      <Path />
    </div>
  )
}

export default PathPage
