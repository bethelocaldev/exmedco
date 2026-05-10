"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Pill,
  Stethoscope,
  Store,
  Truck,
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import Accreditation from "@/components/accreditation"
import GlobalPresenceMap from "@/components/global-presence-map"
import { services } from "@/data/site-data"

/* ── JSON-LD: WebSite + WebPage schema injected at client side ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.fhyglobal.com/#website",
      url: "https://www.fhyglobal.com",
      name: "FHY Gloexpo",
      description: "Pharmaceutical distribution across Asia, Africa & Middle East",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.fhyglobal.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.fhyglobal.com/#webpage",
      url: "https://www.fhyglobal.com",
      name: "FHY Gloexpo | Pharmaceutical Distribution Across Asia, Africa & Middle East",
      description:
        "FHY Gloexpo LLP — retail, prescription, dispensing, and logistics solutions across 15+ countries in Asia, Africa, and the Middle East.",
      isPartOf: { "@id": "https://www.fhyglobal.com/#website" },
    },
  ],
}

const serviceIconMap: Record<string, ReactNode> = {
  Store: <Store className="w-8 h-8" />,
  Pill: <Pill className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
}

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "15+", label: "Countries Served" },
  { value: "200+", label: "Product Portfolio" },
  { value: "99.9%", label: "Quality Compliance" },
]

const heroSlides = [
  {
    eyebrow: "Global Pharmaceutical Distribution",
    title: "Expanding Pharma Brands Across APAC & Global Markets",
    description:
      "FHY Gloexpo builds reliable market access for manufacturers through compliant distribution, regional partnerships, and scalable sales channels.",
    service: "Market access, distribution, and brand positioning",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1800&q=80",
  },
  {
    eyebrow: "Multi-Channel Sales Network",
    title: "Retail, Prescription, Dispensing, and Digital Reach",
    description:
      "We connect healthcare products with modern retail chains, pharmacies, institutions, and digital platforms across high-growth markets.",
    service: "Retail distribution, prescription channels, and B2C reach",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80",
  },
  {
    eyebrow: "Logistics & Supply Chain",
    title: "Reliable Movement From Source to Regional Demand",
    description:
      "Our operating model supports manufacturers with partner onboarding, product distribution, supply chain visibility, and efficient regional execution.",
    service: "Logistics, partner onboarding, and supply chain support",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
  },
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main>
        <section className="relative min-h-[70vh] md:min-h-[92vh] flex items-center bg-secondary overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/5" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="container max-w-7xl mx-auto px-4 relative z-10 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium tracking-wide">
                  {heroSlides[activeSlide].eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-4 md:mb-6">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="text-white/78 text-base md:text-lg leading-relaxed max-w-2xl mb-4 md:mb-5">
                {heroSlides[activeSlide].description}
              </p>

              <p className="text-white text-sm font-semibold mb-8 md:mb-10">
                {heroSlides[activeSlide].service}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(230,86,26,0.4)] group"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/70 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-12" aria-label="Hero carousel slides">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "w-10 bg-primary" : "w-2 bg-white/55 hover:bg-white"
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={activeSlide === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background max-w-7xl m-auto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="relative z-10 space-y-6">
                    {[
                      { label: "Headquarters", value: "Mumbai, India" },
                      { label: "Core Markets", value: "Asia / Africa / Middle East" },
                      { label: "Regulatory Compliance", value: "100% in all markets" },
                      { label: "Distribution Model", value: "B2B & B2C Multi-channel" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-white font-semibold">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
                  Who We Are
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6">
                  Your Trusted Partner in Global Pharma Distribution
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
                  FHY Gloexpo is a Mumbai-based pharmaceutical distribution company specializing in
                  building and scaling brands across high-growth markets. With deep expertise in
                  regulatory compliance and multi-channel distribution, we connect manufacturers to
                  consumers through structured, reliable, and compliant networks.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our operations span across Asia, Africa, and the Middle East, delivering
                  consistent quality, strong market access, and long-term growth.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 group"
                >
                  About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4 max-w-7xl m-auto">
            <div className="text-center mb-10 md:mb-16">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
                What We Do
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-5">
                Our Core Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end pharmaceutical distribution solutions designed to scale your brand
                across high-growth global markets.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-background border border-border hover:border-primary/50 rounded-xl p-4 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="w-5 h-5 sm:w-8 sm:h-8">{serviceIconMap[service.icon] ?? <Store className="w-full h-full" />}</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-secondary hover:bg-secondary text-secondary hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="container mx-auto px-4 relative z-10 max-w-7xl m-auto">
            <div className="text-center mb-10 md:mb-16">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
                By The Numbers
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
                Global Impact
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and global pharmaceutical
                leadership.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                >
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-serif mb-2 sm:mb-3">
                    {stat.value}
                  </p>
                  <p className="text-white/70 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Accreditation />

        <GlobalPresenceMap />

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-secondary rounded-xl px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
                  Ready to expand?
                </p>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Let us open the right markets, channels, and partnerships for your products.
                </h2>
              </div>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
