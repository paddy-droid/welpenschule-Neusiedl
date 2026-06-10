import { MetadataRoute } from 'next';
import { serviceLocations } from '@/lib/regionData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://welpenschule-neusiedl.at';
  const now = new Date();

  const regions = serviceLocations.filter((loc) => loc.slug !== 'neusiedl-am-see').map((loc) => loc.slug);

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mobiles-hundetraining`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...regions.map((region) => ({
      url: `${baseUrl}/mobiles-hundetraining/${region}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
