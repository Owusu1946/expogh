"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { AnimatedList } from "@/components/ui/animated-list"
import { Button } from "@/components/ui/button"
import { Code2, GitBranch, Star } from "lucide-react"

const repos = [
  {
    name: "expo-gh/starter-tabs",
    description: "Production-ready Expo + Tabs + Supabase auth starter.",
    href: "#",
    stars: "1.2k",
  },
  {
    name: "expo-gh/ui-kit",
    description: "Composable UI primitives for Expo/React Native.",
    href: "#",
    stars: "860",
  },
  {
    name: "expo-gh/eas-examples",
    description: "EAS Build & Submit recipes and CI templates.",
    href: "#",
    stars: "540",
  },
  {
    name: "expo-gh/templates",
    description: "Curated templates for common app patterns.",
    href: "#",
    stars: "1.0k",
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">Open Source</h2>
            <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
              We build in the open—starters, kits, and examples maintained by the community.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
              <a href="#">Browse all repos</a>
            </Button>
            <Button variant="default" size="sm" className="w-full sm:w-auto" asChild>
              <a href="#">Contribute</a>
            </Button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <BentoGrid className="auto-rows-[14rem] sm:auto-rows-[16rem] md:auto-rows-[18rem]">
            <BentoCard
              name="Why it matters"
              description="Starter kits reduce time-to-first-feature and unify best practices across apps."
              href="#"
              cta="Read the philosophy"
              Icon={Code2}
              className="md:col-span-2"
              background={<div className="absolute inset-0 -z-10" />}
            />

            <BentoCard
              name="Contribution flow"
              description="Good first issues, PR previews, and weekly maintainer office hours."
              href="#"
              cta="Get started"
              Icon={GitBranch}
              className="md:col-span-1"
              background={<div className="absolute inset-0 -z-10" />}
            />

            {/* Featured repositories */}
            {repos.slice(0, 3).map((repo) => (
              <BlurFade key={repo.name} className="h-full" delay={0.05}>
                <a
                  href={repo.href}
                  className="group block h-full rounded-lg border border-border/60 p-3 transition-colors hover:border-primary/40 sm:rounded-xl sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium tracking-tight sm:text-base">{repo.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground sm:text-xs">
                      <Star className="size-3 sm:size-3.5" /> {repo.stars}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{repo.description}</p>
                  <div className="mt-2 text-[10px] text-primary sm:mt-3 sm:text-xs">Open repository →</div>
                </a>
              </BlurFade>
            ))}

            <BlurFade className="h-full md:col-span-3" delay={0.08}>
              <div className="grid gap-3 rounded-lg border border-border/60 p-3 sm:gap-4 sm:rounded-xl sm:p-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium sm:text-base">How to contribute</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                    Pick a starter, run it locally, and tackle a good first issue. Maintainers host
                    weekly triage and can help you get your first PR merged.
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:mt-3 sm:flex-row">
                    <Button size="sm" className="w-full sm:w-auto" asChild>
                      <a href="#">Find issues</a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                      <a href="#">Join office hours</a>
                    </Button>
                  </div>
                </div>
                <div>
                  <AnimatedList delay={1400}>
                    <div key="1" className="w-full rounded-lg border border-border/60 bg-card p-2 text-xs sm:p-3 sm:text-sm">
                      Clone starter and run dev server.
                    </div>
                    <div key="2" className="w-full rounded-lg border border-border/60 bg-card p-2 text-xs sm:p-3 sm:text-sm">
                      Pick an issue and ask for guidance.
                    </div>
                    <div key="3" className="w-full rounded-lg border border-border/60 bg-card p-2 text-xs sm:p-3 sm:text-sm">
                      Open a PR—maintainers will review.
                    </div>
                  </AnimatedList>
                </div>
              </div>
            </BlurFade>
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}
