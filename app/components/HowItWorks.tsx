import { useTranslations } from 'next-intl';

type Step = { num: string; title: string; body: string; lines: string[] };

export function HowItWorks() {
  const t = useTranslations('HowItWorks');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="how" className="max-w-[70rem] mx-auto px-6 pt-24 scroll-mt-20">
      <div className="font-mono text-xs tracking-widest uppercase text-muted-2 mb-3.5">{t('eyebrow')}</div>
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-11 max-w-[20ch]">
        {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-5">
        {steps.map((s) => (
          <article key={s.num} className="bg-card border border-ink/10 rounded-2xl p-6.5 flex flex-col gap-3.5">
            <div className="font-mono text-xs text-amber">{s.num}</div>
            <div className="min-h-24 rounded-xl bg-tan p-4 flex flex-col gap-2 justify-center">
              {s.lines.map((line) => (
                <div key={line} className="font-mono text-xs text-muted-2 leading-normal">{line}</div>
              ))}
            </div>
            <h3 className="font-display font-semibold text-2xl tracking-normal mt-1">{s.title}</h3>
            <p className="text-base leading-relaxed text-muted text-pretty">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
