'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import {
  DEMO_CLEANING_DELAY_MS,
  DEMO_CLEAN_DELAY_MS,
  DEMO_NEXT_SCENARIO_DELAY_MS,
  DEMO_TYPE_SPEED_MS,
} from '../content';

type Scenario = { label: string; messy: string; clean: string };

export function DemoWidget() {
  const t = useTranslations('DemoWidget');
  const scenarios = t.raw('scenarios') as Scenario[];
  const [typed, setTyped] = useState('');
  const [cleaning, setCleaning] = useState(false);
  const [showClean, setShowClean] = useState(false);
  const [label, setLabel] = useState(scenarios[0].label);
  const [clean, setClean] = useState('');

  // Rotating "messy in, clean out" demo scenario.
  useEffect(() => {
    let scenarioIndex = 0;
    let charIndex = 0;
    let typer: ReturnType<typeof setInterval>;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    function later(fn: () => void, ms: number) {
      const t = setTimeout(fn, ms);
      timers.push(t);
      return t;
    }

    function runDemo() {
      if (cancelled) return;
      const scenario = scenarios[scenarioIndex % scenarios.length];
      charIndex = 0;
      setTyped('');
      setCleaning(false);
      setShowClean(false);
      setLabel(scenario.label);
      setClean(scenario.clean);
      clearInterval(typer);
      typer = setInterval(() => {
        if (cancelled) return clearInterval(typer);
        charIndex += 1;
        setTyped(scenario.messy.slice(0, charIndex));
        if (charIndex >= scenario.messy.length) {
          clearInterval(typer);
          later(() => setCleaning(true), DEMO_CLEANING_DELAY_MS);
          later(() => {
            setCleaning(false);
            setShowClean(true);
          }, DEMO_CLEAN_DELAY_MS);
          later(() => {
            scenarioIndex += 1;
            runDemo();
          }, DEMO_NEXT_SCENARIO_DELAY_MS);
        }
      }, DEMO_TYPE_SPEED_MS);
    }
    runDemo();

    return () => {
      cancelled = true;
      clearInterval(typer);
      timers.forEach(clearTimeout);
    };
  }, [scenarios]);

  const isTyping = !cleaning && !showClean && typed.length > 0;

  return (
    <section className="max-w-5xl mx-auto px-6 pt-5 pb-2">
      <div className="relative bg-card border border-ink/10 rounded-3xl shadow-[0_1.5rem_3.75rem_-2.125rem_rgba(30,42,50,0.4)] overflow-hidden">
        <div className="flex items-center gap-2.5 px-5 py-3.25 border-b border-ink/8">
          <div className="flex gap-1.25">
            <span className="w-2.25 h-2.25 rounded-full bg-[#DCE1E4]" />
            <span className="w-2.25 h-2.25 rounded-full bg-[#DCE1E4]" />
            <span className="w-2.25 h-2.25 rounded-full bg-[#DCE1E4]" />
          </div>
          <span className="hidden sm:inline font-mono text-xs text-muted-2 ml-1.5">{label}</span>
          <div className="flex-1" />
          <div className="flex items-center gap-1.75 bg-ink px-2.75 py-1.25 rounded-full">
            <span className="flex items-center gap-0.75">
              <i className="block w-1 h-1 rounded-full bg-gold-mid animate-dt-pulse" />
              <i className="block w-1 h-1 rounded-full bg-gold-mid [animation:dt-pulse_1.2s_ease-in-out_0.2s_infinite]" />
              <i className="block w-1 h-1 rounded-full bg-gold-mid [animation:dt-pulse_1.2s_ease-in-out_0.4s_infinite]" />
            </span>
            <span className="hidden sm:inline font-mono text-xs tracking-widest text-cream">{t('badge')}</span>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))]">
          <div className="px-6.5 pt-6.5 pb-7.5 border-r border-ink/8 min-h-59">
            <div className="font-mono text-xs tracking-widest uppercase text-muted-2 mb-3.5">{t('youTyped')}</div>
            <p className={`text-base leading-relaxed text-muted-2 text-pretty inline ${isTyping ? 'animate-dt-jitter' : ''}`}>
              {typed}
              <span className="inline-block w-0.5 h-[1em] align-[-0.125rem] ml-0.25 bg-gold animate-dt-blink" />
            </p>
          </div>
          <div className="relative px-6.5 pt-6.5 pb-7.5 bg-tan min-h-59">
            <div className="font-mono text-xs tracking-widest uppercase text-muted-2 mb-3.5">{t('suggestions')}</div>
            {showClean && (
              <>
                <p className="text-base leading-relaxed text-ink animate-dt-rise text-pretty">{clean}</p>
                <div className="mt-3.5 font-mono text-xs text-muted-2 [animation:dt-rise_0.5s_ease_0.1s_both]">
                  {t('acceptedNote')}
                </div>
              </>
            )}
            {cleaning && (
              <>
                <div className="absolute top-13 inset-x-6.5 flex flex-col gap-2.25">
                  <span className="self-start font-mono text-xs text-gold bg-[rgba(44,74,124,0.09)] px-2.5 py-1.25 rounded-md animate-dt-rise">{t('flaggedRunOn')}</span>
                  <span className="self-start font-mono text-xs text-gold bg-[rgba(44,74,124,0.09)] px-2.5 py-1.25 rounded-md [animation:dt-rise_0.35s_ease_0.22s_both]">{t('flaggedTone')}</span>
                  <span className="self-start font-mono text-xs text-gold bg-[rgba(44,74,124,0.09)] px-2.5 py-1.25 rounded-md [animation:dt-rise_0.35s_ease_0.44s_both]">{t('flaggedStructure')}</span>
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 bottom-0 w-[24%] bg-[linear-gradient(90deg,transparent,rgba(44,74,124,0.09),transparent)] animate-dt-sweep" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
