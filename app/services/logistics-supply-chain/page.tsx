import type { Metadata } from "next"
import ServiceDetailLayout from "@/components/service-detail-layout"
import { getServiceMetadata } from "@/data/seo-metadata"

export const metadata: Metadata = getServiceMetadata("logistics-supply-chain")

export default function LogisticsSupplyChainPage() {
  return <ServiceDetailLayout serviceId="logistics-supply-chain" />
}
