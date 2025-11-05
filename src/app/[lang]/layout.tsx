import type { Metadata } from "next";
import { Locale, locales, defaultLocale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import DefaultLayout from '@/components/layouts/DefaultLayout';

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  // Generate params for all non-default locales
  return locales.filter(locale => locale !== defaultLocale).map((locale) => ({
    lang: locale as Locale,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const baseUrl = 'https://imagesizefinder.org';
  const langPath = `/${lang}`;
  
  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
    keywords: dict.metaKeywords,
    authors: [{ name: "Image Size Finder" }],
    creator: "Image Size Finder",
    publisher: "Image Size Finder",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${langPath}/`,
      languages: {
        'en': `${baseUrl}/`,
        'zh': `${baseUrl}/zh/`,
        'ja': `${baseUrl}/ja/`,
        'es': `${baseUrl}/es/`,
      },
    },
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDescription,
      url: `${baseUrl}${langPath}`,
      siteName: 'Image Size Finder',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Image Size Finder - Online Image Analyzer',
        },
      ],
      locale: lang === 'zh' ? 'zh_CN' : lang === 'ja' ? 'ja_JP' : lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metaTitle,
      description: dict.metaDescription,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <DefaultLayout lang={lang as Locale}>
      {children}
    </DefaultLayout>
  );
}

