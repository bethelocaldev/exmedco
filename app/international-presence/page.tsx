import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "International Presence | FHY Gloexpo",
  description: "FHY Gloexpo's global footprint spanning 30+ markets across Asia, Africa, and the Middle East.",
}

export default function InternationalPresencePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="International Presence"
          highlightedWord="Presence"
          subtitle="Operating across 30+ markets in Asia, Africa, and the Middle East — delivering pharma distribution at scale."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            International Presence page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
