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
- `src/config.ts` — **`PLAY_STORE_URL` is defined here and only here**; update it to change every store link on the site. Also holds the footer links (privacy policy / terms pages are still to be added).
