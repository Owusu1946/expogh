"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import {
  Users,
  Code2,
  HandshakeIcon,
  Rocket,
  GraduationCap,
  Megaphone,
  Wrench
} from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { AnimatedList } from "@/components/ui/animated-list"

export function AboutCommunity() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <section id="about" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <motion.h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            About the Community
          </motion.h2>
          <p className="text-muted-foreground">
            You’re here to build. We’re here to help you learn, ship, and grow with Expo —
            together. Explore how the journey works for a typical member.
          </p>

          <AnimatedList className="mt-2">
            <div key="1" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              Tell us what you’re building and where you’re stuck — we’ll point you to the right place.
            </div>
            <div key="2" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              Pair up with maintainers and peers in focused cohorts to learn by doing.
            </div>
            <div key="3" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
              Ship, get feedback at demo days, and showcase your work to partners.
            </div>
          </AnimatedList>

          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="rounded-xl border border-border/60 p-4">
              <Users className="size-5" />
              <p className="mt-2 text-sm font-medium">2.4k+ Members</p>
              <p className="text-xs text-muted-foreground">Active contributors nationwide</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <Code2 className="size-5" />
              <p className="mt-2 text-sm font-medium">Open Source</p>
              <p className="text-xs text-muted-foreground">Starter kits & tools for Expo</p>
            </li>
            <li className="rounded-xl border border-border/60 p-4">
              <HandshakeIcon className="size-5" />
              <p className="mt-2 text-sm font-medium">Partners</p>
              <p className="text-xs text-muted-foreground">Industry collaborations</p>
            </li>
          </ul>
        </div>

        {/* Storytelling Bento Grid */}
        <div className="relative" ref={containerRef}>
          <BentoGrid className="auto-rows-[20rem] md:auto-rows-[18rem]">
            <BentoCard
              name="Start here"
              description="Say hello, share your goals, and get matched with the right channels and cohorts."
              href="#join"
              cta="Join the community"
              Icon={Users}
              className="md:col-span-2"
              background={<div className="absolute inset-0 -z-10" />}
            />

            <BentoCard
              name="Learn by doing"
              description="Weekly mentorship, office hours, and hands‑on tracks led by maintainers."
              href="#mentorship"
              cta="Find a cohort"
              Icon={GraduationCap}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />

            <BentoCard
              name="Build with Expo"
              description="Starter kits, best practices, and examples to bootstrap production apps."
              href="#resources"
              cta="Explore starters"
              Icon={Wrench}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />

            <BentoCard
              name="Ship and showcase"
              description="Demo days and project spotlights to help you get feedback and grow visibility."
              href="#events"
              cta="See events"
              Icon={Rocket}
              className="md:col-span-2"
              background={<div className="absolute inset-0 -z-10" />}
            />

            <BentoCard
              name="Partner and amplify"
              description="We collaborate with industry partners to unlock opportunities for members."
              href="#partners"
              cta="Become a partner"
              Icon={Megaphone}
              className="md:col-span-3"
              background={<div className="absolute inset-0 -z-10" />}
            />
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}
