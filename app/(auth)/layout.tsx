import Header from "@/components/header/header"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header border={false} />
      {children}
    </main>
  )
}

export default DashboardLayout
