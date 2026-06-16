import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Hospital,
  Pill,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { services } from "@/data/site-data"

const serviceIcons: Record<string, typeof Store> = {
  Store,
  Pill,
  Stethoscope: Hospital,
  Truck,
}

interface ServiceDetailProps {
  serviceId: string
}

export default function ServiceDetailLayout({ serviceId }: ServiceDetailProps) {
  const service = services.find((s) => s.id === serviceId)!
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? ClipboardCheck
  const otherServices = services.filter((s) => s.id !== serviceId)

  const detailedChannels = (service as any).detailedChannels as
    | { name: string; description: string }[]
    | undefined
  const outcomes = (service as any).outcomes as string[] | undefined
  const compliance = (service as any).compliance as string | undefined
  const processFlow = (service as any).processFlow as
    | { step: string; description: string }[]
    | undefined

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        {/* ── Hero ── */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              All Services
            </Link>
            <div className="mt-8 max-w-4xl">
              <div
                className="mb-6 h-px w-24"
                style={{ backgroundColor: service.accent }}
              />
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="flex size-14 items-center justify-center border"
                  style={{ borderColor: service.accent }}
                >
                  <Icon className="size-7" style={{ color: service.accent }} />
                </div>
                <p
                  className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: service.accent }}
                >
                  {service.title}
                </p>
              </div>
              <h1 className="display-title max-w-4xl">{service.headline}</h1>
              <p className="body-copy mt-6 max-w-3xl">{service.description}</p>
            </div>

            {/* Stat highlight */}
            <div className="mt-10 inline-flex items-center gap-5 border border-border px-6 py-4">
              <p className="font-mono text-3xl font-semibold text-foreground">
                {service.stats.value}
              </p>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {service.stats.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {service.stats.subtext}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Channels / Capabilities ── */}
        {detailedChannels && detailedChannels.length > 0 && (
          <section className="bg-secondary/70 py-18 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 max-w-2xl">
                <p className="eyebrow">
                  {serviceId === "logistics-supply-chain"
                    ? "Core Capabilities"
                    : "Core Channels"}
                </p>
                <h2 className="section-title mt-4">
                  {serviceId === "logistics-supply-chain"
                    ? "Infrastructure built for pharmaceutical-grade operations"
                    : "How we connect your products to market"}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {detailedChannels.map((channel, index) => (
                  <article
                    key={channel.name}
                    className="clinical-card bg-white p-6 sm:p-8"
                    style={{
                      borderTopColor: service.accent,
                      borderTopWidth: 2,
                    }}
                  >
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                      {channel.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {channel.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Process Flow (logistics only) ── */}
        {processFlow && processFlow.length > 0 && (
          <section className="border-y border-border bg-white py-18 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="eyebrow">Process Flow</p>
              <h2 className="section-title mt-4 mb-12 max-w-xl">
                From inbound to last mile
              </h2>
              <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
                {processFlow.map((step, index) => (
                  <div key={step.step} className="bg-white p-6 sm:p-8">
                    <span
                      className="font-mono text-4xl font-bold"
                      style={{ color: service.accent, opacity: 0.25 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {step.step}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Outcomes ── */}
        {outcomes && outcomes.length > 0 && (
          <section
            className={`py-18 sm:py-24 ${processFlow ? "bg-secondary/70" : "border-y border-border bg-white"}`}
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <p className="eyebrow">Why Partner With Exmedco</p>
                <h2 className="section-title mt-4 max-w-md">
                  Built for results across every market
                </h2>
                {compliance && (
                  <div className="mt-6 border-l-2 border-accent pl-4">
                    <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      <ShieldCheck className="size-4" />
                      Compliance
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {compliance}
                    </p>
                  </div>
                )}
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-3 border border-border bg-white p-4 sm:p-5"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                      <p className="text-sm leading-6 text-foreground">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Other Services ── */}
        <section className="bg-secondary/50 py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Explore More</p>
            <h2 className="section-title mt-4 mb-10">Other Services</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {otherServices.map((other) => {
                const OtherIcon =
                  serviceIcons[other.icon as keyof typeof serviceIcons] ??
                  ClipboardCheck
                return (
                  <Link
                    key={other.id}
                    href={other.href}
                    className="clinical-card group block bg-white p-6"
                    style={{
                      borderTopColor: other.accent,
                      borderTopWidth: 3,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <OtherIcon
                        className="size-6"
                        style={{ color: other.accent }}
                      />
                      <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                      {other.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
                      {other.shortDescription}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="border-t border-border bg-foreground py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Partnership Ready
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold tracking-normal sm:text-4xl">
                Ready to discuss {service.title.toLowerCase()} across your
                target markets?
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
