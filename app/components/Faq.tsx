'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations('Faq');
  const items = t.raw('items') as FaqItem[];
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 pt-24 scroll-mt-20">
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3rem)] leading-none tracking-tight mb-8">
        {t('heading')} <span className="text-gold">{t('headingHighlight')}</span>
      </h2>
      <div className="flex flex-col">
        {items.map((f, i) => (
          <div key={f.q} className="border-t border-ink/14">
            <button
              type="button"
              onClick={() => setOpenFaq((current) => (current === i ? -1 : i))}
              aria-expanded={openFaq === i}
              className="group w-full bg-transparent border-0 py-5 flex gap-4.5 items-center cursor-pointer text-left font-sans text-lg font-medium text-ink"
            >
              <span className="flex-1 group-hover:text-gold transition-colors">{f.q}</span>
              <span className={`font-mono text-lg text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              aria-hidden={openFaq !== i}
            >
              <div className="overflow-hidden">
                <p className="pr-6 sm:pr-15 pb-5.5 text-base leading-relaxed text-muted text-pretty">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-ink/14" />
      </div>
    </section>
  );
}
