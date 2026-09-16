import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '../components/LegalLayout';

const title = 'License Agreement — DuoTyping';
const description = 'The free, perpetual license terms covering your installation and use of DuoTyping.';

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
    <LegalLayout title="License Agreement" updated="September 16, 2026" currentSlug="license">
      <LegalSection heading="Free license">
        <p>DuoTyping is free to use. Downloading it grants you a perpetual, non-exclusive, non-transferable license to install and use the app — there is nothing to buy, no subscription, and no license key to keep track of. The version you install keeps working indefinitely.</p>
      </LegalSection>

      <LegalSection heading="Who it covers">
        <p>This license covers use by you, personally, on the computers you own or control, and use by your team or business at no charge. You do not need to contact us before deploying it across an organization.</p>
      </LegalSection>

      <LegalSection heading="Restrictions">
        <p>You may not resell or sublicense the app, reverse-engineer or decompile it or its bundled local model, or redistribute it outside of official channels. Free to use does not mean free to repackage.</p>
      </LegalSection>

      <LegalSection heading="Updates">
        <p>Updates are free. If we ever release a future major version (e.g. DuoTyping 2) on different terms, we will say so clearly beforehand, and the version you already have keeps working either way.</p>
      </LegalSection>

      <LegalSection heading="Donations">
        <p>Donations are voluntary and entirely optional. They support continued development; they do not purchase the app, unlock features, or create any obligation on our part. See the <a href="/terms">Terms of Service</a> for details.</p>
      </LegalSection>

      <LegalSection heading="Ownership">
        <p>DuoTyping and its underlying software, model, and design remain our property. This license grants a right to use the app; it does not sell you the software itself.</p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>We may revoke this license in the event of a material breach of these terms. Otherwise, it does not expire.</p>
      </LegalSection>

      <LegalSection heading="Related documents">
        <p>This License Agreement works alongside our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Licensing questions: <a href="mailto:hello@duotyping.com">hello@duotyping.com</a></p>
      </LegalSection>
    </LegalLayout>
  );
}
