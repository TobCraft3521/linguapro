import FullWidthSection from "@/components/landing-page/blabla"
import Flags from "@/components/landing-page/languages"
import Flueny from "@/components/header/linguapro-logo"
import Header from "@/components/header/header"
import { Button } from "@/components/ui/button"
import People from "@/public/imgs/people.png"
import Image from "next/image"
import Link from "next/link"
import { BackgroundBoxesDemo } from "@/components/landing-page/background-boxes"
import Hero from "@/components/landing-page/hero"
import { ScrollArea } from "@/components/ui/scroll-area"
import Pricing from "@/components/landing-page/pricing"
import { ChevronsDown } from "lucide-react"
import ScrollHint from "@/components/landing-page/scroll-hint"
import { useContext } from "react"
import { ChallengeSessionContext } from "@/components/providers/challenge-session-context"

export default function App() {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="relative">
        <Hero />
        <FullWidthSection />
        <Pricing />
        <ScrollHint />
      </div>
    </ScrollArea>
  )
}
