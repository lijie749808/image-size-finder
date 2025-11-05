'use client';

import { ReactNode, useMemo, useEffect, useState } from 'react';
import { I18nContext } from '@/hooks/useI18n';
import { Locale, TranslationKey, translations } from '@/lib/i18n';
import { defaultLocale } from '@/lib/i18n-config';

export default function I18nProvider({ 
  children,
  initialLocale 
}: { 
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale);

  // Sync with localStorage for client-side navigation
  useEffect(() => {
    if (!initialLocale) {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && ['en', 'zh', 'ja', 'es'].includes(saved)) {
        setLocaleState(saved);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('zh')) {
          setLocaleState('zh');
        } else if (browserLang.startsWith('ja')) {
          setLocaleState('ja');
        } else if (browserLang.startsWith('es')) {
          setLocaleState('es');
        }
      }
    }
  }, [initialLocale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Navigate to appropriate URL
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(zh|ja|es)/, '') || '/';
    
    if (newLocale === defaultLocale) {
      window.location.href = pathWithoutLocale;
    } else {
      window.location.href = `/${newLocale}${pathWithoutLocale}`;
    }
  };

  const contextValue = useMemo(() => {
    const t = (key: TranslationKey): string => {
      return translations[locale][key];
    };

    return {
      locale,
      setLocale,
      t,
    };
  }, [locale]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

