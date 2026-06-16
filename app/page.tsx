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
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sky-100 via-white to-teal-50">
          <div className="pointer-events-none absolute -left-10 top-20 h-52 w-52 rounded-full bg-sky-300/75 sm:left-10 sm:h-72 sm:w-72" />
          <div className="pointer-events-none absolute left-[42%] top-20 h-32 w-32 rounded-full bg-emerald-300/80 sm:h-44 sm:w-44" />
          <div className="pointer-events-none absolute -bottom-8 left-8 h-40 w-40 rounded-full bg-teal-300/80 sm:left-24 sm:h-56 sm:w-56" />
          <div className="pointer-events-none absolute bottom-24 left-[34%] h-24 w-24 rounded-full bg-blue-300/85 sm:h-32 sm:w-32" />
          <div className="pointer-events-none absolute right-[48%] top-[52%] h-16 w-16 rounded-full bg-primary/20 sm:h-24 sm:w-24" />
          <div className="container grid min-h-[calc(100vh-5rem)] grid-cols-1 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="relative z-10 flex flex-col justify-center py-14 lg:col-span-6 lg:py-20 lg:pr-12">
              <div className="mb-6 h-px w-24 bg-accent" />
              <p className="eyebrow">{slide.eyebrow}</p>
              <h1 className="mt-5 display-title max-w-3xl">
                {slide.title}
              </h1>
              <p className="body-copy mt-6 max-w-2xl">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-none bg-primary border-2 border-primary px-6 text-white hover:bg-accent hover:border-accent transition-all duration-200">
                  <Link href="/contact">
                    Discuss Market Access
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-primary bg-white px-6 text-primary hover:bg-secondary hover:text-primary transition-all duration-200">
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

  

        <section className="border-y border-border bg-primary text-white py-20 sm:py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)]">
          <div className="container grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="lg:col-span-7">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">Who We Are</p>
              <h2 className="section-title mt-4 max-w-3xl text-white">
                A dedicated distribution partner for regulated pharmaceutical markets
              </h2>
              <p className="text-base sm:text-lg leading-8 text-sky-100/80 mt-6 max-w-3xl">
                Exmedco is a Mumbai-based pharmaceutical distribution company specialising in
                structured market access across Asia, Africa, and the Middle East. We combine
                deep regulatory knowledge with an integrated multi-channel distribution network
                to move products efficiently from manufacturers into the hands of consumers,
                patients, and healthcare institutions.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-sky-500/25 bg-slate-950/40 backdrop-blur-md">
                {highlights.map(([label, value]) => (
                  <div key={label} className="border-b border-sky-500/10 p-5 last:border-b-0">
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      {label}
                    </p>
                    <p className="mt-2 font-heading text-lg font-bold text-white">
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
                    className="clinical-card group block p-6 sm:p-8 bg-gradient-to-br from-white to-sky-50/25 hover:to-sky-50/60 transition-all duration-300"
                    style={{ borderTopColor: service.accent, borderTopWidth: 3 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div 
                        className="flex size-14 items-center justify-center border transition-all duration-300 group-hover:bg-primary"
                        style={{ borderColor: service.accent, backgroundColor: `${service.accent}12` }}
                      >
                        <Icon 
                          className="size-7 transition-colors duration-300 group-hover:text-white" 
                          style={{ color: service.accent }} 
                        />
                      </div>
                      <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold tracking-normal text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-mono text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
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

        <section className="border-y border-border bg-primary text-white py-20 sm:py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.12),transparent_50%)]">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="border-t-2 border-accent pt-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">By The Numbers</p>
                  <h2 className="section-title mt-4 max-w-xl text-white">
                    Scale and reach, precisely measured
                  </h2>
                  <p className="text-base sm:text-lg leading-8 text-sky-100/80 mt-5 max-w-xl">
                    Our operational footprint reflects years of disciplined market-building
                    and partnership investment across high-growth pharmaceutical regions.
                  </p>
                </div>
                <div className="grid grid-cols-2 border border-sky-500/25 bg-slate-950/40 backdrop-blur-md sm:grid-cols-3">
                  {statistics.map((stat) => (
                    <div key={stat.label} className="border-b border-r border-sky-500/10 p-5 last:border-r-0 sm:p-6">
                      <p className="font-mono text-3xl font-semibold text-accent">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-sm leading-5 text-sky-100/70 font-medium">
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
