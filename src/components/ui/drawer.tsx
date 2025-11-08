"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  description?: string
  side?: "left" | "right"
}

export function Drawer({
  isOpen,
  onClose,
  children,
  title,
  description,
  side = "right",
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen, onClose])

  const slideVariants = {
    hidden: {
      x: side === "right" ? "100%" : "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      x: side === "right" ? "100%" : "-100%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "fixed inset-y-0 z-[91] w-full bg-background shadow-2xl sm:max-w-md",
              side === "right" ? "right-0" : "left-0"
            )}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              {(title || description) && (
                <div className="border-b border-border/60 px-6 py-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      {title && (
                        <h2 className="text-lg font-semibold tracking-tight">
                          {title}
                        </h2>
                      )}
                      {description && (
                        <p className="text-sm text-muted-foreground">
                          {description}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={onClose}
                      className="rounded-full p-2 transition hover:bg-muted/60"
                      aria-label="Close drawer"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
