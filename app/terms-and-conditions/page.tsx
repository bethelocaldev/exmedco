import type { Metadata } from "next"
import { Header, Footer, PageHero } from "@/components/layout"
import { siteConfig } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions for ${siteConfig.name}. Read our terms of service and usage policies.`,
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Terms and Conditions"
          highlightedWord="Conditions"
          meta="Last updated: May 2026"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the FHY Gloexpo website and services, you agree to be bound
                by these Terms and Conditions. If you disagree with any part of these terms,
                you may not access our website or use our services.
              </p>

              <h2>Use of Our Services</h2>
              <p>
                Our services are intended for business-to-business (B2B) purposes, including
                pharmaceutical distribution, market access, and supply chain solutions.
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the
                property of FHY Gloexpo LLP and is protected by intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our written consent.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                FHY Gloexpo LLP shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to
                use our services or website.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with
                the laws of India, without regard to its conflict of law provisions.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at:{" "}
                <a href="mailto:info@fhyglobal.com">info@fhyglobal.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
