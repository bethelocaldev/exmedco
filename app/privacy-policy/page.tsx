import type { Metadata } from "next"
import { Header, Footer } from "@/components/layout"
import { siteConfig } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Privacy Policy | Exmedco",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: "https://www.exmedco.com/privacy-policy" },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>


        <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-teal-50 py-20">
          <div className="pointer-events-none absolute -left-12 top-16 h-52 w-52 rounded-full bg-sky-300/60" />
          <div className="pointer-events-none absolute right-10 top-24 h-36 w-36 rounded-full bg-emerald-300/60" />
          <div className="pointer-events-none absolute bottom-14 left-[48%] h-24 w-24 rounded-full bg-teal-300/65" />
          <h1 className="relative z-10 my-15 display-title max-w-3xl mx-auto">
            Privacy Policy
          </h1>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto border border-sky-200 bg-white/90 p-6 shadow-[0_24px_60px_rgba(14,165,233,0.12)] prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-primary sm:p-8">
              <h2>Introduction</h2>
              <p>
                Exmedco (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or engage with our services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Fill out contact forms on our website</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage in business discussions with us</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Provide you with information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{" "}
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
