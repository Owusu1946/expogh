import Link from "next/link"
import { Heart, Rocket, Stars, Users, ShieldCheck, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SponsorPage() {
  const tiers = [
    {
      name: "Community",
      price: "GHS 150/mo",
      highlight: false,
      features: [
        "Logo in README",
        "Shout-out on X",
        "Listed on sponsors page",
      ],
    },
    {
      name: "Partner",
      price: "GHS 600/mo",
      highlight: true,
      features: [
        "Everything in Community",
        "Logo on homepage marquee",
        "Job/Call-to-action once per quarter",
        "Priority support in Discord",
      ],
    },
    {
      name: "Patron",
      price: "GHS 1500/mo",
      highlight: false,
      features: [
        "Everything in Partner",
        "Workshop or talk spotlight",
        "Placement at meetups",
        "Co-marketing opportunities",
      ],
    },
  ] as const

  const benefits = [
    { icon: <Users className="size-4 sm:size-5" />, title: "Community Reach", desc: "Engage developers and founders across Ghana." },
    { icon: <Rocket className="size-4 sm:size-5" />, title: "Launch Faster", desc: "Support tooling, guides, and open-source." },
    { icon: <ShieldCheck className="size-4 sm:size-5" />, title: "Credibility", desc: "Be recognized as a community-first company." },
  ] as const

  const sponsorsCompanies = [
    { name: "Paystack" },
    { name: "Flutterwave" },
    { name: "GitHub" },
    { name: "Google Devs" },
  ] as const

  const sponsorsIndividuals = [
    { name: "Abena K.", initials: "AK" },
    { name: "Michael G.", initials: "MG" },
    { name: "Linda S.", initials: "LS" },
    { name: "Yaw A.", initials: "YA" },
    { name: "Ama T.", initials: "AT" },
  ] as const

  return (
    <section className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.24em]">
            <Heart className="size-3.5 text-primary" />
            Support the Expo Ghana Community
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Sponsor our mission to empower builders in Ghana
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Your support funds meetups, open-source projects, starter kits, and learning programs for the next generation of mobile developers.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#tiers">Become a sponsor</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#faq">Learn more</Link>
            </Button>
          </div>
        </div>

        {/* Sponsors Wall */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">Our sponsors</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {/* Companies */}
            <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
              <div className="mb-3 text-sm font-semibold text-muted-foreground">Companies</div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {sponsorsCompanies.map((c) => (
                  <div key={c.name} className="grid place-items-center rounded-lg border border-border/60 bg-muted/30 px-3 py-4 text-sm font-medium">
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
            {/* Individuals */}
            <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
              <div className="mb-3 text-sm font-semibold text-muted-foreground">Individuals</div>
              <div className="flex flex-wrap gap-3">
                {sponsorsIndividuals.map((p) => (
                  <div key={p.name} className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1.5">
                    <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
                      {p.initials}
                    </span>
                    <span className="text-sm">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/70 p-4">
              <div className="grid place-items-center rounded-lg border border-border/60 bg-muted/40 p-2 text-primary">
                {b.icon}
              </div>
              <div>
                <div className="text-sm font-semibold sm:text-base">{b.title}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div id="tiers" className="mt-12 sm:mt-16">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">Sponsorship tiers</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">Simple, transparent pricing in Ghana Cedis. Cancel anytime.</p>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={[
                  "rounded-xl border border-border/60 bg-background/70 p-5",
                  tier.highlight ? "ring-1 ring-primary/30" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold tracking-tight">{tier.name}</h3>
                  {tier.highlight ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                      <Stars className="size-3" /> Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-2xl font-semibold">{tier.price}</div>
                  <span className="text-xs text-muted-foreground">per month</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Trophy className="mt-0.5 size-3.5 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-5 w-full" variant={tier.highlight ? "default" : "outline"}>
                  <Link href={`mailto:hello@expoghana.community?subject=Sponsor%20${encodeURIComponent(tier.name)}`}>Sponsor {tier.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* One-time & GitHub Sponsors */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">Other ways to support</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Prefer a one-time gift or GitHub Sponsors? Choose what works best for you.
          </p>
          <div className="mx-auto mt-5 grid max-w-3xl gap-3 sm:mt-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background/70 p-5 text-center">
              <div className="text-sm font-semibold">One-time donation</div>
              <p className="mt-1 text-xs text-muted-foreground">Secure checkout</p>
              <Button asChild className="mt-3 w-full">
                <Link href={(process.env.NEXT_PUBLIC_DONATION_URL as string) || "https://paystack.com/pay/expoghana"} target="_blank">
                  Donate once
                </Link>
              </Button>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 p-5 text-center">
              <div className="text-sm font-semibold">GitHub Sponsors</div>
              <p className="mt-1 text-xs text-muted-foreground">Recurring or one-time</p>
              <Button asChild variant="outline" className="mt-3 w-full">
                <Link href="https://github.com/sponsors/expo-gh" target="_blank">
                  Open GitHub Sponsors
                </Link>
              </Button>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/70 p-5 text-center">
              <div className="text-sm font-semibold">Bank transfer</div>
              <p className="mt-1 text-xs text-muted-foreground">Request invoice / details</p>
              <Button asChild variant="outline" className="mt-3 w-full">
                <Link href="mailto:hello@expoghana.community?subject=Bank%20Transfer%20Support">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-12 sm:mt-16">
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">FAQ</h2>
          <div className="mx-auto mt-5 max-w-3xl divide-y divide-border/60 rounded-xl border border-border/60">
            <details className="group p-4 open:bg-muted/30">
              <summary className="cursor-pointer list-none text-sm font-medium sm:text-base">Where does my sponsorship go?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Funds community meetups, open-source maintenance, learning materials, and scholarships for student builders.</p>
            </details>
            <details className="group p-4 open:bg-muted/30">
              <summary className="cursor-pointer list-none text-sm font-medium sm:text-base">Can I make a one-time donation?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Yes. Email us at <a className="underline" href="mailto:hello@expoghana.community">hello@expoghana.community</a> and we’ll coordinate the best option.</p>
            </details>
            <details className="group p-4 open:bg-muted/30">
              <summary className="cursor-pointer list-none text-sm font-medium sm:text-base">Do you offer invoices?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Absolutely. We provide invoices and receipts for accounting and compliance.</p>
            </details>
          </div>
          <div className="mt-6 text-center">
            <Button asChild size="lg">
              <Link href="mailto:hello@expoghana.community?subject=Custom%20Sponsorship">Discuss a custom plan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
