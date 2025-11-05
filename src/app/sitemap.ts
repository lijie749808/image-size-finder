import { MetadataRoute } from 'next'

const baseUrl = 'https://imagesizefinder.org';
const languages = ['zh', 'ja', 'es']; // English is default without prefix
const lastModified = new Date();

// Define all pages
const pages = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];
  
  pages.forEach(page => {
    // English version (default, no language prefix)
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          zh: `${baseUrl}/zh${page.path}`,
          ja: `${baseUrl}/ja${page.path}`,
          es: `${baseUrl}/es${page.path}`,
        },
      },
    });
    
    // Other language versions
    languages.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}${page.path}`,
            zh: `${baseUrl}/zh${page.path}`,
            ja: `${baseUrl}/ja${page.path}`,
            es: `${baseUrl}/es${page.path}`,
          },
        },
      });
    });
  });
  
  return sitemap;
}
