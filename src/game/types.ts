// Color IDs are capped at 6 (0..5) — see .agents/assets.md §3, sprites only
// exist for these six. Do not raise this without adding art.
export type Color = 0 | 1 | 2 | 3 | 4 | 5;

export const CAPACITY = 4;

// A tube is a stack of cubes ordered bottom -> top.
export type Tube = Color[];

export type Board = Tube[];

export interface Move {
  from: number;
  to: number;
  color: Color;
  count: number;
}

export interface LevelConfig {
  numColors: number;
  emptyTubes: number;
  capacity: number;
}

export interface Level {
  id: number;
  board: Board;
  colors: number;
  emptyTubes: number;
  solutionLength: number;
}
