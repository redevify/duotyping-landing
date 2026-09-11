# duotyping-landing

Public landing page for Duotyping. Static Next.js App Router export, deployed independently of the license API (`duotyping-api`). No server features (no API routes, server actions, SSR, ISR, or middleware) and no runtime fetch calls.

## Install & build

```bash
npm install
npm run build
```

This produces static output in `out` (`out/index.html` is the entry point). For local development: `npm run dev`.

## Deploying

Deploys as a Cloudflare Worker serving static assets (see `wrangler.jsonc`, `assets.directory: ./out`):

```bash
npx wrangler login
npm run build
npm run deploy
```

Set the Node version / `NODE_VERSION` compatibility flag to `>=20.9.0` (matches `engines.node` in `package.json`) if configuring a build pipeline elsewhere.

No environment variables or secrets are required for this static site.
