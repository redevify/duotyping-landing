import { useTranslations } from 'next-intl';

type Feature = { tag: string; title: string; body: string };

export function Features() {
  const t = useTranslations('Features');
  const items = t.raw('items') as Feature[];

  return (
    <section id="features" className="max-w-[70rem] mx-auto px-6 pt-24 scroll-mt-20">
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-11 max-w-[18ch]">
        {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14.5rem,1fr))] gap-4">
        {items.map((f) => (
          <div key={f.tag} className="bg-card border border-ink/12 rounded-2xl px-6 pt-7 pb-7.5 flex flex-col gap-2.5">
            <span className="font-mono text-xs tracking-widest text-gold">{f.tag}</span>
            <h3 className="font-display font-semibold text-xl mt-0.5">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted text-pretty">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
