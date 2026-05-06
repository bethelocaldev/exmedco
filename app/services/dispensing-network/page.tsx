import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dispensing Network | FHY Gloexpo",
  description: "Ensure product availability through licensed pharmacy environments with FHY Gloexpo's regulated dispensing network across APAC.",
  keywords: ["dispensing network", "pharmacy distribution", "OTC products", "APAC", "licensed pharmacies"],
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
