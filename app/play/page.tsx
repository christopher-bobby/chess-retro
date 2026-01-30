"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Chess, Square, Move } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useStockfish } from "../hooks/useStockfish";

type PlayerColor = "white" | "black";

interface MoveEntry {
  moveNumber: number;
  white?: { san: string; from: string; to: string };
  black?: { san: string; from: string; to: string };
}

export default function PlayPage() {
  const [game, setGame] = useState(new Chess());
  const [playerColor, setPlayerColor] = useState<PlayerColor>("white");
  const [gameStatus, setGameStatus] = useState<string>("");
  const [difficulty, setDifficulty] = useState(10);
  const [moveHistory, setMoveHistory] = useState<MoveEntry[]>([]);
  const [undoStack, setUndoStack] = useState<string[]>([]);
  const [redoStack, setRedoStack] = useState<string[]>([]);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [resigned, setResigned] = useState<PlayerColor | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Square[]>([]);
  const moveListRef = useRef<HTMLDivElement>(null);
  const { isReady, isThinking, getMove } = useStockfish();

  // Update game status
  const updateStatus = useCallback((currentGame: Chess) => {
    if (resigned) {
      const winner = resigned === "white" ? "Black" : "White";
      setGameStatus(`${resigned === "white" ? "White" : "Black"} resigned. ${winner} wins!`);
    } else if (currentGame.isCheckmate()) {
      const winner = currentGame.turn() === "w" ? "Black" : "White";
      setGameStatus(`Checkmate! ${winner} wins!`);
    } else if (currentGame.isDraw()) {
      if (currentGame.isStalemate()) {
        setGameStatus("Draw by stalemate!");
      } else if (currentGame.isThreefoldRepetition()) {
        setGameStatus("Draw by repetition!");
      } else if (currentGame.isInsufficientMaterial()) {
        setGameStatus("Draw by insufficient material!");
      } else {
        setGameStatus("Draw!");
      }
    } else if (currentGame.isCheck()) {
      setGameStatus("Check!");
    } else {
      setGameStatus("");
    }
  }, [resigned]);

  // Format move for display
  const addMoveToHistory = useCallback((move: Move, currentGame: Chess) => {
    setMoveHistory(prev => {
      const moveData = { san: move.san, from: move.from, to: move.to };
      
      if (move.color === "w") {
        // White move - add new entry
        const moveNumber = Math.floor(currentGame.history().length / 2) + (currentGame.history().length % 2 === 0 ? 0 : 1);
        return [...prev, { moveNumber, white: moveData }];
      } else {
        // Black move - update last entry
        const newHistory = [...prev];
        if (newHistory.length > 0) {
          newHistory[newHistory.length - 1] = {
            ...newHistory[newHistory.length - 1],
            black: moveData
          };
        }
        return newHistory;
      }
    });
  }, []);

  // Scroll move list to bottom
  useEffect(() => {
    if (moveListRef.current) {
      moveListRef.current.scrollTop = moveListRef.current.scrollHeight;
    }
  }, [moveHistory]);

  // Make Stockfish move
  const makeStockfishMove = useCallback(() => {
    if (!isReady || game.isGameOver() || resigned) return;

    const currentTurn = game.turn();
    const stockfishColor = playerColor === "white" ? "b" : "w";

    if (currentTurn === stockfishColor) {
      getMove(
        game.fen(),
        (bestMove) => {
          const gameCopy = new Chess(game.fen());
          const from = bestMove.slice(0, 2) as Square;
          const to = bestMove.slice(2, 4) as Square;
          const promotion = bestMove.length > 4 ? bestMove[4] : undefined;

          try {
            const move = gameCopy.move({ from, to, promotion });
            if (move) {
              setUndoStack(prev => [...prev, game.fen()]);
              setRedoStack([]);
              setGame(gameCopy);
              setLastMove({ from, to });
              addMoveToHistory(move, gameCopy);
              updateStatus(gameCopy);
            }
          } catch (e) {
            console.error("Invalid move from Stockfish:", bestMove, e);
          }
        },
        difficulty
      );
    }
  }, [isReady, game, playerColor, getMove, difficulty, updateStatus, addMoveToHistory, resigned]);

  // Trigger Stockfish move when it's its turn
  useEffect(() => {
    const currentTurn = game.turn();
    const stockfishColor = playerColor === "white" ? "b" : "w";

    if (currentTurn === stockfishColor && !game.isGameOver() && isReady && !isThinking && !resigned) {
      const timer = setTimeout(makeStockfishMove, 300);
      return () => clearTimeout(timer);
    }
  }, [game, playerColor, isReady, isThinking, makeStockfishMove, resigned]);

  // Helper function to make a move
  const makePlayerMove = (sourceSquare: Square, targetSquare: Square) => {
    if (resigned) return false;
    
    const currentTurn = game.turn();
    const playerTurnColor = playerColor === "white" ? "w" : "b";

    // Only allow moves on player's turn
    if (currentTurn !== playerTurnColor) return false;

    const gameCopy = new Chess(game.fen());
    const piece = game.get(sourceSquare);

    try {
      // Check if it's a pawn promotion
      const promotion =
        piece?.type === "p" &&
        ((playerColor === "white" && targetSquare[1] === "8") ||
          (playerColor === "black" && targetSquare[1] === "1"))
          ? "q"
          : undefined;

      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion,
      });

      if (move === null) return false;

      setUndoStack(prev => [...prev, game.fen()]);
      setRedoStack([]);
      setGame(gameCopy);
      setLastMove({ from: sourceSquare, to: targetSquare });
      setSelectedSquare(null);
      setLegalMoves([]);
      addMoveToHistory(move, gameCopy);
      updateStatus(gameCopy);
      return true;
    } catch {
      return false;
    }
  };

  // Handle drag and drop
  const onDrop = (sourceSquare: Square, targetSquare: Square) => {
    setSelectedSquare(null);
    setLegalMoves([]);
    return makePlayerMove(sourceSquare, targetSquare);
  };

  // Handle square click for click-to-move
  const onSquareClick = (square: Square) => {
    if (resigned || game.isGameOver()) return;

    const currentTurn = game.turn();
    const playerTurnColor = playerColor === "white" ? "w" : "b";
    if (currentTurn !== playerTurnColor) return;

    const piece = game.get(square);

    // If we already have a selected square, try to move there
    if (selectedSquare) {
      // If clicking on a legal move square, make the move
      if (legalMoves.includes(square)) {
        makePlayerMove(selectedSquare, square);
        return;
      }
      
      // If clicking on own piece, select it instead
      if (piece && piece.color === playerTurnColor) {
        const moves = game.moves({ square, verbose: true });
        setSelectedSquare(square);
        setLegalMoves(moves.map(m => m.to as Square));
        return;
      }
      
      // Otherwise deselect
      setSelectedSquare(null);
      setLegalMoves([]);
      return;
    }

    // No square selected yet - select if it's our piece
    if (piece && piece.color === playerTurnColor) {
      const moves = game.moves({ square, verbose: true });
      setSelectedSquare(square);
      setLegalMoves(moves.map(m => m.to as Square));
    }
  };

  // Undo move (undoes both player and stockfish moves)
  const undoMove = () => {
    if (undoStack.length < 2 || isThinking || resigned) return;
    
    // Undo two moves (player + stockfish)
    const newUndoStack = [...undoStack];
    const currentFen = game.fen();
    newUndoStack.pop(); // Remove stockfish move
    const prevFen = newUndoStack.pop(); // Get position before player move
    
    if (prevFen) {
      setRedoStack(prev => [prevFen, currentFen, ...prev]);
      setUndoStack(newUndoStack);
      const newGame = new Chess(prevFen);
      setGame(newGame);
      setLastMove(null);
      
      // Rebuild move history
      const moves = newGame.history({ verbose: true });
      const newHistory: MoveEntry[] = [];
      for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        if (move.color === "w") {
          newHistory.push({
            moveNumber: Math.floor(i / 2) + 1,
            white: { san: move.san, from: move.from, to: move.to }
          });
        } else if (newHistory.length > 0) {
          newHistory[newHistory.length - 1].black = { san: move.san, from: move.from, to: move.to };
        }
      }
      setMoveHistory(newHistory);
      updateStatus(newGame);
    }
  };

  // Redo move
  const redoMove = () => {
    if (redoStack.length < 2 || isThinking || resigned) return;
    
    const newRedoStack = [...redoStack];
    newRedoStack.shift(); // Skip first
    const nextFen = newRedoStack.shift();
    
    if (nextFen) {
      setUndoStack(prev => [...prev, game.fen(), nextFen]);
      setRedoStack(newRedoStack);
      const newGame = new Chess(nextFen);
      setGame(newGame);
      
      // Rebuild move history
      const moves = newGame.history({ verbose: true });
      const newHistory: MoveEntry[] = [];
      for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        if (move.color === "w") {
          newHistory.push({
            moveNumber: Math.floor(i / 2) + 1,
            white: { san: move.san, from: move.from, to: move.to }
          });
        } else if (newHistory.length > 0) {
          newHistory[newHistory.length - 1].black = { san: move.san, from: move.from, to: move.to };
        }
      }
      setMoveHistory(newHistory);
      if (moves.length > 0) {
        const lastMoveData = moves[moves.length - 1];
        setLastMove({ from: lastMoveData.from, to: lastMoveData.to });
      }
      updateStatus(newGame);
    }
  };

  // Resign
  const handleResign = () => {
    if (game.isGameOver() || resigned) return;
    setResigned(playerColor);
    const winner = playerColor === "white" ? "Black" : "White";
    setGameStatus(`You resigned. ${winner} wins!`);
  };

  // Reset game
  const resetGame = () => {
    setGame(new Chess());
    setGameStatus("");
    setMoveHistory([]);
    setUndoStack([]);
    setRedoStack([]);
    setLastMove(null);
    setResigned(null);
    setSelectedSquare(null);
    setLegalMoves([]);
  };

  // Switch sides
  const switchSides = () => {
    setPlayerColor(playerColor === "white" ? "black" : "white");
    resetGame();
  };

  // Custom square styles for highlighting
  const customSquareStyles: { [key: string]: React.CSSProperties } = {};
  
  // Highlight last move
  if (lastMove) {
    customSquareStyles[lastMove.from] = { backgroundColor: "rgba(255, 255, 0, 0.4)" };
    customSquareStyles[lastMove.to] = { backgroundColor: "rgba(255, 255, 0, 0.4)" };
  }
  
  // Highlight selected square
  if (selectedSquare) {
    customSquareStyles[selectedSquare] = { backgroundColor: "rgba(255, 255, 0, 0.6)" };
  }
  
  // Highlight legal moves
  legalMoves.forEach(square => {
    const piece = game.get(square);
    if (piece) {
      // Capture move - red tint
      customSquareStyles[square] = { 
        backgroundColor: "rgba(255, 0, 0, 0.4)",
        borderRadius: "0"
      };
    } else {
      // Regular move - green dot
      customSquareStyles[square] = {
        background: "radial-gradient(circle, rgba(0, 128, 0, 0.6) 25%, transparent 25%)",
      };
    }
  });

  const isGameOver = game.isGameOver() || resigned !== null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-2">
            Play Against Stockfish
          </h1>
          <p className="text-amber-200/60 font-serif italic">
            Test your skills against the engine
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-6">
          {/* Main Board Area */}
          <div className="flex flex-col items-center">
            {/* Top Controls */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded font-serif transition-colors border border-amber-600"
              >
                New Game
              </button>
              <button
                onClick={switchSides}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 rounded font-serif transition-colors border border-stone-600"
              >
                Play as {playerColor === "white" ? "Black" : "White"}
              </button>
              <div className="flex items-center gap-2 bg-stone-800 px-3 py-2 rounded border border-stone-700">
                <label className="text-amber-200 text-sm font-serif">Difficulty:</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(Number(e.target.value))}
                  className="bg-stone-700 text-amber-100 rounded px-2 py-1 text-sm border border-stone-600"
                >
                  <option value={1}>Beginner ~800</option>
                  <option value={3}>Easy ~1200</option>
                  <option value={6}>Medium ~1600</option>
                  <option value={10}>Hard ~2000</option>
                  <option value={15}>Expert ~2400</option>
                  <option value={20}>Master ~2800+</option>
                </select>
              </div>
            </div>

            {/* Status */}
            <div className="mb-3 h-8 flex items-center gap-3">
              {!isReady && (
                <span className="text-amber-400 text-sm font-serif">Loading Stockfish...</span>
              )}
              {isThinking && (
                <span className="text-amber-300 text-sm flex items-center gap-2 font-serif">
                  <span className="inline-block w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></span>
                  Stockfish is thinking...
                </span>
              )}
              {gameStatus && (
                <span className={`font-semibold font-serif ${
                  gameStatus.includes("wins") || gameStatus.includes("resigned") 
                    ? "text-amber-100 text-lg" 
                    : "text-amber-300"
                }`}>
                  {gameStatus}
                </span>
              )}
            </div>

            {/* Player Info */}
            <div className="mb-3 text-amber-200/60 text-sm font-serif">
              You are playing as <span className="text-amber-100 font-medium">{playerColor}</span>
              {!isGameOver && (
                <>
                  {" • "}
                  <span className="text-amber-100">
                    {game.turn() === "w" ? "White" : "Black"}&apos;s turn
                  </span>
                </>
              )}
            </div>

            {/* Chessboard */}
            <div className="w-full max-w-[500px]">
              <Chessboard
                position={game.fen()}
                onPieceDrop={onDrop}
                onSquareClick={onSquareClick}
                boardOrientation={playerColor}
                customSquareStyles={customSquareStyles}
                customBoardStyle={{
                  borderRadius: "4px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  border: "4px solid #78350f",
                }}
                customDarkSquareStyle={{ backgroundColor: "#b45309" }}
                customLightSquareStyle={{ backgroundColor: "#fcd34d" }}
              />
            </div>

            {/* Game Controls */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={undoMove}
                disabled={undoStack.length < 2 || isThinking || isGameOver}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 disabled:bg-stone-800 disabled:text-stone-500 text-amber-100 rounded font-serif transition-colors border border-stone-600 disabled:border-stone-700 flex items-center gap-2"
              >
                <span>↩</span> Undo
              </button>
              <button
                onClick={redoMove}
                disabled={redoStack.length < 2 || isThinking || isGameOver}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 disabled:bg-stone-800 disabled:text-stone-500 text-amber-100 rounded font-serif transition-colors border border-stone-600 disabled:border-stone-700 flex items-center gap-2"
              >
                Redo <span>↪</span>
              </button>
              <button
                onClick={handleResign}
                disabled={isGameOver || game.history().length === 0}
                className="px-4 py-2 bg-red-900 hover:bg-red-800 disabled:bg-stone-800 disabled:text-stone-500 text-amber-100 rounded font-serif transition-colors border border-red-800 disabled:border-stone-700 flex items-center gap-2"
              >
                <span>⚑</span> Resign
              </button>
            </div>
          </div>

          {/* Move Notation Panel */}
          <div className="bg-gradient-to-br from-amber-950/60 to-stone-900/80 rounded-lg border border-amber-800/30 overflow-hidden">
            <div className="bg-amber-900/50 px-4 py-3 border-b border-amber-800/30">
              <h2 className="font-serif text-lg font-bold text-amber-100">
                ♔ Move Notation
              </h2>
              <p className="text-amber-300/60 text-xs">
                {moveHistory.length > 0 
                  ? `${moveHistory.length} move${moveHistory.length !== 1 ? "s" : ""} played`
                  : "Game not started"}
              </p>
            </div>

            {/* Move List */}
            <div 
              ref={moveListRef}
              className="h-[400px] overflow-y-auto p-4"
            >
              {moveHistory.length === 0 ? (
                <div className="text-amber-200/40 italic text-center py-8 font-serif">
                  No moves yet. Make your first move!
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="text-amber-400/60 text-xs">
                      <th className="text-left pb-2 w-10">#</th>
                      <th className="text-left pb-2">White</th>
                      <th className="text-left pb-2">Black</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moveHistory.map((entry, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-stone-800/50 ${
                          idx === moveHistory.length - 1 ? "bg-amber-900/20" : ""
                        }`}
                      >
                        <td className="py-2 text-amber-500 text-sm font-mono">
                          {entry.moveNumber}.
                        </td>
                        <td className="py-2">
                          {entry.white && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-800/50 rounded text-amber-100 text-sm font-mono">
                              {entry.white.san}
                              <span className="text-amber-500/50 text-xs">
                                {entry.white.from}-{entry.white.to}
                              </span>
                            </span>
                          )}
                        </td>
                        <td className="py-2">
                          {entry.black && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-stone-800/50 rounded text-amber-100 text-sm font-mono">
                              {entry.black.san}
                              <span className="text-amber-500/50 text-xs">
                                {entry.black.from}-{entry.black.to}
                              </span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Game Result */}
            {isGameOver && (
              <div className="px-4 py-3 bg-amber-900/30 border-t border-amber-800/30">
                <p className="text-center font-serif text-amber-100 font-semibold">
                  {gameStatus}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
