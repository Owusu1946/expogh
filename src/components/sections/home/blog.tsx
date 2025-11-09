"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Confetti, type ConfettiRef } from "@/components/ui/confetti"
import { CheckCircle2 } from "lucide-react"

interface PostItem {
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
  image?: string
  tags: string[]
}

const posts: PostItem[] = [
  {
    title: "Shipping faster with EAS",
    excerpt:
      "A practical walkthrough of EAS Build & Submit with signing tips and CI recipes.",
    date: "Nov 1, 2025",
    readTime: "6 min read",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    tags: ["EAS", "Release"],
  },
  {
    title: "Expo Router patterns",
    excerpt:
      "Nested routes, protected screens, and data fetching strategies for Router v3.",
    date: "Oct 22, 2025",
    readTime: "7 min read",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["Routing", "Patterns"],
  },
  {
    title: "Auth flows that scale",
    excerpt:
      "Email magic links, social providers, and secure session handling with Expo.",
    date: "Oct 10, 2025",
    readTime: "8 min read",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
    tags: ["Auth", "Security"],
  },
]

export function Blog() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)
  const confettiRef = useRef<ConfettiRef>(null)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const valid = /.+@.+\..+/.test(email)
    if (!valid) {
      setError("Enter a valid email")
      return
    }
    try {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1200))
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      
      setOpen(false)
      setEmail("")
      setLoading(false)
      
      setTimeout(() => {
        confettiRef.current?.fire({ particleCount: 140, spread: 70, origin: { y: 0.3 } })
        setToast("Subscribed! Check your inbox.")
        setTimeout(() => setToast(null), 3500)
      }, 300)
    } catch (_err) {
      setError("Something went wrong. Try again.")
      setLoading(false)
    }
  }

  return (
    <>
      <section id="blog" className="relative border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">From the Blog</h2>
            <p className="text-muted-foreground">Stories, guides, and best practices from the community.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="#">Browse all posts</a>
            </Button>
            <Button size="sm" onClick={() => setOpen(true)}>Subscribe</Button>
          </div>
        </div>

        <div className="mt-6">
          <Marquee pauseOnHover className="[--duration:18s]">
            <span className="mx-6 text-xs text-muted-foreground">Auth</span>
            <span className="mx-6 text-xs text-muted-foreground">Routing</span>
            <span className="mx-6 text-xs text-muted-foreground">EAS</span>
            <span className="mx-6 text-xs text-muted-foreground">Performance</span>
            <span className="mx-6 text-xs text-muted-foreground">Tooling</span>
          </Marquee>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlurFade key={post.title} delay={i * 0.08} className="h-full">
              <a
                href={post.href}
                className="group block h-full overflow-hidden rounded-xl border border-border/60"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-base font-medium leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-primary">Read more →</div>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
        </div>
      </section>

      {/* Confetti canvas (manual trigger) */}
      <Confetti ref={confettiRef} className="pointer-events-none fixed inset-0 z-[100]" manualstart />

      {/* Subscribe Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl"
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Subscribe to newsletter"
            >
              <div className="relative">
                <div className="absolute -inset-x-10 -top-20 h-40 bg-[radial-gradient(ellipse_at_top,theme(colors.violet.500/.15),transparent_60%)]" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold tracking-tight">Subscribe to updates</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get new posts, events, and resources in your inbox.
                  </p>
                  <form onSubmit={onSubmit} className="mt-4 space-y-3">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        ref={inputRef}
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="block w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none ring-0 transition focus:border-primary/60"
                        required
                      />
                      {error && (
                        <p className="mt-1 text-xs text-red-500">{error}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Button type="button" variant="outline" size="sm" onClick={() => setOpen(false)} disabled={loading}>
                        Cancel
                      </Button>
                      <Button type="submit" size="sm" disabled={loading} aria-busy={loading}>
                        {loading ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="size-3 animate-spin rounded-full border-2 border-primary border-r-transparent" />
                            Subscribing…
                          </span>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed inset-x-0 bottom-20 z-[80] mx-auto w-fit max-w-[92vw] rounded-full border border-border/60 bg-background/95 px-4 py-2 shadow backdrop-blur"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            role="status"
            aria-live="polite"
          >
            <span className="inline-flex items-center gap-2 text-sm">
              <CheckCircle2 className="size-4 text-emerald-500" /> {toast}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
