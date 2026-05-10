import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Pharmaceutical Distribution, Retail, Dispensing & Logistics",
  description:
    "FHY Gloexpo LLP offers retail distribution, dispensing network, prescription channel, and logistics & supply chain solutions across 15+ markets in Asia, Africa, and the Middle East.",
  keywords: [
    "pharmaceutical distribution services",
    "retail pharma distribution",
    "dispensing network pharmacy",
    "prescription channel pharma",
    "pharmaceutical logistics supply chain",
    "drug distribution APAC",
    "FHY Gloexpo services",
  ],
  alternates: {
    canonical: "https://www.fhyglobal.com/services",
  },
  openGraph: {
    title: "Our Services | FHY Gloexpo Pharmaceutical Distribution",
    description:
      "Retail distribution, dispensing networks, prescription channels, and logistics solutions across 15+ markets in Asia, Africa, and the Middle East.",
    url: "https://www.fhyglobal.com/services",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "FHY Gloexpo Services — Pharmaceutical Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | FHY Gloexpo",
    description: "Retail, dispensing, prescription & logistics pharma distribution across Asia, Africa & Middle East.",
    images: ["/assets/og-image.png"],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Services"
          highlightedWord="Services"
          subtitle="Comprehensive pharma distribution, retail, dispensing, and logistics solutions across 30+ markets."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Services overview page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
