"use client"

import { motion } from "motion/react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { AnimatedList } from "@/components/ui/animated-list"
import { Terminal, AnimatedSpan, TypingAnimation } from "@/components/ui/terminal"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"
import { BookOpen, Wrench, Video, Sparkles, Files, Rocket } from "lucide-react"

export function Resources() {
  return (
    <section id="resources" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-6">
          <motion.h2
            className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Resources
          </motion.h2>
          <p className="text-xs text-muted-foreground sm:text-base">
            Starter kits, docs, examples, and videos to help you learn and ship faster with Expo.
          </p>

          <Terminal className="max-w-none py-2 text-xs sm:py-3 sm:text-sm">
            <div>
              <span className="text-blue-500">$ </span>
              <TypingAnimation as="span" duration={30}>
                npx create-expo-app my-app
              </TypingAnimation>
            </div>
            <AnimatedSpan className="text-muted-foreground text-xs">
              ✔ Created Expo app
            </AnimatedSpan>
            <AnimatedSpan>&nbsp;</AnimatedSpan>
            <AnimatedSpan>
              <span className="text-blue-500">$ </span>npx expo start
            </AnimatedSpan>
            <AnimatedSpan className="text-emerald-600 dark:text-emerald-400 text-xs">
              ✓ Metro ready
            </AnimatedSpan>
            <AnimatedSpan className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              ⚡ Ready on all platforms
            </AnimatedSpan>
          </Terminal>

          <div className="hidden sm:block">
            <AnimatedList className="mt-4">
              <div key="1" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
                Explore starters and pick the closest match to your app.
              </div>
              <div key="2" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
                Follow a focused guide for auth, navigation, or performance.
              </div>
              <div key="3" className="w-full rounded-lg border border-border/60 bg-card p-3 text-sm">
                Ship with EAS recipes and automate releases.
              </div>
            </AnimatedList>
            <div className="mt-4">
              <Marquee pauseOnHover className="[--duration:18s]">
                <span className="mx-6 text-xs text-muted-foreground">Auth</span>
                <span className="mx-6 text-xs text-muted-foreground">Routing</span>
                <span className="mx-6 text-xs text-muted-foreground">EAS</span>
                <span className="mx-6 text-xs text-muted-foreground">Perf</span>
                <span className="mx-6 text-xs text-muted-foreground">Testing</span>
                <span className="mx-6 text-xs text-muted-foreground">Tooling</span>
              </Marquee>
            </div>
          </div>
        </div>

        <div className="relative">
          <BentoGrid className="auto-rows-[12rem] sm:auto-rows-[16rem] md:auto-rows-[16rem]">
            <BentoCard
              name="Documentation"
              description="Official Expo docs, APIs, and platform guides."
              href="#"
              cta="Read docs"
              Icon={BookOpen}
              className="md:col-span-2"
              background={<div className="absolute inset-0 -z-10" />}
            />
            <BentoCard
              name="Starter kits"
              description="Production-ready templates for common app patterns."
              href="#"
              cta="Browse starters"
              Icon={Files}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />
            <BentoCard
              name="Guides"
              description="How-tos for auth, routing, native modules, and more."
              href="#"
              cta="Explore guides"
              Icon={Sparkles}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />
            <BentoCard
              name="Videos"
              description="Talks and tutorials from meetups and workshops."
              href="#"
              cta="Watch playlist"
              Icon={Video}
              className="md:col-span-2"
              background={<div className="absolute inset-0 -z-10" />}
            />
            <BentoCard
              name="EAS recipes"
              description="Build & Submit pipelines, signing, and CI templates."
              href="#"
              cta="Use recipes"
              Icon={Rocket}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />
            <BentoCard
              name="Developer tools"
              description="CLI helpers, lint configs, and scripts we use."
              href="#"
              cta="Install tools"
              Icon={Wrench}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />
          </BentoGrid>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <Button size="sm" className="w-full sm:w-auto" asChild>
              <a href="#">Get started</a>
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
              <a href="#">See all resources</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
