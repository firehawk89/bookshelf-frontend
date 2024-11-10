import type { Metadata } from "next"

import "./globals.css"

import { ReactNode } from "react"

import Providers from "./providers"

export const metadata: Metadata = {
  title: "Bookshelf",
  description:
    "The Bookshelf app is a community for book enthusiasts of all ages. Aimed to bring together people who love reading, it offers a space to share recommendations, discuss favorite books, and connect with like-minded readers.",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
