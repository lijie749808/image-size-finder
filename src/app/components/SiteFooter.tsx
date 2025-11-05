'use client';

import Link from 'next/link';
import { useI18n } from '@/hooks/useI18n';
import { defaultLocale } from '@/lib/i18n-config';

export default function SiteFooter({ lang }: { lang?: string }) {
  const { t, locale } = useI18n();
  
  // Generate language-aware link
  const getLink = (path: string) => {
    const currentLocale = lang || locale;
    if (currentLocale === defaultLocale) {
      return path;
    }
    return `/${currentLocale}${path}`;
  };
  
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-xl font-bold">{t('siteTitle')}</div>
          </div>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            {t('footerDescription')}
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-4">
            <Link href={getLink('/about')} className="hover:text-blue-400 transition-colors">
              {t('footerAbout')}
            </Link>
            <Link href={getLink('/privacy-policy')} className="hover:text-blue-400 transition-colors">
              {t('footerPrivacy')}
            </Link>
            <Link href={getLink('/terms')} className="hover:text-blue-400 transition-colors">
              {t('footerTerms')}
            </Link>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Image Size Finder. {t('footerRights')}
          </div>
        </div>
      </div>
    </footer>
  );
}


