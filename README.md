# TXP.DEV

Personal site for [Tibo X Perol](https://txp.dev) — founder, engineer, scientist.

Live: [txp.dev](https://txp.dev)

## Stack

- React 19 + TypeScript
- Vite 8 + [TanStack Start](https://tanstack.com/start)
- Tailwind v4
- Nitro `vercel` preset for production

No Cloudflare Workers, Wrangler, D1, or ChatGPT Sites tooling. Auth is optional (Google / X) and the public page stays public without it.

## Local

```bash
npm install
npm run dev
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build + DB migrate |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run preview` | Serve the production build |

## Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Build command is `npm run build`. Framework is picked up from the Vite + Nitro Vercel preset.
3. Point `txp.dev` and `www.txp.dev` at the project (Domains).

## Content

| Edit | File |
| --- | --- |
| Projects, profile links, metadata | [`src/lib/site.ts`](src/lib/site.ts) |
| Home workbench | [`src/routes/index.tsx`](src/routes/index.tsx) |
| Look and feel | [`src/styles.css`](src/styles.css) |
| Optional sign-in | [`src/routes/login.tsx`](src/routes/login.tsx) |
