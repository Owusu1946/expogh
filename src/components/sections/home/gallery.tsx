"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  title: string
  subtitle?: string
  href?: string
  bg?: string
  image?: string
  tags: string[]
}

const items: GalleryItem[] = [
  {
    title: "Meetup • Accra",
    subtitle: "Hands-on with EAS",
    bg: "bg-[conic-gradient(at_30%_20%,#a78bfa_0deg,#22d3ee_90deg,#22d3ee_180deg,#a78bfa_270deg,#a78bfa_360deg)]",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    tags: ["Meetups"],
  },
  {
    title: "Cohort • Online",
    subtitle: "Idea → Store",
    bg: "bg-[radial-gradient(ellipse_at_top_left,theme(colors.violet.400/.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,theme(colors.cyan.400/.25),transparent_60%)]",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    tags: ["Cohorts"],
  },
  {
    title: "Demo Day • Kumasi",
    subtitle: "Community Projects",
    bg: "bg-[linear-gradient(135deg,theme(colors.fuchsia.400/.2),transparent_50%),linear-gradient(225deg,theme(colors.amber.300/.2),transparent_50%)]",
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8c8e69b9b?q=80&w=1600&auto=format&fit=crop",
    tags: ["Demo Day"],
  },
  {
    title: "Workshop • Remote",
    subtitle: "RN Perf Tuning",
    bg: "bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.400/.25),transparent_60%)]",
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1600&auto=format&fit=crop",
    tags: ["Workshops"],
  },
  {
    title: "Meetup • Tamale",
    subtitle: "Expo Router",
    bg: "bg-[conic-gradient(at_70%_80%,#22d3ee_0deg,#a78bfa_120deg,#22d3ee_240deg,#22d3ee_360deg)]",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Meetups", "Open Source"],
  },
]

export function Gallery() {
  const [selectedTag, setSelectedTag] = useState<string>("All")
  const [visibleCount, setVisibleCount] = useState<number>(6)
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    items.forEach((i) => i.tags.forEach((t) => set.add(t)))
    return ["All", ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    if (selectedTag === "All") return items
    return items.filter((i) => i.tags.includes(selectedTag))
  }, [selectedTag])

  const toRender = useMemo(
    () => filtered.slice(0, Math.min(visibleCount, filtered.length)),
    [filtered, visibleCount]
  )

  useEffect(() => {
    setVisibleCount(6)
  }, [selectedTag])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisibleCount((v) => Math.min(v + 6, filtered.length))
        }
      },
      { rootMargin: "200px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [filtered.length])

  // Keyboard controls for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null)
      } else if (e.key === "ArrowLeft") {
        const len = toRender.length
        if (len > 0) setLightboxIndex((idx) => (idx === null ? 0 : (idx + len - 1) % len))
      } else if (e.key === "ArrowRight") {
        const len = toRender.length
        if (len > 0) setLightboxIndex((idx) => (idx === null ? 0 : (idx + 1) % len))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, toRender.length])

  return (
    <section id="gallery" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Gallery</h2>
            <p className="text-muted-foreground">
              Moments from meetups, cohorts, and demo days across the community.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                size="sm"
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Marquee pauseOnHover className="[--duration:18s]">
            <span className="mx-6 text-xs text-muted-foreground">Meetups</span>
            <span className="mx-6 text-xs text-muted-foreground">Cohorts</span>
            <span className="mx-6 text-xs text-muted-foreground">Workshops</span>
            <span className="mx-6 text-xs text-muted-foreground">Demo Day</span>
            <span className="mx-6 text-xs text-muted-foreground">Open Source</span>
          </Marquee>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toRender.map((item, i) => (
            <BlurFade key={item.title} delay={i * 0.06} className="h-full">
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative block h-64 w-full overflow-hidden rounded-xl border border-border/60 text-left"
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="absolute inset-0 size-full object-cover" />
                ) : (
                  <div className={`absolute inset-0 ${item.bg}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
                <div className="absolute bottom-0 flex w-full items-end justify-between p-4">
                  <div>
                    <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    )}
                  </div>
                  <span className="text-xs text-primary">View →</span>
                </div>
              </button>
            </BlurFade>
          ))}
        </div>

        <div ref={sentinelRef} className="h-8 w-full" />
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && toRender[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Back/Next Controls */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                const len = toRender.length
                if (len > 0)
                  setLightboxIndex((idx) => (idx === null ? 0 : (idx + len - 1) % len))
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white shadow-sm backdrop-blur-md transition hover:bg-white/20 focus:outline-none"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                const len = toRender.length
                if (len > 0)
                  setLightboxIndex((idx) => (idx === null ? 0 : (idx + 1) % len))
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 text-white shadow-sm backdrop-blur-md transition hover:bg-white/20 focus:outline-none"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-background"
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] w-full">
                {toRender[lightboxIndex].image ? (
                  <img
                    src={toRender[lightboxIndex].image as string}
                    alt={toRender[lightboxIndex].title}
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 ${toRender[lightboxIndex].bg}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{toRender[lightboxIndex].title}</h3>
                  {toRender[lightboxIndex].subtitle && (
                    <p className="text-sm text-muted-foreground">{toRender[lightboxIndex].subtitle}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {toRender[lightboxIndex].tags.map((t) => (
                    <span key={t} className="rounded-full border border-border/60 px-2 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2 p-4 pt-0">
                <Button variant="outline" size="sm" onClick={() => setLightboxIndex(null)}>
                  Close
                </Button>
                {toRender[lightboxIndex].href && (
                  <Button size="sm" asChild>
                    <a href={toRender[lightboxIndex].href}>Open</a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
