import { homeMetadata } from "@/data/seo-metadata"
import { Header, Footer, PageHero } from "@/components/layout"
import Accreditation from "@/components/accreditation"

export const metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
           Hero Section
          </div>
        </section>
        <Accreditation />
      </main>
      <Footer />
    </>
  )
}
