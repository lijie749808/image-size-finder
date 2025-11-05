'use client';

import { useI18n } from '@/hooks/useI18n';

export default function StructuredData() {
  const { t, locale } = useI18n();
  
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Image Size Finder",
    "url": "https://imagesizefinder.org",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "description": t('metaDescription'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Check image dimensions instantly",
      "View file size and resolution",
      "Privacy-first - no server uploads",
      "Support all image formats",
      "Multi-language support"
    ],
    "browserRequirements": "Requires JavaScript enabled"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('faq1Q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq1A')
        }
      },
      {
        "@type": "Question",
        "name": t('faq2Q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq2A')
        }
      },
      {
        "@type": "Question",
        "name": t('faq3Q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq3A')
        }
      },
      {
        "@type": "Question",
        "name": t('faq4Q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq4A')
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Image Size Finder",
    "url": "https://imagesizefinder.org",
    "logo": "https://imagesizefinder.org/logo.png",
    "description": t('metaDescription')
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
