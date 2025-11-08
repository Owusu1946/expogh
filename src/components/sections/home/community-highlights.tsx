"use client"

import { motion } from "motion/react"
import { Globe } from "@/components/ui/globe"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedList } from "@/components/ui/animated-list"

export function CommunityHighlights() {
  return (
    <section id="highlights" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="relative flex flex-col gap-6">
          <motion.h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Community Highlights
          </motion.h2>
          <p className="text-muted-foreground">
            A snapshot of what our members are doing and where we’re making an impact.
          </p>

          <AnimatedList className="mt-2">
            <div key="1" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              50+ projects shipped with Expo SDK this year.
            </div>
            <div key="2" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              Weekly office hours and mentorship cohorts.
            </div>
            <div key="3" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              Collaborations with local and international partners.
            </div>
          </AnimatedList>

          <div className="mt-6">
            <Marquee pauseOnHover className="[--duration:20s]">
              <span className="mx-6 text-xs text-muted-foreground">Open Source</span>
              <span className="mx-6 text-xs text-muted-foreground">Meetups</span>
              <span className="mx-6 text-xs text-muted-foreground">Cohorts</span>
              <span className="mx-6 text-xs text-muted-foreground">Demo Day</span>
              <span className="mx-6 text-xs text-muted-foreground">Starter Kits</span>
            </Marquee>
          </div>
        </div>

        <div className="relative flex h-[420px] items-center justify-center">
          <Globe className="max-w-[520px]" />
        </div>
      </div>
    </section>
  )
}
