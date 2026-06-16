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
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sky-100 via-white to-teal-50">
          <div className="pointer-events-none absolute -left-12 top-16 h-56 w-56 rounded-full bg-sky-300/70" />
          <div className="pointer-events-none absolute right-12 top-24 h-40 w-40 rounded-full bg-emerald-300/75" />
          <div className="pointer-events-none absolute bottom-8 left-[46%] h-28 w-28 rounded-full bg-teal-300/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 h-px w-24 bg-accent" />
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
                  className="flex items-start gap-3 border border-sky-200 bg-white/82 p-4 shadow-[0_16px_35px_rgba(14,165,233,0.1)]"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
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
        <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Regional Coverage</p>
            <h2 className="section-title mt-4 mb-12 max-w-xl">
              Three continents, one accountable partner
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {globalPresence.regions.map((region) => (
                <div
                  key={region.name}
                  className="clinical-card bg-gradient-to-br from-white via-white to-sky-50 p-6 shadow-[0_18px_45px_rgba(14,165,233,0.08)] sm:p-8"
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
        <section className="border-y border-border bg-gradient-to-br from-white via-sky-50 to-teal-50 py-18 sm:py-24">
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
                  <div className="border border-sky-200 bg-white p-5 shadow-[0_12px_30px_rgba(14,165,233,0.07)]">
                    <p className="font-mono text-2xl font-semibold text-foreground">
                      {globalPresence.marketStats.apacB2CMarket}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      APAC B2C Market Size by {globalPresence.marketStats.projectedBy}
                    </p>
                  </div>
                  <div className="border border-emerald-200 bg-white p-5 shadow-[0_12px_30px_rgba(16,185,129,0.07)]">
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
                      className="border border-sky-200 bg-white p-5 shadow-[0_12px_30px_rgba(14,165,233,0.07)] sm:p-6"
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
        <section className="relative overflow-hidden bg-primary py-18 text-white sm:py-24">
          <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-sky-400/25" />
          <div className="pointer-events-none absolute bottom-10 left-10 h-36 w-36 rounded-full bg-emerald-400/25" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 border-t-2 border-accent pt-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">By The Numbers</p>
                  <h2 className="section-title mt-4 max-w-xl text-white">
                    Operational scale across three regions
                  </h2>
                </div>
                <div className="grid grid-cols-2 border border-sky-500/25 bg-slate-950/40 sm:grid-cols-3">
                  {statistics.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-r border-sky-500/10 p-5 last:border-r-0 sm:p-6"
                    >
                      <p className="font-mono text-3xl font-semibold text-accent">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm leading-5 text-sky-100/75">
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
        <section className="bg-gradient-to-r from-sky-50 via-white to-teal-50 py-8">
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
