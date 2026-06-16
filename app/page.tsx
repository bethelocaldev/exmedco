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
        <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.28),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(16,185,129,0.2),transparent_28%),linear-gradient(135deg,#eff9ff_0%,#ffffff_48%,#e9fbf7_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,22,40,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,22,40,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute -left-12 top-16 h-72 w-72 rounded-full bg-sky-300/70" />
          <div className="pointer-events-none absolute left-[38%] top-24 h-44 w-44 rounded-full bg-emerald-300/70" />
          <div className="pointer-events-none absolute -bottom-16 left-16 h-64 w-64 rounded-full bg-teal-300/70" />
          <div className="pointer-events-none absolute right-8 top-28 h-56 w-56 rounded-full bg-blue-200/70" />
          <div className="pointer-events-none absolute right-[34%] bottom-20 h-28 w-28 rounded-full bg-primary/15" />
          <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <div className="flex flex-col justify-center py-14 lg:col-span-6 lg:py-20 lg:pr-6">
              <div className="mb-6 inline-flex w-fit items-center gap-2 border border-sky-200 bg-white/80 px-3 py-2 shadow-[0_12px_30px_rgba(14,165,233,0.1)] backdrop-blur-md">
                <span className="flex size-7 items-center justify-center bg-primary text-white">
                  <Pill className="size-4" />
                </span>
                <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {slide.eyebrow}
                </span>
              </div>
              <h1 className="display-title max-w-3xl text-primary">
                {slide.title}
              </h1>
              <p className="body-copy mt-6 max-w-2xl text-slate-700">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-none border-2 border-primary bg-primary px-6 text-white shadow-[0_14px_28px_rgba(10,22,40,0.18)] transition-all duration-200 hover:border-accent hover:bg-accent">
                  <Link href="/contact">
                    Discuss Market Access
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-primary bg-white px-6 text-primary hover:bg-secondary hover:text-primary transition-all duration-200">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-px border border-sky-200 bg-sky-200/80 sm:grid-cols-4">
                {homeStats.map((stat) => (
                  <div key={stat.label} className="bg-white/88 p-4 backdrop-blur-md">
                    <p className="font-mono text-2xl font-semibold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  [ShieldCheck, "Regulated Market Access"],
                  [Hospital, "Clinical Channel Reach"],
                  [Truck, "Pharma-Grade Logistics"],
                ].map(([Icon, text]) => {
                  const TrustIcon = Icon as typeof ShieldCheck

                  return (
                    <div key={text as string} className="flex items-center gap-2 border border-sky-200 bg-white/72 px-3 py-3 text-sm font-semibold text-primary backdrop-blur-md">
                      <TrustIcon className="size-4 text-accent" />
                      {text as string}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative min-h-[520px] pb-12 lg:col-span-6 lg:py-20">
              <div className="absolute left-6 top-10 h-28 w-28 border border-sky-200 bg-white/55 backdrop-blur-md" />
              <div className="absolute bottom-20 right-2 h-24 w-24 border border-teal-200 bg-teal-100/80" />
              <div className="relative ml-auto h-full max-w-xl">
                <div className="absolute -left-4 top-12 z-20 hidden border border-sky-200 bg-white/90 p-4 shadow-[0_18px_45px_rgba(10,22,40,0.12)] backdrop-blur-md sm:block">
                  <p className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Active capability
                  </p>
                  <p className="mt-2 max-w-[220px] text-sm font-semibold leading-6 text-primary">
                    {slide.serviceDetail}
                  </p>
                </div>
                <div className="absolute -right-3 bottom-16 z-20 border border-emerald-200 bg-white/92 p-4 shadow-[0_18px_45px_rgba(10,22,40,0.12)] backdrop-blur-md sm:right-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="size-6" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                        Compliance Ready
                      </p>
                      <p className="mt-1 font-heading text-xl font-bold text-primary">
                        99.9%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-full min-h-[520px] overflow-hidden border border-sky-200 bg-white/70 p-3 shadow-[0_30px_80px_rgba(10,22,40,0.18)] backdrop-blur-md">
                  <div className="relative h-full min-h-[496px] overflow-hidden bg-primary">
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-white/92 p-5 backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-3">
                        {["Retail", "Pharmacy", "Logistics"].map((item) => (
                          <div key={item} className="border border-sky-100 bg-sky-50/70 p-3">
                            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                              {item}
                            </p>
                            <div className="mt-3 h-1 bg-white">
                              <div className="h-full w-2/3 bg-accent" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute right-5 top-5 flex gap-2">
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
