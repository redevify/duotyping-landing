import type { Metadata } from 'next';
import { JetBrains_Mono, Onest, Public_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import './globals.css';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
});

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  const title = t('title');
  const description = t('description');
  return {
    metadataBase: new URL('https://duotyping.com'),
    title,
    description,
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: [
        { url: '/logo/favicon.ico', sizes: 'any' },
        { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/logo/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/logo/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/logo/apple-touch-icon.png',
    },
    manifest: '/logo/site.webmanifest',
    openGraph: {
      title: 'DuoTyping',
      description,
      url: '/',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DuoTyping',
      description,
    },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${publicSans.variable} ${onest.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-cream text-ink font-sans overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
