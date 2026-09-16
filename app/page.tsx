import { DemoWidget } from './components/DemoWidget';
import { Faq } from './components/Faq';
import { Features } from './components/Features';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { LogoMarquee } from './components/LogoMarquee';
import { PrivacySection } from './components/PrivacySection';
import { StatsCompare } from './components/StatsCompare';

const SOFTWARE_APPLICATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DuoTyping',
  description: 'DuoTyping catches grammar and tone slips in any app you write in and shows you the fix.',
  url: 'https://duotyping.com',
  applicationCategory: 'ProductivityApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_JSON_LD) }}
      />
      <Header />
      <Hero />
      <DemoWidget />
      <LogoMarquee />
      <StatsCompare />
      <HowItWorks />
      <Features />
      <PrivacySection />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
