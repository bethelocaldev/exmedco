"use client"

import Link from "next/link"
import { ArrowRight, Store, Pill, Stethoscope, Truck, Globe, Phone, MapPin, CheckCircle, ChevronRight } from "lucide-react"
import { Header, Footer } from "@/components/layout"
import Accreditation from "@/components/accreditation"
import { services, aboutContent, globalPresence } from "@/data/site-data"
import { useEffect, useRef, useState } from "react"

// Icon map for services
const serviceIconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-8 h-8" />,
  Pill: <Pill className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
}

// Animated counter hook
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const stats = [
  { value: "25+", label: "Years of Experience", number: 25 },
  { value: "20+", label: "Countries Served", number: 20 },
  { value: "200+", label: "Product Portfolio", number: 200 },
  { value: "99.9%", label: "Quality Compliance", number: 99 },
]

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>

        {/* ─── HERO SECTION ─── */}
        <section className="relative min-h-[92vh] flex items-center bg-secondary overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0  bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          {/* Orange glow top-right */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
          {/* Subtle bottom-left glow */}
          <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="container max-w-7xl mx-auto px-4 relative z-10 py-24">
            <div className="max-w-4xl">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium tracking-wide">Global Pharmaceutical Distribution</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                Expanding Pharma Brands{" "}
                <span className="text-primary">Across APAC</span>{" "}
                &amp; Global Markets
              </h1>

              <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                FHY Gloexpo delivers end-to-end pharmaceutical distribution across retail, prescription,
                dispensing, and logistics channels — helping brands scale efficiently across Asia,
                Africa, and the Middle East.
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
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ─── ABOUT US STRIP ─── */}
        <section className="py-24 bg-background max-w-7xl m-auto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left – visual */}
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="relative z-10 space-y-6">
                    {[
                      { label: "Headquarters", value: "Mumbai, India" },
                      { label: "Core Markets", value: "Asia · Africa · Middle East" },
                      { label: "Regulatory Compliance", value: "100% in all markets" },
                      { label: "Distribution Model", value: "B2B & B2C Multi-channel" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                          <p className="text-white font-semibold">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right – text */}
              <div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Who We Are</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Your Trusted Partner in Global Pharma Distribution
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  FHY Gloexpo is a Mumbai-based pharmaceutical distribution company specializing in
                  building and scaling brands across high-growth markets. With deep expertise in
                  regulatory compliance and multi-channel distribution, we connect manufacturers to
                  consumers through structured, reliable, and compliant networks.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our operations span across Asia, Africa, and the Middle East — delivering consistent
                  quality, strong market access, and long-term growth.
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

        {/* ─── OUR SERVICES ─── */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4 max-w-7xl m-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">Our Core Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end pharmaceutical distribution solutions designed to scale your brand across
                high-growth global markets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-background border border-border hover:border-primary/50 rounded-xl p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {serviceIconMap[service.icon] ?? <Store className="w-8 h-8" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
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

        {/* ─── STATISTICS ─── */}
        <section ref={statsRef} className="py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="container mx-auto px-4 relative z-10 max-w-7xl m-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">By The Numbers</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">Global Impact</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and global pharmaceutical leadership.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                >
                  <p className="text-5xl md:text-6xl font-bold text-primary font-serif mb-3">
                    {stat.value}
                  </p>
                  <p className="text-white/70 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ACCREDITATIONS ─── */}
        <Accreditation />

        {/* ─── GLOBAL PRESENCE ─── */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4 max-w-7xl m-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left – text */}
              <div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Where We Operate</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Global Presence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  With operations spanning across multiple continents, FHY Gloexpo has established
                  itself as a trusted pharmaceutical partner for healthcare organizations worldwide.
                  Our global network ensures reliable supply chains and consistent quality standards.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: <Globe className="w-5 h-5" />, text: "Distribution network across 30+ nations" },
                    { icon: <Phone className="w-5 h-5" />, text: "24/7 customer support in multiple languages" },
                    { icon: <MapPin className="w-5 h-5" />, text: "Regional offices in major pharmaceutical hubs" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-background border border-border rounded-lg px-5 py-4">
                      <span className="text-primary flex-shrink-0">{item.icon}</span>
                      <p className="text-foreground font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* CTA card */}
                <div className="bg-secondary rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">Ready to Partner?</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      Join hundreds of international clients who trust FHY Gloexpo for their
                      pharmaceutical needs. Let&apos;s discuss how we can support your business objectives.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 group text-sm"
                    >
                      Get In Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right – regions grid */}
              <div className="space-y-6">
                {globalPresence.regions.map((region) => (
                  <div key={region.name} className="bg-background border border-border rounded-xl overflow-hidden">
                    <div className="bg-secondary px-6 py-4">
                      <h3 className="text-white font-serif font-bold text-xl">{region.name}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country) => (
                          <span
                            key={country}
                            className="inline-flex items-center gap-1.5 bg-muted text-foreground text-sm font-medium px-3 py-1.5 rounded-full border border-border"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Market highlights */}
                <div className="bg-background border border-border rounded-xl p-6">
                  <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Market Highlights</h4>
                  <div className="space-y-3">
                    {globalPresence.marketHighlights.map((m) => (
                      <div key={m.country} className="flex items-center gap-3">
                        <span className="font-bold text-secondary min-w-[90px] text-sm">{m.country}</span>
                        <span className="h-px flex-1 bg-border" />
                        <span className="text-muted-foreground text-sm text-right">{m.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
