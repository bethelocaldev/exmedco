import { notFound } from "next/navigation"

// Static service pages now live at their own routes.
// This catch-all handles any unknown slugs with a 404.
export default async function UnknownServicePage() {
  notFound()
}
