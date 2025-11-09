"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SpotlightSearch, SpotlightSearchTrigger } from "@/components/ui/spotlight-search"
import { ContactDrawer } from "@/components/layout/contact-drawer"
import { Mail, Search, Heart, Github, Star, Menu, X } from "lucide-react"
import { useGithubStars } from "@/hooks/use-github-stars"
import { AnimatePresence, motion } from "motion/react"
import {
  BookMarked,
  CalendarDays,
  Code2,
  GalleryVerticalEnd,
  Home,
  Newspaper,
  Users,
} from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const SECTION_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Users },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "projects", label: "Open Source", icon: Code2 },
  { id: "gallery", label: "Gallery", icon: GalleryVerticalEnd },
  { id: "resources", label: "Resources", icon: BookMarked },
  { id: "blog", label: "Blog", icon: Newspaper },
] as const

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId)
  if (target) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    })
  } else {
    window.location.hash = sectionId
  }
}

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { stars, isLoading } = useGithubStars()
  const starCount = stars !== null ? stars.toLocaleString("en-US") : isLoading ? "…" : "-"

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
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60 transition hover:border-border hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Menu"
            >
              <Menu className="size-4" />
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60 transition hover:border-border hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>

            {/* Support Button */}
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2.5 py-1.5 text-sm font-medium transition hover:border-border hover:bg-background/80 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-3 sm:py-2"
              aria-label="Support"
            >
              <Heart className="size-4 text-primary" />
              <span className="hidden sm:inline">Support</span>
            </Link>

            {/* GitHub Star Button */}
            <Link
              href="https://github.com/Owusu1946/expogh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2.5 py-1.5 text-sm font-medium transition hover:border-border hover:bg-background/80 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-3 sm:py-2"
              aria-label="Star on GitHub"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">Star</span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                <Star className="size-3 text-amber-500" />
                {starCount}
              </span>
            </Link>

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
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 z-[101] h-full w-[280px] border-r border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/60 p-4">
                  <span className="text-base font-semibold">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex size-9 items-center justify-center rounded-full transition hover:bg-muted/60"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                
                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {SECTION_ITEMS.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => {
                          scrollToSection(id)
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-muted/60"
                      >
                        <Icon className="size-5 text-muted-foreground" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </nav>
                
                {/* Footer with Theme Toggle */}
                <div className="border-t border-border/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <AnimatedThemeToggler
                      className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 p-2 transition hover:bg-muted"
                      aria-label="Toggle theme"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
