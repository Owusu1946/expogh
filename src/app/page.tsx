import { HomeHero } from "@/components/sections/home/home-hero"
import { AboutCommunity } from "@/components/sections/home/about-community"
import { CommunityHighlights } from "@/components/sections/home/community-highlights"
import { UpcomingEvents } from "@/components/sections/home/upcoming-events"
import { OpenSource } from "@/components/sections/home/open-source"
import { Gallery } from "@/components/sections/home/gallery"
import { Resources } from "@/components/sections/home/resources"
import { Blog } from "@/components/sections/home/blog"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <HomeHero />
      <AboutCommunity />
      <CommunityHighlights />
      <UpcomingEvents />
      <OpenSource />
      <Gallery />
      <Resources />
      <Blog />
    </div>
  )
}
