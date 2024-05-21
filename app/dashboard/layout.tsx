import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import React from "react"
import "./style.css"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="flex h-screen w-full flex-col"
      style={{ maxHeight: "calc(100vh - 4rem)" }}
    >
      <div className="lg:hidden">
        <Header border={true} />
      </div>
      <div
        className="flex flex-1 flex-row w-full"
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        <Sidebar className="hidden lg:flex" />
        <div className="flex relative dashboard flex-1 mt-[1.5vh] md:h-[98.5vh] overflow-hidden bg-white dark:bg-[#303030] rounded-tl-[1rem] shadow-[0_0_2px_0_theme(colors.black/0.08),_0_1px_2px_0_rgba(25,28,33,0.06),_0_0_0_1px_rgba(25,28,33,0.04)] md:p-8 md:pb-0">
          {children}
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
