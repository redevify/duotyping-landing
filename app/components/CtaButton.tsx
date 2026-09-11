import type { ReactNode } from 'react';

const VARIANTS = {
  dark: 'bg-ink text-cream font-semibold rounded-full hover:bg-gold transition-colors',
  outline: 'border border-ink/22 text-ink font-semibold rounded-full hover:border-ink transition-colors',
};

export function CtaButton({
  href,
  variant,
  className = '',
  children,
}: {
  href: string;
  variant: 'dark' | 'outline';
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`${VARIANTS[variant]} ${className}`}>
      {children}
    </a>
  );
}
