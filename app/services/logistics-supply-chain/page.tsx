import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Truck, Warehouse, Thermometer, MapPin, Settings, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Logistics & Supply Chain | Pharmaceutical Distribution Across 12+ Countries",
  description:
    "FHY Gloexpo LLP provides end-to-end pharmaceutical logistics — central warehousing in Singapore & Hong Kong, cold chain logistics, real-time track & trace, and last-mile delivery across 12+ countries.",
  keywords: [
    "pharmaceutical logistics APAC",
    "cold chain pharmaceutical distribution",
    "pharmaceutical supply chain Asia",
    "last mile pharma delivery",
    "pharmaceutical warehousing Singapore Hong Kong",
    "track trace pharmaceutical",
    "FHY Gloexpo logistics",
  ],
  alternates: { canonical: "https://www.fhyglobal.com/services/logistics-supply-chain" },
  openGraph: {
    title: "Logistics & Supply Chain | FHY Gloexpo",
    description: "End-to-end pharma logistics with cold chain, real-time tracking, and last-mile delivery across 12+ countries.",
    url: "https://www.fhyglobal.com/services/logistics-supply-chain",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "FHY Gloexpo Logistics Supply Chain" }],
  },
  twitter: { card: "summary_large_image", title: "Logistics & Supply Chain | FHY Gloexpo", images: ["/assets/og-image.png"] },
}

const capabilities = [
  {
    icon: Warehouse,
    title: "Central Warehousing",
    description: "Strategic hub warehousing in Singapore & Hong Kong — purpose-built for pharmaceutical-grade storage.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Logistics",
    description: "End-to-end temperature-controlled handling ensuring product integrity from origin to destination.",
  },
  {
    icon: MapPin,
    title: "Real-Time Track & Trace",
    description: "Live visibility into shipment status and location across every leg of the supply chain.",
  },
  {
    icon: Settings,
    title: "Order Management System",
    description: "Integrated OMS enabling seamless order processing, inventory management, and demand forecasting.",
  },
  {
    icon: Package,
    title: "Last-Mile Delivery",
    description: "Reliable final-mile distribution across 12+ countries, reaching pharmacies, hospitals, and retailers.",
  },
]

const outcomes = [
  "Reliable, scalable supply chain infrastructure built for regulated pharmaceutical products",
  "Singapore & Hong Kong strategic hubs enabling rapid regional distribution",
  "Fully GDP-compliant cold chain logistics from warehouse to end point",
  "Real-time shipment visibility reducing risk and improving planning",
  "Flexible OMS integrations with existing ERP and demand planning systems",
  "Proven last-mile delivery networks across 12+ high-growth markets",
]

export default function LogisticsSupplyChainPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Logistics & Supply Chain"
          highlightedWord="Supply Chain"
          subtitle="Seamless distribution from source to shelf — efficient, compliant, and transparent product movement across 12+ countries."
        />

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Truck className="h-3.5 w-3.5" />
                  Service 04
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Seamless Distribution{" "}
                  <span className="text-violet-600">from Source to Shelf</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our logistics infrastructure ensures efficient, compliant, and transparent product movement
                  across borders and markets. From central warehousing to last-mile delivery, we handle every
                  link in the supply chain.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-gradient-to-br from-violet-500 to-violet-800 rounded-3xl p-10 text-white max-w-sm w-full shadow-2xl shadow-violet-500/20">
                  <div className="bg-white/20 rounded-2xl p-4 w-fit mb-6">
                    <Truck className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-2xl font-bold mb-4 leading-snug">
                    Reliable, scalable, and fully controlled supply chain operations.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-2xl font-black">12+</p>
                      <p className="text-white/70 text-xs">Countries Covered</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black">2</p>
                      <p className="text-white/70 text-xs">Regional Hubs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Capabilities</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Five Pillars of Our Logistics Network
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {capabilities.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className={`bg-white rounded-2xl border border-border p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${index === 4 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="bg-violet-100 rounded-xl p-3 w-fit mb-5">
                      <Icon className="h-6 w-6 text-violet-600" />
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Why Partner With Us</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Infrastructure Built for Pharmaceutical Precision
            </h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-muted/30 rounded-xl px-5 py-4 border border-border"
                >
                  <CheckCircle2 className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Build a Resilient Supply Chain
            </h2>
            <p className="text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Partner with FHY Gloexpo to power compliant, scalable pharmaceutical logistics across 12+ markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
