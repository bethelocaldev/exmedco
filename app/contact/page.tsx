import Link from "next/link"
import {
  ArrowRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"
import { Header, Footer } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { contactInfo } from "@/data/site-data"

const contactCards = [
  {
    label: "Our Headquarters",
    title: "Mumbai, India",
    text: contactInfo.address.full,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address.full)}`,
    action: "Open in Maps",
  },
  {
    label: "Email Us",
    title: "Distribution Enquiries",
    text: `General: ${contactInfo.email}\nDirector: ${contactInfo.directorEmail}`,
    icon: Mail,
    href: `mailto:${contactInfo.email}`,
    action: "Send Email",
  },
  {
    label: "Call Us",
    title: contactInfo.phone,
    text: "Mon-Fri, 9:00 AM - 6:00 PM (IST)",
    icon: Phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    action: "Call Now",
  },
]

const enquiryTypes = [
  "Retail distribution partnerships",
  "Dispensing and pharmacy channel access",
  "Prescription and institutional networks",
  "Cold chain, warehousing, and last-mile delivery",
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sky-100 via-white to-teal-50">
          <div className="pointer-events-none absolute -left-12 top-16 h-56 w-56 rounded-full bg-sky-300/75" />
          <div className="pointer-events-none absolute right-12 top-24 h-40 w-40 rounded-full bg-emerald-300/75" />
          <div className="pointer-events-none absolute bottom-8 left-[45%] h-28 w-28 rounded-full bg-teal-300/80" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-8">
              <div className="mb-6 h-px w-24 bg-accent" />
              <p className="eyebrow">Get in Touch</p>
              <h1 className="mt-5 display-title max-w-4xl">
                Contact Exmedco
              </h1>
              <p className="body-copy mt-6 max-w-3xl">
                Looking to expand your pharmaceutical brand across Asia, Africa, or the
                Middle East? Speak to our team about distribution partnerships, market access
                strategy, and logistics solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-none bg-primary px-6 text-white hover:bg-accent">
                  <Link href={`mailto:${contactInfo.email}`}>
                    Email Our Team
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-primary bg-white px-6 text-primary hover:bg-secondary">
                  <Link href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>Call Headquarters</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon

                return (
                  <article key={card.label} className="clinical-card flex flex-col bg-gradient-to-br from-white via-white to-sky-50 p-6 shadow-[0_18px_45px_rgba(14,165,233,0.08)] sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                          {card.label}
                        </p>
                        <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">
                          {card.title}
                        </h2>
                      </div>
                      <div className="flex size-14 items-center justify-center border border-sky-200 bg-sky-50 text-accent">
                        <Icon className="size-7" />
                      </div>
                    </div>
                    <p className="mt-5 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                      {card.text}
                    </p>
                    <Link
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-heading text-sm font-bold text-primary transition hover:text-accent"
                    >
                      {card.action}
                      <ArrowRight className="size-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>


        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
