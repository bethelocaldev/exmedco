import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prescription Channel | FHY Gloexpo",
  description: "Connect pharmaceutical brands with hospitals, clinics, and healthcare professionals through FHY Gloexpo's structured prescription channel.",
  keywords: ["prescription channel", "hospital procurement", "pharmaceutical", "healthcare professionals", "APAC"],
}

export default function PrescriptionChannelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Prescription Channel"
          highlightedWord="Channel"
          subtitle="Reach healthcare professionals and institutional buyers through structured prescription channels supported by in-market expertise."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Prescription Channel page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
