import { useTranslations } from 'next-intl';

export function LogoMarquee() {
  const t = useTranslations('LogoMarquee');
  const logos = t.raw('logos') as string[];

  return (
    <section className="pt-14 pb-3 overflow-hidden">
      <div className="text-center font-mono text-xs tracking-widest uppercase text-muted-2 mb-6.5">{t('builtFor')}</div>
      <div className="flex w-max animate-dt-marquee">
        {[0, 1].map((group) => (
          <div key={group} className="flex gap-15.5 pr-15.5 items-center">
            {logos.map((logo) => (
              <span key={logo} className="font-display font-semibold text-2xl text-amber whitespace-nowrap">{logo}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
