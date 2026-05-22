// Site-wide data configuration for FHY Gloexpo
// Centralized contact details, company info, and navigation

export const siteConfig = {
  name: "FHY Gloexpo",
  tagline: "B2C Brand Building, Sales & Distribution — APAC Region",
  description:
    "FHY Gloexpo is a leading pharma distribution company providing retail, prescription, dispensing, and logistics solutions across Asia, Africa, and the Middle East.",
  url: "https://www.fhyglobal.com",
  ogImage: "/images/og-image.jpg",
}

export const contactInfo = {
  address: {
    line1: "Level - 5, Technopolis Knowledge Park",
    line2: "Mahakali Caves Rd",
    line3: "Chakala, Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400019",
    country: "India",
    full: "Level - 5, Technopolis Knowledge Park, Mahakali Caves Rd, Chakala, Andheri East, Mumbai, Maharashtra 400019",
  },
  phone: "+91 771 897 2454",
  email: "info@fhyglobal.com",
  directorEmail: "director@fhyglobal.com",
}

export const companyInfo = {
  entityType: "Brand-First B2C Distributor",
  headquarters: "Mumbai",
  coreMarkets: ["Asia", "Africa", "Middle East"],
  marketsOperated: "30+",
  regions: 3,
  regulatoryCompliance: "100%",
}

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About FHY Gloexpo", href: "/about" },
    {
      name: "Our Services",
      href: "/services",
      children: [
        { name: "Retail Distribution", href: "/services/retail-distribution" },
        { name: "Dispensing Network", href: "/services/dispensing-network" },
        { name: "Prescription Channel", href: "/services/prescription-channel" },
        { name: "Logistics & Supply Chain", href: "/services/logistics-supply-chain" },
      ],
    },
    { name: "International Presence", href: "/international-presence" },
    { name: "Contact Us", href: "/contact" },
  ],
  footer: {
    usefulLinks: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Sitemap", href: "/sitemap" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
      { name: "Contact Us", href: "/contact" },
    ],
    services: [
      { name: "Retail Distribution", href: "/services/retail-distribution" },
      { name: "Dispensing Network", href: "/services/dispensing-network" },
      { name: "Prescription Channel", href: "/services/prescription-channel" },
      { name: "Logistics & Supply Chain", href: "/services/logistics-supply-chain" },
    ],
  },
}

export const services = [
  {
    id: "retail-distribution",
    title: "Retail Distribution",
    headline: "Scale Your Brand Through Modern Retail Networks",
    shortDescription:
      "Access high-growth retail environments across APAC through modern trade chains, pharmacy retailers, and e-commerce platforms.",
    description:
      "We enable pharma and wellness brands to access high-growth retail environments across APAC. Our strong partnerships with modern trade chains, pharmacy retailers, and e-commerce platforms ensure maximum product visibility and consumer reach.",
    icon: "Store",
    features: [
      "Modern Trade (Supermarkets & Hypermarkets)",
      "Pharmacy Chains & Health Retailers",
      "Specialty Wellness & Beauty Stores",
      "E-commerce Platforms",
    ],
    channels: [
      { name: "Modern Trade", description: "Supermarkets, Hypermarkets" },
      { name: "Pharmacy Chains", description: "Guardian, Watsons, Priceline" },
      { name: "Specialty Retail", description: "Health, Wellness, Beauty" },
      { name: "E-Commerce", description: "Lazada, Shopee, Tmall" },
    ],
    stats: {
      label: "Active Retail Outlets",
      value: "500+",
      subtext: "across 12+ countries",
    },
    href: "/services/retail-distribution",
  },
  {
    id: "dispensing-network",
    title: "Dispensing Network",
    headline: "Reliable Access Through Licensed Pharmacy Channels",
    shortDescription:
      "Ensure product availability through trusted, regulated pharmacy environments with licensed pharmacies and wellness outlets.",
    description:
      "Our dispensing network ensures your products are available through trusted, regulated pharmacy environments. We work with both chain and independent pharmacies to deliver consistent OTC and wellness product placement.",
    icon: "Pill",
    features: [
      "Licensed Pharmacies",
      "OTC Product Distribution",
      "Wellness & Health Stores",
    ],
    compliance:
      "All dispensing operations strictly follow local regulatory frameworks.",
    stats: {
      label: "Dispensing Points",
      value: "1,000+",
      subtext: "Coverage across APAC",
    },
    href: "/services/dispensing-network",
  },
  {
    id: "prescription-channel",
    title: "Prescription Channel",
    headline: "Reach Healthcare Professionals & Institutional Buyers",
    shortDescription:
      "Connect pharmaceutical brands with hospitals, clinics, and medical professionals through structured prescription channels.",
    description:
      "We connect pharmaceutical brands with hospitals, clinics, and medical professionals through a structured prescription channel supported by in-market expertise.",
    icon: "Stethoscope",
    features: [
      "Hospital Procurement (Public & Private)",
      "Clinic & GP Networks",
      "Specialist Outreach",
      "Medical Representative Engagement",
    ],
    compliance: "100% compliance with local medical and regulatory standards",
    stats: {
      label: "Regulatory Compliance",
      value: "100%",
      subtext: "across all markets",
    },
    href: "/services/prescription-channel",
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    headline: "Seamless Distribution from Source to Shelf",
    shortDescription:
      "Efficient, compliant, and transparent product movement across borders and markets with end-to-end logistics.",
    description:
      "Our logistics infrastructure ensures efficient, compliant, and transparent product movement across borders and markets.",
    icon: "Truck",
    features: [
      "Central Warehousing (Singapore & Hong Kong hubs)",
      "Cold Chain Logistics",
      "Real-Time Track & Trace",
      "Order Management System (OMS)",
      "Last-Mile Delivery Across 12+ Countries",
    ],
    processFlow: [
      { step: "Inbound", description: "Procurement & Quality Check" },
      { step: "Warehousing", description: "Singapore & Hong Kong hubs" },
      { step: "Outbound", description: "Channel dispatch" },
      { step: "Last Mile", description: "Retail, Pharmacy, Hospital" },
    ],
    stats: {
      label: "Countries Covered",
      value: "12+",
      subtext: "Last-mile delivery",
    },
    href: "/services/logistics-supply-chain",
  },
]

