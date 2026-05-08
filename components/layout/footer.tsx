import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { navigation, contactInfo, siteConfig } from "@/data/site-data"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-24 w-40">
                <Image src="/assets/old-logo.png" alt="FHY Gloexpo Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              {siteConfig.description}
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {navigation.footer.usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.footer.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                  {contactInfo.address.line1},<br />
                  {contactInfo.address.line2},<br />
                  {contactInfo.address.line3},<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                </address>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Sitemap
            </Link>
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
