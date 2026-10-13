// "Get it on Google Play" call-to-action.
import { PLAY_STORE_URL } from "../config";

export function PlayBadge() {
  return (
    <a className="play-badge" href={PLAY_STORE_URL} target="_blank" rel="noopener" aria-label="Get Cube Cups on Google Play">
      <svg viewBox="0 0 24 26" width="26" height="28" aria-hidden="true">
        <path d="M1.2.6 13.3 12.7 1.2 24.9c-.4-.3-.7-.8-.7-1.4V2c0-.6.3-1.1.7-1.4Z" fill="#00D7FE" />
        <path d="M17.4 8.6 13.3 12.7 1.2.6c.4-.3 1-.4 1.6-.1l14.6 8.1Z" fill="#00F076" />
        <path d="m17.4 16.9-14.6 8.1c-.6.3-1.2.2-1.6-.1l12.1-12.2 4.1 4.2Z" fill="#FF3A44" />
        <path d="m22.3 11.3-4.9-2.7-4.1 4.1 4.1 4.2 4.9-2.7c1.1-.6 1.1-2.3 0-2.9Z" fill="#FFD109" />
      </svg>
      <span className="play-badge-text">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}
