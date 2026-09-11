import { useTranslations } from 'next-intl';

export function AnnouncementBar() {
  const t = useTranslations('AnnouncementBar');

  return (
    <div className="flex flex-wrap justify-center items-center gap-2.5 px-5 py-2.25 bg-ink text-cream text-sm tracking-normal text-center">
      <span className="font-mono text-xs tracking-widest uppercase text-gold-soft">{t('badge')}</span>
      <span>{t('text')}</span>
      <a href="#" className="text-cream border-b border-cream/40 hover:opacity-70 transition-opacity">{t('cta')}</a>
    </div>
  );
}
