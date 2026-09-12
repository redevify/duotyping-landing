import type { Metadata } from 'next';
import { LegalLayout, LegalSection } from '../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — DuoTyping',
  description: 'How DuoTyping handles your writing: local-by-default detection, zero network entitlement, and opt-in Cloud AI.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 8, 2026" currentSlug="privacy">
      <LegalSection heading="The short version">
        <p>DuoTyping analyzes your text on your device, using a model bundled with the app. By default, the app has no network entitlement — it is not technically capable of sending your writing anywhere, whether or not you&apos;d trust it to. Cloud AI is an optional feature you turn on yourself, using your own API key.</p>
      </LegalSection>

      <LegalSection heading="What DuoTyping accesses">
        <p>DuoTyping requires system Accessibility permission to read the text field you&apos;re focused on, so it can detect and suggest corrections anywhere on the system. It only reads the field currently in focus when you invoke it — it does not log keystrokes, monitor other apps, or read fields you haven&apos;t activated.</p>
        <p>No text is written to disk outside of your device&apos;s normal memory during a session, and no writing content is transmitted to us or any third party by default.</p>
      </LegalSection>

      <LegalSection heading="Local detection">
        <p>Grammar, tone and structure detection runs entirely on-device using a local model bundled with the app. The default build ships with zero network entitlement at the sandbox level, so your text cannot leave your device even in principle — not because of a setting, but because the app is not permitted to make network requests.</p>
      </LegalSection>

      <LegalSection heading="Cloud AI (opt-in)">
        <p>If you choose to enable Cloud AI, DuoTyping sends the relevant text snippet directly from your device to the model provider you configure, using an API key you supply. We do not operate a server in this path and do not receive, log, or store your writing. Review your provider&apos;s own data-handling terms before enabling this feature — DuoTyping does not control how they process requests.</p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <p>Purchases are processed by our payment provider, who shares an order confirmation (email, license status) with us for license validation and support. We do not collect analytics on the words you write or the suggestions you accept or reject.</p>
        <p>We may collect basic, non-content crash and diagnostic data if you explicitly opt in from Preferences, to help us fix bugs. This never includes document text.</p>
      </LegalSection>

      <LegalSection heading="No training on your text">
        <p>We do not use your writing to train models, ours or anyone else&apos;s, whether in local or Cloud AI mode.</p>
      </LegalSection>

      <LegalSection heading="Your controls">
        <p>Cloud AI is off by default and can be disabled at any time from Preferences. Uninstalling the app removes the local model and all app data from your device. Contact us to request deletion of any account or purchase records we hold.</p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>If this policy changes materially, we&apos;ll note it in the app&apos;s release notes and update the date above.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Questions about this policy: <a href="mailto:privacy@duotyping.com">privacy@duotyping.com</a></p>
      </LegalSection>
    </LegalLayout>
  );
}
