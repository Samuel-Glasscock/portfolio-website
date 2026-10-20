import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

const routes = ['', '/about', '/projects'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
