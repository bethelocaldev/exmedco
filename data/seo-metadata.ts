import type { Metadata } from "next"
import { siteConfig } from "./site-data"

// Base metadata configuration
const baseMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteConfig.url),
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

// Page-specific metadata
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: "Exmedco | Pharma Distribution & Logistics Across APAC",
  description:
    "Exmedco is a leading pharma distribution company providing retail, prescription, dispensing, and logistics solutions across Asia, Africa, and the Middle East. Expand your pharmaceutical brand with compliant, end-to-end market access.",
  keywords: [
    "pharma distribution APAC",
    "pharmaceutical logistics Asia",
    "drug distribution company",
    "pharma supply chain",
    "market entry pharma Asia",
    "pharma distributors Asia Africa Middle East",
    "OTC distribution network",
    "hospital pharma supply",
    "cold chain pharma logistics",
    "pharma regulatory compliance",
    "B2C pharma distribution",
    "APAC pharmaceutical market",
  ],
  openGraph: {
    title: "Exmedco | Pharma Distribution Across APAC",
    description:
      "End-to-end pharma distribution across retail, prescription, and logistics channels. Expand your reach across APAC with Exmedco.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exmedco Pharma Distribution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exmedco | Pharma Distribution & Logistics",
    description:
      "Expand your pharma brand across APAC with compliant distribution, logistics, and market access solutions.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About Us | Exmedco - Global Pharma Distribution Partner",
  description:
    "Learn about Exmedco, a global sourcing and distribution company enabling manufacturers to expand across Asia, Africa, and the Middle East. Strategic partners in growth with 30+ markets.",
  keywords: [
    "about Exmedco",
    "pharma distribution company",
    "global sourcing partner",
    "APAC distribution partner",
    "pharmaceutical market access",
    "B2C brand building",
  ],
  openGraph: {
    title: "About Exmedco | Global Pharma Distribution Partner",
    description:
      "Discover how Exmedco enables manufacturers to expand across high-growth markets in Asia, Africa, and the Middle East.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Exmedco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Exmedco | Global Pharma Distribution",
    description:
      "Strategic partners in growth with 30+ markets across Asia, Africa, and the Middle East.",
    images: ["/images/og-about.jpg"],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: "Contact Us | Exmedco - Get in Touch",
  description:
    "Contact Exmedco for pharma distribution partnerships across APAC. Reach us at our Mumbai headquarters for retail, dispensing, prescription, and logistics solutions.",
  keywords: [
    "contact Exmedco",
    "pharma distribution contact",
    "APAC distribution partner",
    "pharmaceutical logistics contact",
    "Mumbai pharma company",
  ],
  openGraph: {
    title: "Contact Exmedco | Pharma Distribution Partner",
    description:
      "Get in touch with Exmedco for pharma distribution partnerships across Asia, Africa, and the Middle East.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Exmedco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

// Service pages metadata
export const servicesMetadata: Record<string, Metadata> = {
  "retail-distribution": {
    ...baseMetadata,
    title:
      "Retail Distribution Services | Exmedco - APAC Pharma Distribution",
    description:
      "Scale your pharma brand through modern retail networks across APAC. Partner with top pharmacy chains, supermarkets, and e-commerce platforms. 500+ retail outlets in 12+ countries.",
    keywords: [
      "retail pharma distribution",
      "pharmacy chain distribution",
      "modern trade pharma",
      "e-commerce pharma distribution",
      "APAC retail distribution",
      "Guardian distribution",
      "Watsons pharmacy partner",
      "Lazada pharma",
      "Shopee health products",
    ],
    openGraph: {
      title: "Retail Distribution | Exmedco",
      description:
        "Access high-growth retail environments across APAC through modern trade chains, pharmacy retailers, and e-commerce platforms.",
      url: `${siteConfig.url}/services/retail-distribution`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-retail-distribution.jpg",
          width: 1200,
          height: 630,
          alt: "Retail Distribution Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/services/retail-distribution`,
    },
  },
  "dispensing-network": {
    ...baseMetadata,
    title:
      "Dispensing Network | Exmedco - Licensed Pharmacy Distribution",
    description:
      "Reliable access through licensed pharmacy channels. OTC product distribution and wellness store placement across 1,000+ dispensing points in APAC with full regulatory compliance.",
    keywords: [
      "dispensing network pharma",
      "licensed pharmacy distribution",
      "OTC distribution network",
      "wellness store distribution",
      "pharmacy compliance APAC",
      "pharma regulatory compliance",
    ],
    openGraph: {
      title: "Dispensing Network | Exmedco",
      description:
        "Ensure product availability through trusted, regulated pharmacy environments across APAC.",
      url: `${siteConfig.url}/services/dispensing-network`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-dispensing-network.jpg",
          width: 1200,
          height: 630,
          alt: "Dispensing Network Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/services/dispensing-network`,
    },
  },
  "prescription-channel": {
    ...baseMetadata,
    title:
      "Prescription Channel | Exmedco - Hospital & Clinic Distribution",
    description:
      "Connect with healthcare professionals and institutional buyers. Hospital procurement, clinic networks, and medical representative engagement with 100% regulatory compliance.",
    keywords: [
      "prescription channel pharma",
      "hospital pharma distribution",
      "clinic network distribution",
      "medical representative services",
      "institutional pharma buyers",
      "hospital procurement pharma",
      "healthcare professional outreach",
    ],
    openGraph: {
      title: "Prescription Channel | Exmedco",
      description:
        "Reach healthcare professionals and institutional buyers through structured prescription channels across APAC.",
      url: `${siteConfig.url}/services/prescription-channel`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-prescription-channel.jpg",
          width: 1200,
          height: 630,
          alt: "Prescription Channel Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/services/prescription-channel`,
    },
  },
  "logistics-supply-chain": {
    ...baseMetadata,
    title:
      "Logistics & Supply Chain | Exmedco - Pharma Cold Chain Logistics",
    description:
      "Seamless pharma distribution from source to shelf. Central warehousing in Singapore & Hong Kong, cold chain logistics, real-time tracking, and last-mile delivery across 12+ countries.",
    keywords: [
      "pharma logistics APAC",
      "cold chain logistics",
      "pharma supply chain",
      "pharmaceutical warehousing",
      "last-mile pharma delivery",
      "Singapore pharma hub",
      "Hong Kong pharma warehouse",
      "order management system pharma",
      "track trace pharma",
    ],
    openGraph: {
      title: "Logistics & Supply Chain | Exmedco",
      description:
        "End-to-end pharma logistics with cold chain capabilities, real-time tracking, and last-mile delivery across APAC.",
      url: `${siteConfig.url}/services/logistics-supply-chain`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/og-logistics.jpg",
          width: 1200,
          height: 630,
          alt: "Logistics & Supply Chain Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/services/logistics-supply-chain`,
    },
  },
}

// Helper function to get service metadata
export function getServiceMetadata(serviceId: string): Metadata {
  return (
    servicesMetadata[serviceId] || {
      ...baseMetadata,
      title: `Services | ${siteConfig.name}`,
      description: siteConfig.description,
    }
  )
}
