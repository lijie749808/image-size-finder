import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://squaredsymbol.org/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://squaredsymbol.org/symbols',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://squaredsymbol.org/about',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://squaredsymbol.org/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://squaredsymbol.org/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
