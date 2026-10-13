// ─────────────────────────────────────────────────────────────────────────────
// Google Play listing URL — the ONLY place it is defined. Every "Get it on
// Google Play" button and store link on the site reads this value, so to
// change the link, edit this line and nothing else.
// ─────────────────────────────────────────────────────────────────────────────
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.praboda.cubecups";

export const PRIVACY_URL = "privacy.html";
export const TERMS_URL = "terms.html";

// Shown on the Privacy Policy and Terms pages.
export const DEVELOPER_NAME = "Praboda Sankalpa";
export const CONTACT_EMAIL = "hi.sankalpadev@gmail.com";
export const LEGAL_LAST_UPDATED = "October 13, 2026";

// Cube sprite per palette color ID (0..5) — same order as the app's assets/index.ts.
export const CUBE_SPRITES = [
  "assets/cubes/red.png",
  "assets/cubes/blue.png",
  "assets/cubes/green.png",
  "assets/cubes/yellow.png",
  "assets/cubes/purple.png",
  "assets/cubes/orange.png",
] as const;

export const COLOR_NAMES = ["red", "blue", "green", "yellow", "purple", "orange"] as const;
