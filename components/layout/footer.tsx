import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { contactInfo, navigation, siteConfig } from "@/data/site-data"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="container px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1.15fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                       src="/assets/logo.jpeg"
                       alt="Exmedco logo"
                       width={65}
                       height={65}
                       className="rounded-none"  
                       />
              <span>
                <span className="block font-heading text-2xl font-extrabold leading-none">
                  Exmedco
                </span>
                <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                  Pharmaceutical Export Medical Company
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 font-heading text-sm font-bold text-primary transition hover:text-accent"
            >
              Start a partnership
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <FooterColumn title="Useful Links" links={navigation.footer.usefulLinks} />
          <FooterColumn title="Services" links={navigation.footer.services} />

          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">
              Contact
            </h3>
            <div className="mt-5 space-y-5 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-accent" />
                <address className="not-italic leading-7">
                  {contactInfo.address.line1},<br />
                  {contactInfo.address.line2}, {contactInfo.address.line3},<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                </address>
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-primary">
                <Phone className="size-4 text-accent" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 transition hover:text-primary">
                <Mail className="size-4 text-accent" />
                {contactInfo.email}
              </a>
              <a href={`mailto:${contactInfo.directorEmail}`} className="flex items-center gap-3 transition hover:text-primary">
                <Mail className="size-4 text-accent" />
                {contactInfo.directorEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            (c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/sitemap" className="hover:text-primary">Sitemap</Link>
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-primary"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
