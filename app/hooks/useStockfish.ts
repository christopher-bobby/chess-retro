"use client";

import { useEffect, useRef, useCallback, useState } from "react";

export function useStockfish() {
  const engineRef = useRef<Worker | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const onMoveRef = useRef<((move: string) => void) | null>(null);

  useEffect(() => {
    // Initialize Stockfish web worker
    const engine = new Worker("/stockfish.js");
    engineRef.current = engine;

    engine.onmessage = (event) => {
      const message = event.data;

      if (message === "uciok") {
        engine.postMessage("isready");
      } else if (message === "readyok") {
        setIsReady(true);
      } else if (message.startsWith("bestmove")) {
        const move = message.split(" ")[1];
        setIsThinking(false);
        if (onMoveRef.current && move) {
          onMoveRef.current(move);
        }
      }
    };

    // Initialize UCI protocol
    engine.postMessage("uci");

    return () => {
      engine.terminate();
    };
  }, []);

  const getMove = useCallback(
    (fen: string, onMove: (move: string) => void, depth: number = 10) => {
      if (!engineRef.current || !isReady) return;

      onMoveRef.current = onMove;
      setIsThinking(true);

      engineRef.current.postMessage(`position fen ${fen}`);
      engineRef.current.postMessage(`go depth ${depth}`);
    },
    [isReady]
  );

  const stopThinking = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.postMessage("stop");
      setIsThinking(false);
    }
  }, []);

  return { isReady, isThinking, getMove, stopThinking };
}
