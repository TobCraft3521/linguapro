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
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
