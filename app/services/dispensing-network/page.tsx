import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dispensing Network | Licensed Pharmacy Distribution Across APAC",
  description:
    "FHY Gloexpo LLP ensures product availability through licensed pharmacies, OTC outlets, and wellness stores across APAC. 1,000+ dispensing points.",
  keywords: [
    "dispensing network APAC",
    "licensed pharmacy distribution",
    "OTC product distribution Asia",
    "pharmacy chain distribution",
    "wellness store distribution",
    "FHY Gloexpo dispensing",
  ],
  alternates: { canonical: "https://www.fhyglobal.com/services/dispensing-network" },
  openGraph: {
    title: "Dispensing Network | FHY Gloexpo",
    description: "1,000+ dispensing points across licensed pharmacies and wellness outlets in APAC.",
    url: "https://www.fhyglobal.com/services/dispensing-network",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "FHY Gloexpo Dispensing Network" }],
  },
  twitter: { card: "summary_large_image", title: "Dispensing Network | FHY Gloexpo", images: ["/assets/og-image.png"] },
}

export default function DispensingNetworkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Dispensing Network"
          highlightedWord="Network"
          subtitle="Reliable access through licensed pharmacy channels — ensuring your products reach regulated environments across APAC."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Dispensing Network page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
