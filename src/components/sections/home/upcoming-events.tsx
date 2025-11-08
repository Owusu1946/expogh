"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Meteors } from "@/components/ui/meteors"
import { Button } from "@/components/ui/button"

interface EventItem {
  date: string
  title: string
  description: string
  location: string
  href: string
}

const events: EventItem[] = [
  {
    date: "Nov 22, 2025 • 5:30 PM",
    title: "Expo GH Meetup: Ship Faster with EAS",
    description:
      "Hands-on session covering EAS Build & Submit, app signing, and best practices.",
    location: "Accra • Hybrid",
    href: "#",
  },
  {
    date: "Dec 06, 2025 • 10:00 AM",
    title: "Cohort Kickoff: From Idea to Store",
    description:
      "Four-week cohort to plan, build, and publish your first app with Expo SDK.",
    location: "Online",
    href: "#",
  },
  {
    date: "Jan 17, 2026 • 6:00 PM",
    title: "Demo Day: Community Project Showcase",
    description:
      "Pitch your app, get feedback from maintainers and partners, and grow visibility.",
    location: "Kumasi • In-person",
    href: "#",
  },
]

export function UpcomingEvents() {
  return (
    <section id="events" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Meteors number={18} className="bg-zinc-400/70 dark:bg-zinc-500/80" />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Upcoming Events</h2>
              <p className="text-muted-foreground">
                Learn, build, and connect with the community.
              </p>
            </div>
            <div>
              <Button variant="default" size="sm" asChild>
                <a href="#">View all events</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((item, i) => (
              <BlurFade key={item.title} delay={i * 0.08} className="h-full">
                <a
                  href={item.href}
                  className="block h-full rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/40"
                >
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                  <h3 className="mt-1 text-base font-medium leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                    <span className="text-xs text-primary">RSVP →</span>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
