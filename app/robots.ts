import { MetadataRoute } from 'next'

import { siteConfig } from '@/data/site-data'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

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
