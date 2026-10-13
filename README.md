# Cube Cups — landing site

Promotional one-screen site for **Cube Cups** (Android, Google Play: `com.praboda.cubecups`).
Vite + React + TypeScript. The page never scrolls and fits any viewport.

```bash
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
```

- `public/assets/` — game art copied from the app repo (`cube-cups/assets`), renamed to web-safe filenames.
- `public/fonts/` — the game's heading font (WhatTheCraft).
- `src/game/` — the app's pour rules, copied verbatim, powering the playable demo.
- `src/config.ts` — **`PLAY_STORE_URL` is defined here and only here**; update it to change every store link on the site. Also holds the developer name, contact email and "last updated" date used by the legal pages.
- `privacy.html`, `terms.html` + `src/legal/` — Privacy Policy and Terms & Conditions (multi-page build, see `vite.config.ts`). These pages scroll; only the landing page is locked to one screen.
