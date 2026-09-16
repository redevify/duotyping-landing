import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '../components/LegalLayout';

const title = 'Terms of Service — DuoTyping';
const description = 'The terms governing your use of the free DuoTyping desktop app and its optional Cloud AI feature.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/terms',
  },
  openGraph: { title, description, url: '/terms' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 16, 2026" currentSlug="terms">
      <LegalSection>
        <p>These Terms govern your use of DuoTyping, a desktop application. By downloading, installing, or using the app, you agree to these Terms and to the <a href="/license">License Agreement</a> and <a href="/privacy">Privacy Policy</a>, which are incorporated by reference.</p>
      </LegalSection>

      <LegalSection heading="1. The service">
        <p>DuoTyping is a native desktop app that detects grammar, tone and structural issues in text and presents suggestions you choose to accept or ignore. Current system requirements are listed on the download page. It is provided &quot;as is,&quot; and suggestions are not guaranteed to be complete, accurate, or suitable for any particular purpose — you remain responsible for reviewing and sending your own writing.</p>
      </LegalSection>

      <LegalSection heading="2. License">
        <p>DuoTyping is free. It is provided under the free, perpetual license described in the <a href="/license">License Agreement</a> — there is no purchase, no subscription, and no paid tier.</p>
      </LegalSection>

      <LegalSection heading="3. Acceptable use">
        <p>You agree not to reverse-engineer, decompile, or redistribute the app or its local model except as permitted by the License Agreement, and not to use DuoTyping to violate any law or third party&apos;s rights.</p>
      </LegalSection>

      <LegalSection heading="4. Cloud AI">
        <p>If you enable the optional Cloud AI feature, requests are sent from your device directly to the third-party provider you configure using your own credentials. Your use of that provider is governed by their terms, and we are not a party to that relationship. Any costs you incur with that provider are yours, billed by them directly.</p>
      </LegalSection>

      <LegalSection heading="5. Updates">
        <p>Updates are free. We may change or discontinue features over time, and we are not obliged to maintain any particular feature indefinitely. If a future major version is ever offered on different terms, we will say so beforehand and the version you already have keeps working.</p>
      </LegalSection>

      <LegalSection heading="6. Donations">
        <p>Donations are voluntary gifts in support of development. They are not a purchase, do not entitle you to the app (which is already free), and do not unlock features, priority support, or any other benefit. Donations are processed by a third-party platform under their own terms; we never receive or store your payment card details.</p>
        <p>Because nothing is sold in exchange, donations are generally non-refundable. If you donated by mistake or were charged twice, contact us and we will help you sort it out with the platform.</p>
      </LegalSection>

      <LegalSection heading="7. Disclaimer and liability">
        <p>DuoTyping is provided without warranties of any kind, express or implied. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the app, including any consequences of accepting or ignoring a suggestion.</p>
      </LegalSection>

      <LegalSection heading="8. Changes">
        <p>We may update these Terms from time to time. Material changes will be noted in the app&apos;s release notes and reflected in the date above.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Questions about these Terms: <a href="mailto:hello@duotyping.com">hello@duotyping.com</a></p>
      </LegalSection>
    </LegalLayout>
  );
}
