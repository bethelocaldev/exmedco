import type { Metadata, Viewport } from "next"
import { Anton, IBM_Plex_Mono, IBM_Plex_Sans, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const BASE_URL = "https://www.exmedco.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Exmedco | Pharmaceutical Distribution & Market Access",
    template: "%s | Exmedco",
  },
  description:
    "Exmedco is a specialist pharmaceutical distribution partner providing retail, prescription, dispensing, and supply chain solutions across Asia, Africa, and the Middle East.",
  generator: "Next.js",
  applicationName: "Exmedco",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pharmaceutical distribution",
    "pharma market access APAC",
    "drug distribution company",
    "pharma supply chain partner",
    "market entry pharmaceutical",
    "OTC distribution network",
    "hospital pharma procurement",
    "cold chain pharmaceutical logistics",
    "regulatory compliance pharma",
    "B2C pharma distribution",
  ],
  authors: [{ name: "Exmedco", url: BASE_URL }],
  creator: "Exmedco",
  publisher: "Exmedco",
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
    siteName: "Exmedco",
    title: "Exmedco | Pharmaceutical Distribution & Market Access",
    description:
      "End-to-end pharmaceutical distribution across retail, prescription, dispensing, and logistics channels.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Exmedco - Global Pharmaceutical Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exmedco | Pharmaceutical Distribution & Market Access",
    description:
      "Retail, prescription, dispensing, and logistics solutions across Asia, Africa, and the Middle East.",
    images: ["/assets/og-image.png"],
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
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/web-app-manifest-192x192.png",
    shortcut: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
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
    name: "Exmedco",
    url: "https://www.exmedco.com",
    logo: "https://www.exmedco.com/assets/logo.png",
    description:
      "Exmedco is a Mumbai-based pharmaceutical distribution and market access company serving Asia, Africa, and the Middle East.",
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
  }

  return (
    <html
      lang="en"
      className={`${anton.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${plusJakarta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
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
