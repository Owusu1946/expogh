"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { ExternalLink } from "lucide-react"

interface EventFlyer {
  title: string
  subtitle: string
  image: string
  albumUrl: string
  date: string
}

const eventFlyers: EventFlyer[] = [
  {
    title: "Meet up 1",
    subtitle: "Community Gathering",
    image: "/events/meetup-1-flyer.jpg",
    albumUrl: "https://photos.app.goo.gl/7AqoEACFncjGgNox7",
    date: "2024",
  },
  {
    title: "Vibe and Pizza Hack",
    subtitle: "Hackathon Event",
    image: "/events/vibe-pizza-hack-flyer.jpg",
    albumUrl: "https://photos.app.goo.gl/Uv2oDfABbDNbiNn26",
    date: "2024",
  },
]

export function Gallery() {
  const handleFlyerClick = (albumUrl: string) => {
    window.open(albumUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="gallery" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Check out our past events and view full photo albums
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventFlyers.map((event, i) => (
            <BlurFade key={event.title} delay={i * 0.06} className="h-full">
              <button
                type="button"
                onClick={() => handleFlyerClick(event.albumUrl)}
                className="group relative block h-64 w-full overflow-hidden rounded-xl border border-border/60 text-left transition-all hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <img
                  src={event.image}
                  alt={`${event.title} event flyer`}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
                <div className="absolute bottom-0 flex w-full items-end justify-between p-4">
                  <div>
                    <h3 className="text-base font-medium tracking-tight">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">{event.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <span>View</span>
                    <ExternalLink className="size-3" />
                  </div>
                </div>
              </button>
            </BlurFade>
          ))}
        </div>

        {eventFlyers.length === 0 && (
          <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-12 text-center">
            <p className="text-sm text-muted-foreground">No event flyers available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
