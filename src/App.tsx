import { FloatingCubes } from "./components/FloatingCubes";
import { MiniPuzzle } from "./components/MiniPuzzle";
import { PlayBadge } from "./components/PlayBadge";
import { PRIVACY_URL, TERMS_URL } from "./config";

const FEATURES = [
  { icon: "assets/ui/star.png", label: "300 levels" },
  { icon: "assets/ui/check.png", label: "Plays offline" },
  { icon: "assets/ui/idea.png", label: "Hints & undo" },
];

export default function App() {
  return (
    <div className="page">
      <FloatingCubes />

      <header className="topbar">
        <a className="brand" href="./" aria-label="Cube Cups home">
          <span className="brand-icon">
            <img src="assets/app-icon.png" alt="" />
          </span>
          <span>Cube Cups</span>
        </a>
        <span className="platform-chip">Android · Free</span>
      </header>

      <main className="hero">
        <section className="copy">
          <img className="pile" src="assets/cube-pile.png" alt="" />
          <h1 className="title">Cube Cups</h1>
          <p className="tagline">Sort the cubes. Fill the cups. Relax.</p>
          <p className="lede">
            Pour stacks of colorful cubes between cups until every cup holds a single color. Easy to pick up,
            surprisingly hard to put down.
          </p>
          <ul className="features">
            {FEATURES.map((f) => (
              <li key={f.label}>
                <img src={f.icon} alt="" />
                {f.label}
              </li>
            ))}
          </ul>
          <PlayBadge />
        </section>

        <section className="demo" aria-label="Playable demo">
          <MiniPuzzle />
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Cube Cups</span>
        <nav>
          <a href={PRIVACY_URL}>Privacy Policy</a>
          <a href={TERMS_URL}>Terms &amp; Conditions</a>
        </nav>
      </footer>
    </div>
  );
}
