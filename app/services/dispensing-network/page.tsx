import { Header, Footer, PageHero } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Pill, Shield, Store, Package } from "lucide-react"

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

const coverage = [
  { icon: Pill, title: "Licensed Pharmacies", description: "Distribution through fully licensed and regulated pharmacy outlets across APAC markets." },
  { icon: Package, title: "OTC Product Distribution", description: "Efficient over-the-counter product placement ensuring consistent availability and visibility." },
  { icon: Store, title: "Wellness & Health Stores", description: "Targeted reach to wellness, nutraceutical, and health-focused retail environments." },
]

const outcomes = [
  "Partnerships with both chain and independent licensed pharmacies",
  "Strict adherence to local regulatory frameworks in every market",
  "Consistent OTC and wellness product availability across all dispensing points",
  "Dedicated in-country teams managing pharmacy relationships",
  "Transparent reporting and replenishment tracking",
]

export default function DispensingNetworkPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fhyglobal.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.fhyglobal.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dispensing Network",
        "item": "https://www.fhyglobal.com/services/dispensing-network"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <PageHero
          // title="Dispensing Network"
          // highlightedWord="Network"
          // subtitle="Reliable access through licensed pharmacy channels — ensuring your products reach regulated environments across APAC."
        />

        {/* Intro */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Pill className="h-3.5 w-3.5" />
                  Service 02
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Reliable Access Through{" "}
                  <span className="text-green-600">Licensed Pharmacy Channels</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our dispensing network ensures your products are available through trusted, regulated pharmacy
                  environments. We work with both chain and independent pharmacies to deliver consistent OTC and
                  wellness product placement.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-10 text-white max-w-sm w-full shadow-2xl shadow-green-500/20">
                  <div className="bg-white/20 rounded-2xl p-4 w-fit mb-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">Compliance First</p>
                  <p className="text-2xl font-bold mb-3 leading-snug">
                    All dispensing operations strictly follow local regulatory frameworks.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-white/70 text-sm">Every market. Every outlet. Every time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 bg-muted/30 border-y border-border max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">What We Cover</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Three Core Dispensing Channels</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coverage.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl border border-border p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-green-100 rounded-xl p-3 w-fit mb-5">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">Why Partner With Us</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">A Compliant, Proven Dispensing Network</h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((point) => (
                <div key={point} className="flex items-start gap-3 bg-muted/30 rounded-xl px-5 py-4 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactForm compact />
      </main>
      <Footer />
    </>
  )
}
