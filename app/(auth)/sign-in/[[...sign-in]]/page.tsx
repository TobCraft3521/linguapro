import { SignIn, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Image from "next/image"
import Gradient from "@/public/imgs/backgrounds/bggradientred.webp"

export default function Page() {
  const { userId } = auth()
  if (userId) return redirect("/dashboard")
  return (
    <div className="flex flex-1 justify-center items-center h-full bgcontainer">
      <div className="fixed -z-10 top-0 left-0">
        <Image src={Gradient} alt="gradient" className="h-[100vh]" />
      </div>
      <SignIn />
    </div>
  )
}
