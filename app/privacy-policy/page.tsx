import type { Metadata } from "next"
import { Header, Footer, PageHero } from "@/components/layout"
import { siteConfig } from "@/data/site-data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Privacy Policy"
          highlightedWord="Policy"
          meta="Last updated: May 2026"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary">
              <h2>Introduction</h2>
              <p>
                FHY Gloexpo LLP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
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
