'use client';

import { ReactNode } from 'react';
import I18nProvider from '@/components/I18nProvider';
import StructuredData from '@/app/structured-data';
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import { Locale } from '@/lib/i18n-config';

export default function DefaultLayout({ 
  children, 
  lang 
}: { 
  children: ReactNode;
  lang?: Locale;
}) {
  return (
    <I18nProvider initialLocale={lang || 'en'}>
      <StructuredData />
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </I18nProvider>
  );
}

