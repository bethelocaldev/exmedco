import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retail Distribution | FHY Gloexpo",
  description: "Access high-growth retail environments across APAC through modern trade chains, pharmacy retailers, and e-commerce platforms with FHY Gloexpo.",
  keywords: ["retail distribution", "APAC", "modern trade", "pharmacy retail", "e-commerce distribution"],
}

export default function RetailDistributionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Retail Distribution"
          highlightedWord="Distribution"
          subtitle="Scale your brand through modern trade chains, pharmacy retailers, and e-commerce platforms across APAC."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Retail Distribution page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
