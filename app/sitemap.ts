import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

const routes = [
  '/',
  '/camera',
  '/camera/guide',
  '/camera/changelog',
  '/camera/privacy',
  '/camera/terms',
  '/sitac',
  '/sitac/guide',
  '/sitac/privacy',
  '/sitac/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(path => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }))
}
