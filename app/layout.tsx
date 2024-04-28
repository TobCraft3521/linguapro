import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/global/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import Header from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flueny",
  description: "Learn any language with Flueny",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Varela+Round"
            rel="stylesheet"
          ></link>
        </head>
        <body
          className={(inter.className += " bg-[#f7f7f8] dark:bg-[#1a1a1b]")}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="items-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
