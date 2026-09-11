import { getRequestConfig } from 'next-intl/server';

// Single static locale for now — no [locale] routing since we only ship English.
// To add a language: add its code here, drop messages/<locale>.json, and switch
// this to read the locale from a cookie/route segment instead of hardcoding it.
export const DEFAULT_LOCALE = 'en';

export default getRequestConfig(async () => {
  const locale = DEFAULT_LOCALE;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
