"use client"

import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  about: [
    { label: "Our Story", href: "#about" },
    { label: "Team", href: "#" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#resources" },
    { label: "Starter Kits", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Videos", href: "#" },
  ],
  community: [
    { label: "Open Source", href: "#open-source" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blog", href: "#blog" },
    { label: "Join Us", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Code of Conduct", href: "#" },
  ],
}

const socialLinks = [
  { icon: Github, href: "https://github.com/expo-gh", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/expoghana", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/expo-ghana", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@expoghana.community", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-tight">Expo Ghana</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Building world-class mobile experiences with Expo. Join meetups, contribute to open source, and grow your impact in Ghana's tech ecosystem.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-medium tracking-tight">About</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-medium tracking-tight">Resources</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-sm font-medium tracking-tight">Community</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Expo Ghana Community. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
