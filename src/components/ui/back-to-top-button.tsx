"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface BackToTopButtonProps {
  className?: string
  /** Distance in pixels before the button appears */
  threshold?: number
}

export function BackToTopButton({ className, threshold = 280 }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 right-3 z-[70] sm:bottom-8 sm:right-6",
        "pb-[calc(env(safe-area-inset-bottom)+0.25rem)]",
        className
      )}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className={cn(
              "group relative inline-flex size-11 items-center justify-center rounded-full",
              "pointer-events-auto border border-border/60 bg-background/70 text-foreground",
              "shadow-[0_18px_40px_-28px_rgba(15,23,42,0.75)] backdrop-blur-md",
              "transition-colors hover:border-border hover:text-primary focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-primary/40"
            )}
            aria-label="Back to top"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-background opacity-0 transition-opacity group-hover:opacity-100" />
            <ArrowUp className="size-4 transition-transform duration-200 group-hover:-translate-y-[2px]" strokeWidth={2} />
            <span className="sr-only">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
