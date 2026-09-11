import { useTranslations } from 'next-intl';
import { CtaButton } from './CtaButton';

type Plan = { name: string; price: string; body: string; cta: string };

export function Pricing() {
  const t = useTranslations('Pricing');
  const plans = t.raw('plans') as Plan[];

  return (
    <section id="pricing" className="max-w-[70rem] mx-auto px-6 pt-24 scroll-mt-20">
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-10">
        {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15.625rem,1fr))] gap-4">
        {plans.map((p) => (
          <div key={p.name} className="bg-card border border-ink/12 rounded-2xl p-6.5 flex flex-col gap-3">
            <div className="font-mono text-xs tracking-widest uppercase text-muted-2">{p.name}</div>
            <div className="font-display font-bold text-4xl leading-none">{p.price}</div>
            <p className="text-sm leading-relaxed text-muted text-pretty">{p.body}</p>
            <CtaButton href="#cta" variant="outline" className="mt-2.5 text-center px-4.5 py-2.5 text-sm">{p.cta}</CtaButton>
          </div>
        ))}
      </div>
    </section>
  );
}
