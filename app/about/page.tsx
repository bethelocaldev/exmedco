import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Target,
} from "lucide-react"
import Accreditation from "@/components/accreditation"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { aboutContent, accreditations, companyInfo, statistics } from "@/data/site-data"

const modelCards = [
  {
    label: "Our Model",
    text: "Local distribution partnerships, integrated multi-channel sales execution, and direct-to-consumer reach calibrated to the regulatory and commercial realities of each market.",
    icon: ClipboardCheck,
  },
  {
    label: "Mission",
    text: aboutContent.mission,
    icon: Target,
  },
  {
    label: "Vision",
    text: aboutContent.vision,
    icon: Globe2,
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 h-px w-24 bg-primary" />
              <p className="eyebrow">About Exmedco</p>
              <h1 className="mt-5 display-title max-w-4xl">
                Specialist Pharmaceutical Distribution. Strategic Market Access.
              </h1>
              <p className="body-copy mt-6 max-w-3xl">
                We help pharmaceutical manufacturers build reliable, compliant, and scalable
                distribution across Asia, Africa, and the Middle East.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/70 py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <p className="eyebrow">Structured Growth</p>
              <h2 className="section-title mt-4 max-w-3xl">
                Market access for manufacturers who are serious about growth
              </h2>
              <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Exmedco was established to solve a specific and persistent challenge for
                  international pharmaceutical manufacturers: gaining reliable, compliant access
                  to high-growth markets that are often fragmented, heavily regulated, and
                  commercially complex.
                </p>
                <p>
                  We address this by combining local distribution partnerships, multi-channel
                  sales execution, and direct-to-consumer reach built around the demand dynamics
                  of each region we operate in. We are not a generalist trading house. Exmedco
                  operates as an end-to-end market access partner.
                </p>
                <p>
                  Our network spans distributors, retailers, pharmacy chains, institutional
                  buyers, and digital platforms, enabling both B2B and B2C penetration across
                  diverse markets with a single accountable partner.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-border bg-white p-6 sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Company Snapshot
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Entity Type", companyInfo.entityType],
                    ["Headquarters", companyInfo.headquarters],
                    ["Core Markets", companyInfo.coreMarkets.join(", ")],
                    ["Markets Operated", companyInfo.marketsOperated],
                    ["Regulatory Compliance", companyInfo.regulatoryCompliance],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary">
                        {label}
                      </p>
                      <p className="mt-2 font-heading text-xl font-bold text-foreground">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {modelCards.map((card) => {
                const Icon = card.icon

                return (
                  <article key={card.label} className="clinical-card p-6 sm:p-8">
                    <Icon className="size-8 text-primary" />
                    <h2 className="mt-7 font-heading text-2xl font-bold text-foreground">
                      {card.label}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {card.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="eyebrow">Operational Standards</p>
              <h2 className="section-title mt-4 max-w-xl">
                Compliance-led distribution across every active market
              </h2>
              <p className="body-copy mt-5 max-w-xl">
                Every market entry, dispensing relationship, prescription channel, and supply
                chain movement is structured around local documentation, regulatory adherence,
                and long-term product integrity.
              </p>
            </div>
            <div className="grid border border-border bg-white sm:grid-cols-2">
              {accreditations.map((item) => (
                <div key={item.name} className="border-b border-r border-border p-6 even:border-r-0">
                  <CheckCircle2 className="size-6 text-accent" />
                  <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Accreditation />

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Measured Reach</p>
                <h2 className="section-title mt-4">Built for regional scale</h2>
              </div>
              <p className="body-copy max-w-2xl lg:justify-self-end">
                Exmedco brings market knowledge, channel relationships, and pharmaceutical-grade
                operating discipline into one expansion partner.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 border border-border sm:grid-cols-3 lg:grid-cols-6">
              {statistics.map((stat) => (
                <div key={stat.label} className="border-b border-r border-border p-5 lg:border-b-0">
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
        </section>

        <ContactForm />

        <section className="bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              [Building2, "Mumbai headquarters"],
              [Globe2, "Asia, Africa & Middle East"],
              [ShieldCheck, "100% compliance focus"],
            ].map(([Icon, text]) => {
              const ItemIcon = Icon as typeof Building2
              return (
                <div key={text as string} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  <ItemIcon className="size-4 text-accent" />
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
