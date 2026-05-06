import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logistics & Supply Chain | FHY Gloexpo",
  description: "Efficient, compliant, and transparent product movement across borders with FHY Gloexpo's end-to-end logistics and supply chain solutions.",
  keywords: ["logistics", "supply chain", "cold chain", "last mile delivery", "APAC distribution", "warehousing"],
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
