"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { MorphingText } from "@/components/ui/morphing-text"

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

const heroMorphTexts = [
  "Build Expo brilliance",
  "Ship faster together",
  "Lead Ghana's future",
]

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-background"
    >
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16 md:pb-24 md:pt-24">
        <motion.div
          className="inline-flex items-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="group rounded-full border border-border/60 bg-background/90 px-1 py-0.5 shadow-[0_18px_50px_-25px_rgba(14,23,42,0.65)] backdrop-blur-md transition-all hover:border-primary/60 hover:bg-background">
            <AnimatedShinyText
              shimmerWidth={220}
              className="mx-0 max-w-none inline-flex items-center gap-2 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground transition duration-300 group-hover:text-primary sm:text-xs sm:tracking-[0.24em]"
            >
              <span className="flex items-center gap-1">
                <span className="text-lg leading-none">✨</span>
                Official Expo Ghana Community
              </span>
              <ArrowRight
                className="size-3 translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-6"
                aria-hidden
              />
            </AnimatedShinyText>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 w-full sm:mt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MorphingText
            texts={heroMorphTexts}
            className="mx-auto max-w-4xl text-pretty text-foreground [text-shadow:0_18px_50px_rgba(15,23,42,0.28)] text-[1.9rem] font-extrabold leading-[0.92] sm:h-[4.25rem] sm:text-[3.2rem] md:h-[5rem] md:text-[4rem] lg:h-[6.25rem] lg:text-[5.1rem]"
          />
        </motion.div>

        <motion.p
          className="mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-7 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Expo Ghana convenes makers, mentors, and partners to fast-track bold mobile ideas.
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
