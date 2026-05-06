import { Header, Footer, PageHero } from "@/components/layout"
import Accreditation from "@/components/accreditation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About FHY Gloexpo | Pharma Distribution Across APAC",
  description: "Learn about FHY Gloexpo — a leading pharma distribution company operating across Asia, Africa, and the Middle East.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About FHY Gloexpo"
          highlightedWord="FHY Gloexpo"
          subtitle="Strategic partners in global growth — connecting manufacturers with high-potential markets across Asia, Africa, and the Middle East."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            About Us page — coming soon.
          </div>
        </section>
        <Accreditation />
      </main>
      <Footer />
    </>
  )
}
