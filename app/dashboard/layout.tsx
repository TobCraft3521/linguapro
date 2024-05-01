import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="lg:hidden">
        <Header border={true} />
      </div>
      <div className="flex flex-1 flex-row w-full">
        <Sidebar className="hidden lg:flex" />
        <div className="flex flex-1 max-h-[99vh] mt-[1vh] overflow-hidden bg-white rounded-tl-[1rem] shadow-[0_0_2px_0_theme(colors.black/0.08),_0_1px_2px_0_rgba(25,28,33,0.06),_0_0_0_1px_rgba(25,28,33,0.04)] p-8">
          {children}
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
