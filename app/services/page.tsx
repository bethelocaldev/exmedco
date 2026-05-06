import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | FHY Gloexpo",
  description: "Explore FHY Gloexpo's pharmaceutical distribution and logistics services across APAC.",
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
