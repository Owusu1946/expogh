"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Search, Command, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SpotlightSearchProps {
  isOpen: boolean
  onClose: () => void
}

const quickActions = [
  { title: "About Community", href: "#about", description: "Learn about our mission" },
  { title: "Upcoming Events", href: "#events", description: "Join our next meetup" },
  { title: "Open Source Projects", href: "#open-source", description: "Contribute to the community" },
  { title: "Gallery", href: "#gallery", description: "View community moments" },
  { title: "Resources", href: "#resources", description: "Explore learning materials" },
  { title: "Blog", href: "#blog", description: "Read latest updates" },
]

export function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
  const [query, setQuery] = useState("")
  const [filteredActions, setFilteredActions] = useState(quickActions)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedRef = useRef<HTMLButtonElement>(null)

  const handleClose = useCallback(() => {
    onClose()
    setQuery("")
    setSelectedIndex(0)
  }, [onClose])

  const highlightText = useCallback((text: string, sectionId: string) => {
    if (!text.trim()) return

    // Remove any existing highlights first
    const existingHighlights = document.querySelectorAll('.search-highlight')
    existingHighlights.forEach(el => {
      const parent = el.parentNode
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el)
        parent.normalize()
      }
    })

    // Find the section
    const section = document.querySelector(sectionId)
    if (!section) return

    // Function to highlight text in a text node
    const highlightInNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const content = node.textContent
        const lowerContent = content.toLowerCase()
        const lowerText = text.toLowerCase()
        const index = lowerContent.indexOf(lowerText)

        if (index !== -1) {
          const before = content.substring(0, index)
          const match = content.substring(index, index + text.length)
          const after = content.substring(index + text.length)

          const fragment = document.createDocumentFragment()
          fragment.appendChild(document.createTextNode(before))
          
          const highlight = document.createElement('mark')
          highlight.className = 'search-highlight'
          highlight.textContent = match
          highlight.style.backgroundColor = 'hsl(var(--primary) / 0.3)'
          highlight.style.color = 'inherit'
          highlight.style.padding = '0.125rem 0.25rem'
          highlight.style.borderRadius = '0.25rem'
          highlight.style.transition = 'all 0.3s'
          fragment.appendChild(highlight)
          
          fragment.appendChild(document.createTextNode(after))

          node.parentNode?.replaceChild(fragment, node)
          
          // Scroll to first highlight with smooth animation
          setTimeout(() => {
            highlight.scrollIntoView({ behavior: 'smooth', block: 'center' })
            // Add pulse animation
            highlight.style.transform = 'scale(1.05)'
            setTimeout(() => {
              highlight.style.transform = 'scale(1)'
            }, 300)
          }, 500)

          // Remove highlight after 5 seconds
          setTimeout(() => {
            const parent = highlight.parentNode
            if (parent) {
              parent.replaceChild(document.createTextNode(highlight.textContent || ''), highlight)
              parent.normalize()
            }
          }, 5000)
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element
        if (['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA', 'CODE', 'PRE'].includes(element.tagName)) {
          return
        }
        Array.from(node.childNodes).forEach(child => highlightInNode(child))
      }
    }

    highlightInNode(section)
  }, [])

  const handleAction = useCallback((href: string) => {
    const searchQuery = query.trim()
    handleClose()
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      
      // Highlight the search query if it exists
      if (searchQuery) {
        setTimeout(() => {
          highlightText(searchQuery, href)
        }, 600)
      }
    }
  }, [handleClose, query, highlightText])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length)
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredActions[selectedIndex]) {
          handleAction(filteredActions[selectedIndex].href)
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault()
        // Search in all sections for the query
        if (query.trim() && filteredActions.length > 0) {
          handleAction(filteredActions[0].href)
        }
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, filteredActions, selectedIndex, handleAction, handleClose, query])

  useEffect(() => {
    if (query === "") {
      setFilteredActions(quickActions)
    } else {
      const filtered = quickActions.filter(
        (action) =>
          action.title.toLowerCase().includes(query.toLowerCase()) ||
          action.description.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredActions(filtered)
    }
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Search Modal */}
          <div className="fixed inset-0 z-[101] flex items-start justify-center px-3 pt-[10vh] sm:px-4 sm:pt-[15vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={cn(
                "w-full max-w-2xl overflow-hidden rounded-xl border border-border/60 sm:rounded-2xl",
                "bg-background/95 shadow-2xl backdrop-blur-xl",
                "ring-1 ring-black/5 dark:ring-white/5"
              )}
            >
              {/* Search Input */}
              <div className="flex items-center gap-2 border-b border-border/60 px-3 py-3 sm:gap-3 sm:px-5 sm:py-4">
                <Search className="size-4 text-muted-foreground sm:size-5" />
                <input
                  type="text"
                  placeholder="Search or find text..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:text-base"
                />
                <button
                  onClick={handleClose}
                  className="rounded-md p-1.5 transition hover:bg-muted/60"
                  aria-label="Close"
                >
                  <X className="size-3.5 text-muted-foreground sm:size-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto p-2 scroll-smooth sm:max-h-[60vh] sm:p-3">
                {filteredActions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredActions.map((action, index) => (
                      <motion.button
                        key={action.title}
                        ref={selectedIndex === index ? selectedRef : null}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => handleAction(action.href)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-lg px-3 py-3 text-left sm:px-4 sm:py-3.5",
                          "transition-all duration-150",
                          selectedIndex === index
                            ? "bg-primary/10 ring-2 ring-primary/30"
                            : "hover:bg-muted/60 focus:bg-muted/60 focus:outline-none"
                        )}
                      >
                        <div className="flex-1">
                          <div className={cn(
                            "text-sm font-medium transition-colors sm:text-base",
                            selectedIndex === index && "text-primary"
                          )}>
                            {action.title}
                          </div>
                          <div className="text-xs text-muted-foreground sm:text-sm">
                            {action.description}
                          </div>
                        </div>
                        <ArrowRight className={cn(
                          "size-4 text-muted-foreground transition-all",
                          selectedIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                        )} />
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border/60 bg-muted/20 px-3 py-2 sm:px-5 sm:py-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] text-muted-foreground sm:gap-x-4 sm:gap-y-2 sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded border border-border/60 bg-background px-1.5 py-0.5 font-medium shadow-sm">↑</kbd>
                    <kbd className="rounded border border-border/60 bg-background px-1.5 py-0.5 font-medium shadow-sm">↓</kbd>
                    <span>navigate</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded border border-border/60 bg-background px-1.5 py-0.5 font-medium shadow-sm">↵</kbd>
                    <span>select</span>
                  </span>
                  {query.trim() && (
                    <span className="flex items-center gap-1.5 text-primary">
                      <Command className="inline size-3" />
                      <kbd className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 font-medium shadow-sm">↵</kbd>
                      <span>jump & highlight</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <kbd className="rounded border border-border/60 bg-background px-1.5 py-0.5 font-medium shadow-sm">ESC</kbd>
                    <span>close</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export function SpotlightSearchTrigger({ onClick }: { onClick: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        onClick()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClick])

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 rounded-full border border-border/60 bg-background/60 px-4 py-2",
        "transition hover:border-border hover:bg-background/80 hover:shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-primary/20"
      )}
    >
      <Search className="size-4 text-muted-foreground transition group-hover:text-foreground" />
      <span className="text-sm text-muted-foreground transition group-hover:text-foreground">
        Quick search...
      </span>
      <kbd className="ml-auto hidden rounded border border-border/60 bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground sm:inline-block">
        <Command className="inline size-3" />K
      </kbd>
    </button>
  )
}
