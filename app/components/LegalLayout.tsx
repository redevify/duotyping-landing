import type { ReactNode } from 'react';
import { Logo } from './Logo';

const DOCS = [
  { slug: 'privacy', href: '/privacy', label: 'Privacy Policy' },
  { slug: 'terms', href: '/terms', label: 'Terms of Service' },
  { slug: 'license', href: '/license', label: 'License Agreement' },
] as const;

export function LegalLayout({
  title,
  updated,
  currentSlug,
  children,
}: {
  title: string;
  updated: string;
  currentSlug: (typeof DOCS)[number]['slug'];
  children: ReactNode;
}) {
  const otherDocs = DOCS.filter((doc) => doc.slug !== currentSlug);

  return (
    <div className="min-h-screen">
      <header className="border-b border-ink/12">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center gap-2.5">
          <a href="/" className="flex items-center gap-2.5 text-ink">
            <Logo size={24} className="rounded-md" />
            <span className="font-display font-semibold text-base">DuoTyping</span>
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        <div className="font-mono text-xs tracking-widest uppercase text-muted-2 mb-2.5">Legal</div>
        <h1 className="font-display font-bold text-4xl tracking-tight mb-2">{title}</h1>
        <p className="mb-10 text-sm text-muted-2">Last updated {updated}</p>

        <div className="flex flex-col gap-8 text-base leading-relaxed text-ink">{children}</div>

        <div className="mt-14 pt-6 border-t border-ink/12 flex flex-wrap gap-4.5 text-sm">
          <a href="/" className="text-muted hover:text-ink transition-colors">← Back home</a>
          {otherDocs.map((doc) => (
            <a key={doc.slug} href={doc.href} className="text-muted hover:text-ink transition-colors">{doc.label}</a>
          ))}
        </div>
      </main>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading?: string; children: ReactNode }) {
  return (
    <section>
      {heading && <h2 className="font-display font-semibold text-xl mb-2.5">{heading}</h2>}
      <div className="flex flex-col gap-2.5 text-[#3A4A56]">{children}</div>
    </section>
  );
}
