import Link from "next/link"
import { Header, Footer, PageHero } from "@/components/layout"
import { navigation } from "@/data/site-data"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | FHY Gloexpo",
  description: "Browse all FHY Gloexpo pages and navigate to key company sections.",
}

const additionalPages = [
  { name: "Sitemap", href: "/sitemap" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
]

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Sitemap"
          highlightedWord="Sitemap"
          subtitle="Find every page on the FHY Gloexpo website from one place."
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-7">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                  Main Pages
                </h2>
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-7">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                  Services
                </h2>
                <ul className="space-y-3">
                  {navigation.footer.services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-7 md:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                  Utility Pages
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {additionalPages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
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
