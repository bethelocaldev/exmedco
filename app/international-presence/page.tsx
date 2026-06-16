import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Building2,
  Globe2,
  MapPin,
  ShieldCheck,
  Warehouse,
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import GlobalPresenceMap from "@/components/global-presence-map"
import { globalPresence, statistics } from "@/data/site-data"
import { siteConfig } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Global Reach | Exmedco — Pharmaceutical Distribution Across 3 Continents",
  description:
    "Exmedco operates across 15+ countries in Asia, Africa, and the Middle East with regional logistics hubs in Singapore and Hong Kong. Explore our global pharmaceutical distribution network.",
  openGraph: {
    title: "Global Reach | Exmedco",
    description:
      "Active pharmaceutical distribution across 15+ countries in Asia, Africa, and the Middle East.",
    url: `${siteConfig.url}/international-presence`,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: `${siteConfig.url}/international-presence`,
  },
}

const highlights = [
  {
    icon: MapPin,
    text: "Active distribution across 15+ countries",
  },
  {
    icon: Building2,
    text: "In-market teams with local regulatory and commercial expertise",
  },
  {
    icon: Warehouse,
    text: "Regional logistics hubs in Singapore and Hong Kong",
  },
]

export default function InternationalPresencePage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        {/* ── Hero ── */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 h-px w-24 bg-primary" />
              <p className="eyebrow">Global Reach</p>
              <h1 className="mt-5 display-title max-w-4xl">
                Active Across High-Growth Pharmaceutical Markets on Three Continents
              </h1>
              <p className="body-copy mt-6 max-w-3xl">
                Exmedco has established structured distribution and market access
                operations across Asia, Africa, and the Middle East. Our regional
                presence ensures consistent product supply, full regulatory
                compliance, and in-market commercial expertise wherever your
                products need to reach.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 border border-border p-4"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-6 text-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interactive Map ── */}
        <GlobalPresenceMap />

        {/* ── Regions Breakdown ── */}
        <section className="bg-secondary/70 py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Regional Coverage</p>
            <h2 className="section-title mt-4 mb-12 max-w-xl">
              Three continents, one accountable partner
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {globalPresence.regions.map((region) => (
                <div
                  key={region.name}
                  className="clinical-card bg-white p-6 sm:p-8"
                  style={{ borderTopColor: "#1A56DB", borderTopWidth: 3 }}
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {region.name}
                  </p>
                  <p className="mt-3 font-mono text-3xl font-semibold text-foreground">
                    {region.countries.length}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Countries
                  </p>

                  <div className="mt-6 border-t border-border pt-5 space-y-2">
                    {region.countries.map((country) => (
                      <div
                        key={country}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Market Highlights ── */}
        <section className="border-y border-border bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow">Market Highlights</p>
                <h2 className="section-title mt-4 max-w-md">
                  Key markets driving growth
                </h2>
                <p className="body-copy mt-5 max-w-md">
                  In-depth market knowledge and established partnerships across
                  our strongest performing territories.
                </p>

                {/* Market Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border border-border p-5">
                    <p className="font-mono text-2xl font-semibold text-foreground">
                      {globalPresence.marketStats.apacB2CMarket}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      APAC B2C Market Size by {globalPresence.marketStats.projectedBy}
                    </p>
                  </div>
                  <div className="border border-border p-5">
                    <p className="font-mono text-2xl font-semibold text-foreground">
                      {globalPresence.marketStats.newConsumers}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      New consumers by {globalPresence.marketStats.newConsumersBy}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {globalPresence.marketHighlights.map((market) => (
                    <div
                      key={market.country}
                      className="border border-border p-5 sm:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center bg-primary/10">
                          <Globe2 className="size-5 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {market.country}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {market.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-secondary py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t-2 border-primary pt-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">By The Numbers</p>
                  <h2 className="section-title mt-4 max-w-xl">
                    Operational scale across three regions
                  </h2>
                </div>
                <div className="grid grid-cols-2 border border-border bg-white sm:grid-cols-3">
                  {statistics.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-r border-border p-5 last:border-r-0 sm:p-6"
                    >
                      <p className="font-mono text-3xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm leading-5 text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        {/* ── Footer bar ── */}
        <section className="bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              [Globe2, "Asia, Africa & Middle East"],
              [Building2, "Mumbai headquarters"],
              [ShieldCheck, "100% compliance focus"],
            ].map(([Icon, text]) => {
              const ItemIcon = Icon as typeof Globe2
              return (
                <div
                  key={text as string}
                  className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                >
                  <ItemIcon className="size-4 text-accent" />
                  {text as string}
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
