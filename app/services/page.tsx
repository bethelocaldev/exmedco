import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Hospital,
  Pill,
  Store,
  Truck,
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { services, statistics } from "@/data/site-data"
import { siteConfig } from "@/data/site-data"

const serviceIcons: Record<string, typeof Store> = {
  Store,
  Pill,
  Stethoscope: Hospital,
  Truck,
}

export const metadata: Metadata = {
  title: "Our Services | Exmedco — Pharmaceutical Distribution",
  description:
    "From market entry planning to last-mile delivery, Exmedco provides a fully integrated distribution ecosystem across Asia, Africa and the Middle East.",
  openGraph: {
    title: "Our Services | Exmedco",
    description:
      "End-to-end pharmaceutical distribution across retail, prescription, dispensing, and logistics channels.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        {/* ── Hero ── */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 h-px w-24 bg-primary" />
              <p className="eyebrow">Our Services</p>
              <h1 className="mt-5 display-title max-w-4xl">
                End-to-End Pharmaceutical Distribution Across Asia, Africa & the Middle East
              </h1>
              <p className="body-copy mt-6 max-w-3xl">
                From market entry planning to last-mile delivery, Exmedco provides a fully
                integrated distribution ecosystem — ensuring your products reach the right
                channels, compliantly and efficiently, across every market we operate in.
              </p>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="bg-secondary/70 py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => {
                const Icon =
                  serviceIcons[service.icon as keyof typeof serviceIcons] ??
                  ClipboardCheck

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="clinical-card group block p-6 sm:p-8 bg-white"
                    style={{
                      borderTopColor: service.accent,
                      borderTopWidth: 3,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        className="size-8 transition"
                        style={{ color: service.accent }}
                      />
                      <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h2 className="mt-8 font-heading text-2xl font-bold tracking-normal text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {service.headline}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stat */}
                    <div className="mt-8 border-t border-border pt-5">
                      <p className="font-mono text-2xl font-semibold text-foreground">
                        {service.stats.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {service.stats.label} {service.stats.subtext}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Stats Banner ── */}
        <section className="border-y border-border bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t-2 border-primary pt-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">By The Numbers</p>
                  <h2 className="section-title mt-4 max-w-xl">
                    Scale and reach, precisely measured
                  </h2>
                </div>
                <div className="grid grid-cols-2 border border-border sm:grid-cols-3">
                  {statistics.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-r border-border p-5 last:border-r-0 sm:p-6"
                    >
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

        {/* ── Bottom CTA ── */}
        <section className="border-t border-border bg-foreground py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Ready to Expand?
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold tracking-normal sm:text-4xl">
                Let us build the right market access, channels, and partnerships
                for your pharmaceutical products.
              </h2>
            </div>
            <Button
              asChild
              className="h-12 rounded-none bg-white px-7 text-foreground hover:bg-primary hover:text-white"
            >
              <Link href="/contact">
                Contact Exmedco
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
