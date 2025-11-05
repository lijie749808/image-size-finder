export type Locale = 'en' | 'zh' | 'ja' | 'es';

export const locales: Locale[] = ['en', 'zh', 'ja', 'es'];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
  es: 'Español',
};

// Get locale from pathname or return default
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Locale;
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

// Get path without locale prefix
export function getPathnameWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale !== defaultLocale) {
    return pathname.replace(`/${locale}`, '') || '/';
  }
  return pathname;
}

// Get path with locale prefix (except for default locale)
export function getPathnameWithLocale(pathname: string, locale: Locale): string {
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
  
  if (locale === defaultLocale) {
    return pathnameWithoutLocale;
  }
  
  return `/${locale}${pathnameWithoutLocale}`;
}

