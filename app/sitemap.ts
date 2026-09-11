import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://duotyping.com';
const ROUTES = ['', '/license', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: '2026-09-08',
  }));
}
