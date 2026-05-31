// Site-wide data configuration for Exmedco.

export const siteConfig = {
  name: "Exmedco",
  tagline: "Pharmaceutical Distribution & Market Access - Asia, Africa & the Middle East",
  description:
    "Exmedco is a specialist pharmaceutical distribution partner providing retail, prescription, dispensing, and supply chain solutions across high-growth markets in Asia, Africa, and the Middle East.",
  url: "https://www.exmedco.com",
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
  email: "info@exmedco.com",
  directorEmail: "director@exmedco.com",
}

export const companyInfo = {
  entityType: "Specialist B2C Pharmaceutical Distributor",
  headquarters: "Mumbai",
  coreMarkets: ["Asia", "Africa", "Middle East"],
  marketsOperated: "30+",
  regions: 3,
  regulatoryCompliance: "100%",
}

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Exmedco", href: "/about" },
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
    { name: "Global Reach", href: "/international-presence" },
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
    headline: "Placing Your Products Where Patients and Consumers Shop",
    shortDescription:
      "Structured access to modern trade chains, pharmacy retailers, and digital commerce platforms across high-growth markets.",
    description:
      "Exmedco enables pharmaceutical and wellness manufacturers to enter and scale across retail environments that matter. Through established relationships with leading modern trade operators, pharmacy chains, and e-commerce marketplaces, we ensure consistent visibility, compliant shelf placement, and sustained consumer availability.",
    icon: "Store",
    accent: "#1A56DB",
    features: [
      "Modern Trade (Supermarkets & Hypermarkets)",
      "Pharmacy Chains & Health Retailers",
      "Specialty Wellness & Nutraceutical Stores",
      "E-commerce & Direct-to-Consumer Platforms",
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
    headline: "Consistent Product Access Through Regulated Pharmacy Environments",
    shortDescription:
      "Guaranteed product availability at licensed pharmacies and regulated wellness outlets, fully compliant with local dispensing frameworks.",
    description:
      "Our dispensing network provides manufacturers with structured, compliant product placement across both chain and independent pharmacy formats. Every dispensing point is managed within the applicable regulatory framework.",
    icon: "Pill",
    accent: "#0F7B55",
    features: [
      "Licensed Chain & Independent Pharmacies",
      "OTC and Wellness Product Placement",
      "Regulatory Documentation & Compliance Monitoring",
    ],
    compliance:
      "All dispensing operations strictly follow local regulatory frameworks.",
    stats: {
      label: "Dispensing Points",
      value: "1,000+",
      subtext: "across APAC",
    },
    href: "/services/dispensing-network",
  },
  {
    id: "prescription-channel",
    title: "Prescription Channel",
    headline: "Connecting Pharmaceutical Brands with Clinicians and Institutions",
    shortDescription:
      "Structured prescription channel access across hospitals, clinics, and specialist networks.",
    description:
      "Exmedco provides pharmaceutical manufacturers with a disciplined, end-to-end prescription channel strategy across hospital procurement, GP networks, specialist outreach, and medical representative teams.",
    icon: "Stethoscope",
    accent: "#1A56DB",
    features: [
      "Hospital Procurement (Public & Private Sectors)",
      "GP & Community Clinic Networks",
      "Specialist Outreach & KOL Engagement",
      "Medical Representative Deployment",
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
    headline: "Controlled, Compliant Movement from Origin to End Point",
    shortDescription:
      "End-to-end pharmaceutical logistics from strategic hub warehousing through last-mile delivery.",
    description:
      "Our supply chain infrastructure is purpose-built for regulated pharmaceutical products, with hub warehousing, cold chain requirements, real-time shipment visibility, and last-mile delivery.",
    icon: "Truck",
    accent: "#3D5166",
    features: [
      "Central Hub Warehousing (Singapore & Hong Kong)",
      "Cold Chain & Temperature-Controlled Logistics",
      "Real-Time Track & Trace",
      "Integrated Order Management System (OMS)",
      "Last-Mile Delivery Across 12+ Countries",
    ],
    processFlow: [
      { step: "Inbound", description: "Procurement & Quality Inspection" },
      { step: "Warehousing", description: "Singapore & Hong Kong hubs" },
      { step: "Outbound", description: "Channel dispatch & documentation" },
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

export const homeStats = [
  { value: "25+", label: "Years of Experience" },
  { value: "15+", label: "Countries Served" },
  { value: "200+", label: "Product Portfolio" },
  { value: "99.9%", label: "Quality Compliance" },
]

export const heroSlides = [
  {
    eyebrow: "Pharmaceutical Distribution & Market Access",
    title: "Building Market Access for Pharmaceutical Manufacturers Worldwide",
    description:
      "Exmedco provides manufacturers with structured, compliant distribution pathways across Asia, Africa, and the Middle East - from market entry through sustained consumer availability.",
    serviceDetail: "Market entry, distribution infrastructure, and brand positioning",
    image:
      "/homepage/image.png",
  },
  {
    eyebrow: "Multi-Channel Sales Infrastructure",
    title: "Retail, Dispensing, Prescription, and Digital Under One Partnership",
    description:
      "We give healthcare product manufacturers a single integrated route to market across pharmacy chains, hospitals, modern trade, and digital platforms.",
    serviceDetail: "Retail distribution, prescription channels, and direct-to-consumer reach",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1800&q=80",
  },
  {
    eyebrow: "Supply Chain & Logistics",
    title: "Controlled Product Movement from Origin to Every End Point",
    description:
      "Our supply chain infrastructure handles warehousing, cold chain management, documentation, and last-mile delivery with visibility at every stage.",
    serviceDetail: "Logistics, cold chain, order management, and last-mile delivery",
    image:
      "https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?auto=format&fit=crop&w=1800&q=80",
  },
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
      description: "Among the leading national distribution partners in-country",
    },
    {
      country: "Vietnam",
      description: "Nationwide retail and prescription channel coverage",
    },
    {
      country: "Myanmar",
      description: "Urban centre and regional distribution capability",
    },
    {
      country: "Singapore",
      description: "Full-spectrum retail, dispensing, and hospital network",
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
    "Exmedco is a global pharmaceutical sourcing and distribution company dedicated to helping manufacturers establish sustainable, compliant market access across Asia, Africa, and the Middle East.",
  description: `We bring together local distribution expertise, multi-channel sales infrastructure, and direct-to-consumer reach to close the gap between international manufacturers and regional demand. Our model extends across the full market entry lifecycle - from initial partner onboarding and regulatory navigation to active product distribution and long-term brand building.

Exmedco operates as a strategic growth partner, not simply a logistics provider. We invest in understanding the commercial dynamics of each market, enabling manufacturers to enter with confidence and scale with precision.`,
  mission:
    "To make global pharmaceutical trade straightforward - giving manufacturers reliable, compliant access to emerging markets through efficient distribution and scalable commercial models.",
  vision:
    "To be the most trusted pharmaceutical distribution and market access platform connecting manufacturers with high-potential regions across Asia, Africa, and the Middle East.",
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
