import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { PointerSmoothCursor } from "@/components/layout/pointer-smooth-cursor"
import { SiteHeader } from "@/components/layout/site-header"
import { DockNavigation } from "@/components/navigation/dock-navigation"
import { Footer } from "@/components/layout/footer"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expo Ghana Community",
    template: "%s | Expo Ghana",
  },
  description:
    "The official Expo Ghana community—meetups, open source, mentorship, and opportunities for Expo developers across Ghana.",
  openGraph: {
    title: "Expo Ghana Community",
    description:
      "Connect with Expo creators, join events, explore open-source projects, and grow your impact in Ghana's tech ecosystem.",
    url: "https://expoghana.community",
    siteName: "Expo Ghana",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expo Ghana Community",
    description:
      "Connect with Expo creators, join events, explore open-source projects, and grow your impact in Ghana's tech ecosystem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <PointerSmoothCursor />
        <SiteHeader />
        <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
          {children}
        </main>
        <Footer />
        <DockNavigation />
      </body>
    </html>
  )
}
