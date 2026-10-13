// Decorative cube sprites drifting in the background.
import type { CSSProperties } from "react";
import { CUBE_SPRITES } from "../config";

// [color, left %, top %, size px, rotation deg, animation delay s]
const CUBES: [number, number, number, number, number, number][] = [
  [0, 4, 12, 54, -14, 0],
  [3, 46, 6, 34, 18, 1.4],
  [1, 92, 18, 46, 12, 0.6],
  [4, 88, 70, 58, -10, 2.1],
  [2, 6, 78, 40, 22, 1.1],
  [5, 52, 90, 30, -20, 2.8],
  [1, 64, 82, 24, 8, 3.4],
];

export function FloatingCubes() {
  return (
    <div className="floaters" aria-hidden="true">
      {CUBES.map(([color, left, top, size, rot, delay], i) => (
        <img
          key={i}
          className="floater"
          src={CUBE_SPRITES[color]}
          alt=""
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              "--rot": `${rot}deg`,
              animationDelay: `-${delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
