import { ThemeProvider } from "@/components/global/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import { ModalProvider } from "@/components/providers/modal-provider"
import { ChallengeSessionProvider } from "@/components/providers/challenge-session-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flueny",
  description: "Learn a new language or improve your skills with Flueny!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Varela+Round&display=optional"
            rel="stylesheet"
          ></link>
        </head>
        <body
          className={(inter.className += " bg-[#f7f7f8] dark:bg-[#282829]")}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="items-theme"
          >
            <Toaster />
            <ChallengeSessionProvider>
              <ModalProvider />
              {children}
            </ChallengeSessionProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
