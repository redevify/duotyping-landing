import { useTranslations } from 'next-intl';
import { CtaButton } from './CtaButton';

export function FinalCta() {
  const t = useTranslations('FinalCta');

  return (
    <section id="cta" className="max-w-[70rem] mx-auto px-6 pt-24 scroll-mt-20">
      <div className="text-center bg-card border border-ink/10 rounded-3xl px-6 py-[clamp(2.75rem,7vw,5.125rem)]">
        <h2 className="font-display font-bold text-[clamp(2.125rem,5.2vw,3.625rem)] leading-none tracking-tight mb-3.5">{t('heading')}</h2>
        <p className="mx-auto mb-6.5 text-lg text-muted max-w-[40ch]">{t('body')}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <CtaButton href="#" variant="dark" className="text-base px-7 py-3.25">{t('download')}</CtaButton>
          <CtaButton href="#pricing" variant="outline" className="text-base px-7 py-3.25">{t('seePricing')}</CtaButton>
        </div>
        <div className="font-mono text-xs tracking-widest text-muted-2 mt-5.5">{t('footnote')}</div>
      </div>
    </section>
  );
}
