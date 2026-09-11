import { useTranslations } from 'next-intl';

type Quote = { text: string; name: string; role: string; initials: string };

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const quotes = t.raw('quotes') as Quote[];

  return (
    <section className="max-w-[70rem] mx-auto px-6 pt-24">
      <div className="font-mono text-xs tracking-widest uppercase text-muted-2 mb-3.5">{t('eyebrow')}</div>
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-10">
        {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-5 items-stretch">
        <div className="bg-gold text-card rounded-2xl p-7.5 flex flex-col gap-5.5">
          <p className="font-display font-semibold text-2xl leading-tight text-pretty">
            &quot;{t('featuredQuote')}&quot;
          </p>
          <div className="flex gap-7 mt-auto">
            <div>
              <div className="font-display font-bold text-3xl leading-none">{t('featuredStatCpuValue')}</div>
              <div className="text-xs text-tan-text-2 mt-1">{t('featuredStatCpuLabel')}</div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl leading-none">{t('featuredStatNetworkValue')}</div>
              <div className="text-xs text-tan-text-2 mt-1">{t('featuredStatNetworkLabel')}</div>
            </div>
          </div>
          <a href="#" className="text-card text-sm border-b border-cream/45 self-start pb-0.5 hover:opacity-70 transition-opacity">{t('featuredCta')}</a>
        </div>
        {quotes.map((q) => (
          <figure key={q.name} className="bg-card border border-ink/10 rounded-2xl p-6.5 flex flex-col gap-4.5">
            <blockquote className="text-base leading-relaxed text-ink text-pretty">&quot;{q.text}&quot;</blockquote>
            <figcaption className="flex items-center gap-2.75 mt-auto">
              <span className="w-8 h-8 rounded-full bg-tan inline-flex items-center justify-center font-mono text-xs text-muted-2">{q.initials}</span>
              <span>
                <span className="block text-sm font-medium">{q.name}</span>
                <span className="block text-xs text-muted-2">{q.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
