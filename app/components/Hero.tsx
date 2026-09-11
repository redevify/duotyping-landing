'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { HEADLINE_HOLD_MS, HEADLINE_TYPE_SPEED_MS } from '../content';
import { CtaButton } from './CtaButton';

export function Hero() {
  const t = useTranslations('Hero');
  const phrases = t.raw('phrases') as string[];
  const [headlineTyped, setHeadlineTyped] = useState('');
  const mountedRef = useRef(true);

  // Rotating headline phrase, typed out one character at a time.
  useEffect(() => {
    mountedRef.current = true;
    let phraseIndex = 0;
    let charIndex = 0;
    let typeTimer: ReturnType<typeof setInterval>;
    let holdTimer: ReturnType<typeof setTimeout>;

    function typePhrase() {
      const phrase = phrases[phraseIndex % phrases.length];
      charIndex = 0;
      setHeadlineTyped('');
      typeTimer = setInterval(() => {
        if (!mountedRef.current) return clearInterval(typeTimer);
        charIndex += 1;
        setHeadlineTyped(phrase.slice(0, charIndex));
        if (charIndex >= phrase.length) {
          clearInterval(typeTimer);
          holdTimer = setTimeout(() => {
            phraseIndex += 1;
            typePhrase();
          }, HEADLINE_HOLD_MS);
        }
      }, HEADLINE_TYPE_SPEED_MS);
    }
    typePhrase();

    return () => {
      mountedRef.current = false;
      clearInterval(typeTimer);
      clearTimeout(holdTimer);
    };
  }, [phrases]);

  return (
    <section className="max-w-[70rem] mx-auto px-6 pt-19 pb-5 grid grid-cols-1 gap-7.5 justify-items-center text-center">
      <div className="font-mono text-xs tracking-widest uppercase text-muted-2">{t('eyebrow')}</div>
      <h1 className="font-display font-bold text-[clamp(2.625rem,6.6vw,4.75rem)] leading-none tracking-tight -mt-3.5 max-w-[20ch] text-balance">
        <span className="block">{t('headlinePrefix')}</span>
        <span className="block">
          <span className="text-gold relative inline">
            {headlineTyped}
            <span className="inline-block w-0.75 h-[0.85em] bg-gold align-[-0.12em] ml-0.5 whitespace-nowrap animate-dt-blink" />
          </span>
        </span>
      </h1>
      <p className="text-[clamp(1.0625rem,2vw,1.25rem)] leading-normal text-muted max-w-[54ch] text-pretty">
        {t('subtitle')}
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <CtaButton href="#cta" variant="dark" className="text-base px-6.5 py-3.25">{t('download')}</CtaButton>
        <CtaButton href="#how" variant="outline" className="text-base px-6.5 py-3.25">{t('watchDemo')}</CtaButton>
      </div>
      <div className="font-mono text-xs tracking-widest text-muted-2 -mt-4">{t('footnote')}</div>
    </section>
  );
}
