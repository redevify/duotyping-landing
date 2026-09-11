import { useTranslations } from 'next-intl';

export function PrivacySection() {
  const t = useTranslations('PrivacySection');
  const certs = t.raw('certs') as string[];

  return (
    <section className="max-w-[70rem] mx-auto px-6 pt-24">
      <div className="bg-ink text-cream rounded-3xl p-[clamp(2rem,5vw,3.75rem)] grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-9 items-center">
        <div>
          <h2 className="font-display font-bold text-[clamp(1.875rem,3.8vw,2.625rem)] leading-none mb-3.5">
            {t('heading')} <span className="text-gold-warm">{t('headingHighlight')}</span>
          </h2>
          <p className="mb-5 text-base leading-relaxed text-tan-text max-w-[44ch] text-pretty">{t('body')}</p>
          <a href="#" className="text-cream text-base border-b border-cream/45 pb-0.5 hover:opacity-70 transition-opacity">{t('link')}</a>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {certs.map((c) => (
            <span key={c} className="border border-cream/22 rounded-xl px-4.25 py-3.25 font-mono text-xs tracking-wider text-gold-soft">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
