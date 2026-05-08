import { Header, Footer, PageHero } from "@/components/layout"
import Accreditation from "@/components/accreditation"
import { Network, Target, Telescope } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About FHY Gloexpo | Global Sourcing and Distribution",
  description:
    "Learn about FHY Gloexpo LLP, a global sourcing and distribution company supporting manufacturers across Asia, Africa, and the Middle East.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About FHY Gloexpo"
          highlightedWord="FHY Gloexpo"
          subtitle="Strategic partners in global growth, connecting manufacturers with high-potential markets across Asia, Africa, and the Middle East."
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
              <div>
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
                  About Us
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Global market access for ambitious manufacturers
                </h2>
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    FHY Gloexpo LLP is a global sourcing and distribution company focused on
                    enabling manufacturers to expand across high-growth markets in{" "}
                    <strong className="font-semibold text-foreground">Asia</strong>,{" "}
                    <strong className="font-semibold text-foreground">Africa</strong>, and the{" "}
                    <strong className="font-semibold text-foreground">Middle East</strong>. We
                    specialize in building strong market access for international brands through a
                    combination of{" "}
                    <strong className="font-semibold text-foreground">
                      local distribution partnerships
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-foreground">
                      multi-channel sales strategies
                    </strong>
                    , and{" "}
                    <strong className="font-semibold text-foreground">
                      direct-to-consumer reach
                    </strong>
                    .
                  </p>
                  <p>
                    Our approach is designed to bridge the gap between global manufacturers and
                    regional demand by offering{" "}
                    <strong className="font-semibold text-foreground">end-to-end support</strong>,
                    from <strong className="font-semibold text-foreground">market entry</strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-foreground">partner onboarding</strong>{" "}
                    to{" "}
                    <strong className="font-semibold text-foreground">
                      product distribution
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-foreground">brand positioning</strong>.
                  </p>
                  <p>
                    At FHY Gloexpo, we are not just exporters; we are strategic partners in growth.
                    We work closely with manufacturers to establish{" "}
                    <strong className="font-semibold text-foreground">
                      sustainable distribution ecosystems
                    </strong>
                    , ensuring their products reach the right markets, through the right channels,
                    with maximum efficiency.
                  </p>
                  <p>
                    Our network-driven model allows us to collaborate with distributors, retailers,
                    and digital platforms, enabling both{" "}
                    <strong className="font-semibold text-foreground">B2B</strong> and{" "}
                    <strong className="font-semibold text-foreground">B2C</strong> penetration
                    across diverse markets.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-secondary text-white rounded-xl p-7 border border-secondary">
                  <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-5">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Our Model</h3>
                  <p className="text-white/70 leading-relaxed">
                    <strong>Local distribution partnerships</strong>,{" "}
                    <strong>multi-channel sales execution</strong>, and{" "}
                    <strong>direct-to-consumer reach</strong> built around regional demand.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-7">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To simplify global trade and empower manufacturers with seamless access to{" "}
                    <strong className="font-semibold text-foreground">emerging markets</strong>{" "}
                    through efficient distribution and scalable business models.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-7">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Telescope className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a globally recognized distribution and market access platform
                    connecting manufacturers with high-potential regions across{" "}
                    <strong className="font-semibold text-foreground">Asia</strong>,{" "}
                    <strong className="font-semibold text-foreground">Africa</strong>, and the{" "}
                    <strong className="font-semibold text-foreground">Middle East</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Accreditation />
      </main>
      <Footer />
    </>
  )
}
