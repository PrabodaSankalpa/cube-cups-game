// Shared shell for the Privacy Policy and Terms pages: brand header,
// title + date, readable content column, footer links.
import type { ReactNode } from "react";
import { LEGAL_LAST_UPDATED, PRIVACY_URL, TERMS_URL } from "../config";
import { PlayBadge } from "../components/PlayBadge";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="legal">
      <header className="legal-top">
        <a className="brand" href="/" aria-label="Cube Cups home">
          <span className="brand-icon">
            <img src="/assets/app-icon.png" alt="" />
          </span>
          <span>Cube Cups</span>
        </a>
        <a className="legal-back" href="/">
          ← Back to home
        </a>
      </header>

      <main className="legal-card">
        <h1>{title}</h1>
        <p className="legal-date">Last updated: {LEGAL_LAST_UPDATED}</p>
        {children}
      </main>

      <footer className="legal-foot">
        <PlayBadge />
        <nav>
          <a href={PRIVACY_URL}>Privacy Policy</a>
          <a href={TERMS_URL}>Terms &amp; Conditions</a>
        </nav>
        <span>© {new Date().getFullYear()} Cube Cups</span>
      </footer>
    </div>
  );
}
