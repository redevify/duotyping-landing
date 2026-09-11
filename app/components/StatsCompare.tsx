'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { CATCH_RATE_CLAIM, SELF_EDIT_CLAIM } from '../content';

export function StatsCompare() {
  const t = useTranslations('StatsCompare');
  const [wpmA, setWpmA] = useState(0);
  const [wpmB, setWpmB] = useState(0);

  // One-time count-up for the comparison bars.
  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const start = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      const p = Math.min(1, (now - start) / 1600);
      const eased = 1 - (1 - p) ** 3;
      setWpmA(Math.round(SELF_EDIT_CLAIM * eased));
      setWpmB(Math.round(CATCH_RATE_CLAIM * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  const barA = `${Math.round((wpmA / CATCH_RATE_CLAIM) * 100)}%`;
  const barB = `${Math.round((wpmB / CATCH_RATE_CLAIM) * 100)}%`;

  return (
    <section className="max-w-[70rem] mx-auto px-6 pt-21">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] gap-11 items-center">
        <div>
          <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-4">
            {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted max-w-[46ch] text-pretty">
            {t('body')}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-card border border-ink/10 rounded-2xl px-5.5 py-5">
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-sm text-muted-2">{t('editingYourself')}</span>
              <span className="font-mono text-xl text-muted-2">{wpmA}%</span>
            </div>
            <div className="h-2 rounded-full bg-tan overflow-hidden">
              <div className="h-full rounded-full bg-clay transition-[width] duration-400 ease-linear" style={{ width: barA }} />
            </div>
          </div>
          <div className="bg-ink rounded-2xl px-5.5 py-5">
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-sm text-gold-soft">{t('withDuoTyping')}</span>
              <span className="font-mono text-xl text-cream">{wpmB}%</span>
            </div>
            <div className="h-2 rounded-full bg-cream/16 overflow-hidden">
              <div className="h-full rounded-full bg-clay transition-[width] duration-400 ease-linear" style={{ width: barB }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
