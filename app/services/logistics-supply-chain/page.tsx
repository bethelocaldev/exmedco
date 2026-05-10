import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Logistics & Supply Chain page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
