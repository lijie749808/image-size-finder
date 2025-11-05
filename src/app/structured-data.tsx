'use client';

import { useI18n } from '@/hooks/useI18n';

export default function StructuredData() {
  const { t } = useI18n();
  
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
        "name": t('faq1Question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq1Answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq2Question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq2Answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq3Question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq3Answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq4Question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq4Answer')
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
