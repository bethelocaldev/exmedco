import type { Metadata, Viewport } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const BASE_URL = "https://www.fhyglobal.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FHY Gloexpo | Pharmaceutical Distribution Across Asia, Africa & Middle East",
    template: "%s | FHY Gloexpo",
  },
  description:
    "FHY Gloexpo LLP is a Mumbai-based pharmaceutical distribution company providing retail, prescription, dispensing, and logistics solutions across 15+ countries in Asia, Africa, and the Middle East.",
  generator: "Next.js",
  applicationName: "FHY Gloexpo",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pharmaceutical distribution",
    "pharma distribution APAC",
    "FHY Gloexpo",
    "pharmaceutical logistics Asia",
    "drug distribution Africa",
    "medicine distribution Middle East",
    "market access pharma",
    "B2C pharmaceutical distribution",
    "retail pharma distribution",
    "prescription channel Asia",
    "dispensing network pharmacy",
    "pharmaceutical supply chain",
    "pharma partner Mumbai",
    "global pharma distribution",
  ],
  authors: [{ name: "FHY Gloexpo LLP", url: BASE_URL }],
  creator: "FHY Gloexpo LLP",
  publisher: "FHY Gloexpo LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "FHY Gloexpo",
    title: "FHY Gloexpo | Pharmaceutical Distribution Across Asia, Africa & Middle East",
    description:
      "FHY Gloexpo LLP is a Mumbai-based pharmaceutical distribution company providing retail, prescription, dispensing, and logistics solutions across 15+ countries in Asia, Africa, and the Middle East.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "FHY Gloexpo — Global Pharmaceutical Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FHY Gloexpo | Pharmaceutical Distribution Across Asia, Africa & Middle East",
    description:
      "FHY Gloexpo LLP: retail, prescription, dispensing, and logistics solutions across 15+ countries in Asia, Africa, and the Middle East.",
    images: ["/assets/og-image.png"],
    creator: "@fhygloexpo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/png" },
    ],
    apple: "/assets/logo.png",
    shortcut: "/assets/logo.png",
  },
  verification: {
  google: "54JOI5wXHDvmeTlp8NMFz9_3pQLbWex9EtH-9LCi1OA",
  // bing: "YOUR_BING_WEBMASTER_VERIFICATION_CODE",
},
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1929" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FHY Gloexpo LLP",
    alternateName: "FHY Gloexpo",
    url: "https://www.fhyglobal.com",
    logo: "https://www.fhyglobal.com/assets/logo.png",
    description:
      "FHY Gloexpo LLP is a Mumbai-based pharmaceutical distribution company providing retail, prescription, dispensing, and logistics solutions across 15+ countries in Asia, Africa, and the Middle East.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level - 5, Technopolis Knowledge Park, Mahakali Caves Rd, Chakala, Andheri East",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400019",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-771-897-2454",
      contactType: "customer service",
      areaServed: ["Asia", "Africa", "Middle East"],
      availableLanguage: ["English"],
    },
    sameAs: [],
  }

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
