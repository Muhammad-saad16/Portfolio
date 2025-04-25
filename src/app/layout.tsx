'use client'

import type React from "react"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { MouseFollower } from "@/components/mouse-follower"
import { GridBackground } from "@/components/ui/grid-background"
import { Suspense } from "react"
import { FormspreeProvider } from "@formspree/react"
import Head from "next/head"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} dark bg-background text-foreground`}>
        {/* Setting Meta Data */}
        <Head>
          <title>Muhammad Saad | Senior Frontend Developer</title>
          <meta name="description" content="Portfolio of Muhammad Saad, a Senior Frontend Developer specializing in creating modern web experiences." />
        </Head>

        <FormspreeProvider project="mqaprqpb">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <GridBackground />
            <Suspense>
              <Navigation />
              <MouseFollower />
              {children}
            </Suspense>
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </FormspreeProvider>
      </body>
    </html>
  )
}
