"use client"

import { Menu } from "lucide-react"
import { ModeToggle } from "../global/mode-toggle"
import Flueny from "./flueny-logo"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isLandingPage, setIsLandingPage] = useState(false)
  useEffect(() => {
    setIsLandingPage(window.location.pathname === "/")
  }, [])
  return (
    <header
      className={
        "top-0 h-16 w-full flex justify-between items-center pl-16 pr-8 border-b-[1px]" +
        (isLandingPage && "border-b-0 pt-8")
      }
    >
      <Flueny />
      <div className="flex flex-row justify-center items-center gap-8">
        {isLandingPage && (
          <div className="flex-row gap-2 justify-center items-center hidden md:flex">
            <a href="/sign-up">
              <Button variant="primary" className="uppercase font-extrabold">
                Sign Up
              </Button>
            </a>
            <a href="/sign-in">
              <Button variant="outline" className="uppercase font-extrabold">
                Sign In
              </Button>
            </a>
          </div>
        )}
        <ModeToggle />
        <Menu size={24} className="lg:hidden" />
      </div>
    </header>
  )
}

export default Header
