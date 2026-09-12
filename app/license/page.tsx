import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '../components/LegalLayout';

const title = 'License Agreement — DuoTyping';
const description = 'The perpetual, one-time license terms covering your purchase and use of DuoTyping.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/license',
  },
  openGraph: { title, description, url: '/license' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function LicenseAgreementPage() {
  return (
    <LegalLayout title="License Agreement" updated="September 8, 2026" currentSlug="license">
      <LegalSection heading="Perpetual license">
        <p>Your purchase grants you a perpetual, non-exclusive, non-transferable license to install and use DuoTyping — it is a one-time purchase, not a subscription. You keep the version you bought and its free updates for that major version, indefinitely, even if you stop paying for anything else.</p>
      </LegalSection>

      <LegalSection heading="Seats">
        <p>A single-seat license covers use by you, personally, on the computers you own or control. Team and business licensing covering multiple seats is available on request — contact us before deploying across a team.</p>
      </LegalSection>

      <LegalSection heading="Restrictions">
        <p>You may not resell, sublicense, or share your license key, reverse-engineer or decompile the app or its bundled local model, or redistribute the app outside of official channels. The license does not transfer with resale of your computer.</p>
      </LegalSection>

      <LegalSection heading="Updates and major versions">
        <p>Your license includes all updates within the major version you purchased. A future major version (e.g. DuoTyping 2) may be offered as a paid upgrade at a discount for existing license holders — we will always tell you before charging for one, and your current version keeps working either way.</p>
      </LegalSection>

      <LegalSection heading="Ownership">
        <p>DuoTyping and its underlying software, model, and design remain our property. This license grants a right to use the app; it does not sell you the software itself.</p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>We may revoke a license obtained fraudulently or in material breach of these terms. Otherwise, this license does not expire.</p>
      </LegalSection>

      <LegalSection heading="Related documents">
        <p>This License Agreement works alongside our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Licensing questions, including team pricing: <a href="mailto:hello@duotyping.com">hello@duotyping.com</a></p>
      </LegalSection>
    </LegalLayout>
  );
}
