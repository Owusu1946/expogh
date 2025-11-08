export type NavigationItem = {
  title: string
  href: string
}

export interface SiteConfig {
  name: string
  tagline: string
  nav: NavigationItem[]
  cta: {
    primary: NavigationItem
    secondary: NavigationItem
  }
}

export const siteConfig: SiteConfig = {
  name: "Expo Ghana",
  tagline: "Empowering Ghana's Expo & tech community",
  nav: [
    { title: "About", href: "/about" },
    { title: "Events", href: "/events" },
    { title: "Open Source", href: "/projects" },
    { title: "Gallery", href: "/gallery" },
    { title: "Resources", href: "/resources" },
    { title: "Blog", href: "/blog" },
  ],
  cta: {
    primary: { title: "Join community", href: "/join" },
    secondary: { title: "Sponsor us", href: "/sponsor" },
  },
}
