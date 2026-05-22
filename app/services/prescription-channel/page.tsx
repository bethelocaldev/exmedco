import { Header, Footer, PageHero } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Stethoscope, Building2, Users, UserCheck, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Prescription Channel | Pharma Access to Hospitals & Clinics Across APAC",
  description:
    "FHY Gloexpo LLP connects pharmaceutical brands with hospitals, clinics, GPs, and institutional buyers through structured prescription channels across Asia, Africa, and the Middle East.",
  keywords: [
    "prescription channel pharma",
    "hospital pharmaceutical procurement",
    "clinic pharma distribution",
    "institutional pharma buyer",
    "medical representative pharma APAC",
    "FHY Gloexpo prescription",
  ],
  alternates: { canonical: "https://www.fhyglobal.com/services/prescription-channel" },
  openGraph: {
    title: "Prescription Channel | FHY Gloexpo",
    description: "Connecting pharma brands to hospitals, clinics, and institutional buyers across APAC.",
    url: "https://www.fhyglobal.com/services/prescription-channel",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "FHY Gloexpo Prescription Channel" }],
  },
  twitter: { card: "summary_large_image", title: "Prescription Channel | FHY Gloexpo", images: ["/assets/og-image.png"] },
}

const coverage = [
  { icon: Building2, title: "Hospital Procurement", description: "Navigating public and private hospital procurement processes with in-country expertise." },
  { icon: Users, title: "Clinic & GP Networks", description: "Structured access to general practitioners and community clinic networks across markets." },
  { icon: UserCheck, title: "Specialist Outreach", description: "Targeted specialist engagement programmes connecting your brand to key opinion leaders." },
  { icon: Briefcase, title: "Medical Representative Engagement", description: "On-the-ground MR teams supporting brand visibility with healthcare professionals." },
]

const outcomes = [
  "Structured prescription channel strategy tailored to each market",
  "100% compliance with local medical and regulatory standards",
  "In-market expertise across 12+ countries in Asia, Africa, and the Middle East",
  "Direct access to hospital formulary listing processes",
  "Ongoing HCP engagement and medical education support",
]

export default function PrescriptionChannelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          // title="Prescription Channel"
          // highlightedWord="Channel"
          // subtitle="Reach healthcare professionals and institutional buyers through structured prescription channels supported by in-market expertise."
        />

        {/* Intro */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Stethoscope className="h-3.5 w-3.5" />
                  Service 03
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Reach Healthcare Professionals &{" "}
                  <span className="text-blue-600">Institutional Buyers</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We connect pharmaceutical brands with hospitals, clinics, and medical professionals through a
                  structured prescription channel supported by in-market expertise.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-10 text-white max-w-sm w-full shadow-2xl shadow-blue-500/20">
                  <div className="bg-white/20 rounded-2xl p-4 w-fit mb-6">
                    <Stethoscope className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">Assurance</p>
                  <p className="text-5xl font-black mb-2">100%</p>
                  <p className="text-xl font-semibold mb-1">Regulatory Compliance</p>
                  <p className="text-white/70">With local medical and regulatory standards across every market</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 bg-muted/30 border-y border-border max-w-7xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">What We Cover</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Four Core Prescription Channels</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverage.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl border border-border p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-blue-100 rounded-xl p-3 w-fit mb-5">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-background max-w-7xl mx-auto">
          <div className="container mx-auto px-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why Partner With Us</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">A Structured, Compliant Prescription Network</h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((point) => (
                <div key={point} className="flex items-start gap-3 bg-muted/30 rounded-xl px-5 py-4 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactForm compact />
      </main>
      <Footer />
    </>
  )
}
