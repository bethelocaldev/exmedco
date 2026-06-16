import type { Metadata } from "next"
import ServiceDetailLayout from "@/components/service-detail-layout"
import { getServiceMetadata } from "@/data/seo-metadata"

export const metadata: Metadata = getServiceMetadata("prescription-channel")

export default function PrescriptionChannelPage() {
  return <ServiceDetailLayout serviceId="prescription-channel" />
}
