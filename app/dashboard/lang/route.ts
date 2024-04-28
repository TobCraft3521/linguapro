import { redirect } from "next/navigation"

export const GET = (req: Request) => {
  return redirect("/dashboard")
}
