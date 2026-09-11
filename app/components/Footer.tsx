import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="max-w-[70rem] mx-auto px-6 pt-18 pb-11.5">
      <div className="flex flex-wrap gap-6 items-center border-t border-ink/12 pt-6.5">
        <span className="flex items-center gap-2 font-display font-semibold text-lg">
          <Logo size={20} className="rounded-md" />
          {t('brand')}
        </span>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href="#pricing" className="text-muted hover:text-ink transition-colors">{t('pricing')}</a>
          <a href="/privacy" className="text-muted hover:text-ink transition-colors">{t('privacy')}</a>
          <a href="/terms" className="text-muted hover:text-ink transition-colors">{t('terms')}</a>
          <a href="/license" className="text-muted hover:text-ink transition-colors">{t('license')}</a>
        </div>
        <div className="flex-1" />
        <span className="text-sm text-muted-2">{t('copyright')}</span>
      </div>
    </footer>
  );
}
