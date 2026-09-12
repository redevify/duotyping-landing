import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — DuoTyping',
  description: 'The terms governing your use of the DuoTyping desktop app, its one-time license, and optional Cloud AI feature.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 8, 2026" currentSlug="terms">
      <LegalSection>
        <p>These Terms govern your use of DuoTyping, a desktop application. By downloading, installing, or using the app, you agree to these Terms and to the <a href="/license">License Agreement</a> and <a href="/privacy">Privacy Policy</a>, which are incorporated by reference.</p>
      </LegalSection>

      <LegalSection heading="1. The service">
        <p>DuoTyping is a native desktop app that detects grammar, tone and structural issues in text and presents suggestions you choose to accept or ignore. Current system requirements are listed on the download page. It is provided &quot;as is,&quot; and suggestions are not guaranteed to be complete, accurate, or suitable for any particular purpose — you remain responsible for reviewing and sending your own writing.</p>
      </LegalSection>

      <LegalSection heading="2. Purchases and licensing">
        <p>DuoTyping is sold under a one-time, perpetual license as described in the <a href="/license">License Agreement</a> — not a subscription. Payments are processed by a third-party payment provider; we do not store your full payment card details.</p>
      </LegalSection>

      <LegalSection heading="3. Acceptable use">
        <p>You agree not to reverse-engineer, decompile, or redistribute the app or its local model except as permitted by the License Agreement, and not to use DuoTyping to violate any law or third party&apos;s rights.</p>
      </LegalSection>

      <LegalSection heading="4. Cloud AI">
        <p>If you enable the optional Cloud AI feature, requests are sent from your device directly to the third-party provider you configure using your own credentials. Your use of that provider is governed by their terms, and we are not a party to that relationship.</p>
      </LegalSection>

      <LegalSection heading="5. Updates">
        <p>Your one-time purchase includes free updates for the major version you bought. We may release paid upgrades for future major versions; we&apos;ll always tell you before charging for one.</p>
      </LegalSection>

      <LegalSection heading="6. Refunds">
        <p>Refunds are handled per our payment provider&apos;s standard policy. Contact us if you run into an issue — we&apos;d rather sort it out than have you keep an app that isn&apos;t working for you.</p>
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
