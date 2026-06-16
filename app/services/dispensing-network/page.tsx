import type { Metadata } from "next"
import ServiceDetailLayout from "@/components/service-detail-layout"
import { getServiceMetadata } from "@/data/seo-metadata"

export const metadata: Metadata = getServiceMetadata("dispensing-network")

export default function DispensingNetworkPage() {
  return <ServiceDetailLayout serviceId="dispensing-network" />
}