export const statistics = [
  { value: "30+", label: "Markets Operated" },
  { value: "500+", label: "Retail Partners" },
  { value: "1,000+", label: "Dispensing Points" },
  { value: "100%", label: "Regulatory Compliance" },
  { value: "12+", label: "Countries" },
  { value: "3", label: "Regional Hubs" },
]

export const globalPresence = {
  regions: [
    {
      name: "Africa",
      countries: ["Kenya", "Tanzania", "Nigeria", "Uganda", "Zimbabwe"],
    },
    {
      name: "Middle East",
      countries: ["Iraq", "Lebanon", "UAE", "Jordan"],
    },
    {
      name: "Asia",
      countries: [
        "Philippines",
        "Malaysia",
        "Vietnam",
        "Singapore",
        "Myanmar",
        "Cambodia",
      ],
    },
  ],
  marketHighlights: [
    {
      country: "Malaysia",
      description: "Top 3 national distributors",
    },
    {
      country: "Vietnam",
      description: "Nationwide retail + prescription reach",
    },
    {
      country: "Myanmar",
      description: "Urban + regional distribution",
    },
    {
      country: "Singapore",
      description: "Retail + dispensing + hospital network (HQ Market)",
    },
  ],
  marketStats: {
    apacB2CMarket: "$7.5T",
    projectedBy: "2030",
    newConsumers: "+400M",
    newConsumersBy: "2030",
  },
}

export const aboutContent = {
  intro:
    "FHY Gloexpo LLP is a global sourcing and distribution company focused on enabling manufacturers to expand across high-growth markets in Asia, Africa, and the Middle East.",
  description: `We specialize in building strong market access for international brands through a combination of local distribution partnerships, multi-channel sales strategies, and direct-to-consumer reach. Our approach is designed to bridge the gap between global manufacturers and regional demand by offering end-to-end support—from market entry and partner onboarding to product distribution and brand positioning.

At FHY Gloexpo, we are not just exporters; we are strategic partners in growth. We work closely with manufacturers to establish sustainable distribution ecosystems, ensuring their products reach the right markets, through the right channels, with maximum efficiency.

Our network-driven model allows us to collaborate with distributors, retailers, and digital platforms, enabling both B2B and B2C penetration across diverse markets.`,
  mission:
    "To simplify global trade and empower manufacturers with seamless access to emerging markets through efficient distribution and scalable business models.",
  vision:
    "To build a globally recognized distribution and market access platform connecting manufacturers with high-potential regions across Asia, Africa, and the Middle East.",
}

export const accreditations = [
  {
    name: "ISO Certified",
    description: "Quality Management System",
  },
  {
    name: "GDP Compliant",
    description: "Good Distribution Practice",
  },
  {
    name: "WHO Guidelines",
    description: "World Health Organization Standards",
  },
  {
    name: "Local Regulatory",
    description: "Country-specific Compliance",
  },
]
