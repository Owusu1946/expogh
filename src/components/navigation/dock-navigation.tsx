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
import { cn } from "@/lib/utils"

const SECTION_ITEMS = [
  { id: "home", label: "Home", icon: Home, showOnMobile: true },
  { id: "about", label: "About", icon: Users, showOnMobile: true },
  { id: "events", label: "Events", icon: CalendarDays, showOnMobile: false },
  { id: "projects", label: "Open Source", icon: Code2, showOnMobile: true },
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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex items-center justify-center pb-[calc(env(safe-area-inset-bottom)+0.5rem)] px-2 sm:pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-4">
      <Dock className="pointer-events-auto mx-auto border-border/70 bg-background/85 backdrop-blur-md shadow-[0_12px_40px_-20px_rgba(15,23,42,0.45)]" disableMagnification>
        {items.map(({ id, label, icon: Icon, showOnMobile }) => (
          <DockIcon key={id} disableMagnification className={cn("px-1 sm:px-1.5", !showOnMobile && "hidden sm:block")}>
            <div className="relative">
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId((v) => (v === id ? null : v))}
                onFocus={() => setHoveredId(id)}
                onBlur={() => setHoveredId((v) => (v === id ? null : v))}
                className={cn(
                  "group inline-flex size-9 items-center justify-center rounded-full transition sm:size-10",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  activeId === id && "bg-primary/10 text-foreground ring-2 ring-primary/30"
                )}
                aria-label={label}
              >
                <Icon
                  className={cn(
                    "block size-3.5 leading-none transition-transform duration-200 sm:size-4",
                    activeId === id && "text-primary"
                  )}
                  aria-hidden
                />
                <span className="sr-only">{label}</span>
              </button>
              <AnimatePresence>
                {hoveredId === id && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border/60 bg-background/95 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-md"
                    role="tooltip"
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DockIcon>
        ))}
        {/* Divider */}
        <DockIcon disableMagnification className="px-0">
          <div className="mx-1 hidden h-6 w-px bg-border/70 sm:block" aria-hidden />
        </DockIcon>
        <DockIcon disableMagnification>
          <AnimatedThemeToggler
            className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 p-2 transition hover:bg-muted sm:size-10"
            aria-label="Toggle theme"
          />
        </DockIcon>
      </Dock>
    </div>
  )
}
