import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { siteConfig } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Terms and Conditions | Exmedco",
  description: `Terms and Conditions for ${siteConfig.name}. Read our terms of service and usage policies.`,
  alternates: { canonical: "https://www.exmedco.com/terms-and-conditions" },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-teal-50 py-20">
          <div className="pointer-events-none absolute -left-12 top-16 h-52 w-52 rounded-full bg-sky-300/60" />
          <div className="pointer-events-none absolute right-10 top-24 h-36 w-36 rounded-full bg-emerald-300/60" />
          <div className="pointer-events-none absolute bottom-14 left-[48%] h-24 w-24 rounded-full bg-teal-300/65" />
          <h1 className="relative z-10 my-15 display-title max-w-3xl mx-auto">
            Terms and Conditions
          </h1>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto border border-sky-200 bg-white/90 p-6 shadow-[0_24px_60px_rgba(14,165,233,0.12)] prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-primary sm:p-8">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the Exmedco website and services, you agree to be bound
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
                property of Exmedco and is protected by intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our written consent.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Exmedco shall not be liable for any indirect, incidental, special,
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
                <a href="mailto:info@exmedco.com">info@exmedco.com</a> or{" "}
                <a href="mailto:director@exmedco.com">director@exmedco.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
