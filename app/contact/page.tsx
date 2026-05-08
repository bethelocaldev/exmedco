import { Header, Footer, PageHero } from "@/components/layout"
import { contactInfo } from "@/data/site-data"
import { Mail, MapPin, Phone, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | FHY Gloexpo",
  description: "Get in touch with FHY Gloexpo to discuss partnership and distribution opportunities across APAC.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        {/* ─── CUSTOM CONTACT HERO ─── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-secondary pt-14 pb-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/contact-hero.png"
              alt="Global Pharmaceutical Healthcare"
              fill
              className="object-cover opacity-40"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to expand your market reach across Asia, Africa, and the Middle East? 
              Partner with FHY Gloexpo for reliable global distribution.
            </p>
          </div>
        </section>

        {/* ─── CONTACT DETAILS SECTION ─── */}
        <section className="py-24 bg-background relative z-20 -mt-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Address Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Headquarters</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.line2}<br />
                  {contactInfo.address.line3}<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}<br />
                  {contactInfo.address.country}
                </p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Email Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For partnership inquiries, product distribution, or general questions, drop us an email.
                </p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors block mb-4"
                >
                  {contactInfo.email}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mt-auto"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Call Us</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Speak directly with our team to discuss your global distribution needs.
                </p>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors block mb-4"
                >
                  {contactInfo.phone}
                </a>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-4 pt-4 border-t border-border">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM (IST)</span>
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
