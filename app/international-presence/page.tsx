import Link from "next/link"
import { Header, Footer, PageHero } from "@/components/layout"
import GlobalPresenceMap from "@/components/global-presence-map"
import { CheckCircle, ChevronRight, Globe2, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Presence | FHY Gloexpo",
  description:
    "FHY Gloexpo's global footprint across high-growth markets in Asia, Africa, and the Middle East.",
}

const highlights = [
  "Distribution network across 15+ nations",
  "24/7 customer support in multiple languages",
  "Regional offices in key pharmaceutical hubs",
]

export default function InternationalPresencePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero/>
        <section className="relative bg-secondary text-white overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-36 right-0 w-[480px] h-[480px] rounded-full bg-primary/20 blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* <nav className="flex items-center gap-1 text-sm text-white/50 flex-wrap mb-10">
              <span className="flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                <span className="text-white/90 font-medium">International Presence</span>
              </span>
            </nav> */}

            <div className="grid lg:grid-cols-[1fr_0.75fr] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-7">
                  <Globe2 className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium tracking-wide uppercase">
                    Global Presence
                  </span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Strong Presence Across{" "}
                  <span className="text-primary">High-Growth Markets</span>
                </h1>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                  With operations spanning across multiple continents, FHY Gloexpo has established
                  itself as a trusted pharmaceutical partner for healthcare organizations worldwide.
                  Our global network ensures reliable supply chains, consistent quality standards,
                  and seamless market access.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-7">
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-5">
                  Key Highlights
                </p>
                <ul className="space-y-4">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <GlobalPresenceMap />
      </main>
      <Footer />
    </>
  )
}
