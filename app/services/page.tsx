import { Header, Footer, PageHero } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Pill, Stethoscope, Truck, CheckCircle2 } from "lucide-react"

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

const services = [
  {
    icon: ShoppingBag,
    number: "01",
    title: "Retail Distribution",
    headline: "Scale Your Brand Through Modern Retail Networks",
    description:
      "We enable pharma and wellness brands to access high-growth retail environments across APAC. Our strong partnerships with modern trade chains, pharmacy retailers, and e-commerce platforms ensure maximum product visibility and consumer reach.",
    highlights: [
      "Modern Trade (Supermarkets & Hypermarkets)",
      "Pharmacy Chains & Health Retailers",
      "Specialty Wellness & Beauty Stores",
      "E-commerce Platforms",
    ],
    badge: "500+ active retail outlets across 12+ countries",
    badgeLabel: "Impact",
    href: "/services/retail-distribution",
    accent: "#E6561A",
    bgAccent: "from-orange-50 to-white",
  },
  {
    icon: Pill,
    number: "02",
    title: "Dispensing Network",
    headline: "Reliable Access Through Licensed Pharmacy Channels",
    description:
      "Our dispensing network ensures your products are available through trusted, regulated pharmacy environments. We work with both chain and independent pharmacies to deliver consistent OTC and wellness product placement.",
    highlights: [
      "Licensed Pharmacies",
      "OTC Product Distribution",
      "Wellness & Health Stores",
    ],
    badge: "All dispensing operations strictly follow local regulatory frameworks.",
    badgeLabel: "Compliance First",
    href: "/services/dispensing-network",
    accent: "#16a34a",
    bgAccent: "from-green-50 to-white",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Prescription Channel",
    headline: "Reach Healthcare Professionals & Institutional Buyers",
    description:
      "We connect pharmaceutical brands with hospitals, clinics, and medical professionals through a structured prescription channel supported by in-market expertise.",
    highlights: [
      "Hospital Procurement (Public & Private)",
      "Clinic & GP Networks",
      "Specialist Outreach",
      "Medical Representative Engagement",
    ],
    badge: "100% compliance with local medical and regulatory standards",
    badgeLabel: "Assurance",
    href: "/services/prescription-channel",
    accent: "#2563eb",
    bgAccent: "from-blue-50 to-white",
  },
  {
    icon: Truck,
    number: "04",
    title: "Logistics & Supply Chain",
    headline: "Seamless Distribution from Source to Shelf",
    description:
      "Our logistics infrastructure ensures efficient, compliant, and transparent product movement across borders and markets.",
    highlights: [
      "Central Warehousing (Singapore & Hong Kong hubs)",
      "Cold Chain Logistics",
      "Real-Time Track & Trace",
      "Order Management System (OMS)",
      "Last-Mile Delivery Across 12+ Countries",
    ],
    badge: "Reliable, scalable, and fully controlled supply chain operations",
    badgeLabel: "Outcome",
    href: "/services/logistics-supply-chain",
    accent: "#7c3aed",
    bgAccent: "from-violet-50 to-white",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          // title="Our Services"
          // highlightedWord="Services"
          // subtitle="Comprehensive pharma distribution, retail, dispensing, and logistics solutions across 30+ markets."
        />

        {/* Intro Section */}
        <section className="py-16 bg-background border-b border-border max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                End-to-End Pharma Distribution{" "}
                <span className="text-primary">Across APAC</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From market entry to last-mile delivery, FHY Gloexpo provides a fully integrated distribution
                ecosystem across Asia, Africa, and the Middle East—ensuring your products reach the right channels,
                compliantly and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                const isEven = index % 2 === 1
                return (
                  <div
                    key={service.href}
                    className={`group relative rounded-2xl border border-border bg-gradient-to-br ${service.bgAccent} overflow-hidden hover:shadow-xl transition-all duration-300`}
                  >
                    <div className={`flex flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      {/* Left / accent panel */}
                      <div
                        className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center justify-center p-10 text-white"
                        style={{ backgroundColor: service.accent }}
                      >
                        <span className="text-7xl font-black opacity-20 leading-none mb-4">{service.number}</span>
                        <div className="bg-white/20 rounded-2xl p-4 mb-4">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-center">{service.title}</h3>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-8 lg:p-10 xl:p-12">
                        <h4 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                          {service.headline}
                        </h4>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Coverage list */}
                        <div className="mb-6">
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            What we cover
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {service.highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                                <CheckCircle2
                                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                                  style={{ color: service.accent }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Badge */}
                        <div
                          className="inline-flex items-start gap-3 rounded-xl px-4 py-3 mb-6 text-sm"
                          style={{ backgroundColor: `${service.accent}15`, borderLeft: `3px solid ${service.accent}` }}
                        >
                          <span className="font-bold shrink-0" style={{ color: service.accent }}>
                            {service.badgeLabel}:
                          </span>
                          <span className="text-foreground">{service.badge}</span>
                        </div>

                        {/* CTA */}
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group/link"
                          style={{ color: service.accent }}
                        >
                          Explore {service.title}
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <ContactForm compact />
      </main>
      <Footer />
    </>
  )
}
