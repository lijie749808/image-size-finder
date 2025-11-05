'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { Locale, translations, TranslationKey } from '@/lib/i18n';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

export function useLocaleStorage(): [Locale, (locale: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Load from localStorage or detect from browser
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['en', 'zh', 'ja', 'es'].includes(saved)) {
      setLocaleState(saved);
    } else {
      // Detect from browser
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLocaleState('zh');
      } else if (browserLang.startsWith('ja')) {
        setLocaleState('ja');
      } else if (browserLang.startsWith('es')) {
        setLocaleState('es');
      } else {
        setLocaleState('en');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return [locale, setLocale];
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}

