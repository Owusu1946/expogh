"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  BookMarked,
  CalendarDays,
  Code2,
  GalleryVerticalEnd,
  Home,
  LayoutGrid,
  Newspaper,
  Users,
} from "lucide-react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Dock, DockIcon } from "@/components/ui/dock"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const SECTION_ITEMS = [
  { id: "home", label: "Home", icon: Home, showOnMobile: true },
  { id: "about", label: "About", icon: Users, showOnMobile: true },
  { id: "events", label: "Events", icon: CalendarDays, showOnMobile: false },
  { id: "open-source", label: "Open Source", icon: Code2, showOnMobile: true },
  { id: "gallery", label: "Gallery", icon: GalleryVerticalEnd, showOnMobile: false },
  { id: "resources", label: "Resources", icon: BookMarked, showOnMobile: true },
  { id: "blog", label: "Blog", icon: Newspaper, showOnMobile: false },
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

export function DockNavigation() {
  const [activeId, setActiveId] = useState<string>(SECTION_ITEMS[0].id)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id)
            }
          })
        },
        {
          rootMargin: "-40% 0px -45% 0px",
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const items = useMemo(() => SECTION_ITEMS, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] hidden items-center justify-center pb-[calc(env(safe-area-inset-bottom)+0.5rem)] px-2 sm:pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-4 md:flex">
      <TooltipProvider>
        <Dock
          className="pointer-events-auto mx-auto border-border/70 bg-background/85 backdrop-blur-md shadow-[0_12px_40px_-20px_rgba(15,23,42,0.45)]"
          disableMagnification
          iconSize={44}
        >
          {items.map(({ id, label, icon: Icon, showOnMobile }) => (
            <DockIcon
              key={id}
              disableMagnification
              className={cn("flex items-center px-1 sm:px-1.5", !showOnMobile && "hidden sm:block")}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    onMouseEnter={() => setHoveredId(id)}
                    onMouseLeave={() => setHoveredId((v) => (v === id ? null : v))}
                    onFocus={() => setHoveredId(id)}
                    onBlur={() => setHoveredId((v) => (v === id ? null : v))}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-11 rounded-full text-muted-foreground hover:text-foreground",
                      activeId === id && "bg-primary/10 text-foreground ring-2 ring-primary/30"
                    )}
                    aria-label={label}
                  >
                    <Icon
                      className={cn(
                        "block size-4 shrink-0 align-middle transition-transform duration-200",
                        activeId === id && "text-primary"
                      )}
                      aria-hidden="true"
                      strokeWidth={2}
                    />
                    <span className="sr-only">{label}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {/* Divider */}
          <Separator orientation="vertical" className="mx-1 hidden h-6 sm:block" />
          <DockIcon disableMagnification>
            <AnimatedThemeToggler
              className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 p-2 transition hover:bg-muted sm:size-10"
              aria-label="Toggle theme"
            />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  )
}
