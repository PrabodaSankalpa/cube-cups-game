// A tiny playable level so visitors can feel the game before installing.
// Uses the app's own pour rules (src/game/rules.ts).
import { useState } from "react";
import { applyPour, canPour, isSolved } from "../game/rules";
import { CAPACITY, type Board } from "../game/types";
import { PLAY_STORE_URL } from "../config";
import { Cup } from "./Cup";

// Hand-picked 3-color deal with two empty cups — solvable in 9 pours.
const START: Board = [[0, 1, 2, 0], [2, 0, 1, 1], [1, 2, 0, 2], [], []];

export function MiniPuzzle() {
  const [board, setBoard] = useState<Board>(START);
  const [selected, setSelected] = useState<number | null>(null);
  const [shake, setShake] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const solved = isSolved(board, CAPACITY);

  const handleCup = (i: number) => {
    if (solved) return;
    if (selected === null) {
      if (board[i].length > 0) setSelected(i);
      return;
    }
    if (selected === i) {
      setSelected(null);
      return;
    }
    if (canPour(board, selected, i, CAPACITY)) {
      setBoard(applyPour(board, selected, i, CAPACITY).board);
      setMoves((m) => m + 1);
      setSelected(null);
    } else {
      setShake(i);
      window.setTimeout(() => setShake(null), 400);
      setSelected(board[i].length > 0 ? i : null);
    }
  };

  const reset = () => {
    setBoard(START);
    setSelected(null);
    setMoves(0);
  };

  return (
    <div className={`puzzle${solved ? " is-solved" : ""}`}>
      <div className="puzzle-head">
        <span className="puzzle-title">
          <img src="/assets/ui/play.png" alt="" />
          Try a level
        </span>
        <span className="puzzle-moves" aria-live="polite">
          {moves} {moves === 1 ? "move" : "moves"}
        </span>
        <button type="button" className="icon-btn" onClick={reset} aria-label="Restart level">
          <img src="/assets/ui/re-try.png" alt="" />
        </button>
      </div>

      <div className="board" role="group" aria-label="Puzzle board">
        {board.map((tube, i) => (
          <Cup
            key={i}
            index={i}
            tube={tube}
            selected={selected === i}
            shake={shake === i}
            onClick={() => handleCup(i)}
          />
        ))}
      </div>

      <p className="puzzle-hint" aria-live="polite">
        {solved ? (
          <>
            <img src="/assets/ui/trophy.png" alt="" /> Solved! 299 more levels are waiting —{" "}
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener">
              get the app
            </a>
          </>
        ) : selected === null ? (
          "Tap a cup, then tap where to pour."
        ) : (
          "Now tap a cup with the same top color — or an empty one."
        )}
      </p>
    </div>
  );
}
