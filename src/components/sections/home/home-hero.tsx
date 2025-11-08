"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"

const communityFaces = [
  { initials: "AK", color: "bg-primary" },
  { initials: "MG", color: "bg-emerald-500" },
  { initials: "LS", color: "bg-sky-500" },
]

const partnerNames = [
  "Expo Africa",
  "Google Dev Ghana",
  "Flutterwave",
  "Paystack",
  "GitHub",
  "Figma",
]

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-background"
    >
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16 md:pb-24 md:pt-24">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:px-4 sm:text-xs sm:tracking-[0.24em]"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Official Expo Ghana community
        </motion.span>

        <motion.h1
          className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Everything you need to build Expo apps that delight in Ghana and beyond
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Expo Ghana connects developers, designers, and founders with resources, mentorship,
          and collaborations to launch world-class mobile experiences faster.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button asChild size="lg" className="group w-full sm:w-auto">
            <Link href={siteConfig.cta.primary.href}>
              {siteConfig.cta.primary.title}
              <ArrowRight
                className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/resources">Read the docs</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex -space-x-3">
            {communityFaces.map((face) => (
              <span
                key={face.initials}
                className={`flex size-10 items-center justify-center rounded-full border-2 border-background text-sm font-semibold text-background shadow-sm ${face.color}`}
              >
                {face.initials}
              </span>
            ))}
            <span className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground">
              +1k
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <ShieldCheck className="size-3.5 text-primary sm:size-4" aria-hidden />
            <span>
              Enterprise needs?&nbsp;
              <Link href="/sponsor" className="font-medium text-foreground underline-offset-4 hover:underline">
                Talk to our team
              </Link>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 text-left sm:flex-row sm:text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs sm:tracking-[0.4em]">
              Trusted by partners
            </p>
            <div className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:block">
              Join a growing network of supporters
            </div>
          </div>
          <Marquee className="mt-3 sm:mt-4" pauseOnHover>
            {partnerNames.map((name) => (
              <span
                key={name}
                className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 sm:px-6 sm:text-sm sm:tracking-[0.3em]"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
