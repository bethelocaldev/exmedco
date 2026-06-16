"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Hospital,
  Pill,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react"
import Accreditation from "@/components/accreditation"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { heroSlides, homeStats, services, statistics } from "@/data/site-data"

const serviceIcons = {
  Store,
  Pill,
  Stethoscope: Hospital,
  Truck,
}

const highlights = [
  ["Headquarters", "Mumbai, India"],
  ["Core Markets", "Asia / Africa / Middle East"],
  ["Regulatory Compliance", "100% across all active markets"],
  ["Distribution Model", "Integrated B2B & B2C multi-channel"],
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-border max-w-7xl mx-auto">
          <div className="container grid min-h-[calc(100vh-5rem)] grid-cols-1 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="flex flex-col justify-center py-14 lg:col-span-6 lg:py-20 lg:pr-12">
              <div className="mb-6 h-px w-24 bg-primary" />
              <p className="eyebrow">{slide.eyebrow}</p>
              <h1 className="mt-5 display-title max-w-3xl">
                {slide.title}
              </h1>
              <p className="body-copy mt-6 max-w-2xl">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-none bg-foreground px-6 text-white hover:bg-primary">
                  <Link href="/contact">
                    Discuss Market Access
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-foreground bg-white px-6 text-foreground hover:bg-secondary">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="mt-10 border-l-2 border-accent pl-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Active capability
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {slide.serviceDetail}
                </p>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border-t border-border lg:col-span-6 lg:border-l lg:border-t-0">
              {heroSlides.map((item, index) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt=""
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[#0A1628]/38" />
              {/* <div className="absolute inset-x-6 bottom-6 border border-white/25 bg-white/92 p-5 backdrop-blur-sm sm:inset-x-8 sm:bottom-8">
                <div className="grid grid-cols-3 gap-4">
                  {["Retail", "Pharmacy", "Logistics"].map((item) => (
                    <div key={item}>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">
                        {item}
                      </p>
                      <div className="mt-3 h-1 bg-secondary">
                        <div className="h-full w-2/3 bg-accent" />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="absolute right-6 top-6 flex gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    aria-label={`Show hero slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 w-8 border border-white transition ${
                      index === activeSlide ? "bg-white" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

  

        <section className="border-y border-border bg-secondary/70 py-20 sm:py-24">
          <div className="container grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 max-w-7xl mx-auto">
            <div className="lg:col-span-7">
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-title mt-4 max-w-3xl">
                A dedicated distribution partner for regulated pharmaceutical markets
              </h2>
              <p className="body-copy mt-6 max-w-3xl">
                Exmedco is a Mumbai-based pharmaceutical distribution company specialising in
                structured market access across Asia, Africa, and the Middle East. We combine
                deep regulatory knowledge with an integrated multi-channel distribution network
                to move products efficiently from manufacturers into the hands of consumers,
                patients, and healthcare institutions.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-border bg-white">
                {highlights.map(([label, value]) => (
                  <div key={label} className="border-b border-border p-5 last:border-b-0">
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {label}
                    </p>
                    <p className="mt-2 font-heading text-lg font-bold text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24 max-w-7xl mx-auto">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">What We Do</p>
                <h2 className="section-title mt-4">Our Core Services</h2>
              </div>
              <p className="body-copy max-w-2xl lg:justify-self-end">
                A fully integrated pharmaceutical distribution ecosystem designed to give
                manufacturers reliable, compliant access to the channels and markets that matter.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? ClipboardCheck

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="clinical-card group block p-6 sm:p-8"
                    style={{ borderTopColor: service.accent, borderTopWidth: 3 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="size-8 text-primary transition group-hover:text-accent" />
                      <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-8 font-heading text-2xl font-bold tracking-normal text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-8 border-t border-border pt-5">
                      <p className="font-mono text-2xl font-semibold text-foreground">
                        {service.stats.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {service.stats.label}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <Accreditation />

        <section className="border-y border-border bg-secondary py-20 sm:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="border-t-2 border-primary pt-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">By The Numbers</p>
                  <h2 className="section-title mt-4 max-w-xl">
                    Scale and reach, precisely measured
                  </h2>
                  <p className="body-copy mt-5 max-w-xl">
                    Our operational footprint reflects years of disciplined market-building
                    and partnership investment across high-growth pharmaceutical regions.
                  </p>
                </div>
                <div className="grid grid-cols-2 border border-border bg-white sm:grid-cols-3">
                  {statistics.map((stat) => (
                    <div key={stat.label} className="border-b border-r border-border p-5 last:border-r-0 sm:p-6">
                      <p className="font-mono text-3xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm leading-5 text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <section className="border-t border-border bg-foreground py-8 text-white">
          <div className="container grid gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              [Globe2, "Asia, Africa & Middle East"],
              [Building2, "Mumbai headquarters"],
              [ShieldCheck, "Regulated market access"],
            ].map(([Icon, text]) => {
              const LucideIcon = Icon as typeof Globe2

              return (
                <div key={text as string} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-white/75">
                  <LucideIcon className="size-4 text-accent" />
                  {text as string}
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
