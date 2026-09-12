import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'DuoTyping — your writing buddy that never rewrites you';

const logoDataUrl = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public/logo.png')).toString('base64')}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 28,
          padding: '0 96px',
          background: '#1e2a32',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUrl} width={64} height={64} style={{ borderRadius: 14 }} />
          <span style={{ fontSize: 40, fontWeight: 700, color: '#f1efe6' }}>DuoTyping</span>
        </div>
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, lineHeight: 1.15, color: '#f1efe6', maxWidth: 900 }}>
          Your writing buddy that <span style={{ color: '#b8802a' }}>never rewrites you.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 13, letterSpacing: 2, color: '#6e7680', textTransform: 'uppercase' }}>
          INSTANT SUGGESTIONS · 100% ON-DEVICE · NOTHING LEAVES YOUR MACHINE
        </div>
      </div>
    ),
    { ...size },
  );
}
