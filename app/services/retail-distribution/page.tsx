import { Header, Footer, PageHero } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShoppingBag, TrendingUp, Store, ShoppingCart, Pill } from "lucide-react"

export const metadata: Metadata = {
  title: "Retail Distribution | Pharma Retail Networks Across Asia & Africa",
  description:
    "FHY Gloexpo LLP enables pharmaceutical brands to access modern trade chains, pharmacy retailers, and e-commerce platforms across APAC. 500+ active retail outlets across 12+ countries.",
  keywords: [
    "retail pharma distribution APAC",
    "pharmaceutical modern trade Asia",
    "pharmacy retail distribution",
    "e-commerce pharmaceutical distribution",
    "FHY Gloexpo retail",
  ],
  alternates: { canonical: "https://www.fhyglobal.com/services/retail-distribution" },
  openGraph: {
    title: "Retail Distribution | FHY Gloexpo",
    description: "Access modern trade chains, pharmacy retailers, and e-commerce across APAC with FHY Gloexpo.",
    url: "https://www.fhyglobal.com/services/retail-distribution",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "FHY Gloexpo Retail Distribution" }],
  },
  twitter: { card: "summary_large_image", title: "Retail Distribution | FHY Gloexpo", images: ["/assets/og-image.png"] },
}

const coverage = [
  { icon: TrendingUp, title: "Modern Trade", description: "Strategic shelf placement in supermarkets & hypermarkets across high-footfall modern trade environments." },
  { icon: Pill, title: "Pharmacy Chains & Health Retailers", description: "Dedicated distribution through established pharmacy chains and specialist health retailers." },
  { icon: Store, title: "Specialty Wellness & Beauty Stores", description: "Targeted access to specialty wellness, nutraceutical, and beauty retail formats." },
  { icon: ShoppingCart, title: "E-commerce Platforms", description: "Full digital channel activation on leading marketplace and DTC platforms across APAC." },
]

const outcomes = [
  "Established relationships with leading modern trade and pharmacy chains across APAC",
  "Localised market knowledge ensuring compliant and culturally relevant shelf placement",
  "Integrated digital and physical channel strategy for maximum brand exposure",
  "Proven track record with 500+ active outlets across 12+ high-growth markets",
  "End-to-end retailer management from negotiations to replenishment",
]

export default function RetailDistributionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          // title="Retail Distribution"
          // highlightedWord="Distribution"
          // subtitle="Scale your brand through modern trade chains, pharmacy retailers, and e-commerce platforms across APAC."
        />

        {/* Intro */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Service 01
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Scale Your Brand Through{" "}
                  <span className="text-primary">Modern Retail Networks</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We enable pharma and wellness brands to access high-growth retail environments across APAC.
                  Our strong partnerships with modern trade chains, pharmacy retailers, and e-commerce platforms
                  ensure maximum product visibility and consumer reach.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/30">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-10 text-white max-w-sm w-full shadow-2xl shadow-orange-500/20">
                  <div className="bg-white/20 rounded-2xl p-4 w-fit mb-6">
                    <ShoppingBag className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">Impact</p>
                  <p className="text-5xl font-black mb-2">500+</p>
                  <p className="text-xl font-semibold mb-1">Active Retail Outlets</p>
                  <p className="text-white/70">Across 12+ countries in Asia, Africa & the Middle East</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 bg-muted/30 border-y border-border max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What We Cover</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Four Core Retail Channels</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverage.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl border border-border p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-primary/10 rounded-xl p-3 w-fit mb-5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Partner With Us</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Built for High-Growth Retail Markets</h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((point) => (
                <div key={point} className="flex items-start gap-3 bg-muted/30 rounded-xl px-5 py-4 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactForm compact />
      </main>
      <Footer />
    </>
  )
}
