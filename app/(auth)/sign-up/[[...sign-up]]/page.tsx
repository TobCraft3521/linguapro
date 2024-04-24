import { SignUp, auth } from "@clerk/nextjs"
import "./style.css"
import { redirect } from "next/navigation"
import Gradient from "@/public/imgs/backgrounds/bggradientpurple.webp"
import Image from "next/image"

export default function Page() {
  const { userId } = auth()
  if (userId) return redirect("/dashboard")
  return (
    <div className="flex flex-1 justify-center items-center h-full p-20 bgcontainer">
      <div className="fixed -z-10 top-0 left-0">
        <Image src={Gradient} alt="gradient" className="h-[100vh]" />
      </div>
      <SignUp />
    </div>
  )
}
