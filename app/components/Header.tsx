import { useTranslations } from 'next-intl';
import { CtaButton } from './CtaButton';
import { Logo } from './Logo';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-20 bg-cream/88 backdrop-blur-md border-b border-ink/8">
      <div className="max-w-[70rem] mx-auto px-6 py-3 flex items-center gap-7">
        <a href="#" className="flex items-center gap-2.25 text-ink">
          <Logo size={26} className="rounded-md" />
          <span className="font-display font-semibold text-xl tracking-normal">{t('brand')}</span>
        </a>
        <nav className="hidden md:flex gap-5.5 text-sm text-muted ml-2">
          <a href="#how" className="text-muted hover:text-ink transition-colors">{t('navHow')}</a>
          <a href="#features" className="text-muted hover:text-ink transition-colors">{t('navFeatures')}</a>
          <a href="#pricing" className="text-muted hover:text-ink transition-colors">{t('navPricing')}</a>
          <a href="#faq" className="text-muted hover:text-ink transition-colors">{t('navFaq')}</a>
        </nav>
        <div className="flex-1" />
        <a href="#cta" className="hidden md:inline text-sm text-muted hover:text-ink transition-colors">{t('signIn')}</a>
        <CtaButton href="#cta" variant="dark" className="text-sm px-4.5 py-2.25">{t('download')}</CtaButton>
      </div>
    </header>
  );
}
