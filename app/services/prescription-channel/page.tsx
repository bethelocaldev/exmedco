import { Header, Footer, PageHero } from "@/components/layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prescription Channel | Pharma Access to Hospitals & Clinics Across APAC",
  description:
    "FHY Gloexpo LLP connects pharmaceutical brands with hospitals, clinics, GPs, and institutional buyers through structured prescription channels across Asia, Africa, and the Middle East.",
  keywords: [
    "prescription channel pharma",
    "hospital pharmaceutical procurement",
    "clinic pharma distribution",
    "institutional pharma buyer",
    "medical representative pharma APAC",
    "FHY Gloexpo prescription",
  ],
  alternates: { canonical: "https://www.fhyglobal.com/services/prescription-channel" },
  openGraph: {
    title: "Prescription Channel | FHY Gloexpo",
    description: "Connecting pharma brands to hospitals, clinics, and institutional buyers across APAC.",
    url: "https://www.fhyglobal.com/services/prescription-channel",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "FHY Gloexpo Prescription Channel" }],
  },
  twitter: { card: "summary_large_image", title: "Prescription Channel | FHY Gloexpo", images: ["/assets/og-image.png"] },
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
