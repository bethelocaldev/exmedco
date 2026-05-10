import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.fhyglobal.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // We don't need to disallow the legal pages here because we already added
      // a 'noindex' meta tag to them, which is the preferred way to keep them
      // out of search results while still allowing them to be crawled.
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
