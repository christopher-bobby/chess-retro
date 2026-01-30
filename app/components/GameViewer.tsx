"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

interface GameViewerProps {
  pgn: string;
  title: string;
  white: string;
  black: string;
}

export default function GameViewer({ pgn, title, white, black }: GameViewerProps) {
  const [game] = useState(() => {
    const g = new Chess();
    g.loadPgn(pgn);
    return g;
  });
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [displayPosition, setDisplayPosition] = useState("start");
  const [evaluation, setEvaluation] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const engineRef = useRef<Worker | null>(null);
  const moves = game.history({ verbose: true });

  // Initialize Stockfish for analysis
  useEffect(() => {
    const engine = new Worker("/stockfish.js");
    engineRef.current = engine;

    engine.onmessage = (event) => {
      const message = event.data;
      
      if (message.startsWith("info") && message.includes("score cp")) {
        const match = message.match(/score cp (-?\d+)/);
        if (match) {
          const cp = parseInt(match[1]);
          setEvaluation(cp / 100); // Convert centipawns to pawns
          setIsAnalyzing(false);
        }
      } else if (message.startsWith("info") && message.includes("score mate")) {
        const match = message.match(/score mate (-?\d+)/);
        if (match) {
          const mateIn = parseInt(match[1]);
          setEvaluation(mateIn > 0 ? 100 : -100); // Use extreme values for mate
          setIsAnalyzing(false);
        }
      }
    };

    engine.postMessage("uci");

    return () => engine.terminate();
  }, []);

  // Get position at specific move index
  const getPositionAtMove = useCallback((moveIndex: number) => {
    const tempGame = new Chess();
    for (let i = 0; i < moveIndex; i++) {
      tempGame.move(moves[i].san);
    }
    return tempGame.fen();
  }, [moves]);

  // Analyze position with Stockfish
  const analyzePosition = useCallback((fen: string) => {
    if (!engineRef.current) return;
    setIsAnalyzing(true);
    engineRef.current.postMessage("stop");
    engineRef.current.postMessage(`position fen ${fen}`);
    engineRef.current.postMessage("go depth 18");
  }, []);

  // Update position when move index changes
  useEffect(() => {
    const fen = getPositionAtMove(currentMoveIndex);
    setDisplayPosition(fen);
    analyzePosition(fen);
  }, [currentMoveIndex, getPositionAtMove, analyzePosition]);

  const goToStart = () => setCurrentMoveIndex(0);
  const goToEnd = () => setCurrentMoveIndex(moves.length);
  const goBack = () => setCurrentMoveIndex(Math.max(0, currentMoveIndex - 1));
  const goForward = () => setCurrentMoveIndex(Math.min(moves.length, currentMoveIndex + 1));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goBack();
      if (e.key === "ArrowRight") goForward();
      if (e.key === "ArrowUp") goToStart();
      if (e.key === "ArrowDown") goToEnd();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Format evaluation for display
  const formatEval = (ev: number | null) => {
    if (ev === null) return "...";
    if (ev >= 100) return "M+";
    if (ev <= -100) return "M-";
    return ev > 0 ? `+${ev.toFixed(1)}` : ev.toFixed(1);
  };

  // Calculate eval bar height (0-100%)
  const getEvalBarHeight = (ev: number | null) => {
    if (ev === null) return 50;
    if (ev >= 100) return 95;
    if (ev <= -100) return 5;
    // Sigmoid-like function to map eval to percentage
    const clamped = Math.max(-10, Math.min(10, ev));
    return 50 + (clamped / 10) * 45;
  };

  return (
    <div className="bg-stone-900/60 rounded-lg border border-amber-800/30 p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Eval bar + Chessboard */}
        <div className="flex gap-2">
          {/* Evaluation Bar */}
          <div className="w-6 h-[300px] bg-stone-800 rounded overflow-hidden relative flex-shrink-0">
            <div 
              className="absolute bottom-0 w-full bg-white transition-all duration-300"
              style={{ height: `${getEvalBarHeight(evaluation)}%` }}
            />
            <div 
              className="absolute top-0 w-full bg-stone-900 transition-all duration-300"
              style={{ height: `${100 - getEvalBarHeight(evaluation)}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className={`text-xs font-mono font-bold px-1 rounded ${
                  evaluation !== null && evaluation >= 0 ? "bg-white text-stone-900" : "bg-stone-900 text-white"
                }`}
              >
                {isAnalyzing ? "..." : formatEval(evaluation)}
              </span>
            </div>
          </div>

          {/* Chessboard */}
          <div className="w-[300px]">
            <Chessboard
              position={displayPosition}
              arePiecesDraggable={false}
              boardWidth={300}
              customBoardStyle={{
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              }}
              customDarkSquareStyle={{ backgroundColor: "#946f51" }}
              customLightSquareStyle={{ backgroundColor: "#f0d9b5" }}
            />
          </div>
        </div>

        {/* Game Info & Moves */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Players */}
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-amber-800/30">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-white rounded-sm"></span>
              <span className="text-amber-100 font-medium truncate">{white}</span>
            </div>
            <span className="text-amber-500 text-sm">vs</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-100 font-medium truncate">{black}</span>
              <span className="w-4 h-4 bg-stone-800 rounded-sm border border-stone-600"></span>
            </div>
          </div>

          {/* Move list */}
          <div className="flex-1 overflow-y-auto max-h-[180px] mb-3 bg-stone-950/50 rounded p-2">
            <div className="flex flex-wrap gap-1 text-sm font-mono">
              {moves.map((move, i) => (
                <span key={i} className="inline-flex items-center">
                  {i % 2 === 0 && (
                    <span className="text-amber-600 mr-1">{Math.floor(i / 2) + 1}.</span>
                  )}
                  <button
                    onClick={() => setCurrentMoveIndex(i + 1)}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      currentMoveIndex === i + 1
                        ? "bg-amber-700 text-amber-100"
                        : "text-amber-200 hover:bg-amber-900/50"
                    }`}
                  >
                    {move.san}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={goToStart}
              className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-amber-200 rounded transition-colors"
              title="Go to start"
            >
              ⏮
            </button>
            <button
              onClick={goBack}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-200 rounded transition-colors"
              title="Previous move"
            >
              ◀
            </button>
            <span className="px-3 py-2 text-amber-400 text-sm font-mono min-w-[80px] text-center">
              {currentMoveIndex} / {moves.length}
            </span>
            <button
              onClick={goForward}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-200 rounded transition-colors"
              title="Next move"
            >
              ▶
            </button>
            <button
              onClick={goToEnd}
              className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-amber-200 rounded transition-colors"
              title="Go to end"
            >
              ⏭
            </button>
          </div>

          <p className="text-amber-600/60 text-xs text-center mt-2">
            Use arrow keys to navigate
          </p>
        </div>
      </div>
    </div>
  );
}
