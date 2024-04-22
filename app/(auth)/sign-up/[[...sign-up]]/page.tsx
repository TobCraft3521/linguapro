import { SignUp } from "@clerk/nextjs"
import "./style.css"

export default function Page() {
  return (
    <div className="flex flex-1 justify-center items-center h-full p-20 bgcontainer">
      <SignUp />
    </div>
  )
}
