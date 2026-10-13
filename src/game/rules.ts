// Core pour rules — copied verbatim from the Cube Cups app (src/game/rules.ts)
// so the landing demo plays by exactly the same rules as the game.
import type { Board, Move, Tube } from "./types";

export function topColor(tube: Tube): Tube[number] | null {
  return tube.length === 0 ? null : tube[tube.length - 1];
}

export function topRunLength(tube: Tube): number {
  if (tube.length === 0) return 0;
  const color = tube[tube.length - 1];
  let count = 0;
  for (let i = tube.length - 1; i >= 0 && tube[i] === color; i--) count++;
  return count;
}

export function canPour(board: Board, from: number, to: number, capacity: number): boolean {
  if (from === to) return false;
  const a = board[from];
  const b = board[to];
  if (!a || !b) return false;
  if (a.length === 0) return false;
  if (b.length >= capacity) return false;

  const aColor = topColor(a);
  const bColor = topColor(b);
  return bColor === null || bColor === aColor;
}

export function applyPour(board: Board, from: number, to: number, capacity: number): { board: Board; move: Move } {
  const a = board[from];
  const b = board[to];
  const color = topColor(a)!;
  const run = topRunLength(a);
  const space = capacity - b.length;
  const count = Math.min(run, space);

  const nextA = a.slice(0, a.length - count);
  const nextB = [...b, ...Array(count).fill(color)];
  const nextBoard = board.map((tube, i) => (i === from ? nextA : i === to ? nextB : tube));

  return { board: nextBoard, move: { from, to, color, count } };
}

export function undoMove(board: Board, move: Move): Board {
  const { from, to, color, count } = move;
  const a = board[from];
  const b = board[to];
  const nextA = [...a, ...Array(count).fill(color)];
  const nextB = b.slice(0, b.length - count);
  return board.map((tube, i) => (i === from ? nextA : i === to ? nextB : tube));
}

export function isSolved(board: Board, capacity: number): boolean {
  return board.every((tube) => tube.length === 0 || (tube.length === capacity && tube.every((c) => c === tube[0])));
}
