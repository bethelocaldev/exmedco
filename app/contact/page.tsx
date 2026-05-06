import { Header, Footer, PageHero } from "@/components/layout"
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
        <PageHero
          title="Contact Us"
          highlightedWord="Us"
          subtitle="Ready to expand your market reach across Asia, Africa, and the Middle East? Get in touch with our team."
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            Contact Us page — coming soon.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
