import { socialMedias } from '@/server/getTextsBySlug'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const socialMediaEntries: MetadataRoute.Sitemap = socialMedias.map(media => ({
    url: `https://www.project-in-bio.dev/recursos/link-na-bio-para-${media}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: 'https://www.project-in-bio.dev/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
  return [...staticEntries, ...socialMediaEntries]
}
