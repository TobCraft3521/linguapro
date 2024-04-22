import FullWidthSection from "@/components/global/blabla"
import Flags from "@/components/global/languages"
import Flueny from "@/components/header/flueny-logo"
import { Button } from "@/components/ui/button"
import People from "@/public/imgs/people.png"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center mt-4">
        <div className="md:pb-16 pt-[10vh] md:p-32">
          <h1 className="text-3xl text-center font-semibold">
            Learn to speak new
            <br />
            languages fluently with
          </h1>
          <Flueny />
          <div className="mt-8 gap-2 flex flex-col">
            <Link href="/sign-up">
              <Button
                variant="primary"
                className="uppercase font-extrabold w-full"
              >
                Start now
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="sidebarOutline"
                className="uppercase font-extrabold w-full"
              >
                Log in
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image src={People} alt="People" height={512} />
        </div>
      </div>
      <Flags />
      <div className="h-16" />
      <FullWidthSection />
    </main>
  )
}
