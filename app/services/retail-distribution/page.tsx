import type { Metadata } from "next"
import ServiceDetailLayout from "@/components/service-detail-layout"
import { getServiceMetadata } from "@/data/seo-metadata"

export const metadata: Metadata = getServiceMetadata("retail-distribution")

export default function RetailDistributionPage() {
  return <ServiceDetailLayout serviceId="retail-distribution" />
}
