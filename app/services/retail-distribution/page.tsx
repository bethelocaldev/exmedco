import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retail Distribution | Pharma Retail Networks Across Asia & Africa",
  description:
    "FHY Gloexpo LLP enables pharmaceutical brands to access modern trade chains, pharmacy retailers, and e-commerce platforms across APAC. 500+ active retail outlets across 12+ countries.",
  keywords: [
    "retail pharma distribution APAC",
    "pharmaceutical modern trade Asia",
    "pharmacy retail distribution",
    "e-commerce pharmaceutical distribution",
    "Guardian Watsons distribution",
    "Lazada Shopee pharma",
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
