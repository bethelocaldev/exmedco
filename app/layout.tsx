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

export const metadata: Metadata = {
  title: {
    default: "FHY Gloexpo | Pharma Distribution & Logistics Across APAC",
    template: "%s | FHY Gloexpo",
  },
  description:
    "FHY Gloexpo is a leading pharma distribution company providing retail, prescription, dispensing, and logistics solutions across Asia, Africa, and the Middle East.",
  generator: "Next.js",
  applicationName: "FHY Gloexpo",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pharma distribution",
    "APAC",
    "pharmaceutical logistics",
    "drug distribution",
    "market access",
    "B2C distribution",
  ],
  authors: [{ name: "FHY Gloexpo" }],
  creator: "FHY Gloexpo",
  publisher: "FHY Gloexpo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased pt-24">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
