// A cup: the game's Cup.png art with a bottom-anchored cube stack inside,
// sized with the same insets the app uses (see the app's components/Cup.tsx).
import { COLOR_NAMES, CUBE_SPRITES } from "../config";
import type { Tube } from "../game/types";

interface CupProps {
  index: number;
  tube: Tube;
  selected: boolean;
  shake: boolean;
  onClick: () => void;
}

export function Cup({ index, tube, selected, shake, onClick }: CupProps) {
  const label =
    tube.length === 0
      ? `Cup ${index + 1}, empty`
      : `Cup ${index + 1}, ${tube.length} cubes, top color ${COLOR_NAMES[tube[tube.length - 1]]}`;

  return (
    <button
      type="button"
      className={`cup${selected ? " is-selected" : ""}${shake ? " is-shaking" : ""}`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={selected}
    >
      <img className="cup-art" src="assets/cup.png" alt="" draggable={false} />
      <span className="cup-stack">
        {tube.map((color, i) => (
          <img
            // Keyed by slot + color so a newly poured cube re-runs its drop-in animation.
            key={`${i}-${color}`}
            className="cube"
            src={CUBE_SPRITES[color]}
            alt=""
            draggable={false}
          />
        ))}
      </span>
      {/* Same art again, faint, over the cubes — reads as the front of the glass. */}
      <img className="cup-art cup-front" src="assets/cup.png" alt="" draggable={false} />
    </button>
  );
}
