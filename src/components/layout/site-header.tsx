"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SpotlightSearch, SpotlightSearchTrigger } from "@/components/ui/spotlight-search"
import { ContactDrawer } from "@/components/layout/contact-drawer"
import { Mail, Search } from "lucide-react"

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1.5 transition hover:opacity-80 sm:gap-2">
            <Image
              src="/header/logo.png"
              alt="Expo Ghana Logo"
              width={40}
              height={40}
              className="h-12 w-auto sm:h-18"
              priority
            />
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              <span className="inline sm:hidden">Expo</span>
              <span className="hidden sm:inline">Expo Ghana</span>
            </span>
          </Link>

          <div className="hidden flex-1 justify-center px-4 md:flex lg:px-8">
            <div className="w-full max-w-md">
              <SpotlightSearchTrigger onClick={() => setIsSearchOpen(true)} />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60 transition hover:border-border hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>

            {/* Contact Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-medium transition hover:border-border hover:bg-background/80 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-4 sm:py-2"
            >
              <Mail className="size-3.5 sm:size-4" />
              <span className="hidden sm:inline">Contact</span>
            </button>
          </div>
        </div>
      </header>

      <div className="h-14 sm:h-16" />
      <SpotlightSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
